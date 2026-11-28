const allowedStatus = ["Applied", "Offer", "Rejected", "Pending"];

function validateApplicationData(req, res, next) {
  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    res.status(400).json({
      message: "Request body must be a valid object.",
    });
    return;
  }

  const errors = {};

  const { companyName, jobTitle, location, salary, isRemote, notes, status } =
    req.body;

  if (typeof companyName !== "string" || companyName.trim() === "") {
    errors.companyName = "Company name must be a non-empty string.";
  } else {
    req.body.companyName = companyName.trim();
  }

  if (typeof jobTitle !== "string" || jobTitle.trim() === "") {
    errors.jobTitle = "Job title must be a non-empty string.";
  } else {
    req.body.jobTitle = jobTitle.trim();
  }

  if (typeof location !== "string" || location.trim() === "") {
    errors.location = "Location must be a non-empty string.";
  } else {
    req.body.location = location.trim();
  }

  if (
    salary !== undefined &&
    (typeof salary !== "number" || !Number.isFinite(salary) || salary < 0)
  ) {
    errors.salary = "Salary must be a non-negative finite number.";
  }

  if (notes !== undefined) {
    if (typeof notes !== "string" || notes.trim() === "") {
      errors.notes = "Notes must be non-empty string";
    } else {
      req.body.notes = notes.trim();
    }
  }

  if (isRemote !== undefined && typeof isRemote !== "boolean") {
    errors.isRemote = "Remote value must be a boolean";
  }

  if (status !== undefined) {
    if (typeof status !== "string" || !allowedStatus.includes(status.trim())) {
      errors.status = `Invalid status, Allowed values are: ${allowedStatus.join(", ")}`;
    } else {
      req.body.status = status.trim();
    }
  }

  if (Object.keys(errors).length > 0) {
    res.status(400).json({ message: "Validation failed", errors });
    return;
  }
  next();
}

export default validateApplicationData;
