import {Model, Table, Column, DataType, HasMany} from "sequelize-typescript";
import {Card} from "../cards/cards.models";
import {ApiProperty} from "@nestjs/swagger";

interface UserCreationAttributes {
    email: string;
    password: string;
}


@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttributes> {

    @ApiProperty({example: '1', description: 'уникальный ид'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'example@mail.com', description: 'email пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'qwerty123', description: 'пароль пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @HasMany( () => Card)
    card: Card[];
}
