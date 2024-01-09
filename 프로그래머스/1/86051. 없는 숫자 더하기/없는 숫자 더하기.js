function solution(numbers) {
  var answer = "";
  var newArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var resultArr = newArr.filter((item) => numbers.indexOf(item) === -1);
  answer = resultArr.reduce((acc, curr) => acc + curr);

  return answer;
}
