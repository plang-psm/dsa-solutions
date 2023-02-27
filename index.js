let firstChOccurance = false;
    let lastStrLen = 0;

    for(let i = s.length - 1; i > -1; i--) {
        if(s[i] !== ' ') {
            firstChOccurance = true;
            lastStrLen++;
        }
        if(firstChOccurance && s[i] === ' ') {
            break;
        }
    }
    return lastStrLen;