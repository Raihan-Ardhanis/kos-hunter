import { IsInt, IsString } from 'class-validator';

export class CreateFasilitasDto {
  @IsString()
  name: string;

  @IsInt()
  kosId: number;
}
