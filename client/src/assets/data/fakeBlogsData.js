export const fakeBlogData = []

for (let i = 0; i < 6; i++) {
	fakeBlogData.push({
		src: '/images/jovana.jpg',
		alt: 'Jovana',
		title: 'Sreća u nesreći',
		body:
			'Chocolate cake jelly soufflé jelly-o soufflé carrot cake caramels. Bonbon bonbon cheesecake. Icing carrot cake carrot cake sesame snaps gingerbread chupa chups dragée.',
	})
}

export const fakeBlogDataHomePage = []

const blogCookieCutter = {
	alt: 'Blog',
	title:
		'Sreća u nesreći. Veoma dugačak naslov koji će se ograničiti. Veoma dugačak naslov koji će se ograničiti. Veoma dugačak naslov koji će se ograničiti. Veoma dugačak naslov koji će se ograničiti.',
	body:
		'Chocolate cake jelly soufflé jelly-o soufflé carrot cake caramels. Bonbon bonbon cheesecake. Icing carrot cake carrot cake sesame snaps gingerbread chupa chups dragée. Chocolate cake jelly soufflé jelly-o soufflé carrot cake caramels. Bonbon bonbon cheesecake. Icing carrot cake carrot cake sesame snaps gingerbread chupa chups dragée.',
}

for (let i = 0; i < 3; i++) {
	const src = [
		'/images/jovana.jpg',
		'/images/prsten.jpg',
		'/images/ogrlica.jpg',
	]
	fakeBlogDataHomePage.push({
		...blogCookieCutter,
		src: src[i],
	})
}
