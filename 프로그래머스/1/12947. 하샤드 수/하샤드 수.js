function solution(x) {
    var answer = true;
    var sum;
    
    sum = String(x).split('').reduce((acc, curr) => acc + Number(curr), 0);
    if (x % sum === 0) {
        answer = true;
    } else {
        answer = false;
    }
    
    return answer;
}