import React from "react";
import {reducer, StateType} from "./Reducer";


let newState: StateType

beforeEach(() => {
    newState = {
        collapsed: true
    }
})

test('collapsed should be false', () => {

    let changedState = reducer(newState, {type: 'CHANGE-COLLAPSE'})

    expect(changedState === newState).toBe(false)
    expect(changedState.collapsed !== newState.collapsed).toBe(true)
    expect(changedState.collapsed).toBe(false)

})

test('collapsed should be true', () => {

    const newState = {
        collapsed: false
    }

    let changedState = reducer(newState, {type: 'CHANGE-COLLAPSE'})

    expect(changedState === newState).toBe(false)
    expect(changedState.collapsed !== newState.collapsed).toBe(true)
    expect(changedState.collapsed).toBe(true)

})

test('reducer should be error', () => {

    const newState = {
        collapsed: false
    }

    expect(() => {
            reducer(newState, {type: 'FAKE-TYPE'})
        }
    ).toThrowError()


})