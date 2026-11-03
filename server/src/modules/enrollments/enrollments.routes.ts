import { Router } from "express";
import { parseId } from "../../validation";
import { EnrollmentsService } from "./enrollments.service";
import { studentsRoutes } from "../students/students.routes";

export function enrollmentsRoutes() {
  const service = new EnrollmentsService();
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
