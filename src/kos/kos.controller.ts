import { Controller, Get, Post, Body } from '@nestjs/common';
import { KosService } from './kos.service';

@Controller('kos')
export class KosController {
  constructor(private kosService: KosService) {}

  @Post()
  create(@Body() body: any) {
    return this.kosService.create(body);
  }

  @Get()
  findAll() {
    return this.kosService.findAll();
  }
}
