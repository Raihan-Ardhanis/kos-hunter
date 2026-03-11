import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.kosService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.kosService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.kosService.remove(Number(id));
  }
}
