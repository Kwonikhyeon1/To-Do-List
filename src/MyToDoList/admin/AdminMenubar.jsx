import React, { useEffect } from "react";
import { Outlet, Link} from "react-router-dom";
import { useState } from "react";
import {setAdminLoginedSessionID} from '../js/session'

const AdminMenubar = (props) => {
    const [isAdminSIgnIned, setIsAdminSIgnIned] = useState(false);
    //hook

    useEffect(() => {
        console.log('useEffect()');
        setIsAdminSIgnIned(props.isAdminSIgnIned);

    })

    const [isAdminSignIned, setIsAdminSignIned] = useState(false);

    const adminSignOutClikcHandler = () => {
        console.log('adminSignOutClikcHandler()');

        setAdminLoginedSessionID();

        props.isAdminSIgnIned(false);

    }



    return(
        <>
            <div className="admin-menubar">AdminMenubar</div>
            <Link to='/'>User Mode</Link>
            {
                isAdminSignIned
                ?
                <>
                    <Link to='/adminsignin' onClick={adminSignOutClikcHandler}>Amin SignOut</Link>
                    <Link to='/adminmemberlist'>User Member List</Link>
                </>
                :
                <>
                    <Link to='/adminsignin'>Amin Signin</Link>
                </>
            }
            <Outlet />
        </>
    )
}

export default AdminMenubar;