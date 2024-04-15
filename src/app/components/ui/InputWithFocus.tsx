import React, { useRef, useEffect } from 'react';
import Input, { InputHTMLAttributes } from './Input';

interface InputWithFocusProps extends InputHTMLAttributes<HTMLInputElement> {
  autoFocus?: boolean;
}

const InputWithFocus: React.FC<InputWithFocusProps> = ({ autoFocus, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return <Input ref={inputRef} {...rest as any} />;
};

export default InputWithFocus;
