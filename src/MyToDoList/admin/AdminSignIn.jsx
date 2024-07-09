import React, {useState} from "react";
import {setAdminLoginedSessionID} from '../js/session.js'
import { useNavigate } from "react-router-dom";

const AdminSignIn = (props) => {

    // hook
    const [aId, setAId] = useState('');
    const [aPw, setAPw] = useState('');

    const navigate = useNavigate();

    //handler
    const aIdChangeHandler = (e) => {
        console.log('[AdminSignIn]aIdChangeHandler()');
        setAId(e.target.value);
    };

    const aPwChangeHandler = (e) => {
        console.log('[AdminSignIn]aPwChangeHandler()');
        setAPw(e.target.value);
    };

    const signInBtnClickHandler = () => {
        console.log('[AdminSignIn]signInBtnClickHandler()');
        
        if(aId === 'admin' && aPw === '1234') {

            alert('로그인 성공');

            setAdminLoginedSessionID('admin');
            setIsAdminSIgnIned(true);

            navigate('/adminmemberlist');


        } else {
            alert('로그인 실패');

            setAId('');
            setAPw('');

        }

    };





    return(
        <div className="admin-sign-in">
            <h3>ADMIN SIGN IN </h3>
            <input type="text" className="txt-basic" value={aId} onChange={aIdChangeHandler} placeholder="INPUT ADMIN ID"/>
            <br />
            <input type="password" className="txt-basic" value={aPw} onChange={aPwChangeHandler} placeholder="INPUT ADMIN PW"/>
            <br />
            <input type="button" className="btn-basic" value="SIGN IN" onClick={signInBtnClickHandler}/>
            <br />
        </div>
    )
}

export default AdminSignIn;