import { connectDB } from "../../../../lib/db";
import Lead from "../../../../models/Lead";

export async function GET() {
  await connectDB();

  const leads = await Lead.find().populate("assignedTo");

  return Response.json(leads);
}