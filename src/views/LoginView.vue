<template>
  <header class="pt-4 mb-0">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 ">
                    <h2 ><a href="<?php echo site_url();?>" class="" style="color: #7AAC41">awoofMart</a></h2>
                </div>
            </div>
        </div>   
    </header>   
    <div class="page-wrapper" >
        <div class="wrapper wrapper w-25 mx-auto" style="padding: 4rem 0 0 0;">
            <div class="card card-6 border-0 ">
                <div class="card-heading">
                    <h2 class="title ">Merchant Login</h2>
                </div>
                <div style="background: #7AAC41">
                <div class="card-body" style="background: #7AAC41">
                    <div class="px-2 text-center">
                    </div>
                    <form @submit.prevent="submitLoginForm">
                      <hr>
                        <div class="row px-3 pt-1">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="text-white">EMAIL ADDRESS</label>
                                    <input class="form-control form-control-sm" type="email" v-model="form.email"  required>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row px-3 pt-1">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label class="text-white">PASSWORD</label>
                                    <input class="form-control form-control-sm" type="password" v-model="form.password" required>
                                </div>
                            </div>
                            
                        </div>
                        <hr>
                        <button class="btn btn-secondary btn-sm">Login</button>
                  </form> 
                </div>
                <div class="card-footer p-3 text-white" style="background: #7AAC41">
                    <div class="row">
                        <div class="col-sm-7 ">
                            <small><a href="<?php echo site_url();?>index.php/w/register" class="text-white">Register</a></small> |
                            <small><a href="<?php echo site_url();?>index.php/w/forgotpassword" class="text-white">Forgot Password?</a></small>
                        </div>
                        <div class="col-sm-5 pr-2">
                           
                        </div>
                    </div>
                </div>

                </div>
            
            </div>

            
        </div>
        <br>
    </div>
</template>

<script lang="ts">
	  
	import { defineComponent } from "vue";
    import axios from 'axios';

	export default defineComponent({
		   
		   data() {
			   return {
				form: {
				email:'',
				password: '',
                }
				
			   }
		   },
		   methods:{
                submitLoginForm(){
				//console.log(this.form)
                axios.post('https://awoofmart.ng/awoofmartapi/api/merchant/login', this.form)
                 .then((res) => {
                     //Perform Success Action
                     console.log(res)
                 })
                 .catch((error) => {
                     // error.response.status Check status code
                 }).finally(() => {
                     //Perform action in always
                 });
			   }
		   }
	   });
   
   </script>
