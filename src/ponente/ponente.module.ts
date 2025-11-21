import { Module } from '@nestjs/common';
import { PonenteService } from './ponente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PonenteEntity } from './ponente.entity/ponente.entity';

@Module({
  providers: [PonenteService],
  imports: [TypeOrmModule.forFeature([PonenteEntity])],
})
export class PonenteModule {}
