
exports.testDB = [
    {
      table_schema: 'public',
      table_name: 'films',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('films__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'films',
      position: 2,
      column_name: 'title',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'films',
      position: 3,
     column_name: 'episode_id',
     data_type: 'integer',
     default_value: null
   },
   {
     table_schema: 'public',
     table_name: 'films',
     position: 4,
     column_name: 'opening_crawl',
     data_type: 'character varying',
     default_value: null
   },
   {
     table_schema: 'public',
     table_name: 'films',
     position: 5,
     column_name: 'director',
     data_type: 'character varying',
     default_value: null
   },
   {
     table_schema: 'public',
     table_name: 'films',
      position: 6,
      column_name: 'producer',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'films',
      position: 7,
      column_name: 'release_date',
      data_type: 'date',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('people__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 2,
      column_name: 'name',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 3,
      column_name: 'mass',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 4,
      column_name: 'hair_color',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 5,
      column_name: 'skin_color',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 6,
      column_name: 'eye_color',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 7,
      column_name: 'birth_year',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 8,
      column_name: 'gender',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 9,
      column_name: 'species_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 10,
      column_name: 'homeworld_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people',
      position: 11,
      column_name: 'height',
      data_type: 'integer',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people_in_films',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('people_in_films__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'people_in_films',
      position: 2,
      column_name: 'person_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'people_in_films',
      position: 3,
      column_name: 'film_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'pilots',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('pilots__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'pilots',
      position: 2,
      column_name: 'person_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'pilots',
      position: 3,
      column_name: 'vessel_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('planets__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 2,
      column_name: 'name',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 3,
      column_name: 'rotation_period',
      data_type: 'integer',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 4,
      column_name: 'orbital_period',
      data_type: 'integer',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 5,
      column_name: 'diameter',
      data_type: 'integer',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 6,
      column_name: 'climate',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 7,
      column_name: 'gravity',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 8,
      column_name: 'terrain',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 9,
      column_name: 'surface_water',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets',
      position: 10,
      column_name: 'population',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets_in_films',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('planets_in_films__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'planets_in_films',
      position: 2,
      column_name: 'film_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'planets_in_films',
      position: 3,
      column_name: 'planet_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('species__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 2,
      column_name: 'name',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 3,
      column_name: 'classification',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 4,
      column_name: 'average_height',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 5,
      column_name: 'average_lifespan',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 6,
      column_name: 'hair_colors',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 7,
      column_name: 'skin_colors',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 8,
      column_name: 'eye_colors',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 9,
      column_name: 'language',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species',
      position: 10,
      column_name: 'homeworld_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species_in_films',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
     default_value: "nextval('species_in_films__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'species_in_films',
      position: 2,
      column_name: 'film_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'species_in_films',
      position: 3,
      column_name: 'species_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'starship_specs',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('starship_specs__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'starship_specs',
      position: 2,
      column_name: 'hyperdrive_rating',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'starship_specs',
      position: 3,
      column_name: 'MGLT',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'starship_specs',
      position: 4,
      column_name: 'vessel_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('vessels__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 2,
      column_name: 'name',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 3,
      column_name: 'manufacturer',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 4,
      column_name: 'model',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 5,
      column_name: 'vessel_type',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 6,
      column_name: 'vessel_class',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 7,
      column_name: 'cost_in_credits',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 8,
      column_name: 'length',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 9,
      column_name: 'max_atmosphering_speed',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 10,
      column_name: 'crew',
      data_type: 'integer',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 11,
      column_name: 'passengers',
      data_type: 'integer',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 12,
      column_name: 'cargo_capacity',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels',
      position: 13,
      column_name: 'consumables',
      data_type: 'character varying',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels_in_films',
      position: 1,
      column_name: '_id',
      data_type: 'integer',
      default_value: "nextval('vessels_in_films__id_seq'::regclass)"
    },
    {
      table_schema: 'public',
      table_name: 'vessels_in_films',
      position: 2,
      column_name: 'vessel_id',
      data_type: 'bigint',
      default_value: null
    },
    {
      table_schema: 'public',
      table_name: 'vessels_in_films',
      position: 3,
      column_name: 'film_id',
      data_type: 'bigint',
      default_value: null
    }
  ]

