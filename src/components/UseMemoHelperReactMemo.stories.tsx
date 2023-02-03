import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UseMemoHelperReactMemo} from "./UseMemoHelperReactMemo";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React.memo demo',
    component: UseMemoHelperReactMemo,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UseMemoHelperReactMemo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UseMemoHelperReactMemo > = (args) => {

    return <UseMemoHelperReactMemo {...args} />};

export const useMemoHelperReactMemo = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
useMemoHelperReactMemo.args = {
    count: 0,
    users: ['Andrey', 'Denis', 'Karina', 'Elena']
};

