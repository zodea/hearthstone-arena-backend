
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateHeroInput {
    name: string;
    nameCN: string;
}

export class UpdateHeroInput {
    id: number;
    name: string;
    nameCN: string;
}

export class Hero {
    id: number;
    name: string;
    nameCN: string;
}

export abstract class IQuery {
    abstract heros(): Nullable<Hero>[] | Promise<Nullable<Hero>[]>;

    abstract hero(id: number): Nullable<Hero> | Promise<Nullable<Hero>>;
}

export abstract class IMutation {
    abstract createHero(createHeroInput: CreateHeroInput): Hero | Promise<Hero>;

    abstract createHeroMany(createHeroInput?: Nullable<CreateHeroInput[]>): Nullable<Hero[]> | Promise<Nullable<Hero[]>>;

    abstract updateHero(updateHeroInput: UpdateHeroInput): Hero | Promise<Hero>;

    abstract removeHero(id: number): Nullable<Hero> | Promise<Nullable<Hero>>;
}

type Nullable<T> = T | null;
