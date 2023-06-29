import React from "react"
import Component from "../components/Button"
import styles from "../components/button.module.css"

export default {
	title: "Components/Button",
	component: Component,
	argTypes: {
	},
}


const Template = (args) => (
	<div style={{ width: "244px", height: "176px" }}>
		<Component {...args}/>
	</div>
)

export const Default = Template.bind({})
Default.args = {

}

Default.decorators = [
	(Story) => (
		<div className={styles.btn}>
			<Story />
		</div>
	),
]
