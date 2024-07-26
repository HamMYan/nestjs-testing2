import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const { name, price, count, userId } = createBookDto;
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) return { message: 'User not found' };
    return await this.bookRepository.save({ name, price, count, userId });
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number) {
    const book = await this.bookRepository.findOneBy({id});
    if (!book) return { message: 'Book not found' };
    return book;
  }

  async update(id:number, updateBookDto: CreateBookDto) {
    const book = this.bookRepository.findOneBy({id});
    if (!book) return { message: 'Book not found' };
    const { userId, ...data } = updateBookDto;
    await this.bookRepository.update(id,data)
    return book
  }

  async remove(id: number) {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) return false;
    await this.bookRepository.delete(id);
    return true;
  }
}
