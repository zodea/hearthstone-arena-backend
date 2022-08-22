import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HeroResolver } from './hero.resolver';
import { HeroService } from './hero.service';

@Module({
  providers: [HeroResolver, HeroService, PrismaService],
})
export class HeroModule {}
