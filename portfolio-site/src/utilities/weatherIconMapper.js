import { WiDaySunny, WiDayCloudy, WiCloudy, WiFog, WiSprinkle, WiRaindrops, WiShowers, WiRainMix, WiRain, WiRainWind, WiSnow, WiSnowflakeCold, WiSnowWind,WiThunderstorm,WiDayHail,WiHail } from "react-icons/wi";


export const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
        case 0:
            return <WiDaySunny size={35} color="orange" />;
        case 1:
            return <WiDaySunny size={35} color="orange" />;
        case 2:
            return <WiDayCloudy size={35} color="orange" />;
        case 3:
            return <WiCloudy size={35} color="gray" />;
        case 45:
            return <WiFog size={35} color="gray" />;
        case 48:
            return <WiFog size={35} color="gray" />;
        case 51:
            return <WiSprinkle size={35} color="blue" />;
        case 53:
            return <WiRaindrops size={35} color="blue" />;
        case 55:
            return <WiShowers size={35} color="blue" />;
        case 56:
            return <WiRainMix size={35} color="blue" />;
        case 57:
            return <WiRainMix size={35} color="blue" />;
        case 61:
            return <WiRainMix size={35} color="blue" />;
        case 63:
            return <WiRain size={35} color="blue" />;
        case 65:
            return <WiRainWind size={35} color="blue" />;
        case 66:
            return <WiRainMix size={35} color="blue" />;
        case 67:
            return <WiRain size={35} color="blue" />;
        case 71:
            return <WiSnow size={35} color="white" />;
        case 73:
            return <WiSnowflakeCold size={35} color="white" />;
        case 75:
            return <WiSnowflakeCold size={35} color="white" />;
        case 77:
            return <WiSnowWind size={35} color="white" />;
        case 80:
            return <WiRain size={35} color="blue" />;
        case 81:
            return <WiRain size={35} color="blue" />;
        case 82:
            return <WiRainWind size={35} color="blue" />;
        case 85:
            return <WiSnow size={35} color="white" />;
        case 86:
            return <WiSnowWind size={35} color="white" />;
        case 95:
            return <WiThunderstorm size={35} color="yellow" />;
        case 96:
            return <WiDayHail size={35} color="yellow" />;
        case 99:
            return <WiHail size={35} color="yellow" />;
        default:
            return null;
    }
};