// Those code doesn't work here it will be work on server side operation those command are practice command

// Mongodb all operator example 

// find data from mongodb
// db.getCollection("practicedata").find({})
//    .limit(100)
// db.getCollection("practicedata").find({}).limit(2)

// comparision operators 
// db.practicedata.find({ favoutiteColor: { $eq: "Blue" } }, {favoutiteColor: 1})
// db.practicedata.find({favoutiteColor: {$ne: "Blue"}})
// db.practicedata.find({gender: {$ne: "femal"}}, {gender: 1})
// db.practicedata.find({gender: {$ne: "femal"}}).project({gender: 1})
// db.practicedata.find({age: {$lt: 34}}, {age: 1})

//sorted age according to less then to greater then
// db.practicedata.find({age: {$gte: 18}}).project({age:1}).sort({ age:1 })

//sorted age according to greater then to less then
// db.practicedata.find({age: {$gte: 18}}).project({age:1}).sort({ age:-1 })

// find age 18 equal or greater then and 30 less then or equal
// db.practicedata.find({age: {$gte:18, $lte:30}}).project({age:1})

//find specipic ages using in operato 
// db.practicedata.find({gender: 'Female', age: {$in: [18, 23]}}).project({name:1, age:1})

//delete specipic ages to find age 
// db.practicedata.find({gender: 'Female', age: {$nin: [18, 23]}}).project({name:1, age:1})

//Nested condition 
// db.practicedata.find({gender: 'Male', age: {$lt: 18}, interests: {$in: ["Gamming", "Travelling"]}}).project({gender:1, age:1, interests:1})

// exists, type and size operator 
// db.practicedata.find({age: {$exists: false}})
// db.practicedata.find({age: {$type: "int"}})
// db.practicedata.find({skills: {$size: 2}})
// db.practicedata.find({skills: {$size: 0}})
// db.practicedata.find({skills: {$size: 1}}).project({skills: 1})


//Logical operator And, Or, not, nor 

// Logical operator And
// db.practicedata.find({
//     $and: [
//         {age: {$lt: 30}},
//         {gender: "Male"},
//         {"skills.name": "JAVASCRIPT"}
//         ]
// }).project(
//     {
//         age:1,
//         gender: 1,
//         "skills.name": 1
//     }
//     )

// Logical operator or 
// db.practicedata.find({
//     $or: [
//         {gender: "Male"},
//         {"skills.name": "JAVASCRIPT"}
//         ]
// }).project({gender: 1, "skills.name":1})

// Logical not 
// db.practicedata.find({
//     age:{$not: {$lte: 18}}
// }).project({age: 1})

// Array operators 
// all operator 
// db.practicedata.find({"interests.0": "Travelling" }).project({interests:1})
// db.practicedata.find({interests: {$all: ["Travelling", "Reading", "Cooking"]}}).project({interests:1})
// db.practicedata.find({interests: {$in: ["Travelling", "Reading", "Cooking"]}}).project({interests:1, skills:1})

// elemMatch operator in array of object it help us to find two same proparties in object  
// db.practicedata.find({
//     skills:{
//         $elemMatch: {name: "JAVASCRIPT", level: "Intermidiate"}
//     }
// }).project({skills: 1})


