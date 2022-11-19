require('dotenv').config();
const userDb = require('../../src/server/models/userModel');
const request = require('supertest');
const app = require('../../src/server/server');

describe('server tests', () => {

  // after each statement or before all statement

  describe('#user-router testing', () => {
    it('logs in with correct credentials', async () => {
      const response = await request(app)
        .post('/user/login')
        .send({
          username: 'aa',
          password: 'aa',
        })
        // .set('Accept', 'application/json');
      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty('accessToken');
    });

    it('does not log in if incorrect creditials', async () => {
      const response = await request(app)
        .post('/user/login')
        .send({
          username: 'aa',
          password: 'bb',
        })
        .set('Accept', 'application/json');
      expect(response.status).not.toEqual(200);
      expect(response.body).not.toHaveProperty('accessToken');
    });

    it('checks if username exists', async () => {
      const response = await request(app)
        .post('/user/check')
        .send({ username: 'aa' })
        .set('Accept', 'application/json');
      expect(response.status).toEqual(200);
      expect(response.body).toEqual('exists');
    })

    it('checks if username does not exist', async () => {
      const response = await request(app)
        .post('/user/check')
        .send({ username: 'fdksla;fhasedbfiwaeffhed' })
        .set('Accept', 'application/json');
      expect(response.status).toEqual(200);
      expect(response.body).toEqual('nonexistent');
    })

    it('checks if signup works', async () => {
      const characters = 'abcdefghijklmnopqrstuvwxyz1234567890,./;!@#$%^&*-=<>?_'
      const charsArr = characters.split('');
      let randomUsername = '';
      for (let i = 0; i < 200; i++) {
        randomUsername += charsArr[Math.floor(Math.random()*54)];
      }

      const response = await request(app)
        .post('/user/signup')
        .send({
          username: randomUsername,
          name: 'name',
          password: 'password',
          email: 'test@test.com',
        })
        .set('Accept', 'application/json');
        expect(response.status).toEqual(201);
        expect(response.body).toHaveProperty('username');

      const deleteQuery = `DELETE FROM users WHERE username = '${randomUsername}' returning *`;
      const { rows } = await userDb.query(deleteQuery);
      expect(rows[0].username).toEqual(randomUsername)
    })

    it('checks if server blocks existing username sign up attempt', async () => {
      const response = await request(app)
        .post('/user/signup')
        .send({
          username: 'aa',
          name: 'name',
          password: 'password',
          email: 'test@test.com',
        })
        .set('Accept', 'application/json');
        expect(response.status).not.toEqual(201);
        expect(response.body).not.toHaveProperty('username');
    })
  });
  describe('#dbLink-router testing', () => {
    it('providing working dbLink works properly', async () => {
      const response = await request(app)
        .post('/db')
        .send({
          dbLink: 'postgres://nfvukbtr:d7AGqY2wq7gu0Y58CNUcHjK1oXC9aHov@peanut.db.elephantsql.com/nfvukbtr'
        })
        .set('Accept', 'application/json');
      expect(response.body).toHaveProperty('fnKeys');
      expect(response.body).toHaveProperty('parsedFnKeys');
      expect(response.body).toHaveProperty('parsedPrimaryKeys');
      expect(response.body).toHaveProperty('schemaString');
      expect(response.body).toHaveProperty('tree');
      expect(response.status).toEqual(202);
    });

    it('providing invalid dbLink does not work', async () => {
      const response = await request(app)
        .post('/db')
        .send({
          dbLink: 'fakeLink'
        })
        .set('Accept', 'application/json');
      expect(response.body).not.toHaveProperty('fnKeys');
      expect(response.body).not.toHaveProperty('parsedFnKeys');
      expect(response.body).not.toHaveProperty('parsedPrimaryKeys');
      expect(response.body).not.toHaveProperty('schemaString');
      expect(response.body).not.toHaveProperty('tree');
      expect(response.status).not.toEqual(202);
    });
  });
});