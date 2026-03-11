import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { KosModule } from './kos/kos.module';

@Module({
  imports: [PrismaModule, UsersModule, KosModule],
})
export class AppModule {}
