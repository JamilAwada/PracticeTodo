const asyncHandler = require('express-async-handler')
const ToDo =  require('../models/toDoModel')




const getToDo = asyncHandler(async (req,res)=>{


    const toDos = await ToDo.find()
    res.status(200).json({message: toDos})
})

const updateToDo = asyncHandler(async (req,res)=>{
    res.status(200).json({message: 'update todo'})
})

const postToDo = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    req.status(400);
    throw new Error("Please insert a task");
  }

  const task = await ToDo.create({
    title: req.body.title
  })
 
  res.status(200).json({ message: task });
});

const deleteToDo = asyncHandler(async (req,res)=>{

    const toDo = await ToDo.findById(req.params.id)

    if(!toDo){
        res.status(404);
        throw new Error("ToDo not found")
    }

    await toDo.remove();
    
    res.status(200).json({message: 'deleted todo'})
})

module.exports = {
    getToDo,updateToDo,postToDo,deleteToDo
}