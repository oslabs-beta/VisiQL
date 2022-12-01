const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    films: [Film]
    film(_id: ID): Film
    fulltable: [Fulltable]
    fulltable_single(_id: ID): Fulltable
    people: [People]
    person(_id: ID): People
    people_in_films: [PeopleInFilm]
    people_in_film(_id: ID): PeopleInFilm
    pilots: [Pilot]
    pilot(_id: ID): Pilot
    planets: [Planet]
    planet(_id: ID): Planet
    planets_in_films: [PlanetsInFilm]
    planets_in_film(_id: ID): PlanetsInFilm
    species: [Species]
    specie(_id: ID): Species
    species_in_films: [SpeciesInFilm]
    species_in_film(_id: ID): SpeciesInFilm
    starship_specs: [StarshipSpec]
    starship_spec(_id: ID): StarshipSpec
    vessels: [Vessel]
    vessel(_id: ID): Vessel
    vessels_in_films: [VesselsInFilm]
    vessels_in_film(_id: ID): VesselsInFilm
  }

  type Film {
    _id: Int
    title: String
    episode_id: Int
    opening_crawl: String
    director: String
    producer: String
    release_date: String
    people_in_films: [PeopleInFilm]
    planets_in_films: [PlanetsInFilm]
    species_in_films: [SpeciesInFilm]
    vessels_in_films: [VesselsInFilm]
  }

  type Fulltable {
    name: String
  }

  type People {
    _id: Int
    name: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    species_id: Int
    homeworld_id: Int
    height: Int
    species_id_info: Species
    homeworld_id_info: Planet
    people_in_films: [PeopleInFilm]
    pilots: [Pilot]
  }

  type PeopleInFilm {
    _id: Int
    person_id: Int
    film_id: Int
    person_id_info: People
    film_id_info: Film
  }

  type Pilot {
    _id: Int
    person_id: Int
    vessel_id: Int
    vessel_id_info: Vessel
    person_id_info: People
  }

  type Planet {
    _id: Int
    name: String
    rotation_period: Int
    orbital_period: Int
    diameter: Int
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: Int
    people: [People]
    planets_in_films: [PlanetsInFilm]
    species: [Species]
  }

  type PlanetsInFilm {
    _id: Int
    film_id: Int
    planet_id: Int
    film_id_info: Film
    planet_id_info: Planet
  }

  type Species {
    _id: Int
    name: String
    classification: String
    average_height: String
    average_lifespan: String
    hair_colors: String
    skin_colors: String
    eye_colors: String
    language: String
    homeworld_id: Int
    homeworld_id_info: Planet
    people: [People]
    species_in_films: [SpeciesInFilm]
  }

  type SpeciesInFilm {
    _id: Int
    film_id: Int
    species_id: Int
    film_id_info: Film
    species_id_info: Species
  }

  type StarshipSpec {
    _id: Int
    hyperdrive_rating: String
    MGLT: String
    vessel_id: Int
    vessel_id_info: Vessel
  }

  type Vessel {
    _id: Int
    name: String
    manufacturer: String
    model: String
    vessel_type: String
    vessel_class: String
    cost_in_credits: Int
    length: String
    max_atmosphering_speed: String
    crew: Int
    passengers: Int
    cargo_capacity: String
    consumables: String
    pilots: [Pilot]
    starship_specs: [StarshipSpec]
    vessels_in_films: [VesselsInFilm]
  }

  type VesselsInFilm {
    _id: Int
    vessel_id: Int
    film_id: Int
    vessel_id_info: Vessel
    film_id_info: Film
  }

  type Mutation {
    addFilm(input: AddFilmInput): Film
    updateFilm(_id: ID, input: UpdateFilmInput): Film
    deleteFilm(_id: ID): Film

    addFulltable(input: AddFulltableInput): Fulltable
    updateFulltable(_id: ID, input: UpdateFulltableInput): Fulltable
    deleteFulltable(_id: ID): Fulltable

    addPeople(input: AddPeopleInput): People
    updatePeople(_id: ID, input: UpdatePeopleInput): People
    deletePeople(_id: ID): People

    addPeopleInFilm(input: AddPeopleInFilmInput): PeopleInFilm
    updatePeopleInFilm(_id: ID, input: UpdatePeopleInFilmInput): PeopleInFilm
    deletePeopleInFilm(_id: ID): PeopleInFilm

    addPilot(input: AddPilotInput): Pilot
    updatePilot(_id: ID, input: UpdatePilotInput): Pilot
    deletePilot(_id: ID): Pilot

    addPlanet(input: AddPlanetInput): Planet
    updatePlanet(_id: ID, input: UpdatePlanetInput): Planet
    deletePlanet(_id: ID): Planet

    addPlanetsInFilm(input: AddPlanetsInFilmInput): PlanetsInFilm
    updatePlanetsInFilm(_id: ID, input: UpdatePlanetsInFilmInput): PlanetsInFilm
    deletePlanetsInFilm(_id: ID): PlanetsInFilm

    addSpecies(input: AddSpeciesInput): Species
    updateSpecies(_id: ID, input: UpdateSpeciesInput): Species
    deleteSpecies(_id: ID): Species

    addSpeciesInFilm(input: AddSpeciesInFilmInput): SpeciesInFilm
    updateSpeciesInFilm(_id: ID, input: UpdateSpeciesInFilmInput): SpeciesInFilm
    deleteSpeciesInFilm(_id: ID): SpeciesInFilm

    addStarshipSpec(input: AddStarshipSpecInput): StarshipSpec
    updateStarshipSpec(_id: ID, input: UpdateStarshipSpecInput): StarshipSpec
    deleteStarshipSpec(_id: ID): StarshipSpec

    addVessel(input: AddVesselInput): Vessel
    updateVessel(_id: ID, input: UpdateVesselInput): Vessel
    deleteVessel(_id: ID): Vessel

    addVesselsInFilm(input: AddVesselsInFilmInput): VesselsInFilm
    updateVesselsInFilm(_id: ID, input: UpdateVesselsInFilmInput): VesselsInFilm
    deleteVesselsInFilm(_id: ID): VesselsInFilm
  }

  input AddFilmInput {
    title: String
    episode_id: Int
    opening_crawl: String
    director: String
    producer: String
    release_date: String
  }

  input UpdateFilmInput {
    title: String
    episode_id: Int
    opening_crawl: String
    director: String
    producer: String
    release_date: String
  }

  input AddFulltableInput {
    name: String
  }

  input UpdateFulltableInput {
    name: String
  }

  input AddPeopleInput {
    name: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    species_id: Int
    homeworld_id: Int
    height: Int
  }

  input UpdatePeopleInput {
    name: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    species_id: Int
    homeworld_id: Int
    height: Int
  }

  input AddPeopleInFilmInput {
    person_id: Int
    film_id: Int
  }

  input UpdatePeopleInFilmInput {
    person_id: Int
    film_id: Int
  }

  input AddPilotInput {
    person_id: Int
    vessel_id: Int
  }

  input UpdatePilotInput {
    person_id: Int
    vessel_id: Int
  }

  input AddPlanetInput {
    name: String
    rotation_period: Int
    orbital_period: Int
    diameter: Int
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: Int
  }

  input UpdatePlanetInput {
    name: String
    rotation_period: Int
    orbital_period: Int
    diameter: Int
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: Int
  }

  input AddPlanetsInFilmInput {
    film_id: Int
    planet_id: Int
  }

  input UpdatePlanetsInFilmInput {
    film_id: Int
    planet_id: Int
  }

  input AddSpeciesInput {
    name: String
    classification: String
    average_height: String
    average_lifespan: String
    hair_colors: String
    skin_colors: String
    eye_colors: String
    language: String
    homeworld_id: Int
  }

  input UpdateSpeciesInput {
    name: String
    classification: String
    average_height: String
    average_lifespan: String
    hair_colors: String
    skin_colors: String
    eye_colors: String
    language: String
    homeworld_id: Int
  }

  input AddSpeciesInFilmInput {
    film_id: Int
    species_id: Int
  }

  input UpdateSpeciesInFilmInput {
    film_id: Int
    species_id: Int
  }

  input AddStarshipSpecInput {
    hyperdrive_rating: String
    MGLT: String
    vessel_id: Int
  }

  input UpdateStarshipSpecInput {
    hyperdrive_rating: String
    MGLT: String
    vessel_id: Int
  }

  input AddVesselInput {
    name: String
    manufacturer: String
    model: String
    vessel_type: String
    vessel_class: String
    cost_in_credits: Int
    length: String
    max_atmosphering_speed: String
    crew: Int
    passengers: Int
    cargo_capacity: String
    consumables: String
  }

  input UpdateVesselInput {
    name: String
    manufacturer: String
    model: String
    vessel_type: String
    vessel_class: String
    cost_in_credits: Int
    length: String
    max_atmosphering_speed: String
    crew: Int
    passengers: Int
    cargo_capacity: String
    consumables: String
  }

  input AddVesselsInFilmInput {
    vessel_id: Int
    film_id: Int
  }

  input UpdateVesselsInFilmInput {
    vessel_id: Int
    film_id: Int
  }
`;
