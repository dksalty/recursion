export default function mergeSort(arr) {
if(arr.length === 0){
    return [];
}
if(arr.length === 1) {
 return arr;
}
const half = Math.ceil(arr.length / 2);  
const firstHalf = arr.slice(0, half); 
const secondHalf = arr.slice(half);
const firstHalfArr = mergeSort(firstHalf);
const secondHalfArr = mergeSort(secondHalf);
let firstIndex = 0;
let secondIndex = 0
const mergedArr = [];
while(firstHalfArr.length > firstIndex && secondHalfArr.length > secondIndex){
if (firstHalfArr[firstIndex] < secondHalfArr[secondIndex]) {
    mergedArr.push(firstHalfArr[firstIndex]);
    firstIndex++;
}
else { 
    mergedArr.push(secondHalfArr[secondIndex]);
    secondIndex++;
}
}
if(firstIndex < firstHalfArr.length){
    mergedArr.push(...firstHalfArr.slice(firstIndex))
}
if(secondIndex < secondHalfArr.length){
    mergedArr.push(...secondHalfArr.slice(secondIndex))
}
return mergedArr
}


