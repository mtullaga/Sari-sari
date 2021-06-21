
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
				if(this.pin.length == 4){
					db.collection("users")
						.where("pin", "==", this.pin)
						.get()
						.then(querySnapshot => {
							
							if(!querySnapshot.empty){
								this.pin = ''
								querySnapshot.docs.map(doc => {
									let data = doc.data()
									if(data.position == 'admin'){
										window.location.href = 'components/admin/main.html'
									}else{
										window.location.href = 'components/staff/main.html'
									}
								})
							}else{
								ons.notification.alert('Sorry, invalid pin');
								this.pin = ''
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
				this.pin = this.pin.substring(0, this.pin.length - 1)
				console.log(this.pin)
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


    	

   
   

