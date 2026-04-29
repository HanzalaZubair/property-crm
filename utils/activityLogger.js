import Activity from "../models/Activity";

export async function logActivity(leadId, action, user) {
  try {
    await Activity.create({
      leadId,
      action,
      performedBy: user?.email || "system",
    });
  } catch (error) {
    console.log("Activity log error:", error.message);
  }
}