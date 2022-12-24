import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {Accordion} from './Accordion'
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Events',
                group: 'colors'
            },
        },
        onChange: {
            table: {
                category: 'Other'
            },
        },
        collapsed: {
            table: {
                category: 'Other'
            },
        },
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const Template1: ComponentStory<typeof Accordion> = (args) => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return <Accordion {...args} collapsed={accordionCollapsed} onChange={()=> setAccordionCollapsed(!accordionCollapsed)} />
};


export const CollapsedMode = Template.bind({});
export const UncollapsedMode = Template.bind({});
export const ChangedAccordionMode = Template1.bind({});


// More on args: https://storybook.js.org/docs/react/writing-stories/args
UncollapsedMode.args = {
    title: 'Menu',
    collapsed: false,
    onChange: action('accordion mode change event fired'),
    items: [
        {title: 'Alex', value: 1},
        {title: 'Karina', value: 2},
        {title: 'Dimych', value: 3}
    ],
    onClick: action('some item was clicked')
};
CollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    onChange: action('accordion mode change event fired'),
    onClick:  (value) => {alert(`User with id ${value} was clicked`)}
};
ChangedAccordionMode.args = {
    title: 'Menu',
    items: [{title: 'Alex', value: 1}, {title: 'Karina', value: 2}, {title: 'Dimych', value: 3}],
    onClick: (id) => {alert('users with id ' + id + ' was clicked')}
}
