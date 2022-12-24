import React, {MouseEvent, FocusEvent, DetailedHTMLProps, KeyboardEvent, useEffect} from 'react';
import {useState} from "react";
import s from './Select.module.css'

type ItemTypes = {
    title: string
    value: any
}
type SelectPropsTypes = {
    value?: any
    onChange: (value: any) => void
    items: ItemTypes[]
};

export const Select = (props: SelectPropsTypes) => {

    let propsTitle = props.items.find(item => item.value === props.value)

    let [title, setTitle] = useState<string | undefined>(propsTitle?.title)
    let [hoveredTitleValue, setHoveredTitleValue] = useState(propsTitle?.value)


    let [selectHidden, setSelectHidden] = useState(true)

    const onClickTitle = () => {
        setSelectHidden(!selectHidden)
    }

    const onChangeTitleHandler = (value: any, item: string) => {
        props.onChange(value)
        setTitle(item)
        setSelectHidden(true)
    }
    const onBlurHandler = () => {
        setSelectHidden(true)
        props.onChange(hoveredTitleValue)
    }

    useEffect(() => {
        setHoveredTitleValue(props.value)
    }, [props.value])

    const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if(props.items[i].value === hoveredTitleValue) {
                    const pretendentElement = event.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if(pretendentElement) {
                        setHoveredTitleValue(pretendentElement.value)
                        setTitle(pretendentElement.title)
                        props.onChange(pretendentElement.value)
                        break
                    }
                }
            }
        }
        if(event.key === 'Escape' || event.key === 'Enter') {
            setSelectHidden(true)
        }
    }
//посмотреть про tabIndex
// className={s.item + ' ' + (i.title === title ? s.selectedItem : '' )} - вариант перемещения по селекту через css стили. Применять в дивке выбираемых айтемов

    return (
        <div tabIndex={0}
             onBlur={onBlurHandler}
             className={s.select}
             onKeyUp={onKeyUp}>
            <div>
                {title ? <h1 onClick={onClickTitle}>{title}</h1> : 'null'}
            </div>
            <div className={selectHidden ? s.items : s.active}>
                {props.items.map(i => <div
                    onMouseEnter={() => {
                        setHoveredTitleValue(i.value)
                    }}
                    onMouseOut={() => {
                        setTitle(i.title)
                    }}
                    className={s.item + ' ' + (hoveredTitleValue === i.value ? s.selectedItem : '')}
                    key={i.value}
                    onClick={() => {
                        onChangeTitleHandler(i.value, i.title)
                    }}>{i.title}
                </div>)}
            </div>
        </div>
    );

};