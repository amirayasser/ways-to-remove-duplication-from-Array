// Problem: Remove duplicates from an array

const arr = [1, 2, 2, 3, 4, 4, 5];

// 1) Remove duplicates from an array using a Set

// set: new Set(iterable)
// iterable : any element can make loop on it
//  Set: is a collection of unique value

let uniqueArr =new Set(arr); // transfer array to set 

console.log(uniqueArr) // Set(5) {1, 2, 3, 4, 5}

// transfer set to array , using spreed operator
console.log([...uniqueArr]) //(5) [1, 2, 3, 4, 5]



// 2) Remove duplicates from an array using indexOf() and filter() methods

let rdb = arr.filter( (ele,index) => {
    
  console.log(`${ele} - ${index} - ${arr.indexOf(ele)}`)
  
  if (index === arr.indexOf(ele)) {
     return ele 
    }

} )

console.log(rdb) // [1, 2, 3, 4, 5]



// 3) Remove duplicates from an array using forEach() and include()

// The include() returns true if an element is in an array or false if it is not.

let deldb = [];

arr.forEach( (ele)=> {
  if (!deldb.includes(ele)){
    deldb.push(ele);
  }
})

console.log(deldb) // [1, 2, 3, 4, 5]

// or there is similar way 

const uniqueArray = [];
arr.forEach(item => {
    if(uniqueArray.indexOf(item) === -1){
      // note: index -1 means that this item doesn't exist 
        uniqueArray.push(item);
    }
});

console.log(uniqueArray) // [1, 2, 3, 4, 5]



// 4) using from() 

function removeDuplicates(arr) {
  // converting the array to a Set using new Set(arr)
  // convert Set back to an array using Array.from()
  return Array.from(new Set(arr)); 
}

console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]

// 5) using Map

const map = new Map();
arr.forEach(item => map.set(item, true));
const uniqarr = Array.from(map.keys());

console.log(uniqarr) // [1, 2, 3, 4, 5]
