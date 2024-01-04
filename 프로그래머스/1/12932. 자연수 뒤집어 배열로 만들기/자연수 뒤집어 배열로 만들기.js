function solution(n) {
    var answer = [];
    let arr = String(n).split('').reverse();
    
    answer = arr.map(function(num) {
        return Number(num);
    })
    return answer;
}
