import {Entity, Column, PrimaryGeneratedColumn, Long } from 'typeorm';

enum Estado{
    PROPUESTO = "Propuesto",
    APROBADO = "Aprobado",
    RECHAZADO = "Rechazado"
}

@Entity()
export class EventoEntity {

    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    fecha: Date;

    @Column()
    duracionHoras: number;

    @Column()
    estado: Estado;
}
