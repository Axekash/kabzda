import * as React from 'react';

type Props = {

};
export const ControlledCheckboxSecret = (props: Props) => {
    return (
        <>
            <input type={"checkbox"}/>
        </>
    );
};

export const ControlledCheckbox = React.memo(ControlledCheckboxSecret)