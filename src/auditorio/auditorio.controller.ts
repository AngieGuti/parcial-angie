import { Controller } from '@nestjs/common';
import { AuditorioService } from './auditorio.service';

@Controller('auditorios')
export class AuditorioController {
   constructor(private readonly auditorioService: AuditorioService) {} 

}
