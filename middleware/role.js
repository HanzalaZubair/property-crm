export function isAdmin(user) {
  return user?.role === "admin";
}

export function isAgent(user) {
  return user?.role === "agent";
}