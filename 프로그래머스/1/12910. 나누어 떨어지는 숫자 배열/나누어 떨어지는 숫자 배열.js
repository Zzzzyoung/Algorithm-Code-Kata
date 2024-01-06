function solution(arr, divisor) {
    var answer = [];
    var sortedAnswer = [];
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
            sortedAnswer = answer.sort((a, b) => a - b);
        }
    }
    if (sortedAnswer.length < 1) {
        sortedAnswer.push(-1);
    }
    
    return sortedAnswer;
}