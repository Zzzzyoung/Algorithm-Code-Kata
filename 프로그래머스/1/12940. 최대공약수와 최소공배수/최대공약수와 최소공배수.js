function solution(n, m) {
    var answer = [];

    for (var i = 1; i <= Math.min(n, m); i++) {
        if (Math.min(n, m) % i === 0 && Math.max(n, m) % i === 0) {
            maxDivideNum = i;
        }
    }
    
   answer.push(maxDivideNum);
   answer.push(n * m / maxDivideNum)
    
    return answer;
}