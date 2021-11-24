
const catchAsync = require("../middleware/async");
const todo = require("../models/todo");
const user = require('../models/user')
const ApiError = require("../utils/ApiError");
exports.getTodo = catchAsync(async (req,res)=>{
    //   todo.find({},(err,data)=>{
    //      if(err){
    //          console.log("err");
    //      }
    //      res.send(data)
    //  })
   const todos = await todo.find()
   if(!todos.length){
      throw new ApiError(400, "todos is empty")
   }
   res.json({
       success : true,
       data : todos
   });
});
exports.createTodos  = catchAsync(async (req,res)=>{
    const { title,description }= req.body;
    // if(!title){
    //     return res.json({succes:"false" , message : "content is emty"})
    // }
    const Todo = await todo.create({
        title ,
        description
    })
    // .catch(err => {
    //     const errors = err.errors;
    //     const keys = Object.keys(errors) 
    //     const objectError = {}
    //     keys.map(key=>{ //duyet qua tung phan tử trong mảng
    //         objectError[key] = errors[key].message
    //         console.log(objectError[key]);
    //     })
    //     throw new ApiError(400,objectError)
    // })
        res.status(201).json(Todo) // status code 201 tạo thành công data
});
exports.deleteTodo =  catchAsync(async (req,res)=>{
    const {id}  = req.params
   await todo.findByIdAndDelete(id)
    res.json({
        success : true,
        message : "delete success"
    })
}) 
exports.updateTodo = async(req,res)=>{
    const {id} = req.params;
    const {title, description} = req.body;
    await todo.findByIdAndUpdate(id,{
        title,
        description
    })
    res.json({
        success: true
    })
}
exports.getTodoInId = catchAsync(async(req,res)=>{
    const {id} = req.params;
    const result = await todo.findById(id);
    if(!result){ 
        throw new ApiError(404,'not found')
    }
    res.status(200).json({
        success : true,
        data : result
    });
});
exports.findName = catchAsync(async(req,res)=>{
     const {title}  = req.body;
     console.log(title)
     const result = await todo.findOne({title : new RegExp('^'+title+'$',"i")}) // đối số i liên quan đến việc phan biệt chử hoa chử thường
     //const result = await todo.findOne(); 
     console.log(result)
     if(!result){
          throw new ApiError(404, 'not found')
      }
     res.json({
        success : true,
        data : result
    })
})