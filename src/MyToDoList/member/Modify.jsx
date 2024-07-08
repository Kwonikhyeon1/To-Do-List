import React, { useState, useEffect } from "react";
import {getMyInfo,
        getTodoSvcMemberDB,
        setTodoSvcMemberDB,
        getDateTime,
} from '../js/util.js';
import { useNavigate } from "react-router-dom";
import {getLoginedSessionID} from '../js/session.js'

const Modify = () => {

    // hook
    const [uId, setuId] = useState('');
    const [uPw, setuPw] = useState('');
    const [uMail, setuMail] = useState('');
    const [uPhone, setuPhone] = useState('');

    const navigate = useNavigate();

         useEffect (() => {
             console.log('useEffect()');

             let myInfo = getMyInfo(getLoginedSessionID());
             if(myInfo === undefined){
                alert('로그인 하세요!');
                navigate('./signin');
                return
                
             }
             setuId(myInfo.uId);
             setuPw(myInfo.uPw);
             setuMail(myInfo.uMail);
             setuPhone(myInfo.uPhone);
         },[navigate]);

        // handler
    
        const uPwChangeHandler = (e) => {
            console.log('[modify]uPwChangeHandler()');
            setuPw(e.target.value);
        };
    
        const uMailChangeHandler = (e) => {
            console.log('[modify]uMailChangeHandler()');
            setuMail(e.target.value);
        };
        
        const uPhoneChangeHandler = (e) => {
            console.log('[modify]uPhoneChangeHandler()');
            setuPhone(e.target.value);
        };
    
        const modifyBtnClickHandler = () => {
            console.log('[modify]modifyBtnClickHandler()');
    
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
    
    
    return(
        <>
        <div className="modify">
            <h3>SIGN-UP</h3>
            <input type="text" className="txt-basic" readOnly placeholder="INPUT USER ID" />
            <br />
            <input type="password" className="txt-basic" value={uPw} onChange={uPwChangeHandler} placeholder="INPUT USER PW" />
            <br />
            <input type="email" className="txt-basic" value={uMail} onChange={uMailChangeHandler} placeholder="INPUT USER MAIL" />
            <br />
            <input type="text" className="txt-basic" value={uPhone} onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE" />
            <br />
            <input type="button" className="btn-basic" value="Modify" onClick={modifyBtnClickHandler} />
            <br />
        </div>
        </>
         )
    }
}

export default Modify;