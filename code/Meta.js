import { Helmet } from 'react-helmet'

// This is the guide we've used https://css-tricks.com/essential-meta-tags-social-media/
// plus things specific to blog articles
export default ({ title, description, image, url, published, updated }) => (
	<Helmet>
		<title>{title}</title>
		<link rel="canonical" href={url} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta name="description" content={description} />
		<meta property="og:image" content={image} />
		<meta property="og:url" content={url} />
		<meta property="og:type" content="article" />
		{published && (
			<meta property="article:published_time" content={published} />
		)}
		{updated && <meta property="og:updated_time" content={updated} />}
		<meta name="twitter:card" content="summary_large_image" />

		<meta property="og:site_name" content="La fabrique des mobilités" />
	</Helmet>
)
