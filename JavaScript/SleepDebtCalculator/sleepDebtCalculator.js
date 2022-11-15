function getSleepHours(day) {
    switch(day) {
        case 'monday': return 8;
        case 'tuesday': return 6;
        case 'wednesday': return 7;
        case 'thursday': return 5;
        case 'friday': return 8;
        case 'saturday': return 9;
        case 'sunday': return 6;
        default: return undefined;
    }
}

function getActualSleepHours() {
    return getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
}

function getIdealSleepHours(hours = 8) {
    return hours * 7;
}

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours)
        console.log("You've had the perfect amount of sleep last week.");
    else if(actualSleepHours < idealSleepHours)
        console.log("You've had less sleep then you needed last week.");
    else
        console.log("You've had more sleep then you needed last week.");
}
calculateSleepDebt();