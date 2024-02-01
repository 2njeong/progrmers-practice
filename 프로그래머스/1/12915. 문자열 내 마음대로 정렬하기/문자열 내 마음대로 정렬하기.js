function solution(strings, n) {
  strings.sort((a, b) =>
    a.substring(n, n + 1) === b.substring(n, n + 1)
      ? a.localeCompare(b)
      : a.substring(n, n + 1).localeCompare(b.substring(n, n + 1))
  );

  return strings;
}