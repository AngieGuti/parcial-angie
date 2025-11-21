import {Entity, Column, PrimaryGeneratedColumn, Long, ManyToOne } from 'typeorm';
import { EventoEntity } from 'src/evento/evento.entity/evento.entity';

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

    // Asociacion
    @ManyToOne(() => EventoEntity, evento => evento.asistentes)
    evento: EventoEntity;
}
