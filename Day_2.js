// Question 1
//What is the value of clothes[0] and why?
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);

// Ans : undefined

//Question 2
//Write a Javascript program to find the sum of all elements of a given array?

var array=[11,22,33,44,55,66,77],
 l=0;
var a=["abc","xyz","pqr"],
ll=0;
for(var i=0;i<array.length;i++){
    l+=array[i];
}
console.log(l);

//Ans : 308

for(var j=0;j<a.length;j++){
    ll+=a[j];
}
console.log(ll);

// Ans: 0abcxyzpqr
