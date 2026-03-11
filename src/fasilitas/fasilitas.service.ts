import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFasilitasDto } from './dto/create-fasilitas.dto';

@Injectable()
export class FasilitasService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateFasilitasDto) {
    return this.prisma.fasilitas.create({
      data,
    });
  }

  findByKos(kosId: number) {
    return this.prisma.fasilitas.findMany({
      where: { kosId },
    });
  }

  remove(id: number) {
    return this.prisma.fasilitas.delete({
      where: { id },
    });
  }
}
