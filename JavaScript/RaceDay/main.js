let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 15;

if(runnerAge > 18 && registeredEarly) 
    raceNumber += 1000;
if(runnerAge > 18 && registeredEarly)
    console.log(`Your race will start at 9.30am and your number is ${raceNumber}`);
else if (runnerAge > 18 && !registeredEarly)
    console.log(`Your race will start at 11.00am and your number is ${raceNumber}`);
else if (runnerAge < 18) 
    console.log(`Your race will start at 12.30pm and your number is ${raceNumber}`);
else
    console.log("Please go to the registration desk for more information.");