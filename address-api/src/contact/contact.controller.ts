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
import { Contact } from './entities/contact.entity';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactService.findAll();
  }

  @Post()
  create(@Body() contactData: CreateContactDto): Promise<CreateContactDto> {
    return this.contactService.create(contactData);
  }

  @Get(':id')
  findOne(@Param('id') UserId: string): Promise<Contact> {
    return this.contactService.findOne(UserId);
  }

  @Delete(':id')
  remove(@Param('id') UserId: string): Promise<void> {
    return this.contactService.remove(UserId);
  }

  @Patch(':id')
  update(
    @Param('id') UserId: string,
    @Body() updateData: UpdateContactDto,
  ): Promise<UpdateContactDto> {
    return this.contactService.update(UserId, updateData);
  }
}
