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
        setUsers([...users, 'Axel' + new Date().getTime()])
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


// type newManType = {
//     name: string,
//     height: number
// }
//
// interface INewMan {
//     name: string
//     height: number
// }
//
// type CarType = {
//     car: string
//     age: number
//     repair: boolean
// }
//
// type AddType = CarType | newManType
//
// const newMan: Array<AddType> = [
//     { name: 'Dima', height: 1.78 },
//     { name: 'Sasha', height: 1.8 },
//     {car: 'Honda', age: 10, repair: false}
// ]
//
// function toUpperCase(string: Array<string>): void {
//     let result = string.map(s=>s.toUpperCase())
//     //return result
// }
//
// // type CreateManType = {
// //     name: string
// //     height: number
// // }
//
// type CreateManType1 = ReturnType<typeof createMan>
//
// let createMan = (name: string,height: number) => {
//     return {
//         name,
//         height
//     }
// }
//
//
//
//
// type ICar = {
//     model: string
//     year: number
//     on: boolean
//     turnOn: () => void
//     rename: (model: string) => string
// }
// let car: ICar = {
//     model: 'Reno Stepway',
//     year: 2016,
//     on: false,
//     turnOn() {
//         this.on = true;
//     },
//     rename(model) {
//         this.model = model;
//         return this.model
//     }
// }
//
// type CreateGarageType = {
//     addCar: (car: ICar) => void
//     logAllCarsNames: () => void
//     getAllCars: () => Array<ICar>
// }
// //export type CreateGarageType = ReturnType<typeof createGarage>
//
//
// let createGarage = (): CreateGarageType => {
//     let _cars: Array<ICar> = [];
//
//     return {
//         addCar(car) {
//             _cars.push(car);
//         },
//         logAllCarsNames() {
//             console.log('Cars in the garage: ');
//             _cars.forEach(c => console.log(c.model));
//         },
//         getAllCars() {
//             return _cars;
//         }
//     }
// }



