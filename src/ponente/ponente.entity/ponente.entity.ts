import { EventoEntity } from 'src/evento/evento.entity/evento.entity';
import {Entity, Column, PrimaryGeneratedColumn, Long, OneToMany } from 'typeorm';

// Enum classs
enum TipoPonente {
    INTERNO = "Interno",
    INVITADO = "Invitado"
}

@Entity()
export class PonenteEntity {

    @PrimaryGeneratedColumn()
    id: Long;

    @Column()
    cedula: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column()
    especialidad: string;

    // Debe ser un string Interno o Invitado
    @Column()
    tipoPonente: TipoPonente;

    // Asociacinoes 

    @OneToMany(() => EventoEntity, evento => evento.ponente)
    eventos: EventoEntity[];
}
