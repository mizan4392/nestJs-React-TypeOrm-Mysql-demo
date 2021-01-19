import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from 'config/typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FriendModule } from './friend/friend.module';

@Module({
 
  imports: [
    TypeOrmModule.forRoot(TypeormConfig),
    
    FriendModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
