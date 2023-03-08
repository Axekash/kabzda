import React, {useEffect, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const ResetEffect = (props: any) => {

    const [counter, setCounter] = useState(1)

    console.log('Reset Effect rendered')

    useEffect(() => {
        console.log(`Effect accurred: ${counter}`)

        return () => {
            console.log(`Reset effect: ${counter}`)
        }
    }, [counter])

    return (<>
            Hello, counter: {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}

export const KeyTrackerExample = (props: any) => {

    const [text, setText] = useState('')

    console.log(`component rendered with ${text}`)

    //const functionInputText = (e: any ) => {
    //     setText((state) => state + e.key)
    //   }

    useEffect(() => {

        const functionInputText = (e: any) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', functionInputText)

        return () => {
            window.removeEventListener('keypress', functionInputText)
        }
    }, [text])

    return (<>
            I write this text: {text}
        </>
    )
}

export const SetTimeoutExample = (props: any) => {

    const [text, setText] = useState('')

    console.log(`component rendered with ${text}`)

    //const functionInputText = (e: any ) => {
    //     setText((state) => state + e.key)
    //   }

    useEffect(() => {

        // const timeoutId = setTimeout(() => {
        //     console.log('text writing')
        //     setText('3 seconds remining')
        // }, 3000)
        const intervalId = setInterval(() => {
            console.log('Interval rendered')
            setText('This text will rendered soon')
        }, 3000)


        return () => {
            //window.removeEventListener('keypress', functionInputText)
            //clearTimeout(timeoutId)
            clearInterval(intervalId)
        }
    }, [text])

    return (<>
            I write this text: {text}
        </>
    )
}

export default {
    title: 'USEEFFECT',
    component: ResetEffect,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ResetEffect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ResetEffect> = (args) => <ResetEffect {...args} />;

export const ResetEffectExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ResetEffectExample.args = {};



