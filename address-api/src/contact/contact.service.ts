import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto';
import { contactKey, Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('Contact')
    private contactModel: Model<Contact, contactKey>,
  ) {}

  async findAll(): Promise<Contact[]> {
    return await this.contactModel.scan().exec();
  }

  async findOne(id: number): Promise<Contact> {
    const key: contactKey = { id };
    const contact = this.contactModel.get(key);
    if (!contact) {
      throw new NotFoundException(`Contact with ID ${id} not found.`);
    }
    return await contact;
  }

  async remove(id: number): Promise<void> {
    const key: contactKey = { id };
    return await this.contactModel.delete(key);
  }

  async create(contactData: CreateContactDto): Promise<CreateContactDto> {
    const lastContact = await this.contactModel.scan('id').limit(1).exec();
    console.log(typeof lastContact.lastKey);
    console.log(lastContact.lastKey);
    const lastId = lastContact[0]?.id || 0;
    const countResult = await this.contactModel
      .query('id')
      .eq(lastId)
      .count()
      .exec();
    const count = Number(countResult.count);
    const newId = count === 0 ? lastId + 1 : lastId + count + 1;
    // const newId = Number(lastContact.lastKey) + 1;
    return await this.contactModel.create({ id: newId, ...contactData });
  }

  async update(
    id: number,
    updateData: UpdateContactDto,
  ): Promise<UpdateContactDto> {
    const key: contactKey = { id };
    return await this.contactModel.update(key, updateData);
  }
}
