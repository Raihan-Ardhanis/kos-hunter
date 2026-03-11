import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateReviewDto) {
    return this.prisma.review.create({
      data,
    });
  }

  findByKos(kosId: number) {
    return this.prisma.review.findMany({
      where: { kosId },
      include: {
        user: true,
      },
    });
  }

  reply(id: number, reply: string) {
    return this.prisma.review.update({
      where: { id },
      data: { reply },
    });
  }
}
