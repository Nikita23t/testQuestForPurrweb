import {Model, Table, Column, DataType, BelongsTo, ForeignKey} from "sequelize-typescript";
import {Card} from "../cards/cards.models";
import {Kolonka} from "../kolonka/kolonka.models";


interface CommentCreationAttributes {
    email: string;
    text: string;
}


@Table({tableName: 'comments'})
export class Comment extends Model<Comment, CommentCreationAttributes> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    text: string;

}
