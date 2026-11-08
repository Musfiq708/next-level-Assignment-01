function multiplyValue(value: number, multiplier?: number) {
    if (multiplier === undefined) {
        multiplier = 2;
    }

    let answer = value * multiplier;
    return answer;

}

function processInput(value: string | number | boolean) {
    if (typeof (value) === "string") {
        value = value.trim().toLowerCase();
    }
    else if (typeof (value) === "number") {
        value = value * 10;
    }
    else if (typeof (value) === "boolean") {
        if (value === true) {
            value = "Active"
        }
        else {
            value = "Inactive"
        }
    }

    return value;
}


type Coordinate = readonly [number, number, string];

function formatCoordinate(coordinate: Coordinate): string {
    const [lat, long, location] = coordinate;

    return `Location: ${location} (${lat}, ${long})`;
}

function concatenateArrays <T>(...arrays: T[][]):T[]{
    const finalArray:T[]=[];

    arrays.forEach(array=>{
        array.forEach(
            number => finalArray.push(number)
        )
    })

return finalArray;
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]))