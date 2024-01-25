<script>
   
  import ControllerCards from '../../components/ControllerCards.svelte';
  import { onMount } from 'svelte';
  import { goto } from '@sapper/app';
  import { isLoggedIn } from '../../utils/auth';

  onMount(() => {
    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const { role } = JSON.parse(loggedInUser);
      goto(`/${role.toLowerCase()}`);
    }

    // If the user is not logged in, redirect to login page
    if (!isLoggedIn()) {
      goto('/');
    }
  });
  </script>
  

<div class="hp-main-layout-content">
  <div class="row mb-32 g-32">
      <div class="col flex-grow-1 overflow-hidden">
          <div class="row g-32">
              <div class="col-12">
                  <h1 class="hp-mb-0">Dashboard</h1>
              </div>

              <ControllerCards/>

             

              <div class="col-12">
                  <div class="row align-items-center justify-content-between">
                      <div class="col-sm-6 col-12">
                          <span class="h3 fw-semibold hp-text-color-black-bg hp-text-color-dark-0 d-block mb-0"> History </span>
                          <p class="hp-p1-body mt-4 mb-0">Transection of last 6 months</p>
                      </div>

                      <div class="col"></div>
                  </div>

                  <div class="row mt-24 mx-0">
                      <div class="hp-bg-black-0 hp-bg-dark-100 border hp-border-color-black-10 hp-border-color-dark-80 p-12 mb-16 col-12 rounded-5">
                          <div class="row align-items-center justify-content-between">
                              <div class="mb-16 mb-sm-0 col-sm-6 col-12">
                                  <div class="row align-items-center">
                                      <div class="hp-flex-none w-auto pe-0 col">
                                          <div class="hp-cursor-pointer border hp-border-color-dark-80 me-16" style="border-radius: 15px;">
                                              <div class="overflow-hidden m-4 d-flex hp-bg-danger-4" style="min-width: 64px; width: 64px; height: 64px; border-radius: 15px;">
                                                  <img src="../../../app-assets/img/memoji/user-avatar-5.png" alt="User" height="100%">
                                              </div>
                                          </div>
                                      </div>

                                      <div class="hp-flex-none w-auto ps-0 col">
                                          <span class="d-block h4 mb-0">Edward Adams</span>
                                          <span class="d-block hp-p1-body mt-4">Product Designer</span>
                                      </div>
                                  </div>
                              </div>

                              <div class="text-sm-end text-start col-sm-3 col-6" style="min-height: 50px;">
                                  <span class="d-block h4 fw-normal mb-0"> $ 7734.32 </span>
                                  <span class="d-block hp-p1-body mt-4">30432</span>
                              </div>

                              <div class="text-end col-sm-3 col-6" style="min-height: 50px;">
                                  <span class="h4">23.23%</span>
                              </div>
                          </div>
                      </div>

                      <div class="hp-bg-black-0 hp-bg-dark-100 border hp-border-color-black-10 hp-border-color-dark-80 p-12 mb-16 col-12 rounded-5">
                          <div class="row align-items-center justify-content-between">
                              <div class="mb-16 mb-sm-0 col-sm-6 col-12">
                                  <div class="row align-items-center">
                                      <div class="hp-flex-none w-auto pe-0 col">
                                          <div class="hp-cursor-pointer border hp-border-color-dark-80 me-16" style="border-radius: 15px;">
                                              <div class="overflow-hidden m-4 d-flex hp-bg-info-4" style="min-width: 64px; width: 64px; height: 64px; border-radius: 15px;">
                                                  <img src="../../../app-assets/img/memoji/user-avatar-6.png" alt="User" height="100%">
                                              </div>
                                          </div>
                                      </div>
                                      <div class="hp-flex-none w-auto ps-0 col">
                                          <span class="d-block h4 mb-0">John Doe</span>
                                          <span class="d-block hp-p1-body mt-4">Product Designer</span>
                                      </div>
                                  </div>
                              </div>

                              <div class="text-sm-end text-start col-sm-3 col-6" style="min-height: 50px;">
                                  <span class="d-block h4 fw-normal mb-0"> $ 7614.43 </span>
                                  <span class="d-block hp-p1-body mt-4">949</span>
                              </div>

                              <div class="text-end col-sm-3 col-6" style="min-height: 50px;">
                                  <span class="h4">19.03%</span>
                              </div>
                          </div>
                      </div>

                      <div class="hp-bg-black-0 hp-bg-dark-100 border hp-border-color-black-10 hp-border-color-dark-80 p-12 mb-16 col-12 rounded-5">
                          <div class="row align-items-center justify-content-between">
                              <div class="mb-16 mb-sm-0 col-sm-6 col-12">
                                  <div class="row align-items-center">
                                      <div class="hp-flex-none w-auto pe-0 col">
                                          <div class="hp-cursor-pointer border hp-border-color-dark-80 me-16" style="border-radius: 15px;">
                                              <div class="overflow-hidden m-4 d-flex hp-bg-warning-4" style="min-width: 64px; width: 64px; height: 64px; border-radius: 15px;">
                                                  <img src="../../../app-assets/img/memoji/user-avatar-7.png" alt="User" height="100%">
                                              </div>
                                          </div>
                                      </div>
                                      <div class="hp-flex-none w-auto ps-0 col">
                                          <span class="d-block h4 mb-0">Fazıl Say</span>
                                          <span class="d-block hp-p1-body mt-4">Product Designer</span>
                                      </div>
                                  </div>
                              </div>

                              <div class="text-sm-end text-start col-sm-3 col-6" style="min-height: 50px;">
                                  <span class="d-block h4 fw-normal mb-0"> $ 6789.19 </span>
                                  <span class="d-block hp-p1-body mt-4">732</span>
                              </div>

                              <div class="text-end col-sm-3 col-6" style="min-height: 50px;">
                                  <span class="h4">13.98%</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div class="hp-flex-none w-auto hp-dashboard-line px-0 col">
          <div class="hp-bg-black-40 hp-bg-dark-80 h-100 mx-24" style="width: 1px;"></div>
      </div>

     
  </div>
</div>