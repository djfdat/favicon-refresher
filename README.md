# FavIcon Refresher
Firefox Extension to refresh the FavIcons in your Bookmarks Toolbar.

FavIcon refresher aims to make it easy to refresh the FavIcons for your bookmarks. This is useful if they every get reset or are incorrect for any other reason.

Additionally, it provides support for refreshing certain bookmarks on an interval. This is useful for bookmarks where there favicons represent the current date, or the number of emails in your inbox.

- Refresh All
- Refresh Bookmark Toolbar
- Refresh On Internal
-- Restrict to specified bookmarks

Concept
- Get List of Bookmarks
-- See if simply calling bookmarks.update updates it
-- If not, fetch the favicons manually (https://github.com/meltwater/fetch-favicon)
-- With valid results, attempt to update bookmarks using techniques listed [here](https://appuals.com/fix-firefox-displaying-the-wrong-bookmark-favicons/) that can be done using a browser extension

Other Resources:
https://favicongrabber.com/service-api-reference