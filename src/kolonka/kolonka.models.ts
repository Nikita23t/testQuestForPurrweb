import {Model, Table, Column, DataType, ForeignKey, BelongsTo, HasMany} from "sequelize-typescript";
import {Card} from "../cards/cards.models";
import {Comment} from "../comment/comment.models";

interface KolonkaCreationAttributes {
    email: string;
    password: string;
}


@Table({tableName: 'kolonkas'})
export class Kolonka extends Model<Kolonka, KolonkaCreationAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    position: number;

    @Column({type: DataType.STRING, allowNull: false})
    boardId: number;
}
