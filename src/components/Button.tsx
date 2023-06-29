import React, {FC} from "react";
export interface TestButtonProps {
  text?: string
}

const Button: FC<TestButtonProps> = () => {
	return <button className={`btn`}>I am button</button>
}

export default Button