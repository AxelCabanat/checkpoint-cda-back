import {
    Arg, Int, Mutation, Query, Resolver,
  } from 'type-graphql';
  import Country from '../entities/Country';
  import { CountryInput } from '../utils/types/InputTypes';
import db from '../db';

  
  @Resolver(Country)
  export class CountryResolver {
    /** ***********************************
       QUERY
       ************************************ */
  
      @Query(() => [Country])
    async getAllCountries(): Promise<Country[]> {
      return await db.getRepository(Country).find({order: {id:'ASC'}});
    }
  
    @Query(() => Country)
      async getOneCountry(
          @Arg('id', () => Int) id: number,
      ): Promise<Country | null> {
        return await db.getRepository(Country).findOne({where: { id }, order: {id:'ASC'}});
      }
      /** ***********************************
       MUTATION
       ************************************ */
  
      @Mutation(() => Country)
    async createCountry(@Arg('data') data: CountryInput): Promise<Country> {
      return await db.getRepository(Country).save(data);
    }

  }
  