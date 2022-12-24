import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Example1 } from '../components/Components';

//import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React.memo demo',
    component: Example1,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Example1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Example1 > = (args) => <Example1 {...args} />;

export const UncontrolledInput = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
UncontrolledInput.args = {
    count: 0,
    users: ['Andrey', 'Denis', 'Karina', 'Elena']
};

