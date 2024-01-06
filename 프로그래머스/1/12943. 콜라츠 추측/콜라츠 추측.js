function solution(num) {
    var answer = 0;

    if (num === 1) {
        answer = 0;
    } else {
        while (1) {
            if (num % 2 === 0) {
                num /= 2;
                answer++;
            } else if (num % 2 !== 0) {
                num = num * 3 + 1;
                answer++;
            }
            if (num === 1) {
                break;            
            }
        }
    }
          
    if (answer > 500) {
        answer = -1;
    }
    
    return answer;
}