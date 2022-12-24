export const CHANGE_COLLAPSE = 'CHANGE-COLLAPSE'

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: any): StateType => {
    switch (action.type) {
        case CHANGE_COLLAPSE: {
            //неверное решение. Редюсер не допускает изменения входящего в него стейта, т.к. он является чистой функцией. Если происходят изменения во входящем стейте, то реакт фумает, что объект не изменился, и соответственно, перерисовывать его не нужно. И соответственно, перерисовываться не будет.
            // state.collapsed = !state.collapsed
            // return state

            // правильный синтаксис
            let copyState = {...state, collapsed: !state.collapsed}
            return copyState

        }
        default:
            throw new Error('Bad action type')
    }
}