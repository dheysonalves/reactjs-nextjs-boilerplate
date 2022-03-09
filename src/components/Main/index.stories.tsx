import React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import Main from '.'

export default {
	title: 'Main',
	component: Main,
	args: {
		title: 'title default',
		description: 'description default'
	}
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Default: ComponentStory<typeof Main> = (args) => <Main {...args} />
