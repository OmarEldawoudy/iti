//!----PART_one------------
//*choose*****
/*
1-Array[] 

2- filter()[]

3- جديدة بالعناصر اللي حققت الشرط Array

4-undefined

5-Array[] 
-----------------------------------------------
# Part 2 - True or False

1. `map()` بيغير الـ Array الأصلية.  ( false)
2. `filter()` ممكن يرجع Array فاضية. (true)
3. `find()` ممكن يرجع undefined. (true)
4. `for...in` بيلف على الـ Index بتاع الـ Array. (true)
5. `forEach()` ينفع أعمل بيها break. (false)


#Part 3 - Complete

1-
numbers.forEach((num)=>{
    console.log(num * 2);
});

2- 
const result = nums.filter((num)=>{
    return num > 20;
});

3-
const user = users.find((item)=>{
    return item.age > 25;
});

4-const result = names.map((name)=>{
    return name.toUpperCase();
});

-------------------------------------------
*/
//part 4

//1-
const fruits = ["Apple", "Banana", "Orange"];
for (const fruit of fruits)
{
    console.log(fruit);    
}

//2-
for (let index in fruits) {
    console.log(index);
}
//3
fruits.forEach(function (fruit, index){
    console.log(`${index} : ${fruit}`);
    
});

//part 5

//1-
const sum = (a,b) => a+b;

//2-
const user = {
    name:"Mostafa",
    age:25
};

const {name:UserName,age:UserAge}=user;
console.log(`UserName${UserName}:UserAge${UserAge}`);

//3-
console.log(`Hello ${name}`);

//4-spread
const arr1 = [1,2,3];
const arr2 = [4, 5, 6];
const arr3=[...arr1,...arr2];
console.log(arr3);

//part 6
const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];
//name
const result1=students.map(student=>student.name);
console.log(result1);

const result2=students.filter(student=>student.degree>=60);
console.log(result2);

const result3=students.find(student=>student.degree>90);
console.log(result3);

students.forEach(student => {
    console.log(student.name);
});