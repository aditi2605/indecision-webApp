class Person{
    //for defining the arguments we use constructor fucntion in class
    constructor(name ='Anonymous' , age= 0){
        this.name = name;
        this.age = age;
    }
    getGretting(){
   // return 'Hi, I am' + this.name + '!';
        return `Hi , I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age); // referse to parent class constructor function
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
   // return 'testing' // overriding parent class method
        let description = super.getDescription(); // calling parent class method
        if(this.hasMajor){
            description += ` Their major is ${this.hasMajor}.`;
        }
        return description;
    }
}

class Traveller extends Person{
   
   constructor(name,age,location){
       super(name,age);
       this.location = location;
   }
   getGretting(){
       let gretting = super.getGretting();
       if(this.location){
           gretting += ` I am visiting from ${this.location}.`
       }
       return gretting;
   }
}

const me =new Traveller('Aditi', 26, 'India');
// console.log(me.getGretting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(me.getGretting());
// console.log(me.getDescription());
