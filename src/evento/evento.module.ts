import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventoEntity } from './evento.entity/evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventoEntity])],
  providers: [EventoService]

})
export class EventoModule {}
