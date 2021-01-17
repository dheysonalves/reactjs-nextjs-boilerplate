import Main from '.'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
	title: 'Main',
	component: Main,
	descorators: [withKnobs]
}

export const Basic = () => (
	<Main
		title={text('Title', 'aushuahuahs')}
		descrition={text('Description', 'sadisjidjasidjsd')}
	/>
)
