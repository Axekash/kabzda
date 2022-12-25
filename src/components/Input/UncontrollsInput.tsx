import * as React from 'react';
import {ChangeEvent, useRef, useState} from "react";

type Props = {
    value?: string
};
//вариант 1:  неконтролируемого инпута, получить значения можно через callback onChange
// export const Input = (props: Props) => {
//     const [inputValue, changeinputValue] = useState('')
//
//     const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
//         return changeinputValue(event.currentTarget.value)
//     }
//     return (
//         props.value ? <input value={props.value}/> : (
//             <> <input value={props.value} onChange={onChangeHandler} /> {inputValue}</>
//         )
//     )
// };

//Вариант 2: неконтролируемый инпут, получить значение можно через  созданную ссылку ref:

export const UncontrollsInputSecret = (props: Props) => {
    const [newValue, setNewValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const element = inputRef.current as HTMLInputElement;
        setNewValue(element.value)
    }
    return (
        <>
            <input ref={inputRef} />
            <button onClick={save}> save</button>
            - actual value: {newValue}
        </>
    )
}

export const UncontrollsInput = React.memo(UncontrollsInputSecret)