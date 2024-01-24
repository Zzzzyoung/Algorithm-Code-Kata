function solution(s) {
    var answer = '';
    var arr = [];
    var num = 0;
    var newArr = [];
    
    
    arr = s.split(' ');
    for(i = 0; i < arr.length; i++) {
        num = Number(arr[i]);
        newArr.push(num);
    }
    var max = Math.max(...newArr);
    var min = Math.min(...newArr);
    
    answer = [min, max].join(' ');
    return answer;
}