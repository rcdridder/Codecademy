const _ = {
    clamp(number, lower, upper) {
        let returnNumber = number;
        if(number < lower)
            returnNumber = lower;
        if(number > upper)
            returnNumber = upper;
        return returnNumber;
    },
    inRange(number, start, end) {
        let inRange;
        if(end == undefined) {
            end = start;
            start = 0;
        }
        if(start > end) {
            let newEnd = start;
            start = end;
            end = newEnd;
        }
        if(number < start || number >= end)
            inRange = false;
        else
            inRange = true;
        return inRange;
    },
    words(input) {
        return input.split(' ');
    },
    pad(input, length) {
        const padding = ' ';
        const paddingToAdd = length - input.length;
        const paddingStart = Math.floor(paddingToAdd / 2);
        const paddingEnd = Math.ceil(paddingToAdd / 2);
        if(input.length >= length)
            return input;
        else {
            return padding.repeat(paddingStart) + input + padding.repeat(paddingEnd);
        }
    },
    has(object, key) {
        return object[key] != undefined ? true : false;
    },
    invert(object) {
        let newObject= {};
        for(let key in object) {
            originalValue = object[key];
            newObject[originalValue] = key;
        }
        return newObject;
    },
    findKey(object, predicate) {
        for(let key in object) {
            let value = object[key];
            let predicateReturn = predicate(value);
            if(predicateReturn)
                return key;
        }
        return undefined;
    },
    drop(arr, num) {
        if(num == undefined) 
            arr.shift();
        else {
            for(let i = 0; i < num; i++) {
                arr.shift();
            }
        }
        return arr;
    },
    dropWhile(arr, predicate) {
        for(let i = 0; i < arr.length; i++) {
            if(predicate)
                arr.shift();
        }
        return arr;
    },
    chunk(arr, size) {
        if(size == undefined) 
            size = 1;
        arrayChunks = [];
        for(let i = 0; i < arr.length; i += size) {
            arrayChunk = arr.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
}

// Do not write or modify code below this line.
module.exports = _;