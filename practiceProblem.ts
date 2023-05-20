// Task 1: Find all users who are located in New York.
// db.practiceOperators.find({"address.city": {$eq: "New York"}})

// Task 2: Find the user(s) with the email "johndoe@example.com" and retrieve their favorite movie.
// db.practiceOperators.find({email: {$eq: "johndoe@example.com"}}).project({"favorites.movie": 1})

// Task 3: Find all users with "pizza" as their favorite food and sort them according to age.
// db.practiceOperators.aggregate([
//     {$match: {"favorites.food": {$eq: "pizza"}}},
//     {$sort: {age: -1}},
//     {$project: {age:1, favorites: 1}}
//     ])

// Task 4: Find all users over 30 whose favorite color is "green"
// db.practiceOperators.find({
//     $and: [
//         {age: {$gt: 30}},
//         {"favorites.color": "green"}
//         ]
// })

// Task 5: Count the number of users whose favorite movie is "The Shawshank Redemption."
// db.practiceOperators.aggregate([
//     {$match: {"favorites.movie": "The Shawshank Redemption"}},
//     {$group: {
//         // _id: "$favorites.movie",
//         _id: {
//             favoritesMovie: "$favorites.movie",
//         },
//         CountFavorites: {$sum: 1}
//     }}
//     ])

// Task 6: Update the zipcode of the user with the email "johndoe@example.com" to "10002".
// db.practiceOperators.find({email: "johndoe@example.com"})
// use updateMany cause this email has 3 user or doc 
// db.practiceOperators.updateMany({
//     email: "johndoe@example.com",
// },
// {$set: {
//     "address.zipcode": "10002"
// }}
// )

// Task 7: Delete the user with the email "alicewilliams@example.com" from the user data.
// db.practiceOperators.deleteOne({email: "alicewilliams@example.com"})

// Task 8: Group users by their favorite movie and retrieve the average age in each movie group.
// db.practiceOperators.aggregate([
//     {$group: {
//         _id: {
//             favoriteMovie: "$favorites.movie",
//             // name: "$name"
//         },
//         avgAge: {$avg: "$age"}
//     }},
//     {$project: {avgAge: 1}}
//     ])

// Task 9: Calculate the average age of users with a favorite " pizza " food.
// db.practiceOperators.aggregate([
//     {$match: {"favorites.food": "pizza"}}, // with pizza 
//     {$group: {
//         _id: "$favorites.food",
//         // commonFavorite: {$sum: 1}
//         avgAgeOfPizzaLover: {$avg: "$age"} // only pizza lover average age 
        
//     }},
//     {$project: {avgAgeOfPizzaLover: 1}}
//     ])


// More task 
// Task 1: Group users by their favorite color and retrieve the count of users in each color group.
// db.practiceOperators.aggregate([
//     // stage -> 1
//     {$group: {
//         _id: "$favorites.color",
//         count: {$sum: 1}
//     }}
//     ])

// Task 2: Find the user(s) with the highest age.
// db.practiceOperators.find({}).sort({age: -1})
// db.practiceOperators.aggregate([
    // {$match: {age: {$gt: 90}}}
    // {$group: {
    //     _id: null, 
    //     highestAge: {$max: "$age"}
    // }}
    // ])
// Task 3: Find the most common favorite food among all users.
// db.practiceOperators.aggregate([
//     {$group: {
//         _id: "$favorites.food",
//         count: {$sum:1}
//     }},
//     {$sort: {count: -1}},
//     {$limit: 1}
    
//     ])

// Task 4: Calculate the total count of friends across all users.
// db.practiceOperators.aggregate([
//     // firstly unwind array to group them 
//     {$unwind: "$friends"},
    
//     // group of friends 
//     {$group: {
//         _id: null,
//         count: {$sum: 1},
//     }}
    
//     ])
// Task 5: Find the user(s) with the longest name.
// db.practiceOperators.aggregate([
//     {$project: {name: 1, nameLength: {$strLenCP: "$name"}}},
//     {$sort: {nameLength: -1}},
//     {$limit: 1}
//     ])
// Task 6: Calculate each state's total number of users in the address field.

// Task 7: Find the user(s) with the highest number of friends.
// db.practiceOperators.aggregate([
//   {
//     $project: {
//       name: 1,
//       friendCount: { $size: "$friends" }
//     }
//   },
//   {
//     $sort: {
//       friendCount: -1
//     }
//   },
//   {
//     $limit: 1
//   }
// ]);
