import React, {useEffect, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import style from './AnalogClockView.module.css';

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

    // useEffect(() => {
    //     console.log('useEffect every render')
    //     document.title = counter.toString()
    // })

    // useEffect(() => {
    //     console.log('useEffect only first render(componentDidMount)')
    //     document.title = counter.toString()
    // }, [])

    // useEffect(() => {
    //     console.log('useEffect first render & every changed counter')
    //     document.title = counter.toString()
    // }, [counter])

    // useEffect(() => {
    // //     setTimeout(() => {
    // //         console.log('timeout render')
    // //         document.title = counter.toString() }, 1500)
    // // },[counter])
    //
    //     setInterval(()=> {
    //         console.log('tick:' + counter)
    //         setCounter((state)=> state + 1 )
    //     }, 1000)
    // }, [])


    return <div>
        Hello, {fake}, {counter}
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>
    </div>

}

const addZero = (time: number) => {
    return time < 10 ? `0${time}` : time
}

type Template1Props = {
    view: 'module' | 'analog'
}


const Template1  = (props: Template1Props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(timerId)
            //window.clearInterval(timerId)
        }
    }, [])

    return (
        <div>
            <DigitalClockView data={date}/>

        </div>
    )
}

const Template2  = (props: Template1Props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(timerId)
            //window.clearInterval(timerId)
        }
    }, [])

    return (
        <div>
            <AnalogClockView date={date}/>

        </div>
    )
}


type Props = {
    data: any
}

const DigitalClockView = (props: Props) => {

    return (
        <div>
            Time now : {addZero(props.data.getHours())} hours : {addZero(props.data.getMinutes())} minutes : { addZero(props.data.getSeconds()) } seconds
        </div>
    );
};

type AnalogClockViewType = {
    date: any
}

const AnalogClockView = (props: AnalogClockViewType) => {

    return (
        <div className={style.clock}>
            <div className={style.hour}>
                <div className={style.hours} style={{transform: `rotateZ(${(props.date.getHours()/12)*360}deg)`}} >
                </div>
            </div>
            <div className={style.minute}>
                <div className={style.minutes} style={{transform: `rotateZ(${(props.date.getMinutes()/60)*360}deg)`}} >

                </div>
            </div>
            <div className={style.second}>
                <div style={{transform: `rotateZ(${(props.date.getSeconds()/60)*360}deg)`}} className={style.seconds}>
                </div>
            </div>
        </div>
    );
};

export const FirstUseEffect = Template.bind({});

export const DigitalClock = Template1.bind({})
export const AnalogClock = Template2.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
FirstUseEffect.play = async () => {
};


//AnalogClock.play = async () => {
//}

