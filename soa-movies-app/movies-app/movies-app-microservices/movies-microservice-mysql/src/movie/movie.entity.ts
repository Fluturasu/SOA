import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    title: string;

    @Column()
    year: number;

    @Column()
    synopsis: string;

    @Column()
    genre: string;

    @Column()
    image: string;
}