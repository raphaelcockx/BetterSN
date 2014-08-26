$(function(){
	$('tr.inboundHead th:not(.faresCalendarLinkPrevOut)').each(function() {
		$(this).html('<b>'+$(this).find('b').text()+'</b>');
	})
	$('th.outboundHead').each(function() {
		$(this).html('<b>'+$(this).find('b').text()+'</b>');
	})
});