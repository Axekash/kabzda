import React from "react";
import {action} from "@storybook/addon-actions";


type ItemsType = {
    title: string
    value: any
}

type AccordionType = {
    title: string,
    collapsed: boolean,
    onChange: () => void
    onClick: (value: any) => void
    color?: string
    items: Array<ItemsType>

}

type AccordionTitleType = {
    title: string,
    setAccordionCollapsed: () => void
    /**
     * optional color of text header
     */
    color?: string
}

function AccordionsTitle(props: AccordionTitleType) {
    return (
        <h2 onClick={() => {
            props.setAccordionCollapsed()
        }} style={{color: props.color ? props.color : 'black'}}>{props.title}</h2>
    )
}
export const AccordionTitle = React.memo(AccordionsTitle)

type AccordionBodyType = {
    items: ItemsType[]
    onClick: (value: any) => void
}
const AccordionsBody = function (props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map((item, index) => {return <li
                onClick={() => {props.onClick(item.value)}}
                key={index}
            > {item.title}
            </li>} )}
        </ul>
    )
}
export const AccordionBody = React.memo(AccordionsBody)

export const Accordions = (props: AccordionType) => {
    return (
        <div>
            <AccordionTitle
                title={props.title}
                color={props.color}
                setAccordionCollapsed={props.onChange}
            />
            {!props.collapsed &&
                <AccordionBody
                    items={props.items}
                    onClick={props.onClick}
                />
            }
        </div>
    )
}

export const Accordion = React.memo(Accordions)




