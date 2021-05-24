export function hasPolicyGoals(toolkit) {
  return toolkit.rcdts && toolkit.policyGoal && toolkit.role ? true : false;
}

export function getSchoolEntities(dataset) {
  return dataset
    .slice()
    .filter((x) => x.Type === "School")
    .sort((a, b) => (a.School_Name > b.School_Name ? 1 : -1));
}
