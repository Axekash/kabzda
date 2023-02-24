import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const UsestateComponent = () => {
  return (
      <div>

      </div>
  )
}

function initValue() {
  console.log('initialState render')
  return 4542318615153135;
}

export default {
  title: 'UseStateDemo/UseStateExample',
  component: UsestateComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UsestateComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UsestateComponent> = (args) => {
  console.log('template render')
  const [counter, setCounter] = useState(initValue)

  const changer = (state: number) =>  {
    debugger
    return state + 1
  }

  // const onClickHandler = () => {
  //   setCounter(counter + 1)
  // }

  return (
      <div>
        {counter}
        {/*<button onClick={onClickHandler}>+</button>*/}
        <button onClick={() => setCounter(changer)}>+</button>
      </div>
  )
};

export const UseStateExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UseStateExample.args = {

};
