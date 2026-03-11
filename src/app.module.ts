import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { KosModule } from './kos/kos.module';
import { BookingModule } from './booking/booking.module';
import { ReviewModule } from './review/review.module';
import { FasilitasModule } from './fasilitas/fasilitas.module';

@Module({
  imports: [
    AuthModule,
    KosModule,
    BookingModule,
    ReviewModule,
    FasilitasModule,
  ],
})
export class AppModule {}
