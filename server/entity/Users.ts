import {Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 20
    })
    username: string;

    @Column({
        length: 50
    })
    house_key: string;

    @Column({
        length: 30
    })
    email: string;

    @Column()
    isAdmin: boolean;

}

