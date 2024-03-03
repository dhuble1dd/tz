import { Strings } from "../appTheme/strings"
import { useAppDispatch } from "../redux/hooks"
import { addToCount, addToDollarCount, addToEuroCount, addToYuanCount, fillDollarList, fillEuroList, fillList, fillYuanList } from "../redux/reducer"
import { fetchData } from "./fetchData"

export const GetData = () => {
  const dispatch = useAppDispatch()
  const request = fetchData()
  request.then(rate => {
    //рассортировка данных по их принадлежности к валюте
    rate.forEach((element: { name: any; value: any }) => {
      switch (element.name) {
        case Strings.dollarIcon:
          dispatch(fillDollarList(element)) //хранилище данных
          dispatch(addToDollarCount(element.value)) //сумма всех значений поля value
          break;
        case Strings.euroIcon:
          dispatch(fillEuroList(element))
          dispatch(addToEuroCount(element.value))
          break;
        case Strings.yuanIcon:
          dispatch(fillYuanList(element))
          dispatch(addToYuanCount(element.value))
          break;

        default:
          dispatch(fillList(element))
          dispatch(addToCount(element.value))
          break;
      }
    });
  }).catch((error) => {
    alert(error)
  })
}