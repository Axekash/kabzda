import React, {useState} from 'react';
import './App.css';
// import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Raiting, RaitingValueType} from "./components/Raiting/Raiting";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRaiting} from "./components/UncontrolledRaiting/UncontrolledRaiting";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

type PageTitleString = {
    title: string
}
const PageTitle = (props: PageTitleString) => {
    console.log('PageTitle rendering')
    return (
        <h1>{props.title}</h1>
    )
}

function App() { //функция, объявленная с большой буквы и возвращающая
    // html разметку в формате jsx называется КОМПОНЕНТА!
    //Компонента возвращает ТОЛЬКО ОДИН БЛОК ЭЛЕМЕНТОВ!!!!

    // полезное выполнение функции

    // обязана вернуть JSX

    let itemsValue = [{title: 'Alex', value: 1}, {title: 'Karina', value: 2}, {title: 'Dimych', value: 3}]

    console.log('App rendering')

    let [raitingValue, setRaitingValue] = useState<RaitingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false) // hook with init value

    return (
        <div className={'App'}>
            <PageTitle title='This is APP Component'/>
            Article 1
            {/*<Raiting value={0}/>*/}
            {/*<Raiting value={1}/>*/}
            {/*<Raiting value={2}/>*/}
            {/*<Raiting value={3}/>*/}
            {/*<Raiting value={4}/>*/}
            {/*<Raiting value={5}/>*/}


            <UncontrolledRaiting defaultValue={1} onChange={a=>a} />
            <Raiting value={raitingValue} onClick={setRaitingValue}/>

            {/*<Accordion title='UncontrolledAccordion Title' collapsed={true}/>*/}

            <Accordion
                title='Accordion Title'
                collapsed={accordionCollapsed}
                onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}} items={itemsValue}
                onClick={()=> {}}

            />

            <UncontrolledAccordion title='UncontrolledAccordion Title'/>
            {/*<UncontrolledAccordion title='UncontrolledAccordion Title' />*/}
            <UncontrolledOnOff/>
            <OnOff isTrue={on} setOn={setOn}/>

        </div>
    );
}


export default App;
