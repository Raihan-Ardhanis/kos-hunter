import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBookingDto) {
    return this.prisma.booking.create({
      data: {
        checkIn: new Date(data.checkIn),
        userId: data.userId,
        kosId: data.kosId,
      },
    });
  }

  findAll() {
    return this.prisma.booking.findMany({
      include: {
        user: true,
        kos: true,
      },
    });
  }

  updateStatus(id: number, status: any) {
    return this.prisma.booking.update({
      where: { id },
      data: { status },
    });
  }
}
