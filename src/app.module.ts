import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PonenteModule } from './ponente/ponente.module';
import { AuditorioModule } from './auditorio/auditorio.module';
import { AsistenteModule } from './asistente/asistente.module';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [PonenteModule, AuditorioModule, AsistenteModule, EventoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
