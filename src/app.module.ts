import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NetninjaModule } from './netninja/netninja.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [NetninjaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
