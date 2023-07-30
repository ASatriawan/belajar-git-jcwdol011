//Exercise 1
let C = 9
for(b=1;b<=10;b++)
{
    result = C*b
    console.log(`Hasil perkalian ke ${b} adalah = ${result}`)
}

//Exercise 2
let text = "dont nod"
let result = ""

for (let a = text.length - 1; a>=0; a--){
    //console.log("i=> ",a, text[a])
    result = result + text[a]
    console.log(result)
}

//Exercise 3
let centi = 2000
let kilo = centi/1000000
console.log(kilo,"KM")




//Exercise 9
let z = 1;
let x = 29;
if(z>x){console.log(z)}
else{console.log(x)}


/*
//Exercise 9
let p = 918;
let q = 19992;
let r = 72;
if(p>q && p>r)
{
    if(q>r){console.log(p,q,r)}
    else{console.log(p,r,q)}
}
else if(q>p && q>r)
{
    if(p>r){console.log(q,p,r)}
    else{console.log(q,r,p)}
}
else if(r>p && r>q)
{
    if(p>q){console.log(r,p,q)}
    else{console.log(r,q,p)}
}
*/

/*
//Exercise 12

let char = "an apple a day keeps the doctor away"
let cens = "a"
let result = ""
for(c = 0; c<=char.length; c++){
    if(char[c]==cens) {
        result = result+"*";
    }
    else {
        result = result+char[c];
    }
}
console.log(result)
*/