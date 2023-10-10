import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'



function AddTodo() {
     
    const [input , setInput] = useState('');
    const dispatch = useDispatch();

    const addtodoHandler = (e) =>{
         
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')

    }

  return (
    <div>AddTodo</div>
  )
}

export default AddTodo