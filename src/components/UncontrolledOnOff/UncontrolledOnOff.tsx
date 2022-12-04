import React, {useState} from "react";
import s from './UncontrolledOnOff.module.css'

type UncontrolledOnOffType = {
    // isTrue: boolean
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


export const UncontrolledOnOff = (props: UncontrolledOnOffType) => {

    console.log('UncontrolledOnOff Rendering')
    let [on, setOn] = useState(false) // hook with init value
    console.log('on: ' + on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}