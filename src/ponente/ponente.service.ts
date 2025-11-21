import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PonenteEntity } from './ponente.entity/ponente.entity';
import { BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class PonenteService {
    constructor(
        @InjectRepository(PonenteEntity)
        private readonly ponenteRepository: Repository<PonenteEntity>,
    ) {}

    async crearPonente(ponente: PonenteEntity): Promise<PonenteEntity> {
        if (ponente.tipoPonente === 'Interno' && !ponente.email.endsWith('.edu')) {
            throw new BadRequestException('El email de un ponente interno debe terminar en .edu :(');
        }
        if (ponente.tipoPonente === 'Invitado' && !ponente.email.includes('@')) {
            throw new BadRequestException('El email de un ponente invitado debe contener @ y su dominio :(');
        }
        return await this.ponenteRepository.save(ponente);
    }

    async obtenerPonentePorId(id: number): Promise<PonenteEntity> {
        const ponente = await this.ponenteRepository.findOne({ where: { id } });
        if (!ponente) {
            throw new NotFoundException('Ponente no encontrado :(');
        }
        return ponente;
    }

    async eliminarPonente(id: number): Promise<void> {
        const ponente = await this.ponenteRepository.findOne({ where: { id }, relations: ['eventos'] });
        if (!ponente) {
            throw new NotFoundException('Ponente no encontrado :(');
        }
        if (ponente.eventos && ponente.eventos.length > 0) {
            throw new BadRequestException('No se puede eliminar un ponente con eventos asociados :(');
        }
        await this.ponenteRepository.remove(ponente);
    }

}
