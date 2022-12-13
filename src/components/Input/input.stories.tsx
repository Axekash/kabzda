import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrollsInput} from "./UncontrollsInput";

//import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Input',
    component: UncontrollsInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UncontrollsInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UncontrollsInput > = (args) => <UncontrollsInput {...args} />;

export const UncontrolledInput = Template.bind({});
export const ControlledInputWithFixedValue = Template.bind({});
export const UncontrolledInputWithTrackedValue = Template.bind({});
export const GetValueOfUncontroledInputByByttonPress = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UncontrolledInput.args = {

};
UncontrolledInputWithTrackedValue.args = {

};
ControlledInputWithFixedValue.args = {
    value: 'IT-kamasutra'
};
GetValueOfUncontroledInputByByttonPress.args = {
    value: 'IT-kamasutra'
};

