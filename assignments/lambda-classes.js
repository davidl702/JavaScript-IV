// CODE here for your Lambda Classes
class Person {
    constructor(attr){
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects.forEach((math) => {
            console.log(math);
        });
    }
    PRAssignment(subject) {
        returns `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        returns `${student.name} has begun sprint challenge on ${subject}`
    }
}

class TeamLead extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return `${name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject) {
        returns `${name} debugs ${student.name}'s code on ${subject}`
    }
}

const Pace = new Instructor ({
    name: 'Pace',
    age: 40,
    location: 'LA',
    specialty: 'Teaching',
    favLanguage: 'Javascript',
    catchPhrase: 'Lets get started!',
})

const Jake = new Instructor ({
    name: 'Jake',
    age: 29,
    location: 'San Jose',
    specialty: 'Telling Jokes',
    favLanguage: 'CSS',
    catchPhrase: 'Are you guys ready?',
})

const David = new Student ({
    name: 'David',
    age: 29,
    location: 'Mobile',
    specialty: 'Sleeping',
    favLanguage: 'HTML',
    catchPhrase: 'Is it time to sleep?',
})

const Will = new Student ({
    name: 'Will',
    age: 19,
    location: 'Florida',
    specialty: 'Cooking',
    favLanguage: 'CSS',
    catchPhrase: 'This is Hard!',
})

const Amir = new TeamLead ({
    name: 'Amir',
    age: 27,
    location: 'San Francisco',
    specialty: 'Helping',
    favLanguage: 'React',
    catchPhrase: 'Not so bad!',
})

const Tai = new TeamLead ({
    name: 'Tai',
    age: 31,
    location: 'Mobile',
    specialty: 'Sleeping',
    favLanguage: 'Javascript',
    catchPhrase: 'Ok',
})

console.log(Pace.demo())
console.log(Jake.age);

console.log(David.location);
console.log(Jake.catchPhrase);

console.log(Amir.location);
console.log(Tai.name);
console.log(Tai.standUp())

