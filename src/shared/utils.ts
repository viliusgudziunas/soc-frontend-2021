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
}
