function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDays = 0;

  for (let i = 0; i < a - 1; i++) {
    totalDays += months[i];
  }
  totalDays += b;

  const dayIndex = (totalDays + 4) % 7; // 2016년 1월 1일이 금요일이므로 +4
  return days[dayIndex];
}