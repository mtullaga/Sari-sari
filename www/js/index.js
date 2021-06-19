
document.addEventListener('deviceready', onDeviceReady, false);

document.addEventListener("backbutton", onBackKeyDown, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

	let db = firebase.firestore()


	// Vue Code Starts Here

	new Vue({
		el: '#app',
		data: {
		  pin: '',
		  users:[],
		},

		methods:{
			clkNum: function(val){
				this.pin = this.pin+val
				ons.notification.prompt('What is your name?')
			},
			
			clkCheck: function(){

			},

			clkBackspace: function(){

			}
		},

		created(){
			db.collection("users")
				.orderBy('name')
				.get()
				.then(querySnapshot => 
				querySnapshot.docs.map(doc => {
					let data = doc.data()
					return {
					id: doc.id,
					name: data.name,
					}
				})
				)
				.then((users) => {
					console.log(users)
					
				})
		}
	  })


	
		
}



function onBackKeyDown() {
	var res = confirm('Are you sure you want to exit app?');
	if(res == 1){
		alert('Application closed.');
	}else{
		alert('No actions needed.');
	}
}


    	

   
   

