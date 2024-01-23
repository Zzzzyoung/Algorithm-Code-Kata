function solution(k, m, score) {
    var answer = 0;
    var arr = [];
    
    arr = score.sort((a, b) => b-a);
    
    for (i = m - 1; i < arr.length; i += m) {
        answer += arr[i] * m;
    }
    return answer;
}