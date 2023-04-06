import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactKey, UpdateContactDto } from './contact.dto';

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

  @Get('')
  search(@Query('q') query: string): Promise<UpdateContactDto[]> {
    return this.contactService.search(query);
  }

  @Patch(':id')
  update(
    @Body() updateContactDto: UpdateContactDto,
  ): Promise<UpdateContactDto> {
    return this.contactService.update(updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') key: ContactKey): Promise<void> {
    return this.contactService.remove(key);
  }
}
