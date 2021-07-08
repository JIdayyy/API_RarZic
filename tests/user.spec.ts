import { PrismaClient } from '.prisma/client';
import request from "supertest";
import faker from "faker";

import app from "../src/app";

const prisma = new PrismaClient()

describe("Users Ressources", () => {
  test("Get status 200 and array of users", async () => {
    const res = await request(app)
      .get("/users")
      .expect(200)
      .expect("Content-Type", /json/);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Get status 200 and array of one user", async () => {
    const sampleUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.name.firstName(),
      password: faker.internet.password(),
    };

    const { id } = await prisma.user.create({
      data: sampleUser,
    });

    const res = await request(app)
      .get(`/users/${id}`)
      .expect(200)
      .expect("Content-Type", /json/);


    expect(res.body).toHaveProperty("lastName", sampleUser.lastName);
    expect(res.body).not.toHaveProperty("password");
  });

  test("post user should fail, password doesn't match", async () => {
    const sampleUser = {
      firstName: "Mittie",
      lastName: "Hodkiewicz",
      username: faker.name.firstName(),
      password: "OvjXgSmZzmbL6bL",
      confirmPassword: "o1wIL8kEIz_i0mx",
      
    };

    await request(app).post(`/users`).send(sampleUser).expect(422);
    // .expect("Content-Type", /json/);
    //  TODO : change this when JOI validation is ready
  });

  test("post user", async () => {
    const password = faker.internet.password();

    const sampleUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.name.firstName(),
      password: password,
      confirmPassword: password,
    };

    const res = await request(app)
      .post(`/users`)
      .send(sampleUser)
      .expect(201)
      .expect("Content-Type", /json/);
    expect(res.body).toHaveProperty("lastName", sampleUser.lastName);
    expect(res.body).not.toHaveProperty("password");
  });

  test("put one user", async () => {
    const sampleUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.name.firstName(),
      password: faker.internet.password(),
    };
    const { id } = await prisma.user.create({
      data: sampleUser,
    });
    await request(app).put(`/users/${id}`).send(sampleUser).expect(204);
    expect.not.objectContaining(sampleUser);
  });

  test("delete one user", async () => {
    const sampleUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.name.firstName(),
      password: faker.internet.password(),
    };
    const { id } = await prisma.user.create({
      data: sampleUser,
    });
    await request(app).delete(`/users/${id}`).expect(204);
    expect.not.objectContaining(sampleUser);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});