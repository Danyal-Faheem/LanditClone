import {debounce} from 'lodash';
import {useEffect, useState} from 'react';

interface IUseValidatorProps {
  data: any;
  validator: (data: any) => boolean;
  debounceValue?: number;
}

const useValidator = ({
  data,
  validator,
  debounceValue = 1000,
}: IUseValidatorProps) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const validate = debounce(validator, debounceValue);
  useEffect(() => {
    validator(data) ? setIsValid(true) : setIsValid(false);
  }, [data, validator]);
  return {isValid};
};

export default useValidator;
