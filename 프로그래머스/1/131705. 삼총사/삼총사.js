function solution(number) {
  var answer = 0;

  for (i = 0; i < number.length; i++) {
    for (j = 0; j < number.length; j++) {
      for (k = 0; k < number.length; k++) {
        if (i !== j && j !== k && k !== i) {
          if (number[i] + number[j] + number[k] === 0) {
            answer++;
          }
        }
      }
    }
  }
  return answer / (3 * 2);
}