// import React, {ChangeEvent, useState} from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import {Select} from "./Select";
//
//
//
// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//     title: 'Select',
//     component: Select,
//     // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof Select>;
//
// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Select> = () => {
//     const [parentValue, setParentValue] = useState<string | undefined>('3')
//     const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
//         setParentValue(e.currentTarget.value)
//     }
//
//     return (
//         <select value={parentValue} onChange={onChangeHandler}>
//             <option>none</option>
//             <option value={'1'}>Ilya</option>
//             <option value={'2'}>Dmitry</option>
//             <option value={'3'}>Dimych</option>
//             <option value={'4'}>Valera</option>
//             <option value={'5'}>Victor</option>
//         </select>
//     )
// };
//
// export const AllSelect = Template.bind({});
//
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// AllSelect.args = {
//
// };

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const WithWalue = Template.bind({});
export const WithoutWalue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithWalue.args = {
    value: 5,
    onChange: action('Value changed in', ),
    items: [{value: 1, title: 'Brest'}, {value: 2, title: 'Vitebsk'}, {value: 3, title: 'Gomel'}, {value: 4, title: 'Grodno'}, {value: 5, title: 'Minsk'}, {value: 6, title: 'Mogilev'}],
};

WithoutWalue.args = {
    value: '',
    onChange: action('Value changed in', ),
    items: [{value: 1, title: 'Brest'}, {value: 2, title: 'Vitebsk'}, {value: 3, title: 'Gomel'}, {value: 4, title: 'Grodno'}, {value: 5, title: 'Minsk'}, {value: 6, title: 'Mogilev'}],
};


