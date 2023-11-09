import { ICartPizza } from '../types/types';

export enum ActionTypes {
  ADD_PIZZA,
  PLUS_PIZZA,
  MINUS_PIZZA,
  REMOVE_PIZZA,
  CLEAR_CART,
}

export interface IAction {
  type: ActionTypes;
  payload?: unknown;
}

export interface IPayloadAction<T> extends IAction {
  payload: T;
}

export const addPizza = (pizzaObj: ICartPizza) => ({
  type: ActionTypes.ADD_PIZZA,
  payload: pizzaObj,
});

export const plusPizza = (id: number) => ({
  type: ActionTypes.PLUS_PIZZA,
  payload: id,
});

export const minusPizza = (id: number) => ({
  type: ActionTypes.MINUS_PIZZA,
  payload: id,
});

export const removePizza = (id: number) => ({
  type: ActionTypes.REMOVE_PIZZA,
  payload: id,
});

export const clearCart = () => ({
  type: ActionTypes.CLEAR_CART,
});
