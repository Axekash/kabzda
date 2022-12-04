import React, {useState} from "react";


type UncontrolledAccordionType = {
    title: string,
    // collapsed: boolean
}

type AccordionTitleType = {
    title: string,
    onclickHandler: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h2 onClick={props.onclickHandler}>{props.title}</h2>
    )
}

const AccordionBody = function () {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}


export const UncontrolledAccordion = (props: UncontrolledAccordionType) => {

    const [collapsed, setCollapsed] = useState(true)

    const onclickHandler = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.title} onclickHandler={onclickHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
    //
    // if (props.collapsed) {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.title}/>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.title}/>
    //             <AccordionBody/>
    //         </div>
    //     )
    // }
}




