import { Router } from "express";
import { parseId } from "../../validation";
import type { EnrollmentsService } from "./enrollments.service";

export function enrollmentsRoutes(service: EnrollmentsService) {
  const router = Router();

  router.get("/student/:studentRa/course/:courseId", async (req, res) => {
    res.json(
      await service.findOne(
        parseId(req.params.studentRa, "RA"),
        parseId(req.params.courseId, "ID do curso"),
      ),
    );
  });

  return router;
}
