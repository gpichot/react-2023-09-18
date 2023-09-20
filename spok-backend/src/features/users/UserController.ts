import { Body, Controller, Delete, Get, Path, Post, Query, Route } from "tsoa";

import { db } from "../../db";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type UserCreatePayload = Pick<User, "firstName" | "lastName" | "email">;

@Route("/users")
export class UserController extends Controller {
  @Get("")
  async listUsers(
    @Query() page: number = 1,
    @Query() limit: number = 10
  ): Promise<User[]> {
    const [results, count] = await Promise.all([
      db.user.findMany({
        skip: (page - 1) * limit,
        take: limit,
      }),
      db.user.count(),
    ]);

    this.setHeader("X-Total-Count", count.toString());

    return results;
  }

  @Delete("/:id")
  async deleteUser(@Path() id: string): Promise<void> {
    await db.user.delete({
      where: { id },
    });
  }

  @Post("")
  async createUser(@Body() body: UserCreatePayload): Promise<User> {
    return db.user.create({
      data: body,
    });
  }
}
