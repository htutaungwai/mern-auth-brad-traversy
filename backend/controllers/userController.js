// @desc Auth user/set token
// router POST /api/users/auth
// @access Public

async function authUser(req, res) {
  res.status(200).json({ message: "Auth user" });
}

export { authUser };
