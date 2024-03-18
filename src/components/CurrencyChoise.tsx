import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import { changeValue } from "../redux/reducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Strings } from "../appTheme/strings";
import '../styles/choiceGroup.css'

export const CurrencyChoise = () => {
  type Item = string;
  const items: Item[] = [Strings.dollarIcon, Strings.euroIcon, Strings.yuanIcon];
  const value = useAppSelector(state => state.btnValue)
  const dispatch = useAppDispatch()
  return (
    <ChoiceGroup
      value={value}
      onChange={string => dispatch(changeValue(string.value))}
      items={items}
      getItemLabel={(item) => item}
      multiple={false}
      size="xs"
      name={Strings.choiseName}
      className={'btn'}
    />
  );
};