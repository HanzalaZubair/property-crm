export function calculateScore(budget) {
  if (budget > 20000000) return 3; // High
  if (budget >= 10000000) return 2; // Medium
  return 1; // Low
}