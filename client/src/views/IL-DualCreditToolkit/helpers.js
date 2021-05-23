export function hasPolicyGoals(toolkit) {
  return toolkit.rcdts && toolkit.policyGoal && toolkit.role ? true : false;
}
