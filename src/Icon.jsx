import React, { useEffect, useState } from 'react';

function Icon({ className, iconObj, condition }) {
  const iconKey = [
    {
      id: '01d',
      description: 'clear sky',
      icon: 'sunny.svg',
    },
    {
      id: '01n',
      description: 'clear sky',
      icon: 'clear-night.svg',
    },
    {
      id: '02d',
      description: 'few clouds',
      icon: 'broken-clouds.svg',
    },
    {
      id: '02n',
      description: 'few clouds',
      icon: 'broken-clouds-night.svg',
    },
    {
      id: '03d',
      description: 'scattered clouds',
      icon: 'clouds.svg',
    },
    {
      id: '03n',
      description: 'scattered clouds',
      icon: 'clouds.svg',
    },
    {
      id: '04d',
      description: 'broken clouds',
      icon: 'broken-clouds.svg',
    },
    {
      id: '04n',
      description: 'broken clouds',
      icon: 'broken-clouds-night.svg',
    },
    {
      id: '09d',
      description: 'shower rain',
      icon: 'rainy.svg',
    },
    {
      id: '09n',
      description: 'shower rain',
      icon: 'rainy.svg',
    },
    {
      id: '10d',
      description: 'rain',
      icon: 'rainy.svg',
    },
    {
      id: '10n',
      description: 'rain',
      icon: 'rainy.svg',
    },
    {
      id: '11d',
      description: 'thunderstorm',
      icon: 'thunderstorm.svg',
    },
    {
      id: '11n',
      description: 'thunderstorm',
      icon: 'thunderstorm.svg',
    },
    {
      id: '13d',
      description: 'snow',
      icon: 'snowy.svg',
    },
    {
      id: '13n',
      description: 'snow',
      icon: 'snowy.svg',
    },
    {
      id: '50d',
      description: 'mist',
      icon: 'mist.svg',
    },
    {
      id: '50n',
      description: 'mist',
      icon: 'mist.svg',
    },
  ];

  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const foundObj = iconKey.find((obj) => obj.id === iconObj);
    setImageSrc('/images/' + foundObj.icon);
  }, [iconObj]);

  return (
    <img
      src={imageSrc}
      alt={'Icon for ' + condition.toLowerCase() + ' condition'}
      width="200"
      height="200"
      className={className}
    />
  );
}

export default Icon;
