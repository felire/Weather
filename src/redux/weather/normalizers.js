export const normalizeWeatherResponse = response => {
  const {
    name,
    coord: { lat, lon },
    main: { temp, tempMin, tempMax, pressure, humidity }
  } = response;

  return {
    coordinate: {
      latitude: Number(lat),
      longitude: Number(lon)
    },
    name,
    temp,
    tempMin,
    tempMax,
    pressure,
    humidity
  };
};
