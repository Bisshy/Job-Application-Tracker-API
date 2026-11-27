/* function authenticateUser(req, res, next) {
  const authorizationHeaders = req.headers.authorization;
  const [scheme, token] = authorizationHeaders?.trim().split(/\s+/) || [];

  if (scheme !== "Bearer" || !token) {
    res.status(401).json({ message: "User not authenticated, please login!" });
    return;
  }

  next();
}

application.use(authenticateUser);

function authorizeApplicationOwner(req, res, next) {
  const id = req.params.id;

  const application = applications.find((application) => application.id === id);

  if (!application) {
    res.status(404).json({ message: "Application not found" });
    return;
  }

  if (application.userId !== req.user.id) {
    res.status(403).json({ message: "Forbidden" });
    return;
  }
  next();
}*/
