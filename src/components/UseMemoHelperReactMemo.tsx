import * as React from 'react';
import {memo, useMemo, useState} from "react";

type Props = {};


const NewMessageCounter = (props: { count: number }) => {
    //console.log('MESSAGES')
    return (
        <div>{props.count}</div>
    )
}

const Users = (props: { users: Array<string> }) => {
    console.log('USERS')
    return (
        <div>{props.users.map((user, i) => <div key={i}>{user}</div>)}</div>
    )
}

const NewUsers = React.memo(Users)
const NewMessages = React.memo(NewMessageCounter)

export const UseMemoHelperReactMemo = (props: { count: number, users: Array<string> }) => {
    console.log('UseMemoHelperReactMemo')
    const [count, setCount] = useState(props.count)
    const [users, setUsers] = useState(props.users)

    const newUser = useMemo(() => users.map(user => user), [users])

    const clickHandler = () => {
        setCount(count + 1)
    }

    const addNewUser = () => {
        setUsers([...newUser, 'Axel' + new Date().getTime()])
    }

    return (
        <div>
            <button onClick={clickHandler}>+</button>
            <button onClick={addNewUser}>add new user</button>
            <NewMessages count={count}/>
            <NewUsers users={newUser}/>
        </div>
    );
};


export const LikesBookCallBack = () => {
    console.log('LikesBookCallBack')
    const [count, setCount] = useState<number>(0)
    const [books, setBook] = useState(['React', 'CSS', 'HTML', 'JS'])

    const newBooks = useMemo(() => books.filter(book => book[1] === 'e'), [books])

    const clickHandler = () => {
        setCount(count + 1)
    }

    const addBookSecret = () => {
        setBook([...newBooks, 'Aegular' + new Date().getTime()])
    }
    const addBook = useMemo(() => addBookSecret, [books])

    return (
        <div>
            <button onClick={clickHandler}>+</button>
            <NewMessages count={count}/>
            <Book books={newBooks} addBook={addBook}/>
        </div>
    );
};

const BooksSecret = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('Books')
    return (
        <div>
            <button onClick={props.addBook}>add new book</button>
            {props.books.map((book, i) => <div key={i}>{book}</div>)}
        </div>
    )
}
export const Book = memo(BooksSecret)
