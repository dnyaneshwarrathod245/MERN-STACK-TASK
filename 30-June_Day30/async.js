let arr=[10,20,30,40,50];
let [a,...b]=arr;
console.log(a);
console.log(b);

console.log(arr[0]);

let obj={
    key1:"val",
    key2:"val2",
    key3:"val3"

};
let {key1,key2,key3}=obj;
console.log(key3);
console.log(obj.key3);
