import { Module } from '@nestjs/common';
import { NetninjaController } from './netninja.controller';
import { NetninjaService } from './netninja.service';

@Module({
  controllers: [NetninjaController],
  providers: [NetninjaService]
})
export class NetninjaModule {}
