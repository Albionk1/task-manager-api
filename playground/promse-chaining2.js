require('../src/db/mongoose')
const Task= require('../src/models/task')

// Task.findByIdAndDelete('62abcf9fc4907af96bcaf045').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
//})

const deleteTaskAndCont = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count

}

deleteTaskAndCont('62abcf9fc4907af96bcaf045').then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})