import React from "react"
import Component from "../components/Button"
import styles from '../components/button.module.css'

export default {
	title: "Components/Button",
	component: Component,
	argTypes: {
		type: {
			options: ["prev", "next"],
			control: { type: "radio" },
		},
	},
}

export const Default = (args: any) => (
	<div style={{ width: "244px", height: "176px" }}>
		<Component {...args} />
	</div>
)

Default.args = {
	showButton: true,
	type: "next",
	styles: styles,
}
