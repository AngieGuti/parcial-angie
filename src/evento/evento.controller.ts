import { Controller, Body, Post, Get, Param, Delete, Put } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoEntity } from './evento.entity/evento.entity';


@Controller('eventos')
export class EventoController {
    constructor(private readonly eventoService: EventoService) {}

    // Crear un evento sin DTO
    @Post()
    async crearEvento(@Body() evento: EventoEntity): Promise<EventoEntity> {
        return this.eventoService.crearEvento(evento);
    }

    // Aprobar un evento por id
    @Put(':id/aprobar')
    async aprobarEvento(@Param('id') id: number): Promise<EventoEntity> {
        return this.eventoService.aprobarEvento(id);
    }

    // Eliminar un evento por id
    @Delete(':id')
    async eliminarEvento(@Param('id') id: number): Promise<void> {
        return this.eventoService.eliminarEvento(id);
    }

    // Obtener un evento por id
    @Get(':id')
    async obtenerEvento(@Param('id') id: number): Promise<EventoEntity> {
        return this.eventoService.findEventoById(id);
    }
}
