const dbModelName = require('../models/starwarsModel');

const resolvers = {
  Query: {
    films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM films';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    film: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM films WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    fulltable: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM fulltable';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    fulltable_single: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM fulltable WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    people: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM people';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    person: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM people WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    people_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM people_in_films';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    people_in_film: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM people_in_films WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    pilots: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM pilots';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    pilot: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM pilots WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    planets: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM planets';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    planet: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM planets WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    planets_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM planets_in_films';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    planets_in_film: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM planets_in_films WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    species: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM species';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    specie: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM species WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    species_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM species_in_films';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    species_in_film: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM species_in_films WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    starship_specs: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM starship_specs';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    starship_spec: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM starship_specs WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    vessels: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM vessels';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    vessel: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM vessels WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    vessels_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM vessels_in_films';
        const { rows } = await dbModelName.query(queryStr);
        return rows;
      } catch (err) {
        console.log(err);
      }
    },
    vessels_in_film: async (parent, args, context) => {
      try {
        const queryStr = `SELECT * FROM vessels_in_films WHERE _id = $1`;
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },

  People: {
    species_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM species WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    people_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM people_in_films WHERE person_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    pilots: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM pilots WHERE person_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    homeworld_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM planets WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
  PeopleInFilm: {
    person_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM people WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    film_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM films WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
  Pilot: {
    vessel_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM vessels WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    person_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM people WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
  PlanetsInFilm: {
    film_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM films WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    planet_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM planets WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
  Species: {
    homeworld_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM planets WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    people: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM people WHERE species_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    species_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM species_in_films WHERE species_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
  SpeciesInFilm: {
    film_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM films WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    species_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM species WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
  StarshipSpec: {
    vessel_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM vessels WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
  VesselsInFilm: {
    vessel_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM vessels WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    film_id_info: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM films WHERE _id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
  Planet: {
    people: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM people WHERE homeworld_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    planets_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM planets_in_films WHERE planet_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    species: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM species WHERE homeworld_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },

  Film: {
    people_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM people_in_films WHERE film_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    planets_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM planets_in_films WHERE film_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    species_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM species_in_films WHERE film_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    vessels_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM vessels_in_films WHERE film_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },

  Vessel: {
    pilots: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM pilots WHERE vessel_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    starship_specs: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM starship_specs WHERE vessel_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    vessels_in_films: async (parent, args, context) => {
      try {
        const queryStr = 'SELECT * FROM vessels_in_films WHERE vessel_id = $1';
        const values = [parent._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },

  Mutation: {
    addFilm: async (parent, { input }, context) => {
      try {
        const {
          title,
          episode_id,
          opening_crawl,
          director,
          producer,
          release_date,
        } = input;
        const queryStr =
          'INSERT INTO films (title, episode_id, opening_crawl, director, producer, release_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const values = [
          title,
          episode_id,
          opening_crawl,
          director,
          producer,
          release_date,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updateFilm: async (parent, { input, _id }, context) => {
      try {
        const {
          title,
          episode_id,
          opening_crawl,
          director,
          producer,
          release_date,
        } = input;
        const queryStr =
          'UPDATE films SET title = $1, episode_id = $2, opening_crawl = $3, director = $4, producer = $5, release_date = $6 WHERE _id = $7 RETURNING *';
        const values = [
          title,
          episode_id,
          opening_crawl,
          director,
          producer,
          release_date,
          _id,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deleteFilm: async (parent, args, context) => {
      try {
        const queryStr = 'DELETE FROM films WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addFulltable: async (parent, { input }, context) => {
      try {
        const { name } = input;
        const queryStr = 'INSERT INTO fulltable (name) VALUES ($1) RETURNING *';
        const values = [name];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updateFulltable: async (parent, { input, _id }, context) => {
      try {
        const { name } = input;
        const queryStr =
          'UPDATE fulltable SET name = $1 WHERE _id = $2 RETURNING *';
        const values = [name, _id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deleteFulltable: async (parent, args, context) => {
      try {
        const queryStr = 'DELETE FROM fulltable WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addPeople: async (parent, { input }, context) => {
      try {
        const {
          name,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          species_id,
          homeworld_id,
          height,
        } = input;
        const queryStr =
          'INSERT INTO people (name, mass, hair_color, skin_color, eye_color, birth_year, gender, species_id, homeworld_id, height) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *';
        const values = [
          name,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          species_id,
          homeworld_id,
          height,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updatePeople: async (parent, { input, _id }, context) => {
      try {
        const {
          name,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          species_id,
          homeworld_id,
          height,
        } = input;
        const queryStr =
          'UPDATE people SET name = $1, mass = $2, hair_color = $3, skin_color = $4, eye_color = $5, birth_year = $6, gender = $7, species_id = $8, homeworld_id = $9, height = $10 WHERE _id = $11 RETURNING *';
        const values = [
          name,
          mass,
          hair_color,
          skin_color,
          eye_color,
          birth_year,
          gender,
          species_id,
          homeworld_id,
          height,
          _id,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deletePeople: async (parent, args, context) => {
      try {
        const queryStr = 'DELETE FROM people WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addPeopleInFilm: async (parent, { input }, context) => {
      try {
        const { person_id, film_id } = input;
        const queryStr =
          'INSERT INTO people_in_films (person_id, film_id) VALUES ($1, $2) RETURNING *';
        const values = [person_id, film_id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updatePeopleInFilm: async (parent, { input, _id }, context) => {
      try {
        const { person_id, film_id } = input;
        const queryStr =
          'UPDATE people_in_films SET person_id = $1, film_id = $2 WHERE _id = $3 RETURNING *';
        const values = [person_id, film_id, _id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deletePeopleInFilm: async (parent, args, context) => {
      try {
        const queryStr =
          'DELETE FROM people_in_films WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addPilot: async (parent, { input }, context) => {
      try {
        const { person_id, vessel_id } = input;
        const queryStr =
          'INSERT INTO pilots (person_id, vessel_id) VALUES ($1, $2) RETURNING *';
        const values = [person_id, vessel_id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updatePilot: async (parent, { input, _id }, context) => {
      try {
        const { person_id, vessel_id } = input;
        const queryStr =
          'UPDATE pilots SET person_id = $1, vessel_id = $2 WHERE _id = $3 RETURNING *';
        const values = [person_id, vessel_id, _id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deletePilot: async (parent, args, context) => {
      try {
        const queryStr = 'DELETE FROM pilots WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addPlanet: async (parent, { input }, context) => {
      try {
        const {
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
        } = input;
        const queryStr =
          'INSERT INTO planets (name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
        const values = [
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updatePlanet: async (parent, { input, _id }, context) => {
      try {
        const {
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
        } = input;
        const queryStr =
          'UPDATE planets SET name = $1, rotation_period = $2, orbital_period = $3, diameter = $4, climate = $5, gravity = $6, terrain = $7, surface_water = $8, population = $9 WHERE _id = $10 RETURNING *';
        const values = [
          name,
          rotation_period,
          orbital_period,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water,
          population,
          _id,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deletePlanet: async (parent, args, context) => {
      try {
        const queryStr = 'DELETE FROM planets WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addPlanetsInFilm: async (parent, { input }, context) => {
      try {
        const { film_id, planet_id } = input;
        const queryStr =
          'INSERT INTO planets_in_films (film_id, planet_id) VALUES ($1, $2) RETURNING *';
        const values = [film_id, planet_id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updatePlanetsInFilm: async (parent, { input, _id }, context) => {
      try {
        const { film_id, planet_id } = input;
        const queryStr =
          'UPDATE planets_in_films SET film_id = $1, planet_id = $2 WHERE _id = $3 RETURNING *';
        const values = [film_id, planet_id, _id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deletePlanetsInFilm: async (parent, args, context) => {
      try {
        const queryStr =
          'DELETE FROM planets_in_films WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addSpecies: async (parent, { input }, context) => {
      try {
        const {
          name,
          classification,
          average_height,
          average_lifespan,
          hair_colors,
          skin_colors,
          eye_colors,
          language,
          homeworld_id,
        } = input;
        const queryStr =
          'INSERT INTO species (name, classification, average_height, average_lifespan, hair_colors, skin_colors, eye_colors, language, homeworld_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
        const values = [
          name,
          classification,
          average_height,
          average_lifespan,
          hair_colors,
          skin_colors,
          eye_colors,
          language,
          homeworld_id,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updateSpecies: async (parent, { input, _id }, context) => {
      try {
        const {
          name,
          classification,
          average_height,
          average_lifespan,
          hair_colors,
          skin_colors,
          eye_colors,
          language,
          homeworld_id,
        } = input;
        const queryStr =
          'UPDATE species SET name = $1, classification = $2, average_height = $3, average_lifespan = $4, hair_colors = $5, skin_colors = $6, eye_colors = $7, language = $8, homeworld_id = $9 WHERE _id = $10 RETURNING *';
        const values = [
          name,
          classification,
          average_height,
          average_lifespan,
          hair_colors,
          skin_colors,
          eye_colors,
          language,
          homeworld_id,
          _id,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deleteSpecies: async (parent, args, context) => {
      try {
        const queryStr = 'DELETE FROM species WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addSpeciesInFilm: async (parent, { input }, context) => {
      try {
        const { film_id, species_id } = input;
        const queryStr =
          'INSERT INTO species_in_films (film_id, species_id) VALUES ($1, $2) RETURNING *';
        const values = [film_id, species_id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updateSpeciesInFilm: async (parent, { input, _id }, context) => {
      try {
        const { film_id, species_id } = input;
        const queryStr =
          'UPDATE species_in_films SET film_id = $1, species_id = $2 WHERE _id = $3 RETURNING *';
        const values = [film_id, species_id, _id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deleteSpeciesInFilm: async (parent, args, context) => {
      try {
        const queryStr =
          'DELETE FROM species_in_films WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addStarshipSpec: async (parent, { input }, context) => {
      try {
        const { hyperdrive_rating, MGLT, vessel_id } = input;
        const queryStr =
          'INSERT INTO starship_specs (hyperdrive_rating, MGLT, vessel_id) VALUES ($1, $2, $3) RETURNING *';
        const values = [hyperdrive_rating, MGLT, vessel_id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updateStarshipSpec: async (parent, { input, _id }, context) => {
      try {
        const { hyperdrive_rating, MGLT, vessel_id } = input;
        const queryStr =
          'UPDATE starship_specs SET hyperdrive_rating = $1, MGLT = $2, vessel_id = $3 WHERE _id = $4 RETURNING *';
        const values = [hyperdrive_rating, MGLT, vessel_id, _id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deleteStarshipSpec: async (parent, args, context) => {
      try {
        const queryStr =
          'DELETE FROM starship_specs WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addVessel: async (parent, { input }, context) => {
      try {
        const {
          name,
          manufacturer,
          model,
          vessel_type,
          vessel_class,
          cost_in_credits,
          length,
          max_atmosphering_speed,
          crew,
          passengers,
          cargo_capacity,
          consumables,
        } = input;
        const queryStr =
          'INSERT INTO vessels (name, manufacturer, model, vessel_type, vessel_class, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
        const values = [
          name,
          manufacturer,
          model,
          vessel_type,
          vessel_class,
          cost_in_credits,
          length,
          max_atmosphering_speed,
          crew,
          passengers,
          cargo_capacity,
          consumables,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updateVessel: async (parent, { input, _id }, context) => {
      try {
        const {
          name,
          manufacturer,
          model,
          vessel_type,
          vessel_class,
          cost_in_credits,
          length,
          max_atmosphering_speed,
          crew,
          passengers,
          cargo_capacity,
          consumables,
        } = input;
        const queryStr =
          'UPDATE vessels SET name = $1, manufacturer = $2, model = $3, vessel_type = $4, vessel_class = $5, cost_in_credits = $6, length = $7, max_atmosphering_speed = $8, crew = $9, passengers = $10, cargo_capacity = $11, consumables = $12 WHERE _id = $13 RETURNING *';
        const values = [
          name,
          manufacturer,
          model,
          vessel_type,
          vessel_class,
          cost_in_credits,
          length,
          max_atmosphering_speed,
          crew,
          passengers,
          cargo_capacity,
          consumables,
          _id,
        ];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deleteVessel: async (parent, args, context) => {
      try {
        const queryStr = 'DELETE FROM vessels WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },

    addVesselsInFilm: async (parent, { input }, context) => {
      try {
        const { vessel_id, film_id } = input;
        const queryStr =
          'INSERT INTO vessels_in_films (vessel_id, film_id) VALUES ($1, $2) RETURNING *';
        const values = [vessel_id, film_id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    updateVesselsInFilm: async (parent, { input, _id }, context) => {
      try {
        const { vessel_id, film_id } = input;
        const queryStr =
          'UPDATE vessels_in_films SET vessel_id = $1, film_id = $2 WHERE _id = $3 RETURNING *';
        const values = [vessel_id, film_id, _id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
    deleteVesselsInFilm: async (parent, args, context) => {
      try {
        const queryStr =
          'DELETE FROM vessels_in_films WHERE _id = $1 RETURNING *';
        const values = [args._id];
        const { rows } = await dbModelName.query(queryStr, values);
        return rows[1] ? rows : rows[0];
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = {
  Query,
  People,
  PeopleInFilm,
  Pilot,
  PlanetsInFilm,
  Species,
  SpeciesInFilm,
  StarshipSpec,
  VesselsInFilm,
  Planet,
  Film,
  Vessel,
  Mutation,
} = resolvers;
