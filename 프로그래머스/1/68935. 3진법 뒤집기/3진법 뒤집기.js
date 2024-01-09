function solution(n) {
  var answer = 0;
  var toThree = 0;
  var reversed = 0;

  toThree = n.toString(3);
  reversed = toThree.split("").reverse().join("");
  answer = parseInt(reversed, 3);
  return answer;
}
