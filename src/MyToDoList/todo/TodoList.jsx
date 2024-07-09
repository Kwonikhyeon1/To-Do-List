import React, { useEffect, useState } from "react";
import{getLoginedSessionID} from '../js/session.js'
import { useNavigate } from "react-router-dom";
import {getMyTodos, setMyTodos} from '../js/util.js'

const TodoList = () => {
    //hook
    const [refresh, setRefresh] = useState(false);
    const [myTodoArr, setmyTodoArr] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('useEffect()');
        if(getLoginedSessionID() === '') {
            alert('please SIgn-In');
            navigate('/');
            return;
        }

        let myTodos = getMyTodos(getLoginedSessionID());
        let keys = Object.keys(myTodos);
        console.log('keys:', keys);

        let arr = [];
        for (let i = 0 ; i < keys.length; i++) {
            let myTodo = keys[keys[i]];
            myTodo['key'] = keys[i];
            arr.push(myTodo);
        }

        setmyTodoArr(arr);

    },[refresh]);


    //handler

    const completeBtnClikcHandler = (e, key) => {
        console.log('completeBtnClikcHandler()', key);

        let myTodos = getMyTodos(getLoginedSessionID());
        myTodos[key].isComplete = true;
        setMyTodos(getLoginedSessionID(), myTodos);

        refreshMyTodoArr();

    }
    const incompleteBtnClickHandler = (e, key) => {
        console.log('incompleteBtnClickHandler()');

        let myTodos = getMyTodos(getLoginedSessionID());
        myTodos[key].isComplete = false;
        setMyTodos(getLoginedSessionID(), myTodos);

        refreshMyTodoArr();
    }
    const modifyBtnClickHandler = (e, key) => {
        console.log('modifyBtnClickHandler()');

        navigate(`/todomodify/${getLoginedSessionID()}/${key}`);

    }
    const deleteBtnClickHandler = (e, key) => {
        console.log('deleteBtnClickHandler()');

        let result = window.confirm('really?')
        if(result) {
            let myTodos = getMyTodos(getLoginedSessionID());
            delete myTodos[key];
            setMyTodos(getLoginedSessionID(), myTodos);

            alert('Delete success!');

            setRefresh(v => !v);


        } else {
            alert('Delete canceled!')
        }

    }



    //FUNCTION
    const refreshMyTodoArr = () => {
        console.log('refreshMyTodoArr()');


        let myTodos = getMyTodos(getLoginedSessionID());
        let keys = Object.keys(myTodos);

        let arr = [];
        for (let i = 0 ; i < keys.length; i++) {
            let myTodo = keys[keys[i]];
            myTodo['key'] = keys[i];
            arr.push(myTodo.reverse);
        }
    }




    return(
        <div className="todo-list">
            <h3>TODO LIST</h3>
            <ul>
                {
                    myTodoArr.map((todo, idx) => {
                        return(
                            <li key={idx} className="todo-li">
                                <div>
                                    <span>{!todo.isComplete  ?<b>[proceeding]</b>:<b>[Completed]</b> }</span>
                                    <span><b>[{todo.todoExpirationDate}]</b></span>
                                    &nbsp;
                                    <span className={!todo.isComplete ?"todo-txt" : "todo-txt-completed"}>{todo.todoTxt}</span>
                                    {
                                        todo.isComplete !== true
                                        ?
                                        <>
                                            <button className="btn-basic" onClick={(e) => completeBtnClikcHandler(e, todo.key)}>COMPLETE</button>
                                            <button className="btn-basic" onClick={((e) => modifyBtnClickHandler(e, todo.key))}>MODIFY</button>
                                        </>
                                        :
                                        <>
                                            <button className="btn-basic" onClick={(e) => incompleteBtnClickHandler(e, todo.key)}>INCOMPLETE</button>
                                        </>
                                    }
                                    <button className="btn-basic" onClick={deleteBtnClickHandler(e, todo.key)}>DELETE</button>
                                </div>
                            </li>
                        )
                    })

                    
                }
            </ul>
        </div>
    )
}

export default TodoList;