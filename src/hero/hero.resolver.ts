import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateHeroInput, UpdateHeroInput } from 'src/types/graphql';
import { HeroService } from './hero.service';

@Resolver('Hero')
export class HeroResolver {
  constructor(private readonly heroService: HeroService) {}

  @Mutation('createHero')
  create(@Args('createHeroInput') createHeroInput: CreateHeroInput) {
    return this.heroService.create(createHeroInput);
  }

  @Mutation('createHeroMany')
  createMany(@Args('createHeroInput') createHeroInput: CreateHeroInput[]) {
    return this.heroService.createMany(createHeroInput);
  }

  @Query('hero')
  findAll() {
    return this.heroService.findAll();
  }

  @Query('hero')
  findOne(@Args('id') id: number) {
    return this.heroService.findOne(id);
  }

  @Mutation('updateHero')
  update(@Args('updateHeroInput') updateHeroInput: UpdateHeroInput) {
    return this.heroService.update(updateHeroInput.id, updateHeroInput);
  }

  @Mutation('removeHero')
  remove(@Args('id') id: number) {
    return this.heroService.remove(id);
  }
}
