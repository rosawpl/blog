Template.createPost.events({
	'click #submit-btn': function (evt) {
		evt.preventDefault();
		var text = $('#T_createP').val();
		 Session.set('x1', text)
		
		console.log("x1.....,", Session.get('x1'))	
		
	}
})