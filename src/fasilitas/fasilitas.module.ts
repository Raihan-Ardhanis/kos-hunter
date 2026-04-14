import { Module } from '@nestjs/common';
import { FasilitasService } from './fasilitas.service';
import { FasilitasController } from './fasilitas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FasilitasService],
  controllers: [FasilitasController],
})
export class FasilitasModule {}
