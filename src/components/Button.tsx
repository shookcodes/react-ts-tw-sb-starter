import React, {FC} from "react";
import styles from './button.module.css'

export interface TestButtonProps {
  text?: string
}

const Button: FC<TestButtonProps> = () => {
	// ${styles.btn} 
	return (
		<button className={` bg-pink-200 px-2`}>
			I am a button
		</button>
	)
}

export default Button