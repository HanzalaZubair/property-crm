import { connectDB } from "../../../../lib/db";
import Lead from "../../../../models/Lead";

export async function GET() {
  await connectDB();

  const agents = await Lead.aggregate([
    {
      $group: {
        _id: "$assignedTo",
        totalLeads: { $sum: 1 },
        closedLeads: {
          $sum: {
            $cond: [{ $eq: ["$status", "Closed"] }, 1, 0],
          },
        },
      },
    },
  ]);

  return Response.json(agents);
}