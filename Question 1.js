function solution(arr) {
  arr.sort((a, b) => b - a);

  arr.splice(arr.length - 1, 1);

  if (arr.length === 0) arr.push(-1);

  return arr;
}
