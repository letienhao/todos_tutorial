const express = require('express');
const router = express.Router();

const controlerTodo = require('../todoControler/todoControlers')

router.post('/add', controlerTodo.createTodos)
router.get('/show', controlerTodo.getTodo )
router.get('/findName',controlerTodo.findName);
router.get('/find/:id', controlerTodo.getTodoInId)
router.delete('/delete/:id', controlerTodo.deleteTodo);
router.patch('/update/:id',controlerTodo.updateTodo)


module.exports = router