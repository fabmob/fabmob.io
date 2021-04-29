import archives from './getTracemobArchiveArticles'
import ReactMarkdown from 'react-markdown'
import Emoji from 'Components/Emoji'

export default () => (
	<div css="background: #0000000a">
		<div
			css={`
				border-top: 9px solid #375c9d;
				box-shadow: 2px 5px 12px 3px rgba(48, 41, 41, 0.34);
			`}
		></div>
		<div
			css={`
				margin: 0 auto;
				max-width: 40rem;
				padding: 0.3rem 1rem;
			`}
		>
			<h2>
				{' '}
				<Emoji emoji="🕰️" /> Historique du projet
			</h2>
			<ul>
				{archives.map((el) => (
					<li>
						<details>
							<summary css="text-transform: capitalize">
								{el.attributes.title}
							</summary>

							<ReactMarkdown source={el.body} escapeHtml={false} />
						</details>
					</li>
				))}
			</ul>
		</div>
	</div>
)
