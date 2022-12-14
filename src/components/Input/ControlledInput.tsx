import * as React from 'react';
import {ChangeEvent, useState} from "react";
import {action} from "@storybook/addon-actions";

type Props = {
    // value: string
    // onChange: () => void
};
export const ControllingInput = (props: Props) => {
    const [parentValue, setParentValue] = useState('')

    return (
        <>
            <input value={parentValue} onChange={action('i want to change')}/>
        </>
    );
};

export const ControlledInput = React.memo(ControllingInput)