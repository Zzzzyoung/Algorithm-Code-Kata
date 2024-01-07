function solution(phone_number) {
    var answer = '';

    var slicedPhonenumber = phone_number.slice(phone_number.length - 4, phone_number.length);
    var starRepeat = '*'.repeat(phone_number.length - 4);

    answer = starRepeat.concat(slicedPhonenumber);

    return answer;
}