// appends '&format=original' to the URL
// also checks to make sure it hasn't already done that

let url = location.href;
if (url.indexOf("&format=original") == -1) {
	location.href +=  '&format=original';
	}