import * as React from 'react';
import {useState} from "react";



const NewMessageCounter = (props: { count: number }) => {
    console.log('MESSAGES')
    return (
        <div>{props.count}</div>
    )
}


const Users = (props: {users: Array<string>} ) => {
    console.log('USERS')
    return (
        <div>{props.users.map((user, i) => <div key={i}>{user}</div>)}</div>
    )
}

const NewUsers = React.memo(Users)
const NewMessages = React.memo(NewMessageCounter)

export const Example1 = (props: {count: number, users: Array<string>}) => {
    console.log('Example1')
    const [count, setCount] = useState(props.count)
    const [users, setUsers] = useState(props.users)

    const clickHandler = () => {
        setCount(count + 1)
    }

    const addNewUser = () => {
        setUsers([...users, 'Axel' + new Date().toDateString()])
    }

    return (
        <div>
            <button onClick={clickHandler}>+</button>
            <button onClick={addNewUser}>add new user</button>
            <NewMessages count={count}/>
            <NewUsers users={users}/>
        </div>
    );
};