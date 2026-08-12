// const { create } = require("./models/students")

// mongoose Methods
// 1) create()
// instead of doing manual of 
const student = new Student({
  name:"Ali",
  age:22,
  email:"ali@gmail.com"
});

await student.save();
// create can do 
const student = await Student.create({
  name:"Ali",
  age:22,
  email:"ali@gmail.com"
});


// 2) find();
const students = await Student.find({
   age:22
});
//  it gives 
[
 {name:"Ali",age:22},
 {name:"Appu",age:22}
]

// and it is also used for filtering also 

// 3) findOne()
//  having data is
  [
 {name:"Ali"},
 {name:"Ali"},
 {name:"Appu"}
]
//  when  we write
const student = await Student.findOne({
   name:"Ali"
});
//  it returns
{name:"Ali"}

// 4) findById;
//  having

{
 _id:"68abc123",
 name:"Ali"
}

// when we write 
const student = await Student.findById(
   "68abc123"
);
// it gives 
{
 _id:"68abc123",
 name:"Ali"
};
// 5)findByIdAndUpdate
//  why we use new:true 
// because 

// exmaple 
const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      name,
      age,
      email
    },{new:true},
);
// suppose db contains 
{
  "_id":"123",
  "name":"Ali",
  "age":22
} 
// and u update 
{
  "name":"Appu",
  "age":25
} 
// mongodb updates the dta butv it returns th old document dta only why  because 
//  by default it returns the old document ;
//  by using new:true it gives the updated document ;

// 6. findOneAndUpdate()

await Student.findOneAndUpdate(
 {
   email:"ali@gmail.com"
 },
 {
   age:25
 },
 {
   new:true
 }
);

//  it is manily useful when u dont have _id;
// 7. findByIdAndDelete()
 
await Student.findByIdAndDelete(
   req.params.id
);
// before  we had example of data 
[
 {Ali},
 {Appu}
]
// but after
[{Appu}]
// 8. findOneAndDelete()

// Delete  by using a condition.

await Student.findOneAndDelete({
   email:"ali@gmail.com"
});

// Deletes first matching document.
// 9. countDocuments()
// Why we use it  because

// Counting the  documents.

const total =
await Student.countDocuments();
//  the ans is 10;


// 10. exists()
// Check if document exists.

const user =
await Student.exists({
   email:"ali@gmail.com"
});
//  it gives 
// true or null