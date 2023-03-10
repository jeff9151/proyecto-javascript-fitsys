const ja = {
	groupDelimiter:",",
	groupSize:3,
	decimalDelimiter:".",
	decimalSize:2,
	minusPosition:"before",
	minusSign:"-",

	dateFormat:"%Y.%m.%d",
	timeFormat:"%H:%i",
	longDateFormat:"%Y年%m月%d日",
	fullDateFormat:"%Y.%m.%d %H:%i",

	price:"¥{obj}",
	priceSettings:{
		groupSize:3,
		groupDelimiter:",",
		decimalDelimiter:"",
		decimalSize:0,
		minusPosition:"before",
		minusSign:"-"
	},

	calendar:{
		monthFull:["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		monthShort:[ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		dayFull:["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
		dayShort:["日", "月", "火", "水", "木", "金", "土"],
		hours: "営業時間",
		minutes: "分",
		done: "レディー",
		clear: "削除する",
		today: "今日"
	},

	dataExport:{
		page:"ページ",
		of:"から"
	},
	PDFviewer:{
		of:"から",
		automaticZoom:"自動ズーム",
		actualSize:"実サイズ",
		pageFit:"ページサイズ",
		pageWidth:"ページ幅",
		pageHeight:"ページの高さ",
		enterPassword:"パスワードを入力する",
		passwordError:"間違ったパスワード"
	},
	aria:{
		calendar:"カレンダー",
		increaseValue:"増加値",
		decreaseValue:"数字を小さく",
		navMonth:["前の月", "来月"],
		navYear:["前年", "来年"],
		navDecade:["前の十年", "次の10年"],
		dateFormat:"%Y年%m月%d日",
		monthFormat:"%Y年%m月",
		yearFormat:"%Y年",
		hourFormat:"営業時間: %H",
		minuteFormat:"分: %i",
		removeItem:"要素を削除します",
		pages:["一ページ目", "前のページ", "次のページ", "最後のページ"],
		page:"ページ",
		headermenu:"ヘッダメニュー",
		openGroup:"オープン列グループ",
		closeGroup:"閉じる列グループ",
		closeTab:"タブを閉じます",
		showTabs:"複数のタブを表示します",
		resetTreeMap:"元の表示に戻ります",
		navTreeMap:"レベルパック",
		nextTab:"次のタブ",
		prevTab:"前のタブ",
		multitextSection:"要素を追加します。",
		multitextextraSection:"要素を削除します",
		showChart:"靴チャート",
		hideChart:"隠すチャート",
		resizeChart:"グラフのサイズを変更"
	},
	richtext:{
		underline: "アンダーライン",
		bold: "大胆な",
		italic: "イタリック"
	},
	combo:{
		select:"選択する",
		selectAll:"すべて選択",
		unselectAll:"すべての選択を解除する"
	},
	message:{
		ok:"OK",
		cancel:"取り消す"
	},
	comments:{
		send: "送信",
		confirmMessage: "コメントは削除されます. 本気ですか？",
		edit: "編集",
		remove: "削除",
		placeholder: "ここに入力..",
		moreComments:"その他のコメント"
	},
	filter:{
		less: "レス",
		lessOrEqual: "以下",
		greater: "大きいです",
		greaterOrEqual: "以上",
		contains: "含まれています",
		notContains: "含まれていません",
		equal: "等しいです",
		notEqual: "等しくありません",
		beginsWith: "で始まります",
		notBeginsWith: "ないで始まります",
		endsWith: "で終わります",
		notEndsWith: "で終わりではありません",
		between: "間に",
		notBetween: "いない間"
	},
	timeboard:{
		seconds: "秒"
	}
};

export default ja;