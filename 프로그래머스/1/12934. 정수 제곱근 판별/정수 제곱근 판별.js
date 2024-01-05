function solution(n) {
    var answer = 0;
    var int = Number.isInteger(Math.sqrt(n));
    
    if (int === true) {
        answer = Math.pow(Math.sqrt(n) + 1, 2);
    } else {
        answer = -1;
    }
    
    return answer;
}