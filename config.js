// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Gabriel',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Guatn Morgn,',
	greetingAfternoon: 'Schian Nomitog,',
	greetingEvening: 'Schian Obend,',
	greetingNight: 'Gea liegn,',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'dc5e287beebcd792afef4086ff59688c', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '46.668930',
	defaultLongitude: '11.163990',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Hostaway',
			icon: 'briefcase',
			link: 'https://dashboard.hostaway.com/v3/calendar/monthly',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'briefcase',
			id: '1',
			links: [
				{
					name: 'Hostaway',
					link: 'https://dashboard.hostaway.com/v3/calendar/monthly',
				},
				{
					name: 'Meldung',
					link: 'https://alloggiatiweb.poliziadistato.it/PortaleAlloggiati/',
				},
				{
					name: 'Astat',
					link: 'https://www.tic.lts.it/ticweb/index.phtml?TS=3658772BA7C862D74DA5D0CF228417DE&',
				},
				{
					name: 'Booking',
					link: 'https://account.booking.com/sign-in?op_token=EgVvYXV0aCKXAQoUNlo3Mm9IT2QzNk5uN3prM3BpcmgSCWF1dGhvcml6ZRoaaHR0cHM6Ly9hZG1pbi5ib29raW5nLmNvbS8qUnsicGFnZSI6Ii9ob3RlbC9ob3RlbGFkbWluL2V4dHJhbmV0X25nL21hbmFnZS9ob21lLmh0bWw_aG90ZWxfaWQ9NzY0MzU2NSZsYW5nPWRlIn1CBGNvZGUqEjCmzrG18LslOgBCAFip9NyRBg',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'OLAT',
					link: 'https://lms.uibk.ac.at/dmz/',
				},
				{
					name: 'Amazon',
					link: 'https://www.amazon.it/',
				},
				{
					name: 'Ebay',
					link: 'https://www.ebay.it/mys/overview?MyEbay&gbh=1&CurrentPage=MyeBayAllSelling&ssPageName=STRK:ME:LNLK:MESX&source=GBH',
				},
				{
					name: 'LFU',
					link: 'https://lfuonline.uibk.ac.at',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'bitcoin',
			id: '1',
			links: [
				{
					name: 'Cryptodotcom',
					link: 'https://crypto.com/',
				},
				{
					name: 'YieldApp',
					link: 'https://app.yield.app/dashboard',
				},
				{
					name: 'BlockFi',
					link: 'https://blockfi.com/',
				},
				{
					name: 'Coinbase',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'globe-2',
			id: '2',
			links: [
				{
					name: 'Google',
					link: 'https://www.google.de/',
				},
				{
					name: 'Gdrive',
					link: 'https://drive.google.com/drive/u/0/my-drive',
				},
				{
					name: 'Gfotos',
					link: 'https://photos.google.com/',
				},
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
			],
		},
	],
};
