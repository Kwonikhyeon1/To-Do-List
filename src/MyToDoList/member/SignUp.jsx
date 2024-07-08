import React, { useState } from "react";
import {
    getTodoSvcMemberDB,
    setTodoSvcMemberDB,
    getTodoSvcTOdoDB,
    setTodoSvcTOdoDB,
    getDateTime,
} from '../js/util.js';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    // NAVIGATE
    const navigate = useNavigate();

    // hook
    const [uId, setuId] = useState('');
    const [uPw, setuPw] = useState('');
    const [uMail, setuMail] = useState('');
    const [uPhone, setuPhone] = useState('');

    // handler
    const uIdChangeHandler = (e) => {
        console.log('[signUp]uIdChangeHandler()');
        setuId(e.target.value);
    };

    const uPwChangeHandler = (e) => {
        console.log('[signUp]uPwChangeHandler()');
        setuPw(e.target.value);
    };

    const uMailChangeHandler = (e) => {
        console.log('[signUp]uMailChangeHandler()');
        setuMail(e.target.value);
    };
    
    const uPhoneChangeHandler = (e) => {
        console.log('[signUp]uPhoneChangeHandler()');
        setuPhone(e.target.value);
    };

    const signUpBtnClickHandler = () => {
        console.log('[signUp]signUpBtnClickHandler()');

        let TodoSvcMemberDB = getTodoSvcMemberDB();
        if (TodoSvcMemberDB === null) {
            let newMemObj = {
                [uId]: {
                    'uId': uId,
                    'uPw': uPw,
                    'uMail': uMail,
                    'uPhone': uPhone,
                    'uRegDate': getDateTime(),
                    'uModDate': getDateTime(),
                }
            };
            setTodoSvcMemberDB(newMemObj);

        } else {
            let TodoSvcMembers = JSON.parse(TodoSvcMemberDB);
            TodoSvcMembers[uId] = {
                'uId': uId,
                'uPw': uPw,
                'uMail': uMail,
                'uPhone': uPhone,
                'uRegDate': getDateTime(),
                'uModDate': getDateTime(),
            };
            setTodoSvcMemberDB(TodoSvcMembers);
        }

        // TODO EMPTY DB CREATE
        let TodoSvcTOdoDB = getTodoSvcTOdoDB();
        if (TodoSvcTOdoDB === null) {
            let newTodos = {
                [uId]: {}
            };
            setTodoSvcTOdoDB(newTodos);
        } else {
            let todos = JSON.parse(TodoSvcTOdoDB);
            todos[uId] = {};
            setTodoSvcTOdoDB(todos);
        }
        alert('회원가입 성공!');
        navigate('/');
    };

    return (
        <div className="sign-up">
            <h3>SIGN-UP</h3>
            <input type="text" className="txt-basic" onChange={uIdChangeHandler} placeholder="INPUT USER ID" />
            <br />
            <input type="password" className="txt-basic" onChange={uPwChangeHandler} placeholder="INPUT USER PW" />
            <br />
            <input type="email" className="txt-basic" onChange={uMailChangeHandler} placeholder="INPUT USER MAIL" />
            <br />
            <input type="text" className="txt-basic" onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE" />
            <br />
            <input type="button" className="btn-basic" value="SIGN UP" onClick={signUpBtnClickHandler} />
            <br />
        </div>
    );
};

export default SignUp;
