let arr1=[10,[20,30],[50,60],[70,80]]
console.log(arr1);

let [x,[a,b],[c,d],[e,f]]=arr1;
console.log(f);

let obj={
    key1:"val1",
    key2:{
            key3:"val3",
            key4:"val4"
    }
}

let {key1,key2,key3,key4}=obj;

console.log(key2.key4);