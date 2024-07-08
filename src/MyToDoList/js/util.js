// VARIABLE
export const MEMBER_DB_IN_LOCALSTORAGE = 'todoSvcMemberDB'
export const TODO_DB_IN_LOCALSTORAGE = 'todoSvcTodoDB'

export const getTodoSvcMemberDB = () => {
    console.log('[utils]getTodoSvcMemberDB()');

    return localStorage.getItem(MEMBER_DB_IN_LOCALSTORAGE);


}
export const setTodoSvcMemberDB = (mems) => {
    console.log('[utils]setTodoSvcMemberDB()');

    localStorage.setItem(MEMBER_DB_IN_LOCALSTORAGE,JSON.stringify(mems));


    

}


export const getMyInfo = (uId) => {
    console.log('[utils]getMyInfo');

    if(getTodoSvcMemberDB()===null){
        return undefined;
    }
    let mems = JSON.parse(getTodoSvcMemberDB());
    let myInfo = mems[uId];
    return myInfo;

}
export const setMyInfo = (uId, myInfo) => {
    console.log('[utils]setMyInfo');
    
    let mems = JSON.parse(getTodoSvcMemberDB());
    mems[uId] = myInfo;

    setTodoSvcMemberDB(mems);
}
//TODO
export const getTodoSvcTOdoDB = () => {
    console.log('getTodoSvcTOdoDB()')

    return localStorage.getItem(TODO_DB_IN_LOCALSTORAGE);
}

export const setTodoSvcTOdoDB = (todos) => {
    console.log('setTodoSvcTOdoDB()')

    localStorage.setItem(TODO_DB_IN_LOCALSTORAGE, JSON.stringify(todos));
}
export const getMyTodos = (uId) => {
    console.log('getMyTodos()')

    let todos = JSON.parse(getTodoSvcTOdoDB());
    let myTodos = todos[uId];

    return myTodos;
}
export const setMtTodos = (uId, myTodos) => {
    console.log('setMtTodos()');

    let todos = JSON.parse(getTodoSvcTOdoDB());
    todos[uId] = myTodos;

     setTodoSvcTOdoDB(todos);

}




//ETC
export const getDateTime = () => {
    console.log('[utils]getDateTime()');

    let now = new Date();
    let fullYear = now.getFullYear();
    let month = now.getMonth() + 1;
    if (month < 10 ) month = '0' + month;
    let date = now.getDate();
    if (date < 10 ) date = '0' + date;
    let hours = now.getHours();
    if (hours < 10 ) hours = '0' + hours;
    let minutes = now.getMinutes();
    if (minutes < 10 ) minutes = '0' + minutes;
    let seconds = now.getSeconds();
    if (seconds < 10 ) seconds = '0' + seconds;

    return `${fullYear}/${month}/${date} ${hours}:${minutes}:${seconds}`;
}



//FUNCTION