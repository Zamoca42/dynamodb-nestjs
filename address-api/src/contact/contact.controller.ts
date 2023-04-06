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
import { ContactDto, UpdateContactDto } from './contact.dto';

@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: ContactDto): Promise<UpdateContactDto> {
    return this.contactService.create(createContactDto);
  }

  @Get()
  findAll(): Promise<UpdateContactDto[]> {
    return this.contactService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') key: { name: string }): Promise<UpdateContactDto> {
    return this.contactService.findOne(key);
  }

  @Patch(':name')
  update(
    @Body() updateContactDto: UpdateContactDto,
  ): Promise<UpdateContactDto> {
    return this.contactService.update(updateContactDto);
  }

  @Delete(':name')
  remove(@Param('name') key: { name: string }): Promise<void> {
    return this.contactService.remove(key);
  }
}
