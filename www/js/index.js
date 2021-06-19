/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    // -----------------------------------------------------------------------------
    // Server IP address for database;

    localStorage.setItem('serverAddress', 'https://mdtsecs.000webhostapp.com/');
    // localStorage.setItem('serverAddress', 'http://localhost/');
   

	$('#num1').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num2').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num3').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num4').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num5').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num6').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num7').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num8').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num9').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#num0').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal + $(this).text();
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#numx').click(function () {
	    var currentVal = $('#passinput').val();
	    var newVal = currentVal.slice(0, currentVal.length-1);
	    $('#passinput').val(newVal);
	    if(newVal.length == 4){
	    	verifyPin();
	    }
	});

	$('#numcheck').click(function () {
	    // if($('#passinput').val() == '08'){
		// 		window.location.href = "components/admin/main.html";
		// }else{
		// 	ons.notification.alert('Sorry, invalid pin. Please try again.');
		// 	$('#passinput').val('');
		// }

		window.location.href = "components/admin/main.html"
	});

	


	function verifyPin(){
		var ipaddress = localStorage.getItem('serverAddress');
		var pass = $('#passinput').val();

		$.post(ipaddress+'/saridb/getcontent.php', {
            data: 'checkLogin',
            pin: pass
          }, function(res){
          		if(res == 'No records'){
          			ons.notification.alert('Sorry, invalid pin. Please try again.');
					$('#passinput').val('');
          		}else{
          			var id = JSON.parse(res)[0][0];
	             	var name = JSON.parse(res)[0][1];
	             	var pos = JSON.parse(res)[0][2];

	             	if(pos == 'admin'){
	             		window.location.href = "components/admin/main.html";
	             	}else{
	             		window.location.href = "components/staff/main.html";	
	             	}
          		}

            })
		
	}


	document.addEventListener("backbutton", onBackKeyDown, false);

	function onBackKeyDown() {
	    var res = confirm('Are you sure you want to exit app?');
	    if(res == 1){
	    	alert('Application closed.');
	    }else{
	    	alert('No actions needed.');
	    }
	}


    	
}
   
   

