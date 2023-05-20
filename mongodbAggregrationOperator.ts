//Aggregate in mongodb 
// db.practicedata.aggregate([
//     // stage 1 match 
//     {$match: {gender: "Male", age: {$gte: 18}}},
//     {$project: {age: 1}}
//     ])

// db.practicedata.aggregate([])
// add new filed using aggregration if i want to set ramdomly salary then we have to use $out and new collection name  
// db.practicedata.aggregate([
//     {$addFields: {
//         salary: {
//             $toInt: {
//                 $floor: {
//                     $multiply: [
//                         {$rand: {}},
//                         80000 // set max salary
//                     ]
//             }
//             }
//         }
//     }},
//     // it will give ous new collection with new salary field 
//     // {$out: "salaryWithPracticeCollection"},
    
//     // with out creating new collection we can merge salay field with existing collection  
//     {$merge: "practicedata"},
//     // {$project: {age:1, salary: 1}}
//     ])

// group aggregation 
// db.practicedata.aggregate([
//     {$group: {
//         _id:{
//             gender: "$gender",
//             occupation: "$occupation"
//         }
//     }}
//     ])    

// aggregation 
// db.practicedata.aggregate([
//     // stage -> 1 match 
//     {$match: {age: {$gte: 18}}},
//     // stage -> 2 group 
//     {$group: {
//         _id: {
//             salary: "$salary",
//         },
//         // _id: "$salary",
//         // accumulator 
//         persion: {$sum: 1}
//     }},
//     // project stage 
//     {$project: {persion: 1}},
//     // sorted salary greater then to less then 
//     {$sort: {_id: -1}}
//     ])

// max, min, sum, average aggregate function 
// db.practicedata.aggregate([
//     {$group: {
//         _id: null,
//         // accumulator
//       //  salaryTaker: {$count: "$salary"},
//         totalSalary: {$sum: "$salary"},
//         maxSalary: {$max: "$salary"},
//         minSalary: {$min: "$salary"},
//         avgSalary: {$avg: "$salary"}
//     }},
//     //project stage 
//     // {$project: {totalSalary: 1, maxSalary:1, minSalary: 1, avgSalary:1}},
//     ])

// unwind operator it will be use when we want to group array of object then firstly we have to unwind array then we can group them 
// db.practicedata.aggregate([
//     // unwind array of object 
//     {$unwind: "$education"},
    
//     // after unwind array of object then we can group them 
//     {$group: {
//         _id: "$education"
//     }},
    
//     ])

//facet operator 
// db.practicedata.aggregate([
//     {$match: {_id: ObjectId("6406ad63fc13ae5a40000069")}},
//     // use facet 
//     {$facet: {
//         // sub pipeline
//         "TotalFriendCount": [
//             {$project: {totalFriend: {$size: "$friends"}}}
//             ],
//         "TotalInterestCount": [
//             {$project: {totalInterest: {$size: "$interests"}}}
//             ],
//         "TotalSkillsCount": [
//             {$project: {totalSkill: {$size: "$skills"}}}
//             ]
//     }}
//     ])

// lookup operator example 
// db.practicedata.aggregate([
//     {$match: {_id: ObjectId("6406ad63fc13ae5a40000069")}},
//     // { $project : { _id : 0, name : 1 } },
//     //lookup 
//     {$lookup: {
//         from: "additionalinfo",
//         localField: "_id", //primety key 
//         foreignField: "userId", // foreign key 
//         as: "additionalInformation"
//     }}
//     ])



