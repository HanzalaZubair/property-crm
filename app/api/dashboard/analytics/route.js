import { connectDB } from "../../../../lib/db";
import Lead from "../../../../models/Lead";

export async function GET() {
  await connectDB();

  const totalLeads = await Lead.countDocuments();

  const newLeads = await Lead.countDocuments({ status: "New" });
  const contacted = await Lead.countDocuments({ status: "Contacted" });
  const closed = await Lead.countDocuments({ status: "Closed" });

  const high = await Lead.countDocuments({ score: 3 });
  const medium = await Lead.countDocuments({ score: 2 });
  const low = await Lead.countDocuments({ score: 1 });

  return Response.json({
    totalLeads,
    status: {
      newLeads,
      contacted,
      closed,
    },
    priority: {
      high,
      medium,
      low,
    },
  });
}