import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeaModule } from './idea/idea.module';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingEnterceptor } from './shared/logging.interceptor';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), IdeaModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingEnterceptor,
    },
  ],
})
export class AppModule {}
