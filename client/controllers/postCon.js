Template.postCon.postContent = function () {
	var posts = Posts.find().fetch()
	var string = "";
	for (var i=0; i<posts.length; i++){
		string+= posts[i].text + "<br/>";
	}
	return string;
}