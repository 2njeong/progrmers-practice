function solution(bandage, health, attacks) {
  const t = bandage[0];
  const x = bandage[1];
  const y = bandage[2];
  let newHealth = health;

  for (let i = 0; i < attacks.length; i++) {
    let earningTime;
    if (i === 0) {
      earningTime = attacks[i][0] - 1;
    } else {
      earningTime = attacks[i][0] - attacks[i - 1][0] - 1;
    }

    newHealth =
      newHealth +
      earningTime * x +
      (earningTime >= t ? Math.floor(earningTime / t) * y : 0);
    newHealth = newHealth >= health ? health : newHealth;
    newHealth -= attacks[i][1];
    if (newHealth <= 0) return -1;
  }
  return newHealth > 0 ? newHealth : -1;
}