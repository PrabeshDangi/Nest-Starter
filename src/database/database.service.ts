import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit , OnModuleDestroy{

    async onModuleInit() {
        try {
            await this.$connect();
        } catch (error) {
            console.error('Database connection error:', error);
            throw new Error('Could not connect to the database');
        }
    }
    
    async onModuleDestroy() {
        try {
            await this.$disconnect();
        } catch (error) {
            console.error('Error disconnecting from the database:', error);
        }
    }
}
