

if (localStorage.getItem('cookieConsent') != 'shown') {
	document.getElementById('cookieBanner').classList.remove('hidden')

	//localStorage.setItem('cookieConsent', 'shown')
};


$('.close').click(function()
{
	$('.cookie-banner').fadeOut();
})