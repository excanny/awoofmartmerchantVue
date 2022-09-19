<template>
	<div class="row pl-5 pt-3 pb-0">
	   <div class="col-sm-6 ">
		  <h5 class=""><a href="" style="color:#800020">awoofMart</a></h5>
	   </div>
	   <div class="col-sm-6">
		  <a href="/login" style="color:#7AAC41" class="float-right mr-5">Login</a>
	   </div>
	</div>
	<div>
	<div class="row justify-content-center ">
	   <div class="col-sm-10 col-md-8 col-lg-8 p-0 mt-3 mb-2">
		  <div class="card px-0 pt-1 pb-0 mt-1 mb-2">
			 <ul id="progressbar" class="text-center">
				<li id="personal" class="active">Account</li>
				<li id="business">Business</li>
				<li id="bank">Bank</li>
				<li id="general">Final</li>
			 </ul>
			 <h3 class="text-center" style="color:#7AAC41">Sign Up For Your Merchant Profile</h3>
			 <p class="text-center">Fill all form fields to go to next step</p>
			 <form name="frmRegistration" id="signup-form">
				{{ step }}
				<div id="personal-fieldx"  v-if="step === 1">
				   <div class="row">
					  <div class="col-7">
						 <h2 class="fs-title">Account Information:</h2>
					  </div>
					  <div class="col-5">
						 <h2 class="steps">Step 1 - 4</h2>
					  </div>
				   </div>
				   <div class="row">
					  <div class="col-sm-12">
						 <div class="p-2">
							
						 </div>
					  </div>
				   </div>
				   <div class="row">
					  <div class="col-sm-4">
						 <label>FIRST NAME:</label><small><span id="firstname-error" class="signup-error"></span></small>
						 <div><input type="text" class="form-control form-control-sm" v-model="firstname"/></div>
					  </div>
					  <div class="col-sm-4">
						 <label>LAST NAME:</label><small><span id="lastname-error" class="signup-error"></span></small>
						 <div>
							<input type="text" v-model="lastname" class="form-control form-control-sm" /></div>
							   </div>
							   <div class="col-sm-4">
							<label>PHONE:</label><small><span id="phone-error" class="signup-error"></span></small>
							<div><input type="number" v-model="phone" id="phone" class="form-control form-control-sm"/></div>
						 </div>
					  </div>
					  <div class="row pt-3">
						 <div class="col-sm-12 pb-0">
							<label>DATE OF BIRTH:</label>
						 </div>
						 <div class="col-sm-4">
							<small><span id="ddob-error" class="signup-error"></span></small>
							<select id="dobday" name="dobday" class="form-control form-control-sm" ></select>
						 </div>
						 <div class="col-sm-4">
							<small><span id="mdob-error" class="signup-error"></span></small>
							<div>
							   <select id="dobmonth" name="dobmonth" class="form-control form-control-sm" ></select>
							</div>
						 </div>
						 <div class="col-sm-4">
							<small><span id="ydob-error" class="signup-error"></span></small>
							<div>
							   <select id="dobyear" name="dobyear" class="form-control form-control-sm" ></select>
							</div>
						 </div>
					  </div>
					  <div class="row pt-3">
						 <div class="col-sm-12">
							<label>EMAIL:</label><small><span id="email-error" class="signup-error"></span></small>
							<div><input type="text" v-model="email" class="form-control form-control-sm" /></div>
						 </div>
					  </div>
					  <div class="row pt-3">
						 <div class="col-sm-6">
							<label>PASSWORD:</label><small><span id="password-error" class="signup-error"></span></small>
							<div><input type="password" v-model="password" class="form-control form-control-sm"/></div>
						 </div>
						 <div class="col-sm-6">
							<label>CONFIRM PASSWORD:</label><small><span id="confirm-password-error" class="signup-error"></span></small>
							<div><input type="password" v-model="password2" id="confirm-password" class="form-control form-control-sm"  /></div>
						 </div>
					  </div>
				   </div>
				   <div id="business-field" v-if="step === 2">
					  <div class="row">
						 <div class="col-7">
							<h2 class="fs-title">Business Information:</h2>
						 </div>
						 <div class="col-5">
							<h2 class="steps">Step 2 - 4</h2>
						 </div>
					  </div>
					  <div class="row">
						 <div class="col-sm-6">
							<label>BUSINESS NAME:</label><small><span id="shopname-error" class="signup-error"></span></small>
							<div><input type="text" v-model="businessname" class="form-control form-control-sm"  /></div>
						 </div>
						 <div class="col-sm-6">
							<label>BUSINESS ID:</label><small><span id="shopid-password-error" class="signup-error"></span></small>
							<div><input type="text" v-model="businessid" class="form-control form-control-sm"  readonly/></div>
						 </div>
					  </div>
					  <div class="row pt-3">
						 <div class="col">
							<label >CITY</label><small><span id="cityname-error" class="signup-error"></span></small>
							<select class="form-control form-control-sm" v-model="cityname" id="cityname"  required>
							   <option> <span>Select one</span> </option>
							</select>
						 </div>
						 <div class="col">
							<label >AREA</label><small><span id="areaname-error" class="signup-error"></span></small>
							<select class="form-control form-control-sm" v-model="areaname" id="areaname"  required>
							   <option ></option>
							</select>
						 </div>
						 <div class="col">
							<label >LANDMARK</label><small><span id="landmark-error" class="signup-error"></span></small>
							<select class="form-control form-control-sm" v-model="landmarkname" id="landmark"  required>
							   <option ></option>
							</select>
						 </div>
					  </div>
					  <div class="row pt-3">
						 <div class="col-sm-12">
							<label>BUSINESS ADDRESS:</label><small><span id="shopaddress-error" class="signup-error"></span></small>
							<div><input type="text" v-model="businessaddress" id="shopaddress" class="form-control form-control-sm"  /></div>
						 </div>
					  </div>
				   </div>
				   <div id="bank-field"  v-if="step === 3">
					  <div class="row">
						 <div class="col-7">
							<h2 class="fs-title">Bank Details:</h2>
						 </div>
						 <div class="col-5">
							<h2 class="steps">Step 3 - 4</h2>
						 </div>
					  </div>
					  <div class="row">
						 <div class="col-sm-4">
							<label >BANK NAME:</label><small><span id="bankname-error" class="signup-error"></span></small>
							<select class="form-control form-control-sm" v-model="bankname" id="bankname"  required>
							   <option  > <span>Select one</span> </option>
							   <!-- <?php 
								  $banks = array(array('id' => '1','name' => 'Access Bank','code'=>'044'), array('id' => '2','name' => 'Citibank','code'=>'023'), array('id' => '3','name' => 'Diamond Bank','code'=>'063'), array('id' => '4','name' => 'Dynamic Standard Bank','code'=>''), array('id' => '5','name' => 'Ecobank Nigeria','code'=>'050'), array('id' => '6','name' => 'Fidelity Bank Nigeria','code'=>'070'), array('id' => '7','name' => 'First Bank of Nigeria','code'=>'011'), array('id' => '8','name' => 'First City Monument Bank','code'=>'214'), array('id' => '9','name' => 'Guaranty Trust Bank','code'=>'058'), array('id' => '10','name' => 'Heritage Bank Plc','code'=>'030'), array('id' => '11','name' => 'Jaiz Bank','code'=>'301'), array('id' => '12','name' => 'Keystone Bank Limited','code'=>'082'), array('id' => '13','name' => 'Providus Bank Plc','code'=>'101'), array('id' => '14','name' => 'Polaris Bank','code'=>'076'), array('id' => '15','name' => 'Stanbic IBTC Bank Nigeria Limited','code'=>'221'), array('id' => '16','name' => 'Standard Chartered Bank','code'=>'068'), array('id' => '17','name' => 'Sterling Bank','code'=>'232'), array('id' => '18','name' => 'Suntrust Bank Nigeria Limited','code'=>'100'), array('id' => '19','name' => 'Union Bank of Nigeria','code'=>'032'), array('id' => '20','name' => 'United Bank for Africa','code'=>'033'), array('id' => '21','name' => 'Unity Bank Plc','code'=>'215'), array('id' => '22','name' => 'Wema Bank','code'=>'035'), array('id' => '23','name' => 'Zenith Bank','code'=>'057'));
								  foreach($banks as $bank){ ?>
								  <option value="<?php echo $bank['name']; ?>"><?php echo $bank['name']; ?></option>
								  <?php } ?> -->
								</select>
							</div>
							<div class="col-sm-4">
							   <label>ACCOUNT NUMBER:</label><small><span id="accountno-error" class="signup-error"></span></small>
							   <div><input type="number" v-model="bankaccountno" id="accountno" class="form-control form-control-sm"  /></div>
							</div>
							<div class="col-sm-4">
							   <label>ACCOUNT NAME:</label><small><span id="accountname-error" class="signup-error"></span></small>
							   <div><input type="text" v-model="bankaccountname" id="accountname" class="form-control form-control-sm" /></div>
							</div>
						 </div>
						 <div class="row pt-3">
							<div class="col-sm-12">
							   <label>AGREEMENT:</label><small><span id="agreement-error" class="signup-error"></span></small><br>
							   <input type="checkbox" v-model="agreement" /> I have read and accepted the agreement. 
							</div>
						 </div>
					  </div>
					  <div id="general-field" style="display:none;">
						 <div class="row">
							<div class="col-7">
							   <h2 class="fs-title">Final Step:</h2>
							</div>
							<div class="col-5">
							   <h2 class="steps">Step 4 - 4</h2>
							</div>
						 </div>
						 <div class="row pt-3">
							<div class="col-sm-12 text-center">
							   <h4>Submit to complete your registration</h4>
							</div>
						 </div>
					  </div>
					  <br>
					  <div>
						 <input class="btnAction btn btn-success text-white" type="button" name="back" id="back" value="Back" @click="prev" v-if="step > 1">
						 <input class="btnAction  btn btn-success text-white" type="button" name="next" id="next" value="Next" @click="next" v-if="step < 3">
						 <input class="btnAction btn btn-success text-white" type="submit" name="finish" id="finish" value="Submit"  v-if="step > 2">
					  </div>
				</form>
				</div>
			 </div>
		  </div>
	   </div>
	</template>
   
   
   <script lang="ts">
	  
	import { defineComponent } from "vue";

	export default defineComponent({
		   
		   data() {
			   return {
				step: 1,
				firstname: '',
				lastname: '',
				email:'',
				password: '',
				password2: '',
				phone:'',
				businessname: '',
				businessid: '',
				cityname: '',
				areaname: '',
				landmarkname: '',
				businessaddress: '',
				city_name: '',
				bankname: '',
				bankaccountno: '',
				bankaccountname: '',
				agreement: '', 
			   }
		   },
		   methods:{
			   prev() {
				   this.step--;
			   },
			   next() {
				   this.step++;
			   },
			   submitForm(){
				//console.log(this.data)
			   }
		   }
	   });
   
   </script>