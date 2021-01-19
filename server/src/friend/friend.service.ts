import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Friend } from './friend.entity';

@Injectable()
export class FriendService {

    constructor(
        @InjectRepository(Friend) private friendRepo: Repository<Friend>,
        ){}

    getAllFriend(){
        return this.friendRepo.find()
    }

    addFriend(data){
        return this.friendRepo.save(data)
    }

    removeFriend(id){
        return this.friendRepo.delete({id:id})
    }
}
