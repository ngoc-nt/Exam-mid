// utils.js
import { BASE_API_URL, API_KEY, HOURS_IN_MINUTES, PATH_IMG_API_URL, DEFAULT_IMAGE_NAME  } from './constants';

export const fetchDataFromApi = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${endpoint}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const getYearFromDate = (dateString) => {
  const date = new Date(dateString);
  return date.getFullYear();
};

export const convertToHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / HOURS_IN_MINUTES);
  const minutes = Math.round(totalMinutes % HOURS_IN_MINUTES);

  return `${hours}h ${minutes}m`;
};

export const roundToTwoDecimalPlaces = (number) => {
  return Number(number).toFixed(2);
};

export const getImageUrl = (imageUrl) => {
  return imageUrl ? `${PATH_IMG_API_URL}/${imageUrl}` : `/assets/img/${DEFAULT_IMAGE_NAME}`;
};