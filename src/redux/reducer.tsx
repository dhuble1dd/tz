import { createSlice } from "@reduxjs/toolkit";
import { Strings } from "../appTheme/strings";

export interface exchangeRateState {
  date: string,
  month: string,
  indicator: string,
  value: number,
  name: string
}

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if (['light', 'dark'].includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-color-scheme: light)')
  if (userMedia.matches) return 'light'

  return 'light'
}

export interface exchangeRateListState {
  dollarExchangeRateList: Array<exchangeRateState>
  euroExchangeRateList: Array<exchangeRateState>
  yuanExchangeRateList: Array<exchangeRateState>
  exchangeRateList: Array<exchangeRateState>
  btnValue: string
  countDollarValue: number
  countEuroValue: number
  countYuanValue: number
  countValue: number
  theme: string
}

const initialState: exchangeRateListState = {
  dollarExchangeRateList: [],
  euroExchangeRateList: [],
  yuanExchangeRateList: [],
  exchangeRateList: [],
  btnValue: Strings.dollarIcon,
  countDollarValue: 0,
  countEuroValue: 0,
  countYuanValue: 0,
  countValue: 0,
  theme: getTheme()
}


const RateReducer = createSlice({
  name: 'rateReducer',
  initialState,
  reducers: {
    fillDollarList(state, action) {
      state.dollarExchangeRateList.push(action.payload)
    },
    fillEuroList(state, action) {
      state.euroExchangeRateList.push(action.payload)
    },
    fillYuanList(state, action) {
      state.yuanExchangeRateList.push(action.payload)
    },
    fillList(state, action) {
      state.exchangeRateList.push(action.payload)
    },
    changeValue(state, action) {
      state.btnValue = action.payload
    },
    addToDollarCount(state, action) {
      state.countDollarValue = state.countDollarValue + action.payload
    },
    addToEuroCount(state, action) {
      state.countEuroValue = state.countEuroValue + action.payload
    },
    addToYuanCount(state, action) {
      state.countYuanValue = state.countYuanValue + action.payload
    },
    addToCount(state, action) {
      state.countValue = state.countValue + action.payload
    },
    setTheme(state, action) {
      state.theme = action.payload
    },
  }
})

export default RateReducer.reducer;
export const { fillDollarList, fillEuroList, fillYuanList, fillList, changeValue,
  addToCount, addToDollarCount, addToEuroCount, addToYuanCount, setTheme } = RateReducer.actions;