import { Controller, Body, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';
import { AuditorioDto } from './auditorio.dto/auditorio.dto';


@Controller('auditorios')
export class AuditorioController {
   constructor(private readonly auditorioService: AuditorioService) {} 


   // Creación del auditorio  con DTO
   @Post()
   @HttpCode(HttpStatus.CREATED)
    async crearAuditorio(@Body() auditorioDto: AuditorioDto) {  
        return this.auditorioService.crearAuditorio(auditorioDto);
    }
   
}
