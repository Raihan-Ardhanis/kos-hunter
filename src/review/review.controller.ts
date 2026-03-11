import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post()
  create(@Body() body: CreateReviewDto) {
    return this.reviewService.create(body);
  }

  @Get('kos/:id')
  findByKos(@Param('id') id: string) {
    return this.reviewService.findByKos(Number(id));
  }

  @Patch('reply/:id')
  reply(@Param('id') id: string, @Body('reply') reply: string) {
    return this.reviewService.reply(Number(id), reply);
  }
}
