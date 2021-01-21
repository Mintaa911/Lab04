let calcBmi = function(weight, height){
   
    var bmi = weight/(Math.pow(height,2));
    bmi = bmi.toFixed(2);
    if(bmi >= 30){
        console.log("your BMI is "+ bmi + ": obese");
    }else if(bmi >= 25){
        console.log("your BMI is "+ bmi + ": overWeight");   
    }else if(bmi >= 18.5){
        console.log("your BMI is "+ bmi + ": Normal and Healthy");
    }else{
        console.log("your BMI is "+ bmi + ": underWeght");
    }
}



