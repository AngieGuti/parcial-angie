import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


export class AuditorioDto {

    // Las primeras tres NO son opcionales porque 
    // al crear un auditorio se sabe la ubicacion, capacidad y nombre
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    capacidad: number;

    @IsString()
    @IsNotEmpty()
    ubicacion: string;

    // Asociaciones
    @IsOptional()
    @IsArray()
    eventos?: number[];

}
