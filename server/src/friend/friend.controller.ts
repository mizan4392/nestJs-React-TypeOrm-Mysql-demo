import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FriendService } from './friend.service';

@Controller('friend')
export class FriendController {
    constructor(private friendService:FriendService){}


    @Get()
    getAllFriend(){
        return this.friendService.getAllFriend()
    }

    @Post()
    addFriend(@Body() body){

        return this.friendService.addFriend(body)  
    }

    @Delete(':id')
    removeFriend(@Param('id') id){
            console.log("id",id)
        return this.friendService.removeFriend(id)  
    }
}
