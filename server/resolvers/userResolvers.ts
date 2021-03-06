import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { User } from '../schemas/userSchema'
import { Users } from '../entity/Users'

@Resolver()
export class userResolvers {

    //SHOULD NOT BE USED IN PRODUCTION get all user
    @Query(() => [User])
    getAllUsers() {
        return Users.find()
    }

    //Get single user by their Email
    @Query(() => User)
    getUserByEmail(@Arg("email") email: string) {
        return Users.findOne({ where: { email } })
    }

    //Get all users in a with a house
    @Query(() => [User])
    async getUsersByHousekey(@Arg("house_keys") house_keys: string) {
        let allUsers = await this.getAllUsers()

        let result = allUsers.filter((user) => {
            if (user.house_keys === null) {
                return
            }
            let house_keysArr = JSON.parse(user.house_keys)

            if (house_keysArr[0] === house_keys) {
                return user
            }
        })

        return result
    }

    //To Create new User with empty room
    @Mutation(() => String)
    async createUser(
        @Arg('email') email: string,
        @Arg('username') username: string,
        @Arg('isAdmin') isAdmin: boolean
    ) {
        await Users.insert({ email, username, isAdmin })
        return email
    }

    //update the username of a user
    @Mutation(() => String)
    async updateUsername(
        @Arg('email') email: string,
        @Arg('newUsername') newUsername: string
    ) {
        const usernameToBeUpdated = await Users.findOne({ email });
        if (!usernameToBeUpdated) {
            return "Username not found!";
        }

        if (usernameToBeUpdated) {
            usernameToBeUpdated.username = newUsername;
            await Users.save(usernameToBeUpdated);
            return `username has been updated to ${usernameToBeUpdated.username}`;
        }
    }

    @Mutation(() => String)
    async updateUserPhoto(
        @Arg('email') email: string,
        @Arg('photo_url') photo_url: string
    ) {
        const usernameToBeUpdated = await Users.findOne({ email });
        if (!usernameToBeUpdated) {
            console.log("email.not.found")
            return "Email not found!";
        }

        if (usernameToBeUpdated) {
            usernameToBeUpdated.photo_url = photo_url;
            await Users.save(usernameToBeUpdated);
            return `photo_url has been updated to ${usernameToBeUpdated.photo_url}`;
        }
    }



    //To Add Rooms to User
    @Mutation(() => String)
    async addToRoom(
        @Arg('email') email: string,
        @Arg('house_key') house_key: string
    ) {
        const userToBeUpdated = await Users.findOne({ where: { email } })
        if (!userToBeUpdated) {
            console.error("User not found!");
            return
        }

        if (JSON.parse(userToBeUpdated.house_keys)) {
            const userRoomKeys = JSON.parse(userToBeUpdated.house_keys)
            userRoomKeys.push(house_key)
            userToBeUpdated.house_keys = JSON.stringify(userRoomKeys)
            await Users.save(userToBeUpdated)
            return "Added more room!"
        } else {
            userToBeUpdated.house_keys = JSON.stringify([house_key])
            await Users.save(userToBeUpdated)
            return "Added room to user!"
        }
    }
}

