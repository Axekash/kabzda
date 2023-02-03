import React, {useEffect, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {within, userEvent} from '@storybook/testing-library';

const SingleExample = () => {

    return (
        <>

        </>
    )
}

export default {
    title: 'UseEffect/Demo',
    component: SingleExample,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout

    },
} as ComponentMeta<typeof SingleExample>;

const Template: ComponentStory<typeof SingleExample> = (args) => {
    console.log('Simple Exaample')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    // useEffect(() => {
    //     console.log('useEffect')
    //     document.title = counter.toString()
    //     //запрос на сервер
    //     //установка интервалов setInterval
    //     //работа с базой данных локально
    //     //document.getElementById
    //     //document.title = 'User';
    // }, [counter])
//каждая перерисовка компоненты также перерисовывает и useEffect, если не передавать зависимости//
// Если передать пустой массив зависимостей, то перерисуется 1 раз, если передали зависимость не пустую, то отрисуется 1 раз, и тогда, когда поменяются зависимости

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render & every changed counter')
        document.title = counter.toString()
    }, [counter])
    return <div>
        Hello, {fake}, {counter}
        <button onClick={() => setFake(fake + 1)}>Fake + </button>
        <button onClick={() => setCounter(counter + 1)}>Counter + </button>
    </div>

}


export const FirstUseEffect = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
FirstUseEffect.play = async () => {

};
