function solution(arr) {
    var answer = [];
    var minNum = Math.min(...arr);
    var idx = arr.indexOf(minNum);
    
    arr.splice(idx,1);
    answer = (arr.length === 0) ? arr.push(-1) : arr;
    return answer;
}
