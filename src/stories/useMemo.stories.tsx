import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Example1 } from '../components/Components';
import {UseMemo} from "../components/UseMemo";

//import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React.memo demo',
    component: UseMemo,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UseMemo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UseMemo > = (args) => {

    return <UseMemo {...args} />};

export const useMemo = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
useMemo.args = {

};

