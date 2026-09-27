function fibs(n){
   let array = [];
   if(n === 1){
    array = [0]
    return array;
   }
   if(n >= 2){
    array = [0,1]
    }
while (array.length < n) {
const addNew = array.at(-1) + array.at(-2)
array.push(addNew)
}
return array
}


function fibsRec(n){
if(n === 1){
    return [0]
}
if(n === 2){
return [0,1]
}
const previousNumbers = fibsRec(n - 1) 
const lastTwo = previousNumbers.slice(-2)
const sum = lastTwo[0] + lastTwo[1]
 previousNumbers.push(sum);
 return previousNumbers;
};


