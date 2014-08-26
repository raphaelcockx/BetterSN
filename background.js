$(function(){

	/* Remove the unnecessary 'Departure' and 'Return' labels in flexible search */
	$('tr.inboundHead th:not(.faresCalendarLinkPrevOut)').each(function() {
		$(this).html('<b>'+$(this).find('b').text()+'</b>');
	})
	$('th.outboundHead').each(function() {
		$(this).html('<b>'+$(this).find('b').text()+'</b>');
	})

	/* Experimental */
	$('table#faresCalendar td[onclick]').each(function() {
		var dates = $(this).attr('onclick').split("'");
		var outboundDate = moment(dates[1], 'DD/MM/YYYY');
		var inboundDate = moment(dates[3], 'DD/MM/YYYY');
		var nights = inboundDate.diff(outboundDate, 'days');
		$(this).attr('title', nights+' nights');
	})

});