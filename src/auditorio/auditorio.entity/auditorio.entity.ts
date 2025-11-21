import {Entity, Column, PrimaryGeneratedColumn, Long } from 'typeorm';

@Entity()
export class AuditorioEntity {
    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    nombre: string;

    @Column()
    capacidad: number;

    @Column()
    ubicacion: string;

}

