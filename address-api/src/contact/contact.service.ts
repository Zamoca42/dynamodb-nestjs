import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto';
import { contactUserId, Contact } from './entities/contact.entity';
import ShortUniqueId from 'short-unique-id';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('Contact')
    private contactModel: Model<Contact, contactUserId>,
  ) {}

  async findAll(): Promise<Contact[]> {
    return await this.contactModel.scan().exec();
  }

  async findOne(id: string): Promise<Contact> {
    const key: contactUserId = { id };
    const contact = this.contactModel.get(key);
    if (!contact) {
      throw new NotFoundException(`Contact with ID ${id} not found.`);
    }
    return await contact;
  }

  async remove(id: string): Promise<void> {
    const key: contactUserId = { id };
    return await this.contactModel.delete(key);
  }

  async create(contactData: CreateContactDto): Promise<CreateContactDto> {
    const uid = new ShortUniqueId();
    const uidWithTimestamp = uid.stamp(11);
    const newId = uidWithTimestamp.toString();
    console.log(uid.parseStamp(uidWithTimestamp));
    return await this.contactModel.create({ id: newId, ...contactData });
  }

  async update(
    id: string,
    updateData: UpdateContactDto,
  ): Promise<UpdateContactDto> {
    const key: contactUserId = { id };
    return await this.contactModel.update(key, updateData);
  }
}
