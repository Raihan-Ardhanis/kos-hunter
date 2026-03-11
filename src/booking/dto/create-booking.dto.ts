import { IsDateString, IsInt } from 'class-validator';

export class CreateBookingDto {
  @IsDateString()
  checkIn: string;

  @IsInt()
  userId: number;

  @IsInt()
  kosId: number;
}
