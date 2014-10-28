Router.configure({
    layoutTemplate: 'layout'
});



Router.map( function() {

	this.route('index', {
		path: '/',
		template: 'first'
	})

	this.route('second', {
		path: '/second'
	})

})