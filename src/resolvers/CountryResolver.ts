import {
    Arg, Int, Mutation, Query, Resolver,
  } from 'type-graphql';
  import Country from '../entities/Country';
  import { CountryInput } from '../utils/types/InputTypes';

  
  @Resolver(Country)
  export class CountryResolver {
    /** ***********************************
       QUERY
       ************************************ */
  
      @Query(() => [Country])
    async getAllCountries(): Promise<Country[]> {
      return [{id : 1, code: "OK", name: "OK", emoji:"OK"}];
    }
  
    @Query(() => Country)
      async getOneCountry(
          @Arg('id', () => Int) id: number,
      ): Promise<Country> {
        return {id : 1, code: "OK", name: "OK", emoji:"OK"};
      }
      /** ***********************************
       MUTATION
       ************************************ */
  
      @Mutation(() => Country)
    async createCountry(@Arg('data') data: CountryInput): Promise<Country> {
      return {id : 1, code: "OK", name: "OK", emoji:"OK"};
    }

  }
  