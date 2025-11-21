import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditorioEntity } from './auditorio.entity/auditorio.entity';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class AuditorioService {
    constructor(
        @InjectRepository(AuditorioEntity)
        private readonly auditorioRepository: Repository<AuditorioEntity>,
    ) {}

    async crearAuditorio(auditorio: AuditorioEntity): Promise<AuditorioEntity> {
        if (auditorio.capacidad && auditorio.capacidad <= 0) {
            throw new BadRequestException('La capacidad del auditorio debe ser mayor a 0 :c');
        }
        return await this.auditorioRepository.save(auditorio);
    }

}
