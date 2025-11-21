import {Entity, Column, PrimaryGeneratedColumn, Long } from 'typeorm';

@Entity()
export class AsistenteEntity {

    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    nombre: string; 

    @Column()
    codigoEstudiante: number;

    @Column()
    email: string;
}
