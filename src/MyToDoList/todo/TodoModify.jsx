import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom'

import {getToBeModifiedTodo, getMyTodos, getDateTime, setMyTodos,} from '../js/util'

const TodoModify = () => {
    //hook
    const { uId, todoKey } = useParams();
    const navigate = useNavigate

    const [todoTxt, setTodoTxt] = useState('');
    const [expirationDate, setexpirationDate] = useState('');

    useEffect(()=> {
        console.log('useEffect()');
        
        let getToBeModifiedTodo = getToBeModifiedTodo(uId, todoKey);
        setTodoTxt(getToBeModifiedTodo.todoTxt);
        


    },[])



    //handler
    const todoTxtChangeHandler = (e) => {
        console.log('todoTxtChangeHandler()');
        setTodoTxt(e.target.value);

    }


    const expirationDateChangeHandler = (e) => {
        console.log('todoTxtChangeHandler()');
        
    }

    const modifyBtnClickHandler = () => {
        console.log('modifyBtnClickHandler()');

        let myTodos = getMyTodos(uId);
        myTodos[todoKey].todoTxt = todoTxt;
        myTodos[todoKey].todoModDate = getDateTime();

        setMyTodos(uId, myTodos);
        alert('Modify success!')

        navigate('/todolist');

    }





    return (
        <div className="todo-modify">
            <div className="todo-modify">
                <h3>TODO WIRTE</h3>
                <input type="text" className="txt-large" value={todoTxt} onChange={todoTxtChangeHandler} />
                <input type="date" value={expirationDate} onChange={expirationDateChangeHandler} />
                <br />
                <button className="btn_basic" onClick={modifyBtnClickHandler}>modify</button>
            </div>
        </div>
    )
}

export default TodoModify;