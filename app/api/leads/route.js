import { connectDB } from "../../../../lib/db";
import Lead from "../../../../models/Lead";

export async function POST(req) {
  await connectDB();

  const { leadId, agentId } = await req.json();

  const lead = await Lead.findByIdAndUpdate(
    leadId,
    { assignedTo: agentId },
    { new: true }
  );

  return Response.json({
    message: "Lead assigned successfully",
    lead,
  });
}