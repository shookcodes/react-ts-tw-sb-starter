import React, {FC} from "react";

export interface TestButtonProps {
  text?: string
}
// border-2 border-pink-400 px-2
const Button: FC<TestButtonProps> = () => {
	return (
		<button className="">I am a button</button>
	)
}

export default Button