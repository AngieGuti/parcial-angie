import { Injectable } from '@nestjs/common';
import { AsistenteEntity } from './asistente.entity/asistente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { EventoService } from 'src/evento/evento.service';

@Injectable()
export class AsistenteService {

    constructor(
        @InjectRepository(AsistenteEntity)
        private readonly asistenteRepository: Repository<AsistenteEntity>,
        private readonly eventoService: EventoService,
    ) {}


    async registrarAsistente(asistente: Partial<AsistenteEntity>, eventoId: number): Promise<AsistenteEntity> {
        //Llamar al servicio de evento para obtener el evento
        const evento = await this.eventoService.findEventoById(eventoId);
        if (!evento){
            throw new NotFoundException(`Evento con ID ${eventoId} no encontrado.`);
        }
        // Validar capacidad del auditorio
        if (evento.asistentes.length >= evento.auditorio.capacidad) {
            throw new BadRequestException('Capacidad del auditorio superada.');
        }
        // Validar email unico por evento
        const emailExistente = evento.asistentes.find(a => a.email === asistente.email);
        if (emailExistente) {
            throw new BadRequestException(`El email ${asistente.email} ya está registrado para este evento.`);
        }
        
        const nuevoAsistente = this.asistenteRepository.create({
            ...asistente,
            evento: evento,
        });
        return this.asistenteRepository.save(nuevoAsistente);
    }

    async  findAsistentesByEvento(eventoId: number): Promise<AsistenteEntity[]> {
        return this.asistenteRepository.find({
            where: { evento: { id: eventoId } },
        });
    }
}