import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion'
import {Raiting} from "./components/Raiting/Raiting";

/*function sum(a: number, b: number) {
    alert(a + b);
}

sum(23, 12);
sum(122, 500);*/

function App() { //функция, объявленная с большой буквы и возвращающая
    // html разметку в формате jsx называется КОМПОНЕНТА!
    //Компонента возвращает ТОЛЬКО ОДИН БЛОК ЭЛЕМЕНТОВ!!!!

    // полезное выполнение функции

    // обязана вернуть JSX
    console.log('APP rendering')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My best friends'}/>
            Article 1
            <Raiting value={3}/>
            <Accordion titleValue={'My Menu noww'} collapsed={true}/>
            <Accordion titleValue={'My new menu'} collapsed={false}/>
            Article 2
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
        </div>
    );
}

type PageTytlePropsType = {
    title: string;
}


function PageTitle(props: PageTytlePropsType) {
    console.log('PageTitle rendering')
    return (
        <h1> {props.title} </h1>
    )
}

export default App;
