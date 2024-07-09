let loginedSessionID = '';
let adminLoginedSessionID = '';

//USER SESSION
export const getLoginedSessionID = () => {
    console.log('getLoginedSessionID()');

    return getLoginedSessionID;
}

export const setLoginedSessionID = (id) => {
    console.log('setLoginedSessionID()');

    loginedSessionID = id;
}


//ADMIN SESSION
export const getAdminLoginedSessionID = () => {
    console.log('getAdminLoginedSessionID()');

    return adminLoginedSessionID;
}


export const setAdminLoginedSessionID = (id = '') => {
    console.log('setAdminLoginedSessionID()');

    adminLoginedSessionID = id;
}