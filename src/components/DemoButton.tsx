import React, { FC } from 'react';
import './../styles/button.css';

export interface TestButtonProps {
  text: string;
}

const DemoButton: FC<TestButtonProps> = ({text}) => {
  return <button className={`demoButton bg-pink-400`}> {text} </button>;
};

export default DemoButton;
