import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { UpdateContactDto } from './contact.dto';

@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  create(
    @Body() createContactDto: UpdateContactDto,
  ): Promise<UpdateContactDto> {
    return this.contactService.create(createContactDto);
  }

  @Get()
  findAll(): Promise<UpdateContactDto[]> {
    return this.contactService.findAll();
  }

  @Get(':idx/:id')
  findOne(
    @Param('idx') idx: number,
    @Param('id') id: string,
  ): Promise<UpdateContactDto> {
    return this.contactService.findOne(idx, id);
  }

  @Patch(':idx/:id')
  update(
    @Body() updateContactDto: UpdateContactDto,
  ): Promise<UpdateContactDto> {
    return this.contactService.update(updateContactDto);
  }

  @Delete(':idx/:id')
  remove(@Param('idx') idx: number, @Param('id') id: string): Promise<void> {
    return this.contactService.remove(idx, id);
  }
}
