import React, { FC } from 'react';
import './../styles/button.css';

export interface TestButtonProps {
  text: string;
}

const DemoButton: FC<TestButtonProps> = ({text}) => {
  return <button className={`demoButton`}> {text} </button>;
};

export default DemoButton;
