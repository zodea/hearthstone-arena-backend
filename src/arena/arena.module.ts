import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ArenaResolver } from './arena.resolver';
import { ArenaService } from './arena.service';

@Module({
  providers: [ArenaResolver, ArenaService, PrismaService],
})
export class ArenaModule {}
