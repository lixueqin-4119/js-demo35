const fs = require('fs');

//读数据库
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)
console.log(usersArray)

//写数据库
const user3 = { id: 3, name: '李明', password: 'zzz', age: 25 }
usersArray.push(user3)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)
