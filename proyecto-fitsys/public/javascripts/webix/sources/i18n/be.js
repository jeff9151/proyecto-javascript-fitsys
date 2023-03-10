const be = {
	groupDelimiter:" ",
	groupSize:3,
	decimalDelimiter:",",
	decimalSize:2,
	minusPosition:"before",
	minusSign:"-",

	dateFormat:"%d.%m.%Y",
	timeFormat:"%H:%i",
	longDateFormat:"%d %F %Y",
	fullDateFormat:"%d.%m.%Y %H:%i",

	price:"{obj} руб.",
	priceSettings:{
		groupSize:3,
		groupDelimiter:" ",
		decimalDelimiter:",",
		decimalSize:0,
		minusPosition:"before",
		minusSign:"-"
	},

	calendar:{
		monthFull:["Студзень", "Люты", "Сакавік", "Красавік", "Травень", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"],
		monthShort:["Студз", "Лют", "Сак", "Крас", "Трав", "Чэр", "Ліп", "Жнів", "Вер", "Каст", "Ліст", "Снеж"],
		dayFull:[ "Нядзеля", "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"],
		dayShort:["Нд", "Пн", "Аўт", "Ср", "Чцв", "Пт", "Сб"],
		hours: "Гадзіны",
		minutes: "Хвіліны",
		done: "Гатова",
		today: "Cёння",
		clear: "Ачысціць"
	},

	dataExport:{
		page:"Старонка",
		of:"з"
	},
	PDFviewer:{
		of:"з",
		automaticZoom:"Аўтаматычны зум",
		actualSize:"Сапраўдны памер",
		pageFit:"Памер старонкі",
		pageWidth:"Шырыня старонкі",
		pageHeight:"Вышыня старонкі",
		enterPassword:"Увядзіце пароль",
		passwordError:"Няправільны пароль"
	},
	aria:{
		calendar:"Каляндар",
		increaseValue:"Павялічыць значэнне",
		decreaseValue:"Паменшыць значэнне",
		navMonth:["Папярэдні месяц", "Наступны месяц"],
		navYear:["Папярэдні год", "Наступны год"],
		navDecade:["Папярэднія дзесяць год", "Наступныя дзесяць год"],
		dateFormat:"%d %F %Y",
		monthFormat:"%F %Y",
		yearFormat:"%Y",
		hourFormat:"Hours: %h",
		minuteFormat:"Гадзіны: %i",
		removeItem:"Прыбраць элемент",
		pages:["Першая старонка", "Папярэдняя старонка", "Наступная старонка", "Апошняя старонка"],
		page:"Старонка",
		headermenu:"Меню загалоўка",
		openGroup:"Адкрыць групу слупкоў",
		closeGroup:"Закрыць групу слупкоў",
		closeTab:"Закрыць укладку",
		showTabs:"Паказаць больш укладак",
		resetTreeMap:"Вярнуцца да першапачатковага выгляду",
		navTreeMap:"Падняцца на ўзровень вышэй",
		nextTab:"Наступная ўкладка",
		prevTab:"Папярэдняя ўкладка",
		multitextSection:"Дадаць элемент",
		multitextextraSection:"Прыбраць элемент",
		showChart:"Паказаць графік",
		hideChart:"Схаваць графік",
		resizeChart:"Змяніць памер графіка"
	},
	richtext:{
		underline: "Падкрэсліванне",
		bold: "Паўтлусты",
		italic: "Курсіў"
	},
	combo:{
		select:"Абраць",
		selectAll:"Абраць усё",
		unselectAll:"Ачысціць ўсе"
	},
	message:{
		ok:"ОК",
		cancel:"Адмена"
	},
	comments:{
		send: "Даслаць",
		confirmMessage: "Каментарый будзе выдалены. Вы ўпэўнены?",
		edit: "Рэдагаваць",
		remove: "Выдаліць",
		placeholder: "Пішыце тут..",
		moreComments:"Больш каментарыяў"
	},
	filter:{
		less: "менш",
		lessOrEqual: "менш або роўна",
		greater: "больш",
		greaterOrEqual: "больш або роўна",
		contains: "змяшчае",
		notContains: "не змяшчае",
		equal: "роўныя",
		notEqual: "не роўныя",
		beginsWith: "пачынаецца з",
		notBeginsWith: "не пачынаецца з",
		endsWith: "заканчваецца",
		notEndsWith: "не сканчаецца",
		between: "паміж",
		notBetween: "не паміж"
	},
	timeboard:{
		seconds: "Секунды"
	}
};

export default be;