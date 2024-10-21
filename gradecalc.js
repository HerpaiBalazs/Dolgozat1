function gradeCalculator(score, maximum) {
    let percent = score / maximum * 100;
    if (percent >= 90 && percent <= 100) {
        return("A");
    }
    if (percent >= 80 && percent < 90) {
        return("B");
    }
    if (percent >= 70 && percent < 80) {
        return("C");
    }
    if (percent >= 60 && percent < 70) {
        return("D");
    }
    if (percent >= 50 && percent < 60) {
        return("E");
    }
    if (percent >= 0 && percent < 50) {
        return("F");
    }
}

console.log(gradeCalculator(70, 100));


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2002));


function cuboid(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return [0, 0];
    }

    let surfaceArea = 2 * (a * b + a * c + b * c);
    let volume = a * b * c;

    return [surfaceArea, volume];
}
console.log(cuboid(6,4,7));

function seconds(time) {
t=time.split(':')
time=60*t[0]*60*t[1]+t[2];
return(time);
    }
console.log(seconds('14:34:42'));