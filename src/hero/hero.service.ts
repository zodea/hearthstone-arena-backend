import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHeroInput, UpdateHeroInput } from 'src/types/graphql';

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}
  create(createHeroInput: CreateHeroInput) {
    return this.prisma.hero.create({
      data: createHeroInput,
      include: { arenaWins: true },
    });
  }

  findAll() {
    return this.prisma.hero.findMany({
      include: { arenaWins: true },
    });
  }

  findOne(id: number) {
    return this.prisma.hero.findUnique({
      where: { id },
      include: { arenaWins: true },
    });
  }

  update(id: number, UpdateHeroInput: UpdateHeroInput) {
    return this.prisma.hero.update({
      where: { id },
      data: UpdateHeroInput,
      include: { arenaWins: true },
    });
  }

  remove(id: number) {
    return this.prisma.hero.delete({
      where: { id },
      include: { arenaWins: true },
    });
  }
}
