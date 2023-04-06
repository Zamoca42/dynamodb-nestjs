import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { ContactKey, UpdateContactDto } from './contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('Contact')
    private contactModel: Model<UpdateContactDto, ContactKey>,
  ) {}

  async create(createContactDto: UpdateContactDto): Promise<UpdateContactDto> {
    return await this.contactModel.create(createContactDto);
  }

  async findAll(): Promise<UpdateContactDto[]> {
    return await this.contactModel.scan().exec();
  }

  async findOne(key: ContactKey): Promise<UpdateContactDto> {
    return await this.contactModel.get(key);
  }

  async search(query: string): Promise<UpdateContactDto[]> {
    return await this.contactModel.query('name').eq(query).exec();
  }

  async update(updateContactDto: UpdateContactDto): Promise<UpdateContactDto> {
    return await this.contactModel.update(updateContactDto);
  }

  async remove(key: ContactKey): Promise<void> {
    return await this.contactModel.delete(key);
  }
}
