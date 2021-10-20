import { ClassObjectModel } from '@models/com';

// TODO: Add specs for utils!
export default class Utils {
  static makeClassName = (classes: ClassObjectModel): string => {
    const keys = Object.keys(classes);
    const validClasses = keys.filter((key: string) => classes[key]);

    return validClasses.join(' ');
  };

  static isSet = (value: unknown): boolean => {
    const isValueIsNull = value === null;
    const isValueIsUndefined = value === undefined;

    return !(isValueIsNull || isValueIsUndefined);
  };

  static getTodaysDate = (): string => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
}
