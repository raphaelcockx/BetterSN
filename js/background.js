$(function(){

	/* Remove the unnecessary 'Departure' and 'Return' labels in flexible search */
	$('tr.inboundHead th:not(.faresCalendarLinkPrevOut)').each(function() {
		$(this).html('<b>'+$(this).find('b').text()+'</b>');
	})
	$('th.outboundHead').each(function() {
		$(this).html('<b>'+$(this).find('b').text()+'</b>');
	})

	/* Show the number of nights when hovering over a price */
	$('table#faresCalendar td[onclick]').each(function() {
		var dates = $(this).attr('onclick').split("'");
		var outboundDate = moment(dates[1], 'DD/MM/YYYY');
		var inboundDate = moment(dates[3], 'DD/MM/YYYY');
		var nights = inboundDate.diff(outboundDate, 'days');
		$(this).attr('title', nights+' nights');
	})

	/* Remove airport codes where the full name is already shown */
	$('div.resultsArea div.location').each(function() {
		var location = $(this).text().split(/[()]/);
		$(this).text(location[0]);
		$(this).attr('title', location[1]);
	})

	/* When searching for oneways, there is no reliable class available to detect the lowest price. So let's add it */
	var prices=[];
	$('td.available').each(function() {
		var price = $(this).find('div.colPrice').text().replace(/[^0-9.]/g,'');
		$(this).attr('data-price', price);
		prices.push(price);
	});
	var lowest = Math.min.apply(Math,prices);
	$('td.available[data-price=\''+lowest+'\']').addClass('lowest');

	/* Shorten the N/A text a bit, so we got room for more of our own stuff */
	$('td.colNA').text('Not available');
});