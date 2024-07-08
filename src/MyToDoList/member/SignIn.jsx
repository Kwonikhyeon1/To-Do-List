import React, { useState } from "react";
import { getMyInfo } from '../js/util.js';
import { useNavigate } from "react-router-dom";
import { getLoginedSessionID, setLoginedSessionID } from '../js/session.js';

const SignIn = ({ setIsSignIned }) => {
    // hook
    const [uId, setuId] = useState('');
    const [uPw, setuPw] = useState('');
    const navigate = useNavigate();

    // handler
    const uIdChangeHandler = (e) => {
        console.log('[signIn]uIdChangeHandler()');
        setuId(e.target.value);
    };

    const uPwChangeHandler = (e) => {
        console.log('[signIn]uPwChangeHandler()');
        setuPw(e.target.value);
    };

    const signInBtnClickHandler = () => {
        console.log('[signIn]signInBtnClickHandler()');
    
        let myInfo = getMyInfo(uId);
        if (myInfo !== undefined && myInfo.uPw === uPw) {
            alert('로그인 성공!');
            setIsSignIned(true);
            setLoginedSessionID(uId);
            navigate('/Home'); 
            
        } else {
            alert('로그인 실패!');
            setIsSignIned(false);
            setLoginedSessionID('');
            setuId('');
            setuPw('');
        }
    };

    // CONTENTS         
    return (
        <div className="sign-in">
            <input type="text" className="txt-basic" value={uId} onChange={uIdChangeHandler} placeholder="INPUT USER ID"/>
            <br />
            <input type="password" className="txt-basic" value={uPw} onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input type="button" className="btn-basic" value="SIGN IN" onClick={signInBtnClickHandler}/>
            <br />
        </div>
    );
};

export default SignIn;
