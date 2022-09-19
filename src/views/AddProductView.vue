<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <ul class="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">


      <a class="" href="">
        <img src="http://localhost:8080/webapps/merchant/assets2/img/logo/awoofmart_logo.jpeg"
          style="width:100%;height:10%;">
      </a>

      <!-- <div class="sidebar-brand-text mx-3">awoofMart</div> -->


      <li class="nav-item active">
        <a class="nav-link" href="/dashboard/home">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span class="txtcolour2">Dashboard</span></a>
      </li>
      <hr class="sidebar-divider">
      <div class="sidebar-heading">
        Menu
      </div>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
          aria-expanded="true" aria-controls="collapseBootstrap">
          <i class="fas fa-fw fa-list-ul"></i>
          <span class="txtcolour2">ORDERS</span>
        </a>
        <div id="collapseBootstrap" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Manage Orders</h6>
            <a class="collapse-item" href="/dashboard/orders">All Orders</a>
            <!-- <router-link class="nav-link" to="/orders">All Orders</router-link> -->
          </div>
        </div>
      </li>
      <!--<li class="nav-item">-->
      <!--  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap1"-->
      <!--    aria-expanded="true" aria-controls="collapseBootstrap">-->
      <!--    <i class="far fa-fw fa-money-bill-alt"></i>-->
      <!--    <span class="txtcolour2">SALES</span>-->
      <!--  </a>-->
      <!--  <div id="collapseBootstrap1" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">-->
      <!--    <div class="bg-white py-2 collapse-inner rounded">-->
      <!--      <h6 class="collapse-header">Manage Sales</h6>-->
      <!--      <a class="collapse-item" href="<?php//echo site_url();?>index.php/MerchantArena/sales">All Sales</a>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--</li>-->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTable1" aria-expanded="true"
          aria-controls="collapseTable">
          <i class="fas fa-fw fa-object-group"></i>
          <span class="txtcolour2">PRODUCTS</span>
        </a>
        <div id="collapseTable1" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Manage Products</h6>
            <a class="collapse-item" href="/products">All Products</a>
          </div>
        </div>
      </li>
      <!--<li class="nav-item">-->
      <!--  <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTable" aria-expanded="true"-->
      <!--    aria-controls="collapseTable">-->
      <!--    <i class="fas fa-fw fa-users"></i>-->
      <!--    <span class="txtcolour2">MANAGE STAFF</span>-->
      <!--  </a>-->
      <!--  <div id="collapseTable" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">-->
      <!--    <div class="bg-white py-2 collapse-inner rounded">-->
      <!--      <h6 class="collapse-header">Staff</h6>-->
      <!--      <a class="collapse-item" href="index.php/MerchantArena/products">Add New User</a>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--</li>-->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTable2" aria-expanded="true"
          aria-controls="collapseTable">
          <i class="fas fa-fw fa-users"></i>
          <span class="txtcolour2">CONTACT ADMIN</span>
        </a>
        <div id="collapseTable2" class="collapse" aria-labelledby="headingTable" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Messages</h6>
            <a class="collapse-item" href="/message">New Message</a>
            <a class="collapse-item" href="/messages">All Messages</a>
          </div>
        </div>
      </li>

    </ul>
    <!-- Sidebar -->
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <!-- TopBar -->
        <nav class="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top bgcolour1">
          <button id="sidebarToggleTop" class="btn btn-link rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
          <span class="text-white">Welcome, </span>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
              </a>

            </li>

            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <span class="fa fa-user-circle text-white"></span>
                <span class="fa fa-caret"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="http://localhost:8080/webapps/merchant/index.php/w/logout">
                  <i class="fas fa-power-off fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <!-- Topbar -->

        <!-- DYNAMIC CONTENT -->

            <router-view />

        <!-- END OF DYNAMIC CONTENT -->
      </div>

    </div>
  </div>

  <!-- Scroll to top -->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import DashboardHome from '@/components/DashboardHome.vue';
  import { defineComponent, onMounted } from "vue";
  import axios from 'axios';

  export default defineComponent({
    components: { DashboardHome },
    setup() {
    
    const doIt = () => console.log(`Hello jiii`);
    
        onMounted(() => {
          doIt();
          //this.getDomains();
    });
  
  },
    data() {
        return {
          domains:[],
        };
      },
		   methods:{
        getDomains() {  
          axios.get(`https://awoofmart.ng/awoofmartapi/api/domains`)
            .then((response) => {
                //Perform Success Action
                console.log(response)
            })
            .catch((error) => {
                // error.response.status Check status code
            }).finally(() => {
                //Perform action in always
            });
          },
          // doIt() {
          //   console.log(`Hello`);
          // },
        }
      
	   });
</script>