import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViewMessage } from './view-message.entity';
import { ViewMessageService } from './view-message.service';

@Module({
  imports: [TypeOrmModule.forFeature([ViewMessage])],
  providers: [ViewMessageService],
  exports: [ViewMessageService],
})
export class ViewMessageModule {}
