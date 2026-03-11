import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(data: any) {
    const hash = await bcrypt.hash(data.password,10)

    return this.prisma.user.create({
      data: {
        name:data.name,
        email:data.email,
        password:hash,
        role:data.role
      },
    });
  }

  async login(data: any) {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) throw new UnauthorizedException();

    const valid = await bcrypt.compare(data.password,user.password)

    if (!valid) throw new UnauthorizedException();

    const token = this.jwt.sign({
      id: user.id,
      role: user.role,
    });

    return { access_token: token };
  }
}
