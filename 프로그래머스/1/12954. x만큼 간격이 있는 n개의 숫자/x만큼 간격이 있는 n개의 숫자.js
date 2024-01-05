function solution(x, n) {
    var answer = [];
    
    if (x > 0) {
        for(i = x; i <= x * n; i += x) {
            answer.push(i);
        }
    } else if (x < 0) {
        for(i = x; i >= x * n; i += x) {
            answer.push(i);
        }
    } else if (x == 0) {
        for(i = 1; i <= n; i++) {
            answer.push(0);
        }
    }
    return answer;
}