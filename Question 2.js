function solution(s) {
  let answer = "";

  const arr = s.split("").sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  });

  arr.forEach((str) => {
    answer += str;
  });

  return answer;
}
