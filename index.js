import {
  isObject,
  msToHours,
  msToMinutes,
  msToDays,
  daysToMs,
  hoursToMs,
  calculateTimeDiffInMinutes,
} from 'tea-helpers';
import { isArray, isBoolean, isDate } from 'lodash';

export const dateHelpers = {
  msToHours: (ms) => msToHours(ms),
  msToMinutes: (ms) => msToMinutes(ms),
  msToDays: (ms) => msToDays(ms),
  daysToMs: (days) => daysToMs(days),
  hoursToMs: (hours) => hoursToMs(hours),
  // eslint-disable-next-line max-len
  calculateTimeDiffInMinutes: (primaryDate, secondaryDate) => calculateTimeDiffInMinutes(primaryDate, secondaryDate),
};

export const validators = {
  isObject: (value) => isObject(value),
  isArray: (value) => isArray(value),
  isBoolean: (value) => isBoolean(value),
  isDate: (value) => isDate(value),
};
