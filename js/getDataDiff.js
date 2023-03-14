import { DateTime } from './luxon.js';

function getDataDiff(dataFrom, datadTo) {
  const dataFromObj = DateTime.fromISO(dataFrom);
  const dataToObj = DateTime.fromISO(datadTo);
  return dataFromObj.diff(dataToObj, ['years', 'months', 'days']).toObject();
}

export default getDataDiff;
