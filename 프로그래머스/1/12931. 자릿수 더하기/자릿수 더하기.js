function solution(n)
{
    var answer = 0;
    answer = String(n).split('').reduce((acc, curr) => acc + Number(curr), 0);

    return answer;
}