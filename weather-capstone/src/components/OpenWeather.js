import React from 'react'
import ReactWeather, { useWeatherBit } from 'react-open-weather';

const OpenWeather = () => {
    
    const { data, isLoading, errorMessage } = useWeatherBit({
        key: '92f94a5a68f64c14b06c14ca7b5a59d6',
        lat: '33.4484',
        lon: '-112.0740',
        lang: 'en',
        unit: 'I', // values are (M,S,I)
    });
    const customStyles = {
        fontFamily:  'Open Sans Condensed, sans-serif',
        gradientStart:  '#004671', 
        gradientMid:  '#004671',
        gradientEnd:  '#004671',
        locationFontColor:  '#FFF',
        todayTempFontColor:  '#FFF',
        todayDateFontColor:  '#ffa72b',
        todayRangeFontColor:  '#ffa72b',
        todayDescFontColor:  '#ffa72b',
        todayInfoFontColor:  '#ffa72b',
        todayIconColor:  '#FFF',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#ffa72b',
    };
  return (
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Phoenix"
      unitsLabels={{ temperature: 'F', windSpeed: 'm/h' }}
      showForecast = {false}
    />
  );
};


export default OpenWeather
