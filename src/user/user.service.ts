import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserDto) {
    return await this.userRepository.save(createUserInput);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) return { message: 'User not found' };
    return user;
  }

  async update(id, createUserDto: CreateUserDto) {
    const { name, surname, age, email, salary } = createUserDto;
    const user = await this.userRepository.findOneBy({ id });
    if (!user) return { message: 'User not found' };
    await this.userRepository.update(id, { name, surname, age, email, salary });
    return await this.userRepository.findOne({where:{ id }});
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) return false
    await this.userRepository.delete(id);
    return true;
  }
}