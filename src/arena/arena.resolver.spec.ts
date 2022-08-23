import { Test, TestingModule } from '@nestjs/testing';
import { ArenaResolver } from './arena.resolver';
import { ArenaService } from './arena.service';

describe('ArenaResolver', () => {
  let resolver: ArenaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArenaResolver, ArenaService],
    }).compile();

    resolver = module.get<ArenaResolver>(ArenaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
