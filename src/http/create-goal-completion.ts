export async function createGoalCompletion(goalId: string) {
  await fetch('http://localhost:3333/completions', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      goalId,
    }),
  })
}
