function isValidApplication(data) {
  if (data === null || typeof data !== "object" || Array.isArray(data)) {
    return false;
  }

  return (
    typeof data.companyName === "string" &&
    data.companyName.trim() !== "" &&
    typeof data.jobTitle === "string" &&
    data.jobTitle.trim() !== "" &&
    typeof data.location === "string" &&
    data.location.trim() !== ""
  );
}

export default isValidApplication;
