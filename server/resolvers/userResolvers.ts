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


    //To Creat new User with empty room
    @Mutation(() => String)
    async createUser(
        @Arg('email') email: string,
        @Arg('username') username: string,
        @Arg('isAdmin') isAdmin: boolean
        ){
        await Users.insert({email, username, isAdmin})
        return email
    }


    //To Add Rooms to User
    @Mutation(() => String)
    async addToHouse(
        @Arg('email') email: string,
        @Arg('house_key') house_key: string
    ){
        const userToBeUpdated = await Users.findOne({ where: { email }})
        if (!userToBeUpdated){
            console.error("User not found!");
            return
        }
        
        if(JSON.parse(userToBeUpdated.house_keys)){
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

