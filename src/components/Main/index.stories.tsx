import { Story, Meta } from '@storybook/react/types-6-0'

import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
	title: 'Main',
	component: Main,
	descorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
	<Main
		title={text('Title', 'aushuahuahs')}
		descrition={text('Description', 'sadisjidjasidjsd')}
	/>
)
