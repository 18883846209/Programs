//获取url地址中的参数
function getQueryString(name) {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	var r = window.location.search.substr(1).match(reg);
	if (r !== null) {
		return decodeURIComponent(r[2]);
	}
	return null;
}
if(getQueryString('v')) {
    $('.llsversion').html(getQueryString('v'))
}
else {
    $('.llsversion').html('1.6')
}