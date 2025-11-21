import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PonenteModule } from './ponente/ponente.module';
import { AuditorioModule } from './auditorio/auditorio.module';

@Module({
  imports: [PonenteModule, AuditorioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
