import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class KosService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.kos.create({
      data
    });
  }

  findAll() {
    return this.prisma.kos.findMany({
      include: {
        fasilitas: true,
        reviews: true,
      },
    });
  }
}
