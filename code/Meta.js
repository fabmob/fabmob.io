import { Helmet } from 'react-helmet'

// This is the guide we've used https://css-tricks.com/essential-meta-tags-social-media/
// plus things specific to blog articles
export default ({ 
	title="FabMob France", 
	description="La fabrique des mobilités France. Construire la mobilité durable via les communs.", 
	image="https://lafabriquedesmobilites.fr/images/fabmob-logo.png", 
	url="https://lafabriquedesmobilites.fr", 
	published, 
	updated }) => {
	const imageSrc = image.indexOf("/contenu") === 0 ? "https://lafabriquedesmobilites.fr/" + image : image
	const type = url.indexOf("blog") >= 0 ? "article" : "website"
	return (
	<Helmet>
		<title>{title}</title>
		<link rel="canonical" href={url} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta name="description" content={description} />
		<meta property="og:image" content={imageSrc} />
		<meta property="og:url" content={url} />
		<meta property="og:type" content={type} />
		{published && (
			<meta property="article:published_time" content={published} />
		)}
		{updated && <meta property="og:updated_time" content={updated} />}

		<meta property="og:site_name" content="La fabrique des mobilités" />

		{/* Twitter open-graph tags */}
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:image:alt" content={title}/>
		<meta name="twitter:title" content={title}/>
		<meta name="twitter:description" content={description}/>
		<meta name="twitter:image" content={imageSrc} />
	</Helmet>
)}
