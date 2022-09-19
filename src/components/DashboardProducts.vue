<template>

    <!-- DYNAMIC CONTENT -->

        <!-- Container Fluid-->
        <div class="container-fluid" id="container-wrapper">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Products</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item">Tables</li>
              <li class="breadcrumb-item active" aria-current="page">Products</li>
            </ol>
          </div>

          
        
          <!-- Row -->
          <div class="row">
            <!-- Products -->
            <div class="col-lg-12">
              <div class="card mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-success">Products</h6>
                  <a href="/dashboard/addproduct">Add New</a>
                </div>
                <div class="table-responsive p-3">
                  <table class="table align-items-center table-flush datatable text-center">
                    <thead class="thead-light">
                      <tr>
                      <th>#</th>
                       <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Price </th>
                        <th>Packaging Cost</th>
                        <th>Qty Left</th>
                        <th>Location</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                                        </tbody>
                  </table>
                </div>
              </div>
            </div>
       
          </div>
          <!--Row-->

        </div>
        <!---Container Fluid-->
</template>