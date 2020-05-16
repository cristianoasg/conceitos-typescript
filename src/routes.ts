import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function heloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "cristiano@email.com",
    password: "123",
    techs: ["Node.js", "ReactJS", "React Native"],
  });

  console.log(user.email);
  return response.json({ message: "Hello World" });
}
