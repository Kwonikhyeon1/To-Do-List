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
export const setMyTodos = (uId, myTodos) => {
    console.log('setMyTodos()');

    let todos = JSON.parse(getTodoSvcTOdoDB());
    todos[uId] = myTodos;

     setTodoSvcTOdoDB(todos);

}

export const getAllMemberInfo = () => {
    console.log('getAllMemberInfo()');

    return JSON.parse(getTodoSvcMemberDB);


}

export const getAllTodoInfo = () => {
    console.log('getAllTodoInfo()');
    
     return JSON.parse(getTodoSvcTOdoDB);
}
export const getToBeModifiedTodo = () => {
    console.log('getToBeModifiedTodo()');

    let myTodos = getMyTodos(uId);
    return myTodos[key];
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


export const replaceDateTime = (dateTime) => {
    console.log('replaceDateTime()');

    return dateTime.replaceAll('/','').replaceAll(' ','').replaceAll(':','');

}

export const convertMapToArray =(map) => {
    console.log('convertMapToArray')

    let keys = Object.keys(map);

    let arr=[];
    for(let i = 0; i < keys.length; i++) {
        let data = map[keys[i]]
        data['key'] = keys[i];
        arr.push(data);

    }
    return arr;

}

export const createRandomNumber = (minx, max) => {
    console.log('createRandomNumber()');

    return Math.floor(Math.random() * max) + min
;
}


//FUNCTION