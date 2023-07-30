//Exercise 2
for (i = 1; i<=100; i++)
{
    if(i % 15 == 0)   
    console.log(`FizzBuzz`);
    else if (i % 3 == 0)
    console.log (`Fizz`);
    else if (i % 5 == 0)
    console.log(`Buzz`);
    else {console.log(`untuk ${i} > ${i}`)}
    
} 

//Exercise 3
let weight = 75;
let height = 1.83;
let BMI = weight/height/height;
if(BMI<18.5)
console.log(`untuk berat ${weight} kg dan tinggi ${height} meter hasilnya adalah Less Weight`);
else if(BMI<=24.9)
console.log(`untuk berat ${weight} kg dan tinggi ${height} meter hasilnya adalah Ideal`);
else if(BMI<=29.9)
console.log(`untuk berat ${weight} kg dan tinggi ${height} meter hasilnya adalah Overweight`);
else if(BMI<=39.9)
console.log(`untuk berat ${weight} kg dan tinggi ${height} meter hasilnya adalah Very OverWeight`);
else {console.log(`untuk berat ${weight} kg dan tinggi ${height} meter hasilnya adalah Obesity`)}


//Exercise 5
var globe = "Hello World"
test = globe.split(" ",2); 
console.log(test)
