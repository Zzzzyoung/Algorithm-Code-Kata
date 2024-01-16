function solution(price, money, count) {
    var answer = 0;
    var sum = 0;

    for (i = 1; i <= count; i++) {
        sum = sum + price * i;
    }
    answer = (money - sum < 0) ?  sum - money : 0;
    
    return answer;
}