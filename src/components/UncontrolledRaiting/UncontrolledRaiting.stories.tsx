import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {UncontrolledRaiting} from './UncontrolledRaiting';
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Uncontrolled Raiting',
    component: UncontrolledRaiting,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledRaiting>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledRaiting> = (args) => <UncontrolledRaiting {...args} />;
// const Template1: ComponentStory<typeof Raiting> = () => {
//     const [raiting, setRaiting] = useState<RaitingValueType>(5)
//     return <Raiting value={raiting} onClick={setRaiting} />
// };

export const EmptyRaiting = Template.bind({});
export const Raiting1 = Template.bind({});
export const Raiting2 = Template.bind({});
export const Raiting3 = Template.bind({});
export const Raiting4 = Template.bind({});
export const Raiting5 = Template.bind({});

export const RaitingChanging = Template.bind({});

const callback = action('Raiting changed inside component')

// More on args: https://storybook.js.org/docs/react/writing-stories/args
EmptyRaiting.args = {
    defaultValue: 0,
    onChange: callback

};

Raiting1.args = {
    defaultValue: 1,
    onChange: callback

};
Raiting2.args = {
    defaultValue: 2,
    onChange: callback

};
Raiting3.args = {
    defaultValue: 3,
    onChange: callback

};
Raiting4.args = {
    defaultValue: 4,
    onChange: callback

};
Raiting5.args = {
    defaultValue: 5,
    onChange: callback

};

