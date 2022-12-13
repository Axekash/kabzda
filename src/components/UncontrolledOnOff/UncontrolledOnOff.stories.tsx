import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import {UncontrolledOnOff} from './UncontrolledOnOff';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrolledOnOff>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;
const Template1 = () => <input defaultValue={'hello'}/>
const Template2 = () => <div> async when change defaultValue when already rendered </div>


export const OnMode = Template.bind({});
export const OffMode = Template.bind({});
export const BugMode = Template2.bind({});
export const ChangingMode1 = Template1.bind({});

OnMode.args = {
    defaultOn: true,
}
OffMode.args = {
    defaultOn: false
}

