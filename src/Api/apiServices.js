import axios from 'axios';

const API_KEY = '732dcfaad69fb475455c551db818568b';
const BASE_URL = 'https://api.novaposhta.ua/v2.0/json/';
const LIMIT_PER_PAGE = 12;

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTrackingInfo = async trackingNumber => {
  const config = {
    apiKey: API_KEY,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: trackingNumber,
          Phone: '380600000000',
        },
      ],
    },
  };

  const { data } = await instance.post('', config);

  return data.data[0];
};

export const getDepartmentsInfo = async (city, page) => {
  const config = {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: city,
      Limit: LIMIT_PER_PAGE,
      Page: page,
    },
  };

  const response = await instance.post('', config);

  return response.data;
};
