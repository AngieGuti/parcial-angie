import {Entity, Column, PrimaryGeneratedColumn, Long, OneToMany } from 'typeorm';
import { EventoEntity } from 'src/evento/evento.entity/evento.entity';

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

    // Asociaciones
    @OneToMany(() => EventoEntity, evento => evento.auditorio)
    eventos: EventoEntity[];
}

