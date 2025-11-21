import { IsArray, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class EventoDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsNotEmpty()
    @IsDate()
    fecha: Date;

    @IsNumber()
    @IsNotEmpty()
    duracionHoras: number;

    @IsNotEmpty()
    estado: string;

    // Asociaciones
    @IsOptional()
    @IsNumber()
    ponenteId: number;

}
