import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {Raiting, RaitingValueType} from './Raiting';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Raiting stories',
    component: Raiting,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Raiting>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Raiting> = (args) => <Raiting {...args} />;
const Template1: ComponentStory<typeof Raiting> = () => {
    const [raiting, setRaiting] = useState<RaitingValueType>(5)
    return <Raiting value={raiting} onClick={setRaiting} />
};

export const Raiting0 = Template.bind({});
export const Raiting1 = Template.bind({});
export const Raiting2 = Template.bind({});
export const Raiting3 = Template.bind({});
export const Raiting4 = Template.bind({});
export const Raiting5 = Template.bind({});
export const RaitingChanging = Template1.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Raiting0.args = {
    value: 0,
    onClick: a => a
    // primary: true,
    // label: 'Button',
};

Raiting1.args = {
    value: 1,
    onClick: a => a
    // primary: true,
    // label: 'Button',
};
Raiting2.args = {
    value: 2,
    onClick: a => a
    // primary: true,
    // label: 'Button',
};
Raiting3.args = {
    value: 3,
    onClick: a => a
    // primary: true,
    // label: 'Button',
};
Raiting4.args = {
    value: 4,
    onClick: a => a
    // primary: true,
    // label: 'Button',
};
Raiting5.args = {
    value: 5,
    onClick: a => a
    // primary: true,
    // label: 'Button',
};
// ChangedRaiting.args = {
//     value: 5,
//     onClick: a => a
//     // primary: true,
//     // label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };