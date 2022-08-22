import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHeroInput, UpdateHeroInput } from 'src/types/graphql';

@Injectable()
export class HeroService {
  constructor(private prisma: PrismaService) {}
  create(createHeroInput: CreateHeroInput) {
    return this.prisma.hero.create({
      data: createHeroInput,
    });
  }

  createMany(createHeroInput: CreateHeroInput[]) {
    return this.prisma.hero.createMany({
      data: createHeroInput,
    });
  }

  findAll() {
    return this.prisma.hero.findMany();
  }

  findOne(id: number) {
    return this.prisma.hero.findUnique({
      where: { id },
      select: { id: true, name: true, nameCN: true },
    });
  }

  update(id: number, UpdateHeroInput: UpdateHeroInput) {
    return this.prisma.hero.update({
      where: { id },
      data: UpdateHeroInput,
    });
  }

  remove(id: number) {
    return this.prisma.hero.delete({
      where: { id },
    });
  }
}
