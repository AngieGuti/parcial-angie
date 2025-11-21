import { Controller, Body, Post } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';
import { AuditorioEntity } from './auditorio.entity/auditorio.entity';

@Controller('auditorios')
export class AuditorioController {
   constructor(private readonly auditorioService: AuditorioService) {} 

   // Creación del auditorio sin DTO 
   @Post()
   async crearAuditorio(@Body() auditorio: AuditorioEntity): Promise<AuditorioEntity> {
       return this.auditorioService.crearAuditorio(auditorio);
   }

}
