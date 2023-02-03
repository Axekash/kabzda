import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Book, LikesBookCallBack} from './components/UseMemoHelperReactMemo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'BookWithMemo',
  component: LikesBookCallBack,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LikesBookCallBack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// @ts-ignore
const Template: ComponentStory<typeof LikesBookCallBack> = (args) => <LikesBookCallBack {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};
