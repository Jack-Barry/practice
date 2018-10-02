import { Action } from 'redux'

interface IInventoryItem {
  id: number
  name: string
}

interface IInventoryState {
  items: ReadonlyArray<IInventoryItem>
  selected_items: number
}

interface IInventoryAction extends Action {
  payload: IInventoryItem
}

export const addItem = (item: IInventoryItem): IInventoryAction => {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export const selectItem = (): Action => {
  return { type: 'SELECT_ITEM' }
}

export default (
  state: IInventoryState,
  action: IInventoryAction
): IInventoryState => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case 'SELECT_ITEM':
      return {
        ...state,
        selected_items: state.selected_items++
      }
    default:
      return state
  }
}
