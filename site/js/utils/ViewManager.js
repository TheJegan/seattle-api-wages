define([], function(){
	return {
		renderView: function(View, params){
			if(this.currentView){
				this.currentView.close();
			}

			if(params){
				this.currentView = new View(params);
			}else
			{
				this.currentView = new View();
			}
		},
		router: {}
	}
});