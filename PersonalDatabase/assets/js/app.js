// Declaring variables 
// You can check this Variables are Available or not under the window object
var firstName; 
var lastName; 
var age; 
var job;
// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
age = prompt("Enter Your Age");
// Display  the result on console from input 
console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + age + " " + "years old");

//Age variable for Holding Number Value  
let tempAge;
//Eligible to vote 
let isEligibleToVote;

tempAge = parseInt(age);
// check Eligibility 
if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}

console.log("Is Eligible to Vote : " + isEligibleToVote);

//family storage array 
let familyMember = new Array();
//number of family 
let numberOfFamily;

numberOfFamily = prompt("Number of Family  ? ");
//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family  Members " + (i + 1));
}

console.log("Family Members ");
//Displaying the family member with foreach
familyMember.forEach(function(member, index) {
   console.log("Family Member  " + (index + 1) + " : " + member);
});

var birthYear;          //Changing the var age to birth Year

//Some changes 

birthYear = prompt("Enter Your Birth Year");
birthYear = parseInt(birthYear);
let mAge = ageCalc(birthYear);
console.log("Age : " + mAge + " " + "years old");


//age calculator function
function ageCalc(birthYear)
{
    return new Date().getFullYear() - birthYear;

}

// Adding Self Invoking Function Expression 
(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + tempAge + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);

    console.log("Family Members ");

    //Displaying the family member with foreach
    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

    var weight = prompt("Enter your weight in kg");
    var height = prompt("Enter your height in M");

    weight = parseFloat(weight);
    height = parseFloat(height);
    // call to bmi calculator 
    calcBmi(weight, height);
})();

// Declaring Object +  Remove the variables and modify with the object 
let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    calcBmi: function() {
        // let bmi = parseFloat(this.weight)/(Math.pow(parseFloat(this.height),2));
        // console.log("BMI is "+ bmi.toFixed(1));
        calcBmi(this.weight,this.height);
    }
};

// Receive the values from input and assign to object properties
personProfile.firstName = prompt("Enter Your First Name");
personProfile.lastName = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");
let numberOfFamilies = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamilies); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}

// call age and check vote fun
personProfile.ageCalc();
personProfile.checkVote();
personProfile.calcBmi(personProfile.weight,personProfile.height);
// Adding Self Invoking Function Expression 
(function() {

    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    console.log("Profession : " + personProfile.job);
    console.log("Age : " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    console.log("Family Members ");
    //Displaying the family member with foreach
    personProfile.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });
    // call bmi calculator 
    personProfile.calcBmi();
    console.log("**************************************************************")

})();


