import { Injectable } from '@nestjs/common';
import { EventoEntity } from './evento.entity/evento.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { Estado } from './evento.entity/evento.entity';

@Injectable()
export class EventoService {
    constructor(
        @InjectRepository(EventoEntity)
        private readonly eventoRepository: Repository<EventoEntity>,
    ) {}

    async crearEvento(evento: Partial<EventoEntity>): Promise<EventoEntity> {
        if (evento.duracionHoras && evento.duracionHoras < 0) {
            throw new BadRequestException('La duración debe ser positiva :c');
        }

        if (evento.ponente && evento.ponente.tipoPonente === 'Invitado') {
            if (!evento.descripcion || evento.descripcion.length < 50) {
                throw new BadRequestException('La descripción debe tener al menos 50 caracteres para ponentes invitados :c');
            }
        }

        return this.eventoRepository.save(evento);
    }

    async aprobarEvento(eventoId: number): Promise<EventoEntity> {
        const evento = await this.eventoRepository.findOne({ where: { id: eventoId }, relations: ['auditorio'] });
        if (!evento) {
            throw new NotFoundException('Evento no encontrado :c');
        }
        if (!evento.auditorio) {
            throw new BadRequestException('El evento no tiene un auditorio asignado, por lo tanto, no puede ser aprobado :c');
        }
        evento.estado = Estado.APROBADO;
        return this.eventoRepository.save(evento);
    }

    async eliminarEvento(eventoId: number): Promise<void> {
        const evento = await this.eventoRepository.findOne({ where: { id: eventoId } });
        if (!evento) {
            throw new NotFoundException('Evento no encontrado :c');
        }
        await this.eventoRepository.remove(evento);
    }

    // Este método se llamará desde AsistenteService
    async findEventoById(eventoId: number): Promise<EventoEntity> {
        const evento = await this.eventoRepository.findOne({ where: { id: eventoId } });
        if (!evento) {
            throw new NotFoundException('Evento no encontrado :c');
        }
        return evento;
    }  


}
