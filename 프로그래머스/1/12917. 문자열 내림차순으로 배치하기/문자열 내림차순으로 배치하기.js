function solution(s) {
    var answer = '';
    var arr = [];
    var sortedArr = [];
    
    arr = s.split('');
    sortedArr = arr.sort().reverse();
    answer = sortedArr.join('');

    return answer;
}