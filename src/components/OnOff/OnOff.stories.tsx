import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;
const Template1: ComponentStory<typeof OnOff> = () => {
    const [on, setOn] = useState(true)
   return <OnOff isTrue={on} setOn={setOn} />
};


export const OnMode = Template.bind({});
export const OffMode = Template.bind({});
export const ModeChanging = Template1.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnMode.args = {
    isTrue: true,
    setOn: action('on clicked')
};
OffMode.args = {
    isTrue: false,
    setOn: action('off clicked')
};
