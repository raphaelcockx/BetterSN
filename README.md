##What this extension does

BetterSN is a Chrome plugin bringing some improvements to the new [Brussels Airlines](www.brusselsairlines.com) booking engine. It is - for now - just a quick side project to fix some of the things that were bothering me about the new Brussels Airlines booking engine and entirely reflects my personal (dis)likes about the site.

That being said, if there's enough interest, I do plan to add some configuration options so that you can tailor the extension (and the site) to your own preferences.

##Improvements

BetterSN makes changes to the results page for both flexible as well as fixed dates searches. This is what I tried to do:

- **Less wasted space**: I found the amount of wasted space rather staggering. Some of that is caused by overly large fonts or generous margins which are now reduced or removed. Some blocks, mostly those recapping your search, are removed entirely - but only so when the information was already present elsewhere on the screen. In one case, BetterSN removes the airport codes - such as FRA for Frankfurt - but makes it visible when hovering over the airport name.

- **Easier to spot the lowest price**: This actually looks like a bug on the Brussels Airlines website. When looking at flexible dates, a red background indicates 'promo' fares while a white background points out the lowest price. However, nearly all fares are on a white background and the meaning of 'promo' in this case is totally unclear as prices vary wildly. BetterSN strips out these different backgrounds and just indicates the lowest price on a clear yellow background.

- **More information**: Rather limited for now, but I did add a tooltip to flexible date searches where hovering over a combination of departure and arrival date will show you the number of nights between the two. Makes it a bit easier to decide I'd say.

##The Result

What does all that tweaking look like on the screen? You'll be the judge.

##To do

Quite a bit. It feels like I covered most of the basis stuff that bothered me, but I'm sure there will be other (small) things to tackle in the near future. Stay tuned.
