
// 事件 action

import * as types from '../constants/ActionTypes'
console.log('23333')
// 添加新todo
export const addTodo = text =>({
    type: types.ADD_TODO,
    text
})

// 删除todo
export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    id
})

// 修改todo
export const editTodo = (id, text) => ({
    type: types.EDIT_TODO,
    id,
    text
})

// 完成TODO
export const completeTodo = id => ({
    type: types.COMPLETE_TODO,
    id
})

// 完成所有
export const completeAll = () => ({
    type: types.COMPLETE_ALL
})

// 清除已完成
export const clearCompleted = () => ({
   type: types.CLEAR_COMPLETED
})



