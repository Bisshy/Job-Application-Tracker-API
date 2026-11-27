function validateApplicationData(req, res, next) {
  const { companyName, jobTitle, location } = req.body;

  if (
    typeof companyName !== "string" ||
    companyName.trim() === "" ||
    typeof jobTitle !== "string" ||
    jobTitle.trim() === "" ||
    typeof location !== "string" ||
    location.trim() === ""
  ) {
    res.status(400).json({
      message:
        "Company name, job title, and location are required and must be non-empty strings.",
    });
    return;
  }

  next();
}

export default validateApplicationData;
