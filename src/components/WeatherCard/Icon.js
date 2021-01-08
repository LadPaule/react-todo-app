import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {
    const Icon = styled.img`
    width: 60%;
    `
    var icon = '';
      switch (props.condition) {
        case "Clouds":
          icon = `./img/mostly cloudy.png`;
          break;
        case "Clear":
          icon = `./img/mostly sunny.png`;
          break;
        case "Haze":
          icon = `./img/haze.png`;
          break;
        case "Hail":
          icon = `./img/hail.png`;
          break;
        case "Fog":
          icon = `./img/fog.png`;
          break;
        case "Tornado":
          icon = `./img/Tornado.png`;
          break;
        case "Dust":
          icon = `./img/dust.png`;
          break;
        case "Mist":
          icon = `./img/fog.png`;
          break;
        case "Snow":
          icon = `./img/snow.png`;
          break;
        case "Rain":
          icon = `./img/rain.png`;
          break;
        case "Drizzle":
          icon = `./img/drizzle.png`;
          break;
        case "Thunderstorm":
          icon = `./img/Severe Thunderstorm.png`;
          break;
        default:
          icon = `./img/fog.png`;
          break;
      }



    return ( 
        <Icon src={icon}/>
     );
}
 
export default Icon;