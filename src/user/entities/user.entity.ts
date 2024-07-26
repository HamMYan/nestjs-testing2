import { Book } from "../../book/entities/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name:string
    
    @Column()
    surname:string
    
    @Column()
    age:number
    
    @Column()
    email:string
    
    @Column()
    salary:number

    @OneToMany(type => Book, books => books.user)
    books:Book[]
}
