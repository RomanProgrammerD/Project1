import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { IUser } from '../models/interfaces/users/users.interface';
import { UpdateUserDto } from '../models/dto/users/create-user.dto';
import { userNotFound } from 'src/constants/user.constants';

@Injectable()
export class UsersService {
    constructor(
		@Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>){}

    async getAll():Promise<IUser[]>{
        const users = await this.userRepository.find();
        return users;
    }

    async getOne(id: string): Promise<IUser>{
        const user = await this.userRepository.findOne({where : id});
        if(!user){
            throw new HttpException(userNotFound, HttpStatus.NOT_FOUND)
        }
        return user;
    }

    async updateOne(id: string, updateUser: UpdateUserDto): Promise<IUser>{
        const testUser = await this.userRepository.findOne(id);
        if(!testUser){
            throw new HttpException(userNotFound, HttpStatus.NOT_FOUND)
        }
        return await this.userRepository.save({...updateUser, id: Number(id)});
    }

    async findOneEmail(email: string):Promise<IUser>{
        const user = await this.userRepository.findOne({where : email});
        if(!user){
            throw new HttpException(userNotFound, HttpStatus.NOT_FOUND)
        }
        return user;
    }
}
