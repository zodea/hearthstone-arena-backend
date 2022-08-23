
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateArenaInput {
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    wins: number;
    losingGame: number;
    coins: number;
    cardPack: number;
    dust?: Nullable<number>;
    common?: Nullable<number>;
    rare?: Nullable<number>;
    epic?: Nullable<number>;
    legendary?: Nullable<number>;
    heroId: number;
}

export class UpdateArenaInput {
    id: number;
    updatedAt?: Nullable<DateTime>;
    wins?: Nullable<number>;
    losingGame?: Nullable<number>;
    coins?: Nullable<number>;
    cardPack?: Nullable<number>;
    dust?: Nullable<number>;
    common?: Nullable<number>;
    rare?: Nullable<number>;
    epic?: Nullable<number>;
    legendary?: Nullable<number>;
    heroId?: Nullable<number>;
}

export class CreateHeroInput {
    name: string;
    nameCN: string;
}

export class UpdateHeroInput {
    id: number;
    name?: Nullable<string>;
    nameCN?: Nullable<string>;
}

export class Arena {
    id: number;
    createdAt: DateTime;
    updatedAt?: Nullable<DateTime>;
    wins: number;
    losingGame: number;
    coins: number;
    cardPack: number;
    dust?: Nullable<number>;
    common?: Nullable<number>;
    rare?: Nullable<number>;
    epic?: Nullable<number>;
    heroId: number;
}

export abstract class IQuery {
    abstract arenas(): Nullable<Arena>[] | Promise<Nullable<Arena>[]>;

    abstract arena(id: number): Nullable<Arena> | Promise<Nullable<Arena>>;

    abstract heros(): Nullable<Hero>[] | Promise<Nullable<Hero>[]>;

    abstract hero(id: number): Nullable<Hero> | Promise<Nullable<Hero>>;
}

export abstract class IMutation {
    abstract createArena(createArenaInput: CreateArenaInput): Arena | Promise<Arena>;

    abstract updateArena(updateArenaInput: UpdateArenaInput): Arena | Promise<Arena>;

    abstract removeArena(id: number): Nullable<Arena> | Promise<Nullable<Arena>>;

    abstract createHero(createHeroInput: CreateHeroInput): Hero | Promise<Hero>;

    abstract updateHero(updateHeroInput: UpdateHeroInput): Hero | Promise<Hero>;

    abstract removeHero(id: number): Nullable<Hero> | Promise<Nullable<Hero>>;
}

export class Hero {
    id: number;
    name: string;
    nameCN: string;
    arenaWins: Arena[];
}

export type DateTime = any;
type Nullable<T> = T | null;
