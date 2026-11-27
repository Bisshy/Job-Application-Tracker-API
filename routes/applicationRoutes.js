import express from "express";
import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationController.js";

import validateApplicationData from "../middleware/validateApplication.js";

const router = express.Router();

router.get("/applications", getApplications);
router.post("/applications", validateApplicationData, createApplication);
router.put("/applications/:id", updateApplication);
router.delete("/applications/:id", deleteApplication);
/*application.get("/applications/:id", (req, res) => {
  const { id } = req.params;
  const { includeNotes } = req.query;

  if (includeNotes !== "true" && includeNotes !== "false") {
    res.status(400).json({ message: "Included note must be true or false" });
    return;
  }

  const application = applications.find((application) => application.id === id);

  if (!application) {
    res.status(404).json({ message: "Application not found" });
    return;
  }

  if (includeNotes === "false") {
    const { notes, ...applicationWithoutNotes } = application;
    res.status(200).json({ applicationWithoutNotes });
  } else {
    res.status(200).json({ application });
  }
});

application.post("/applications", (req, res) => {
  const { companyName, jobTitle, location } = req.body;
  if (
    typeof companyName !== "string" ||
    companyName.trim() === "" ||
    typeof jobTitle !== "string" ||
    jobTitle.trim() === "" ||
    typeof location !== "string" ||
    location.trim() === ""
  ) {
    res.status(400).json({ message: "Bad Request Response" });
    return;
  }

  const id = randomUUID();

  const newApplication = {
    id,
    companyName,
    jobTitle,
    location,
  };

  applications.push(newApplication);
  res.status(201).json({ message: "Success", newApplication });
});

function deleteApplication(req, res) {
  const { id } = req.params;
  const application = applications.findIndex(
    (application) => application.id === id,
  );
  if (application === -1) {
    res.status(404).json({ message: "Application not found" });
    return;
  }

  const [deletedItem] = applications.splice(application, 1);

  res.status(200).json({ message: "application deleted", deletedItem });
}
application.delete(
  "/applications/:id",
  authenticateUser,
  authorizeApplicationOwner,
  deleteApplication,
); */

export default router;
