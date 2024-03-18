import React from 'react'
import { ReactECharts } from '../Echarts/ReactECharts';
import { exchangeRateState } from '../redux/reducer';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { CurrencyChoise } from './CurrencyChoise';
import '../styles/exchangeRate.css';
import { useAppSelector } from '../redux/hooks';
import { Colors } from '../appTheme/colors';
import { Strings } from '../appTheme/strings';
import { DarkMode } from './DarkMode';


export const ExchangeRate = () => {
  let dataList: Array<exchangeRateState> = [{
    date: '',
    month: '',
    indicator: '',
    value: 0,
    name: ''
  }]
  let titleText: string = Strings.mainTitleText
  let tooltipText: string = Strings.mainToltipText
  let average: number = 0
  let mainTextColor: string = ''
  let secondaryTextColor: string = ''
  let backgroundColor: string = ''
  const currency = useAppSelector(state => state.btnValue)
  const dollarList = useAppSelector(state => state.dollarExchangeRateList)
  const euroList = useAppSelector(state => state.euroExchangeRateList)
  const yuanList = useAppSelector(state => state.yuanExchangeRateList)
  const dollarCount = useAppSelector(state => state.countDollarValue)
  const euroCount = useAppSelector(state => state.countEuroValue)
  const yuanCount = useAppSelector(state => state.countYuanValue)
  const theme = useAppSelector(state => state.theme)
  //изменение графиков и подписей, в зависимости от выбранной кнопки на переключателе
  switch (currency) {
    case Strings.dollarIcon:
      dataList = dollarList
      titleText = Strings.dollarTitleText
      tooltipText = Strings.dollarToltipText
      average = dollarCount / dataList.length
      break;
    case Strings.euroIcon:
      dataList = euroList
      titleText = Strings.euroTitleText
      tooltipText = Strings.euroToltipText
      average = euroCount / dataList.length
      break;
    case Strings.yuanIcon:
      dataList = yuanList
      titleText = Strings.yuanTitleText
      tooltipText = Strings.yuanToltipText
      average = yuanCount / dataList.length
      break;
    default:
      break;
  }

  switch (theme) {
    case 'light':
      mainTextColor = Colors.mainTextColor
      secondaryTextColor = Colors.secondaryTextColor
      backgroundColor = Colors.mainColor
      break;
    case 'dark':
      mainTextColor = Colors.darkMainTextColor
      secondaryTextColor = Colors.darkSecondaryTextColor
      backgroundColor = Colors.darkBackgroundColor
      break;

    default:
      break;
  }

  // настройка параметров графика
  const option = {
    title: {
      text: titleText,
      textStyle: {
        color: mainTextColor,
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 30
      }
    },
    tooltip: {
      trigger: 'axis',
      valueFormatter: (value: string) => value + Strings.rubleIcon,
      textStyle: {
        color: Colors.mainTextColor,
        fontWeight: 'bold',
      },
    },
    grid: {
      left: '5%',
      bottom: '10%'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      boundaryGap: false,
      data: dataList.map((item) => item.month),
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: { type: 'dotted' }
      },
      axisLabel: {
        showMinLabel: false
      },
      min: 'dataMin',
    },
    series: [
      {
        name: tooltipText,
        data: dataList.map((item) => item.value),
        type: 'line',
        symbol: 'none',
        color: Colors.lineColor
      }
    ]
  }


  return (
    <div className={'exRate'}>
      <ReactECharts option={option} />
      <div className={'infoBox'}>
        <Theme preset={presetGpnDefault}>
          {/*<DarkMode />*/}
          <div className={'btns'}>
            <DarkMode />
            <CurrencyChoise />
          </div>
        </Theme>
        <div className={'average'}>
          <div className={'averageTitle'}>
            {Strings.averageTitle}
          </div>
          <div className={'averageCount'}>
            {average.toFixed(1)}
            <div className={'averageIcon'}> {Strings.rubleIcon}</div>
          </div>
        </div>
      </div>

    </div>
  )
}