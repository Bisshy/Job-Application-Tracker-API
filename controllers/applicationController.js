import applications from "../data/applications.js";
import isValidApplication from "../utils/validation.js";
import { randomUUID } from "node:crypto";

function getApplications(req, res) {
  res.status(200).json(applications);
}

function createApplication(req, res) {
  const { companyName, jobTitle, location } = req.body;
  if (!isValidApplication(req.body)) {
    res.status(400).json({
      message: "companyName, jobTitle and location must be non-empty strings",
    });
    return;
  }

  const id = randomUUID();

  const newApplication = {
    id,
    companyName: companyName.trim(),
    jobTitle: jobTitle.trim(),
    location: location.trim(),
  };
  applications.push(newApplication);
  res.status(201).json({ message: "success", newApplication });
}

function updateApplication(req, res) {
  const id = req.params.id;
  const { companyName, jobTitle, location } = req.body;

  if (!isValidApplication(req.body)) {
    res.status(400).json({
      message: "companyName, jobTitle and location must be non-empty strings",
    });
    return;
  }
  const applicationIndex = applications.findIndex(
    (application) => application.id === id,
  );

  if (applicationIndex === -1) {
    res.status(404).json({ message: "Application not found" });
    return;
  }

  const updatedApplication = {
    ...applications[applicationIndex],
    companyName: companyName.trim(),
    jobTitle: jobTitle.trim(),
    location: location.trim(),
  };
  applications[applicationIndex] = updatedApplication;

  res.status(200).json({ updatedApplication });
}

function deleteApplication(req, res) {
  const id = req.params.id;

  const applicationIndex = applications.findIndex(
    (application) => application.id === id,
  );

  if (applicationIndex === -1) {
    res.status(404).json({ message: "application not found" });
    return;
  }

  const [deletedApplication] = applications.splice(applicationIndex, 1);

  res.status(200).json(deletedApplication);
}

export {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
};
