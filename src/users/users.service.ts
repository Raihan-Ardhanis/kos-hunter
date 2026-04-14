import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  create(body: any) {
    return this.prisma.user.create({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data: body,
    });
  }
}
