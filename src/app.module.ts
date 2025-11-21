import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PonenteModule } from './ponente/ponente.module';

@Module({
  imports: [PonenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
