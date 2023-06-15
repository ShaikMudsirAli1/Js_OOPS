//  setTimeout(() => {
//      const log = console.log;
//  const myName = "King";

//  log(myName);
//  },5000)

// class hello {
//    message() {
//      log(" Hello oops");  }
// }
//  let a = new hello();

//  a.message();

   // constructor  function are  special functions
    class constructor {
      constructor() {
        let b =
          " constructor function automatically called when we create object of class ";

        log(b);
      }
    }

var c = new constructor();  
//  In constructor i am using the prototype method

     class student {
       constructor(name, age) {
   // Constructor function
    this.name_Home = name;
        this.age_Home = age;
        log("constructor function");
   }
   
   // Prototype Method.
  //  As per ES6 we can use template string.
      hello() {
        log(`Hello age of  ${this.name_Home} ${this.age_Home} only my js`);
        document.write(
          `Hello age of  ${this.name_Home} ${this.age_Home} only my js`
        );
      }

      static staticMethod() {
        log("This is a static method calling with classname student");
      }
    }

    let a = new student("King", 25);
    let b = new student("Ming", 44);

    a.hello();
    b.hello();

     student.staticMethod();

    // *  INHERITANCE

    class employee {
      constructor(name, number) {
        log(`Constructor: Employee ${name} ${number}`);
      }
    }

    class manager extends employee {}

    let a = new manager("Salary", 500);

// *  INHERITANCE practise

    class javascript {
      constructor(name) {
        this.emp_name = name;
        log(`constructor: inside javacript class`);
      }

      info() {
        log(`Manager Name : ${this.emp_name}`);
      }
    }

    class react extends javascript {
      info() {
        super.info();
        log(` javacript is scripting purpose `);
       }
     }                  

    class redux extends react {}

    let a = new react(" React JS");

    a.info();

    // Class Inheritance
    class employee {
      constructor(name, age, salary) {
        this.emp_name = name;
        this.emp_age = age;
        this.emp_salary = salary;
        log(`Constructor: Employee`);
      }

      info() {
        let personal_Allowances = 1500;
        let ta = 1600;
        let total_Salary = this.emp_salary + ta + personal_Allowances;
        document.write(`<h3>Employee Class</h3>
        Name: ${this.emp_name} <br> Age: ${this.emp_age} <br> Salary: ${total_Salary} <br>`);
      }
    }

    class manager extends employee {
      info() {
        let personal_Allowances = 1500;
        let ta = 1600;
        let total_Salary = this.emp_salary + ta + personal_Allowances;
        document.write(`<h3>Manager Class</h3>
        Name: ${this.emp_name} <br> Age: ${this.emp_age} <br> Salary: ${total_Salary} <br>`);
      }
    }

    // Multiple INheritance

    class test extends manager {}

    let a = new manager(" Warner ", 25, 20000);
    let b = new employee(" Smith", 25, 50000);

    let c = new test(" Warner ", 25, 20000);

    c.info();

    a.info();
    b.info();

    // * Template String or Template Literal

    const first_Name = "Shaik";
    // const last_Name = "Mudsir Ali";

    // // lets take arrow function,

//     // // const template = (first_Name, last_Name) => {
//     // //   return ` ${first_Name} ${last_Name}`;
//     // // };

//     // // const hello = ` Respect me ${template(first_Name, last_Name)}`;

//     // // document.write(hello);
//     // // log(hello);

//     // // // *  Normal functions

//     // // function hello() {
//     // //   log("normal function");
//     // // }

//     // // hello();

//     // // let nice = function () {
//     // //   log(" pass function in variable");
//     // // };
//     // // nice();

//     // // // * Arrow functions Short syntax consice way we can write.

//     // // const fine = () => log(" Arrow functions");

//     // // fine();

//     // // const welcome = (name, age) =>
//     // //   document.write(` My name is ${name} & age  ${age} `);

    welcome("Mudsir", 27);

    // typeof will check what is variable type.
    log(typeof welcome);

    * Rest Operator solving function with muliple argument

    * Problem

//     // // const problem = (num1, num2, num3, num4) => log(num1 + num2 + num3 + num4);

    problem(20, 40);
    problem(20, 40, 80);
    problem(20, 40, 80, 90);

    // * Problem with the arguments.

    function sum() {
      log(arguments);

      let sum = 0;

      // Using for in Loop.
      for (let i in arguments) {
        sum += arguments[i];
      }
      document.write(sum, "<br> ", "<hr>");
    }
    sum(" Shaik Mudsir Ali", 30, 40);

    //  Problem its converts total arguments to string .
    // * TO SOLVE THIS WE CAN USE REST OPERATAOR WHICH ALLOWS STRIN ALSO.
     sum(45, 55, 55);

    // /**
    //  * * Rest operator takes multiple arguments convert into single array.
    //  * * Rest values convert into array.
    //  * * REST OPERATOR USED IN FUNCTION DECLARTION
    //  *
    //  * * EXAMPLE: function sum(name, ...args) {
    //  */

    // * Solving with the Rest Operator.

    function sum(name, ...args) {
      document.write(`${name} your score is:`);

      let sum = 0;

      // Using for in Loop.
      for (let i in args) {
        sum += args[i];
      }
      document.write(sum, "<br> ", "<hr>");
    }
    sum(" Shaik Mudsir Ali", 30, 40);

    // *  Spread Operator

    // const arr = [34, 55, 66];

    // in Function Rest Operator
     function sum(name, ...args) {
       document.write(`${name}:`);
       let sum = 0;

      for (let i in args) {
        sum += args[i];
      }
      document.write(sum, "<br> ", "<hr>");
      }
    }

    // Spread Operator
    sum("Mudsir", ...arr);

    Spread Operator

    const array = [33, 44, 55, 66];

    log(array);

    log(...array);

    log([...array]);

    // * Clone with Rest Operator.

    const array1 = [33, 44, 55];

    // const array2 = [44, 66, 77];

    array1.push(99);

    array2 = array1;

    document.write(array2);


