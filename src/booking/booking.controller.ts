import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post()
  create(@Body() body: CreateBookingDto) {
    return this.bookingService.create(body);
  }

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @Patch(':id')
  updateStatus(@Param('id') id: string, @Body('status') status: any) {
    return this.bookingService.updateStatus(Number(id), status);
  }
}
