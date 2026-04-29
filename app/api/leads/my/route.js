import { connectDB } from "../../../../lib/db";
import Lead from "../../../../models/Lead";

export async function POST(req) {
  await connectDB();

  const { agentId } = await req.json();

  const leads = await Lead.find({ assignedTo: agentId });

  return Response.json(leads);
}