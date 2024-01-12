function solution(str) {
  let answer = true;
  let count = 0;
  upperStr = str.toUpperCase();

  for (let i = 0; i < upperStr.length; i++) {
    if (upperStr[i] === "P") {
      count++;
    } else if (upperStr[i] === "Y") {
      count--;
    }
  }
  if (count === 0) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}