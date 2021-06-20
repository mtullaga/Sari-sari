
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
		  pin1: '',
		  users:[],
		},

		methods:{
			clkNum: function(val){
				console.log(this.pin1)
				this.pin = this.pin+val
				if(this.pin.length == 6){
					db.collection("users")
						.where("pin", "==", this.pin)
						.get()
						.then(querySnapshot => {
							if(!querySnapshot.empty){
								console.log('okay na')
							}else{
								ons.notification.alert('Sorry, invalid pin');
								this.pin = ""
							}
						})
						.catch((err)=>{
							console.log(err)
						})
				}
			},
			
			clkCheck: function(){

			},

			clkBackspace: function(){

			},

			changeNa: function(i){
				console.log(i)
			}
		},

		created(){
			
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


    	

   
   

