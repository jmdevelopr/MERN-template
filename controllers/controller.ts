import { Response, Request } from "express";

const getStuff = (req: Request, res: Response) => {
    try {
      res.status(201).send("Controller works!")
    } catch (err) {
      res.status(400).send({ err });
    }
}

export { getStuff };