import React, { useEffect } from "react";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import { Strings } from "../appTheme/strings";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setTheme } from "../redux/reducer";
import '../styles/choiceGroup.css'

export const DarkMode = () => {
  type Item = string;
  const theme = useAppSelector(state => state.theme)
  const dispatch = useAppDispatch()
  const items: Item[] = ['dark', 'light'];
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme]);
  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(next))
  }
  return (
    <div className={'dark_mode'}>
      <ChoiceGroup
        value={theme}
        onChange={handleChange}
        items={items}
        getItemLabel={(item) => item}
        multiple={false}
        size="xs"
        name={Strings.choiseName}
        className={'btn'}
      />

    </div>
  )
}