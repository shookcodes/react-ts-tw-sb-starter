import React, {FC} from "react";

import styles from './button.module.css'
// import './button.css'
export interface TestButtonProps {
  text?: string
}

const Button: FC<TestButtonProps> = () => {
	// ${styles.btn}
	//  style={{'background':  'pink'}}
	return <button className={`btn`}>I am button</button>
}

export default Button