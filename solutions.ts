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



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const finalArray: T[] = [];

    arrays.forEach(array => {
        array.forEach(
            number => finalArray.push(number)
        )
    })

    return finalArray;
}

interface Course {
    title: string,
    students: number,
    isPublished: boolean
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    const filterArray: Course[] = [];
    courses.forEach(
        course => {
            if (course.isPublished == true && course.students >= minStudents) {
                filterArray.push(course)
            }
        }
    )
    return (filterArray)
}



function pluckValues <T, K extends keyof T> (items: T[] , key : K): T[K][]{
const keyValue :T[K][] =[];
    items.forEach(item=>
        keyValue.push(item[key])
    )
    return keyValue;
}


class Employee {
    protected name : string;
    private baseSalary : number;

    constructor(name : string,baseSalary : number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee{
    private department : string;

    constructor(name : string,baseSalary : number , department : string)
    {
        super(name,baseSalary);
        this.department = department;
    }
    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}

async function validateAgeAsync (age:number): Promise<string> {
    if(age <18){
        throw new Error("Access Denied: Must be 18 or older");
    }
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Access Granted")
        }, 1000);
    })
}

