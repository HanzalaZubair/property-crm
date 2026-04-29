import { connectDB } from "../../../../lib/db";
import User from "../../../../models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await connectDB();

  const { name, email, password, role } = await req.json();

  if (!name || !email || !password) {
    return Response.json({ message: "All fields required" }, { status: 400 });
  }

  const exists = await User.findOne({ email });
  if (exists) {
    return Response.json({ message: "User already exists" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    role: role || "agent",
  });

  return Response.json({
    message: "User created",
    user,
  });
}