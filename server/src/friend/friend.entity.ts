import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:"varchar"})
  name:string

  @Column({type:"datetime"})
  createdAt:string

}