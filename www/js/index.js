
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
				if(this.pin.length == 6){
					db.collection("users")
						.where("pin", "==", this.pin)
						.get()
						.then(querySnapshot => {
							console.log(this.pin)
							if(querySnapshot.empty){
								
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


    	

   
   

