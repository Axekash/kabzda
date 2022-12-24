import React, {ChangeEvent, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ControlledInput} from "./ControlledInput";
import {ControlledSelect} from "./ControlledSelect";
import {ControlledCheckbox} from "./ControlledCheckbox";
import {action} from "@storybook/addon-actions";



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Input',
    component: ControlledSelect,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ControlledSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlledCheckbox> = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('3')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Ilya</option>
        <option value={'2'}>Dmitry</option>
        <option value={'3'}>Dimych</option>
        <option value={'4'}>Valera</option>
        <option value={'5'}>Victor</option>
    </select>
};

export const AllControlledSelect = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
AllControlledSelect.args = {

};

