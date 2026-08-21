import {Column,CreateDateColumn,Entity,PrimaryGeneratedColumn} from 'typeorm';
@Entity('tasks') export class Task{@PrimaryGeneratedColumn() id:number;@Column() title:string;@Column({default:''}) description:string;@Column({default:'TODO'}) status:string;@CreateDateColumn() createdAt:Date;}
