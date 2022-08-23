import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateArenaInput, UpdateArenaInput } from 'src/types/graphql';
import { ArenaService } from './arena.service';

@Resolver('Arena')
export class ArenaResolver {
  constructor(private readonly arenaService: ArenaService) {}

  @Mutation('createArena')
  create(@Args('createArenaInput') createArenaInput: CreateArenaInput) {
    return this.arenaService.create(createArenaInput);
  }

  @Query('arenas')
  findAll() {
    return this.arenaService.findAll();
  }

  @Query('arena')
  findOne(@Args('id') id: number) {
    return this.arenaService.findOne(id);
  }

  @Mutation('updateArena')
  update(@Args('updateArenaInput') updateArenaInput: UpdateArenaInput) {
    return this.arenaService.update(updateArenaInput.id, updateArenaInput);
  }

  @Mutation('removeArena')
  remove(@Args('id') id: number) {
    return this.arenaService.remove(id);
  }
}
