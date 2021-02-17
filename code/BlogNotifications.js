import { Notifications } from './Nav'
import { articles } from './getArticles'

const notificationsTriggerDate = new Date(Date.now() - 31 * 24 * 60 * 60 * 1000)

export default () => (
	<Notifications
		count={
			articles.filter(
				({ attributes: { date } }) => new Date(date) > notificationsTriggerDate
			).length
		}
	/>
)
