
// Pèrson constructor

function Person(name, dob) {
    this.name = 'name';
    this.birthday = new Date(dob);
    
    // method is a function that is inside of an object
    this.calculateAge = function(){
        const difference = Date.now() - this.birthday.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const cris = new Person('cris', '5-22-2003');
const savio = new Person('savio', '11-22-1995');

console.log(cris.calculateAge());
console.log(savio.calculateAge());