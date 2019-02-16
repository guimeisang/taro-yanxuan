/**
 * 适当封装 Redux，简化调用
 */
/* eslint-disable import/prefer-default-export */
import fetch from './request'

export function createAction(options) {
  const { url, payload, method, cb, type } = options
  return (dispatch) => {
    return fetch({ url, payload, method }).then((res) => {
      dispatch({ type, payload: cb ? cb() : res })
      return res
    })
  }
}