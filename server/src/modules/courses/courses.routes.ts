import { Router } from "express";
import { parseId } from "../../validation";
import { CoursesService } from "./courses.service";
import { studentsRoutes } from "../students/students.routes";

export function coursesRoutes() {
  const service = new CoursesService();
  const router = Router();

  router.get("/:id", async (req, res) => {
    res.json(await service.findOne(parseId(req.params.id, "id")));
  });

  
  return router;
}
