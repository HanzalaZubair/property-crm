import { connectDB } from "../../../../lib/db";
import Lead from "../../../../models/Lead";

export async function POST(req) {
  await connectDB();

  const { leadId, status } = await req.json();

  const lead = await Lead.findByIdAndUpdate(
    leadId,
    { status },
    { new: true }
  );

  return Response.json({
    message: "Status updated",
    lead,
  });
}