function solution(food) {
    var answer = '';
    var arr = [];
    var str = '';
    var revStr = '';
    
    for (i = 1; i < food.length; i++) {
        arr.push(Math.floor(food[i]/2));       
    }
    for (i = 0; i <= arr.length; i++) {
        str += String(i+1).repeat(arr[i]);
    }
    revStr = str.split("").reverse().join("");
    answer = str.concat("0").concat(revStr);
    
    return answer;
}