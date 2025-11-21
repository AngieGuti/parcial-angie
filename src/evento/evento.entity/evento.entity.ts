import {Entity, Column, PrimaryGeneratedColumn, Long, ManyToOne, OneToMany } from 'typeorm';
import { PonenteEntity } from 'src/ponente/ponente.entity/ponente.entity';
import { AuditorioEntity } from 'src/auditorio/auditorio.entity/auditorio.entity';
import { AsistenteEntity } from 'src/asistente/asistente.entity/asistente.entity';

enum Estado{
    PROPUESTO = "Propuesto",
    APROBADO = "Aprobado",
    RECHAZADO = "Rechazado"
}
export {Estado}; // Necesario para usar el enum en el servicio

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


    // Asociaciones con todas las otras entidades
    @ManyToOne(() => PonenteEntity, ponente => ponente.eventos)
    ponente: PonenteEntity;

    @ManyToOne(() => AuditorioEntity, auditorio => auditorio.eventos)
    auditorio: AuditorioEntity; 

    @OneToMany(() => AsistenteEntity, asistente => asistente.evento)
    asistentes: AsistenteEntity[];
}
