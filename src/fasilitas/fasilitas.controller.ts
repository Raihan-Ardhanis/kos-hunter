import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FasilitasService } from './fasilitas.service';
import { CreateFasilitasDto } from './dto/create-fasilitas.dto';

@Controller('fasilitas')
export class FasilitasController {
  constructor(private fasilitasService: FasilitasService) {}

  @Post()
  create(@Body() body: CreateFasilitasDto) {
    return this.fasilitasService.create(body);
  }

  @Get('kos/:id')
  findByKos(@Param('id') id: string) {
    return this.fasilitasService.findByKos(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fasilitasService.remove(Number(id));
  }
}
