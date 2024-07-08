import React from "react";
import { Outlet, Link} from "react-router-dom";
import { useState } from "react";

const AdminMenubar = () => {

    //hook

    const [isAdminSignIned, setIsAdminSignIned] = useState(false);
    return(
        <>
            <div className="admin-menubar">AdminMenubar</div>
            <Link to='/'>User Mode</Link>
            {
                isAdminSignIned
                ?
                <>
                    <Link to='/adminsignin'>Amin SignOut</Link>
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