// factory functions:

class Person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    talk()
    {
        console.log("hello my name is :"+this.name);
    }
}

class Student extends Person
{
    constructor(name,age,subject)
    {
        super(name,age);
        this.subject=subject;
    }
}

class Teacher extends Person
{
    constructor(name,age,subject)
    {
        super(name,age);
        this.subject=subject;
    }
}


student1=new Student("shumail","21","math");

student1.talk();


Teacher1=new Teacher("shumaila","21","mathhh");

Teacher1.talk();

