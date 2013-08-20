Template.createPost.events({
	'click #submit-btn': function (evt) {
		evt.preventDefault();
		var text = $('#T_createP').val();
		Posts.insert({"text": text, "author": "Rosa"})
				
	}
})