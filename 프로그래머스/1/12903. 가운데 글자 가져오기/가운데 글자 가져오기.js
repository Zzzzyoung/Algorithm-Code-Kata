function solution(s) {
  var answer = "";

  s.length % 2 === 0
    ? (answer = s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)])
    : (answer = s[Math.floor(s.length / 2)]);
  return answer;
}