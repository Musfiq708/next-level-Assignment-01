Access Modifiers are some keywords that controls the accessibility of class properties and method . It is an Important concept in object oreanted programming . They are normally used in Encapsulation which means controlling how it is accessed or modified .

There are four commonly used access modifiers in TypeScript ,

1. public
2. Privarte
3. protected 
4. readonly

PUBLIC :
public access modifier allows the class can be access , modified from anyware in the code . in typeScript all the classes are default public 
example- 

class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public displayName() {
        console.log(this.name);
    }
}

const person = new Person("Musfiqur");

console.log(person.name);
person.displayName();
-here display name is publicly accessable.

PRIVATE:
private access modifier restricts  of the property within the class where it is decleared . it cannot be accessed directly form outside the class form its child classess. it is used to protect sensitive data .
example-
class BankAccount {
    private balance: number = 5000;

    public showBalance() {
        console.log(this.balance);
    }
}

const account = new BankAccount();

account.showBalance();

-here balance is private so it cannot be accessed so the output will show error. 

PROTECTED:
Protected Access modifier allows the properrty or method to be accessed within the class where it is declared and also to its child classes. it cannot be accessed form anywhare outside . this is usually used for inharitance where data may be used from parent to its children .

example-

class Person {
    protected name: string = "Musfiqur";
}

class Student extends Person {
    public displayName() {
        console.log(this.name);
    }
}

const student = new Student();

student.displayName();

-protected name cannot be used outside , so it will show error

READ-ONLY:

the readonly modifier prevents a property from being reassigned after its initial assingment . the value of the property cannot be changed after it is decleared readonly. Read only allows the property to be viewed only . it is used for those data which are needed to be shown but not to be modified

example-
class User {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const user = new User(101, "Musfiqur");

console.log(user.id);

user.name = "Rahman"; // Allowed

here id is readonly so it cannot be changed , but the name is changeable 

In conclusion  Access modifiers help implement encapsulaiton in typeScript oop by controlling how class properties and methods are accessed and modified .