import React, { useEffect, useState } from "react";
import {getMyTodos,
        replaceDateTime,
        setMyTodos,
} from '../js/util.js'
import{getLoginedSessionID} from '../js/session.js'
import { useNavigate, getDateTime } from "react-router-dom";

const TodoWrite = () => {

    //hook
    const [todoTxt, setTodoTxt] = useState('');
    const [expirationDate, setexpirationDate] = useState('');
    
    const navigate =useNavigate();

    useEffect(() => {
        console.log('useEffect(');
        if(getLoginedSessionID() === '') {
            alert('please SIgn-In');
            navigate('/');

            return;
        }
    })
    //handler
    const todoTxtChangeHandler = (e) => {
        console.log('todoTxtChangeHandler()');
        setTodoTxt(e.target.value);

    }


    const expirationDateChangeHandler = (e) => {
        console.log('todoTxtChangeHandler()');
        setexpirationDate(e.target.value.replaceAll('-',''));
    }

    const writeBtnClickHandler = () => {
        console.log('todoTxtChangeHandler()');

        if(todoTxt === null || todoTxt ==undefined || todoTxt ==='' 
        || expirationDate === undefined || expirationDate === null || expirationDate === ''){
           
            alert('PLEASE INPUT TODO  TEXT OR EXPIRATION DATE');
            return;

        }


        
        let myTodos = getMyTodos(getLoginedSessionID());
        myTodos[replaceDateTime(getDateTime)] = {
            todoTxt : todoTxt,
            todoexpirationDate : expirationDate,
            todoRegDate : getDateTime(),
            todoModDate : getDateTime(), 
        }
        setMyTodos(getLoginedSessionID(), myTodos);

        alert('TODO WIRTE SUCCESS');

        navigate('/todolist');
    }







    return(
        <div className="todo-write">
            <h3>TODO WIRTE</h3>
            <input type="text" className="txt-large" onChange={todoTxtChangeHandler}/>
            <input type="date" onChange={expirationDateChangeHandler}/>
            <br />
            <button className="btn_basic" onClick={writeBtnClickHandler}>WRITE</button>
        </div>
    )
}

export default TodoWrite;