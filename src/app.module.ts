import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [DatabaseModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
