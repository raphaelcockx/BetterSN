var prices=[];
var lowest, highest;

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
	$('td.available').each(function() {
		var price = $(this).find('div.colPrice').text().replace(/[^0-9.]/g,'');
		$(this).attr('data-price', price);
		prices.push(price);
	});
	var lowest = Math.min.apply(Math,prices);
	$('td.available[data-price=\''+lowest+'\']').addClass('lowest');

	/* Determine the prices for each combination in flexible search */
	$('table#faresCalendar>tbody>tr>td').each(function() {
		var price = $(this).find('div.colPrice').text().replace(/[^0-9.]/g,'');
		if(price!='') {
			$(this).attr('data-price', price);
			prices.push(price);
		}
	});
	lowest = Math.min.apply(Math,prices);
	highest = Math.max.apply(Math,prices);

	/* Allow users to filter by maximum price */
	$('td.colNA').text('Not available');
	$('<td class="colLower colLowerHidden">Below your maximum price</td><td class="colLowerSamp colLowerHidden"><div class="lowerSample">&nbsp;</div></td>').insertAfter('td.colLowSamp');
	$('<td class="maxPrice">Max price:</td><td class="maxPriceLabel">€ <span id="maxPriceLabelValue"></span></td>').insertAfter('td.colNASamp');
	$('span#maxPriceLabelValue').text(Math.ceil(lowest)).editable(function(v) {
		if(v<lowest) v=Math.ceil(lowest);
		$('td.lower').removeClass('lower');
		$('.colLowerHidden').removeClass('colLowerHidden');
		$('td[data-price]:not(.lowest)').each(function(){
			if($(this).data('price')<v) $(this).addClass('lower');
		});
		return(v);
	}, {
		tooltip: 'Click to change...',
		submit: 'OK',
		style: 'display: inline',
		width: 54,
		onblur: 'submit'
	})
});