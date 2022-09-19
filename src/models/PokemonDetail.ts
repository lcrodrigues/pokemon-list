export type PokemonDetailsResult = {
  stats: [
    {
      base_stat: number;
      stat: {
        name:
          | "hp"
          | "attack"
          | "defense"
          | "special-attack"
          | "special-defense"
          | "speed";
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: string;
      };
    }
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
};
