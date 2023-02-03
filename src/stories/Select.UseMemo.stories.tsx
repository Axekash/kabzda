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

import React, {useMemo, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


import {action} from "@storybook/addon-actions";
import {Select} from '../components/Select/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Select> = () => {
    console.log('Template rendering')
    const [cityes, setCityes] = useState([{value: 1, title: 'Brest', country: 'Belarus', count: 1200000}, {
        value: 2,
        title: 'Vitebsk',
        country: 'Belarus',
        count: 1350000
    }, {value: 3, title: 'Gomel', country: 'Belarus', count: 1650000}, {
        value: 4,
        title: 'Grodno',
        country: 'Belarus',
        count: 1230000
    }, {value: 5, title: 'Minsk', country: 'Belarus', count: 2050000}, {
        value: 6,
        title: 'Mogilev',
        country: 'Belarus',
        count: 1150000
    }, {value: 7, title: 'Moscow', country: 'Russia', count: 50000000}, {
        value: 8,
        title: 'Sanct-Peterburg',
        country: 'Russia',
        count: 4500000
    }, {value: 9, title: 'Novosibirsk', country: 'Russia', count: 2500000}, {
        value: 10,
        title: 'Kuev',
        country: 'Ukraine',
        count: 4500000
    }, {value: 11, title: 'Lviv', country: 'Ukraine', count: 2500000}, {
        value: 12,
        title: 'Bahmut',
        country: 'Ukraine',
        count: 1100000
    }])
    const [count, setCount] = useState(0)

    let countryFilter = useMemo(() => cityes.filter(city => city.country === 'Belarus'), [])
    let population = useMemo(() => cityes.filter(population => population.count > 1000000), [])
    let cityesWithLetterM = useMemo(() => cityes.filter(letter => letter.title[0] === 'M'), [])
    let filteredCityes = useMemo(() => {
        return [countryFilter, population, cityesWithLetterM]
    }, [countryFilter, population, cityesWithLetterM])
    return <>
        {filteredCityes.map(citys => <Select value={5} onChange={action('Value changed 1',)} items={citys}/>)}

        <button onClick={() => {
            console.log('button rendering')
            setCount(count + 1)
        }}>+
        </button>
        {count}
    </>
};

// export const UseMemoCityesSelect = Template.bind({});
//
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// UseMemoCityesSelect.args = {
//     value: 5,
//     onChange: action('Value changed in',),
//     items: [{value: 1, title: 'Brest'}, {value: 2, title: 'Vitebsk'}, {value: 3, title: 'Gomel'}, {
//         value: 4,
//         title: 'Grodno'
//     }, {value: 5, title: 'Minsk'}, {value: 6, title: 'Mogilev'}],
// };


