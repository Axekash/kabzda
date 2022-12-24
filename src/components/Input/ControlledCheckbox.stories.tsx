import React, {ChangeEvent, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ControlledInput} from "./ControlledInput";
import {ControlledCheckbox} from "./ControlledCheckbox";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Input',
    component: ControlledCheckbox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ControlledCheckbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledCheckbox> = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
    }

    return <input
        type={"checkbox"}
        checked={parentValue}
        onChange={action('want chenged')}/>
};

export const AllControlledCheckbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AllControlledCheckbox.args = {
};

