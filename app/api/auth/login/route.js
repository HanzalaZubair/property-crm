import { connectDB } from "../../../../lib/db";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";
import { signToken } from "../../../../utils/jwt";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  const user = await User.findOne({ email });

  if (!user) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return Response.json({ message: "Wrong password" }, { status: 401 });
  }

  const token = signToken(user);

  return Response.json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      role: user.role,
    },
  });
}