//This function will return weekday calculate. Example, S = 'Wed' and K = 2, return 'Fri'

function solution(S, K) {
    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    let numberDay = weekday.indexOf(S);
    for (let x = numberDay; x < (K + weekday.indexOf(S)); x++) {
        numberDay++;
        
        if (numberDay > 6) {
            numberDay = 0;
        }
    }
         
    return weekday[numberDay];
}
