import ReactMarkdown from 'react-markdown'
import content from 'Content/trottinettes.md'

export default () => (
	<div css="max-width: 90%;margin: 0 auto">
		<header
			css={`
				display: flex;
				flex-wrap: wrap;
				flex-direction: row-reverse;
				justify-content: center;

				align-items: center;
				margin: 0 auto;
				max-width: 100%;
				> img {
					margin: 0 2rem;
				}
			`}
		>
			<img
				css="max-height: 35vh"
				src="https://forum.fabmob.io/uploads/default/original/1X/a9144b5024349ce536194e005cbb889db9c116c7.jpeg"
			/>
			<div>
				<h1>Challenge national des trottinettes</h1>
				<p>Rejoignez-nous ! </p>
				<div css="display: flex; justify-content: space-evenly">
					<a href="https://forum.fabmob.io/c/nos-communs/2nde-vie-des-trottinettes/32">
						<button>Participez sur le forum</button>
					</a>
					<a href="https://wiki.lafabriquedesmobilites.fr/wiki/Accueil">
						<button>Découvrez les communs</button>
					</a>
				</div>
				<a href="#infos">Plus d'infos ⬇️</a>
			</div>
		</header>
		<div id="infos" css="max-width: 700px; margin: 6rem auto">
			<ReactMarkdown source={content} />
		</div>
	</div>
)
