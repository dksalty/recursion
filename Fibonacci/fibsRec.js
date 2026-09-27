export default function fibsRec(n){
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