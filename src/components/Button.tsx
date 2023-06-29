import React, { FC } from 'react';
export interface TestButtonProps {
  text?: string;
}

const Button: FC<TestButtonProps> = () => {
  return <button className={`border-2 border-pink-500 w-max bg-green-300`}>I am button</button>;
};

export default Button;
