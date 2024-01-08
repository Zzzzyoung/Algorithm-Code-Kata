function solution(left, right) {
    var answer = 0;
    var isNum = 0;
    
    for (i = left; i <= right; i++) {
        isNum = Number.isInteger(Math.sqrt(i));
        if (isNum === true) {
            answer -= i;
        } else {
            answer += i;
        }
    }

    return answer;
}
