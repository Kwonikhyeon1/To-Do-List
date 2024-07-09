import React, { useEffect, useState } from "react";
import { getMyTodos, convertMapToArray } from '../js/util'

const Modal = ({ selectedUId }) => {

    //hook
    const [todoArr, setTodoArr] = useState([]);
    const [filterStatus, setfilterStatus] = useState('ALL');


    useEffect(() => {
        console.log('useEffect(')

        let todoArr = convertMapToArray(getMyTodos(selectedUId));
        setTodoArr(todos.reverse());

    }, []);


    //handler

    const modalClickHandler = () => {
        console.log('modalClickHandler()');

        setIsModal(false);
    }
    const allClickHandler = () => {
        console.log('allClickHandler()');

        let todos = convertMapToArray(getMyTodos(selectedUId));
        let filteredTodos = todos.filter((todo) => {
            return (todo.isCpmplete === true);
        });

        setTodoArr(filteredTodos.reverse());
        setfilterStatus('ALL')
    }

    const CompletedClickHandler = () => {
        console.log('CompletedClickHandler()');

        let todo = convertMapToArray(getMyTodos(selectedUId));
        let filteredTodos = todos.filter((todo) => {
            return (todo.isCpmplete === true);
        });

        setTodoArr(filteredTodos.reverse());
        setfilterStatus('Complete')
    }

    const ProceedingClickHandler = () => {
        console.log('ProceedingClickHandler()');

        let todo = convertMapToArray(getMyTodos(selectedUId));
        let filteredTodos = todos.filter((todo) => {
            return (todo.isCpmplete !== true);

        });
        setTodoArr(filteredTodos.reverse());
        setfilterStatus('Proceeding')
    }

    return (
        <div id="admin-modal">
            <div className="admin-modal-content">
                {
                    todoArr.length <= 0
                        ?
                        null
                        :
                        <ul>
                            <li onClick={allClickHandler}
                                style={{
                                    backgroundColor: filterStatus === 'ALL' ? '#b8dffc' : '#fff'
                                }}>ALL</li>

                            <li onClick={CompletedClickHandler}
                                style={{
                                    backgroundColor: filterStatus === 'Complete' ? '#b8dffc' : '#fff'
                                }}>Completeed</li>

                            <li onClick={ProceedingClickHandler}
                                style={{
                                    backgroundColor: filterStatus === 'Proceeding' ? '#b8dffc' : '#fff'
                                }}>Proceeding</li>
                        </ul>
                }

                {
                    todoArr.length <= 0
                        ?
                        <>
                            <p style={{

                                fontSize: 20,
                                fontWeight: bold,
                                Color: #fff,

                            }}></p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Completed</th>
                                        <th>ExporationDate</th>
                                        <th>Key</th>
                                        <th>Txt</th>
                                        <th>RegDate</th>
                                        <th>ModDate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        todoArr.map((todo, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <td>
                                                        {
                                                            todo.isCpmplete ? <b>Complete</b> : <b>Proceeding</b>
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            todo.isCpmplete
                                                                ?
                                                                <s>{todoRxporationDate}</s>
                                                                :
                                                                <>{todo.todoExpirationDate}</>
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            todo.key
                                                                ?
                                                                <s>{todoKey}</s>
                                                                :
                                                                <>{todo.todoKey}</>
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            todo.todoTxt
                                                                ?
                                                                <s>{todoTxt}</s>
                                                                :
                                                                <>{todo.todoTxt}</>
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            todo.todoRegDate
                                                                ?
                                                                <s>{todoRegDate}</s>
                                                                :
                                                                <>{todo.todoRegDate}</>
                                                        }
                                                    </td>
                                                    <td>
                                                        {

                                                            todo.todoRegDate
                                                                ?
                                                                <s>{todoRegDate}</s>
                                                                :
                                                                <>{todo.todoRegDate}</>
                                                        }
                                                    </td>
                                                </tr>
                                            )

                                        }
                                        )}
                                </tbody>
                            </>
                            :
                    

                }


                            <ul>
                                <li onClick={allClickHandler}
                                    style={{
                                        backgroundColor: filterStatus === 'ALL' ? '#b8dffc' : '#fff'
                                    }}>ALL</li>

                                <li onClick={CompletedClickHandler}
                                    style={{
                                        backgroundColor: filterStatus === 'Complete' ? '#b8dffc' : '#fff'
                                    }}>Completeed</li>

                                <li onClick={ProceedingClickHandler}
                                    style={{
                                        backgroundColor: filterStatus === 'Proceeding' ? '#b8dffc' : '#fff'
                                    }}>Proceeding</li>
                            </ul>

                        </table>
                <div className="admin-modal-close" onClick={modalClickHandler}>
                    <button>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;