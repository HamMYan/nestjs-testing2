import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('create user =>', () => {
    it('should create new User', async () => {
      const user: any = {
        name: 'Anna',
        surname: 'Anyan',
        age: 20,
        email: 'anna@gmail.com',
        salary: 0,
      };
      jest.spyOn(userService, 'create').mockImplementation(() => user);
      const result = await controller.create(user);
      expect(result).toEqual(user);
    });
  });

  describe('get users =>', () => {
    it('should get all User', async () => {
      const user: any = [];
      jest.spyOn(userService, 'findAll').mockImplementation(() => user);
      const result = await controller.findAll();
      expect(result).toEqual(user);
    });
  });

  describe('get user by id =>', () => {
    it('should get by id User', async () => {
      const user: any = {};
      jest.spyOn(userService, 'findOne').mockImplementation(() => user);
      const result = await controller.findOne('1');
      expect(result).toEqual(user);
    });
  });

  describe('update user =>', () => {
    it('should update User', async () => {
      const user: any = {};
      jest.spyOn(userService, 'update').mockImplementation(() => user);
      const result = await controller.update('1', user);
      expect(result).toEqual(user);
    });
  });

  describe('delete user =>', () => {
    it('should delete User', async () => {
      const user: any = true;
      jest.spyOn(userService, 'remove').mockImplementation(() => user);
      const result = await controller.remove('909');
      if (result) {
        expect(result).toEqual(user);
      } else {
        expect(result).toEqual(!user);
      }
    });
  });
});
