import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
}


function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    if(props.collapsed === true) {
        return (
            <div>
                --- {props.titleValue} ---
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else {
        return (
            <div>
                --- {props.titleValue} ---
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }



}



type AccordionTitlePropsType = {
    title: string;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordingTitle rendering')
    if (props.title) {
        return <h3> {props.title} </h3>;
    } else {
        return <h3> MenuError </h3>;
    }

}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>3</li>
            <li>2</li>
            <li>1</li>
        </ul>
    )
}

export default Accordion;

