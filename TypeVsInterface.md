In typeScript both type and interface is used to define the structure and shape of the data . both are used to define an object structure . To use interface Interface keyword is used ,and for type Type keyword is used . Although both looks similar but they have diffrent importance. 

Basic Syntax-
 Interface-
interface User {
    name: string;
    age: number;
}

Type
type User = {
    name: string;
    age: number;
};

Merging

interface supports declearation merging

interface User {
    name: string;
}

interface User {
    age: number;
}

both User can be used together because the gets merged automaticly.

Extending and Inharitance :

both interface and type has code reusuability by allowing developer combine existing structure . interface uses the extends keyword  type uses & (and) operator to combine multiple types.

interface Person {
    name: string;
}

interface Student extends Person {
    studentId: number;
}

Primitive Types:
type can be used to set custom names for existing primitive types. making type defination more readable and usable.Interface cannot directly represent primitive types because it is desined primiry for describe object like structure.


Union types :

Union type allows a variable to hold values belonging to one og several possible types . Typescript Uses pipe  (|) operator to define union types.  type can use  union type . interface cannot use this directly .

In conclusion Both Type aias and interface are important features of TypeScript they can perform similar tasks such as defining object structure. interface is normally used to define object structures because it supports declaration , merging and extension . type is more flexible when working with primitive types , union types , tuples and complex type compositions.

In my recommendation I would say Interface is for object structures and type Alias is for more complex type definations . this is a common and practical convension in mordrn typeScript development.