function solution(nums) {
// 배열에서 3개 요소 고르기
// -> 반복문 3번..?
// 고른 3개 더하기
// 더했을 때 소수가 된다면
// 소수 : 홀수의 제곱수
// count +1
    
    let arr = [];
    let sum = 0;
    let count = 0;
    
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            for (k = j + 1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k];
                arr.push(sum);
            }
        }
    }

    arr.forEach((num) => {
        let isPrime = true;
        for (let l = 2; l < num; l++) {
           if (num % l === 0) {
               isPrime = false;
           }
        }
        count += (isPrime ? 1 : 0);
    })
    
    return count;
}