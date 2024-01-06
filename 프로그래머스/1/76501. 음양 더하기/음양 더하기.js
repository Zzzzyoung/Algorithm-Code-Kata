function solution(absolutes, signs) {
    var answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i];
        } else if (signs[i] === false) {
            answer -= absolutes[i];
        }
    }
    return answer;
}

let absolutes = [1,2,3];
let signs = [false,false,true];

// let absolutes = [4,7,12];
// let signs = [true,false,true];

console.log(solution(absolutes, signs));