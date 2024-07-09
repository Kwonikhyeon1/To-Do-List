import React, { useState, useEffect } from "react";
import { getAdminLoginedSessionID } from "../js/session";
import { useNavigate } from "react-router-dom";
import {getAllMemberInfo, convertMapToArray} from '../js/util.js'
import Modal from './Modal.jsx'

const AdminMemberList = () => {

    //HOOK
const navigate =useNavigate();
const [allMembers, setAllMembers] = useState([]);
const [isModal, setIsModal] =useState(flase);
const [selecteduId, setSelecteduId] = useState('');


    useEffect(() => {
        console.log('useEffect()');

        if(getAdminLoginedSessionID() === '') {

            alert('Please admin sign-in');
            navigate('/adminsignin');
        }

        let allMemberInfo = getAllMemberInfo();
        let allMemberInfoArr = convertMapToArray(allMemberInfo);
        setAllMembers(allMemberInfoArr);

    },[]);

    //Handler
    const uIdClickHandler = () => {
        console.log('uIdClickHandler()');

        setIsModal(true);

    }



    return(
        <div className="admin-member-list">
            <h3>ALL MEMBER LIST</h3>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>uId</th>
                        <th>uPw</th>
                        <th>uMail</th>
                        <th>uPhone</th>
                        <th>uRegDate</th>
                        <th>uModDate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allMembers.map((member, idx) => {
                            return(
                            <tr key={idx}>
                                <td><Link>{onclick={uIdClickHandler} member.uId}</Link></td>
                                <td>******</td>
                                <td>{member.uMail}</td>
                                <td>{member.uPhone}</td>
                                <td>{member.uRegDate}</td>
                                <td>{member.uModDate}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <modal />
        </div>
        {
            isModal
            ?
            <Modal selectedUId={selecteduId} setIsModal={setIsModal}/>
            :
            null
        }
    )
}

export default AdminMemberList;