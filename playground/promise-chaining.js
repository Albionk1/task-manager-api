require('../src/db/mongoose')
const User = require('../src/models/user')

//62abd86f50416603a064301c

// User.findByIdAndUpdate('62af981c334133038ef61bba',{age:1}).then((user)=>{
// console.log(user)
// return User.countDocuments({age:1})
// }).then((result)=>{
// console.log(result)
// }).catch((e)=>{
// console.log(e)
// })

const updateageAndCount = async (id,age)=>{
const user = await User.findByIdAndUpdate(id,{age})
const count = await User.countDocuments({age})
return count
}

updateageAndCount('62af981c334133038ef61bba',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})