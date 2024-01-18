function solution(numbers) {
    var answer = [];
    var sum = [];
    
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            sum.push(numbers[i] + numbers[j]);            
        }
    }
    
    answer = [...new Set(sum)];
    answer.sort((a, b) => a - b);
    
    return answer;
}