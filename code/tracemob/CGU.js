import ReactMarkdown from 'react-markdown'
import content from 'Content/CGU-Agremob.md'

export default () => (
	<div css="max-width: 750px;margin: 0 auto">
		<ReactMarkdown source={content} />
	</div>
)
