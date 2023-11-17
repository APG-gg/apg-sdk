import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];

const cn = (...inputs: ClassValue[]) => {
  return twMerge(classNames(inputs));
};

export default cn;