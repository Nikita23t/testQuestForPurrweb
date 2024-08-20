import {Model, Table, Column, DataType, BelongsTo, ForeignKey, HasMany} from "sequelize-typescript";
import {User} from "../users/users.models";
import {Kolonka} from "../kolonka/kolonka.models";
import {ApiProperty} from "@nestjs/swagger";

interface CardCreationAttributes {
    email: string;
    cardName: string;
    userId: number
}


@Table({tableName: 'cards'})
export class Card extends Model<Card, CardCreationAttributes> {

    @ApiProperty({example: '1', description: 'уникальный ид'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'example@mail.com', description: 'email пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'work', description: 'название карточки'})
    @Column({type: DataType.STRING, allowNull: false})
    cardName: string;

    @ForeignKey( () => User )
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo( () => User)
    author: User;
}
