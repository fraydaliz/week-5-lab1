'use strict';


let age = prompt('what is your age?')

let input = Number(age)
 
//if age <=17 - minor
//if age >=18 and <=54 - adult
//if age >= 55 = senior citizen

if (age <= 17){
 document.write('you are a minor')
} else if (age >=18 && age <=54){
    document.write('you are an adult')
} else if (age >=55){
    document.write('you are a senior citizen')
}