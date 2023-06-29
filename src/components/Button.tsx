import React, {FC} from "react";

import styles from './button.module.css'

export interface TestButtonProps {
  text?: string
}

const Button: FC<TestButtonProps> = () => {
	// 
	//  style={{'background':  'pink'}}
	return <button className={`${styles.btn} `}>I am button</button>
}

export default Button