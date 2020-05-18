print = console.log

let bookmarks = []

function logItems(bookmarkItem) {
	if (bookmarkItem.children) {
		for (child of bookmarkItem.children) {
			logItems(child);
		}
	}

	if (bookmarkItem.url) {
		browser.tabs.create({
			active: false,
			discarded: false,
			url: bookmarkItem.url
		})
		.then((tab) => {
			browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
				if (changeInfo.status == "complete") {
					browser.tabs.remove(tab.id)
				}
			},
			{
				properties: ["status"],
				tabId: tab.id
			})
		})
	}
}

function logTree(bookmarkItems) {
	logItems(bookmarkItems[0], 0);
}

function UpdateBookmarks() {
	bookmarks = []

	browser.bookmarks.getTree()
	.then(logTree);
}

browser.browserAction.onClicked.addListener(UpdateBookmarks);

