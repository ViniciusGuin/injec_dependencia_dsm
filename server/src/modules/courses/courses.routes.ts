import { Router } from "express";
import { parseId } from "../../validation";
import type { CoursesService } from "./courses.service";

export function coursesRoutes(service: CoursesService) {
  const router = Router();

  router.get("/:id", async (req, res) => {
    res.json(await service.findOne(parseId(req.params.id, "id")));
  });

  
  return router;
}
