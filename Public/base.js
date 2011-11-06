/**
 * System params
 */
var baseUrl= //'https://github.com/peihsinsu/GoGoStore/raw/master/Public';
	'http://211.78.245.30/GoGoStore/Public';
	//'http://dl.dropbox.com/u/42999994'; //remote repository
	//'http://dl.dropbox.com/u/6935715'; //local repository

function getResourcePath(storeId, resource){
	//alert("Using url:" + baseUrl+ '/' + storeId + '/' + resource);
	return baseUrl+ '/' + storeId + '/' + resource;
}