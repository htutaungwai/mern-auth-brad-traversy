import expressAsyncHandler from "express-async-handler";

// @desc Auth user/set token
// router POST /api/users/auth
// @access Public
const authUser = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

export { authUser };
