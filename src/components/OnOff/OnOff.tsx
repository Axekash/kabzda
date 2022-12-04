import React, {useState} from "react";
import s from './OnOff.module.css'

type OnOffType = {
    isTrue: boolean,
    setOn: (value: boolean) => void,
}
// export const UncontrolledOnOff = (props: OnOffType) => {
//
//     if (props.isTrue) {
//         return (
//             <div>
//                 {/*<button className={props.isTrue && s.onChange}>On</button>*/}
//                 {props.isTrue && <button className={s.onChange}>On</button>}
//                 {props.isTrue && <button>Off</button>}
//                 {props.isTrue && <button className={`${s.onChange} ${s.changeColors}`}></button>}
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 {/*<button className={props.isTrue && s.onChange}>On</button>*/}
//                 {!props.isTrue && <button>On</button>}
//                 {!props.isTrue && <button className={s.offChange}>Off</button>}
//                 {!props.isTrue && <button className={`${s.offChange} ${s.changeColors}`}></button>}
//             </div>
//         )
//
//     }
// }


export const OnOff = (props: OnOffType) => {

    console.log('OnOff Rendering')

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.isTrue ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '5px',
        backgroundColor: props.isTrue ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.isTrue ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}