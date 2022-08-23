import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArenaInput, UpdateArenaInput } from 'src/types/graphql';

@Injectable()
export class ArenaService {
  constructor(private prisma: PrismaService) {}
  create(createArenaInput: CreateArenaInput) {
    return this.prisma.arenaWin.create({
      data: createArenaInput,
    });
  }

  findAll() {
    return this.prisma.arenaWin.findMany({});
  }

  findOne(id: number) {
    return this.prisma.arenaWin.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateArenaInput: UpdateArenaInput) {
    return `This action updates a #${id} arena`;
  }

  remove(id: number) {
    return this.prisma.arenaWin.delete({
      where: { id },
    });
  }
}
