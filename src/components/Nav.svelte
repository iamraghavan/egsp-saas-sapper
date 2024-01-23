<script>
	import { onMount } from 'svelte';
	import { goto } from '@sapper/app';

	let name = '';
	let role = '';

	let ipAddress = 'Fetching IP...';
  let currentTime = '';

  const getPublicIP = async () => {
    try {
      const response = await fetch('https://api64.ipify.org/?format=json');
      const data = await response.json();
      ipAddress = data.ip;
    } catch (error) {
      console.error('Error fetching public IP:', error.message);
    }
  };

  const updateClock = () => {
    const now = new Date();
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    currentTime = now.toLocaleTimeString('en-US', options);
  };

  onMount(() => {
    getPublicIP();
    updateClock();
    // Update the clock every second
    setInterval(updateClock, 1000);
  });

  
	onMount(() => {
	  // Check if a user is already logged in
	  const loggedInUser = localStorage.getItem('loggedInUser');
  
	  if (loggedInUser) {
		const { name: userName, role: userRole } = JSON.parse(loggedInUser);
		name = userName;
		role = userRole;
	  }
	});


	const handleLogout = () => {
    // Clear local storage
    localStorage.clear();



    goto('/');
  };
  </script>

<header id="page-topbar">
	<div class="navbar-header">
		<div class="d-flex">
			  <!-- LOGO -->
			<div class="navbar-brand-box">
				<a href="/" class="logo logo-dark">
					<span class="logo-sm">
						<img src="assets/logo-dark.svg" alt="logo-sm-dark" height="24">
					</span>
					<span class="logo-lg">
						<img src="assets/logo-dark.svg" alt="logo-dark" height="25">
					</span>
				</a>

				<a href="/" class="logo logo-light">
					<span class="logo-sm">
						<img src="assets/logo-dark.svg" alt="logo-sm-dark" height="24">
					</span>
					<span class="logo-lg">
						<img src="assets/logo.svg" alt="logo-dark" height="25">
					</span>
				</a>
			</div>

			<button type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn" id="vertical-menu-btn">
				<i class="ri-menu-2-line align-middle"></i>
			</button>

		  <!-- start page title -->
		  <div class="page-title-box align-self-center d-none d-md-block">
			<h4 class="page-title mb-0">Nirvaagam | Dashboard</h4>
		  </div>
		  <!-- end page title -->
		</div>
		<div class="d-flex">


		   <div class="dropdown d-inline-block">
			
				<span class="badge bg-primary " style="font-size: 13px;">{currentTime}</span>
		   </div>

	   </div>
	
	</div>
</header>

<div class="vertical-menu">

	<!-- LOGO -->
	<div class="navbar-brand-box">
	   <a href="index.html" class="logo logo-dark">
		   <span class="logo-sm">
			   <img src="assets/logo.svg" alt="logo-sm-dark" height="27">
		   </span>
		   <span class="logo-lg">
			   <img src="assets/logo-dark.svg" alt="logo-dark" height="35">
		   </span>
	   </a>

	   <a href="index.html" class="logo logo-light">
		<span class="logo-sm">
			<img src="assets/logo.svg" alt="logo-sm-dark" height="27">
		</span>
		<span class="logo-lg">
			<img src="assets/logo-dark.svg" alt="logo-dark" height="35">
		</span>
	   </a>
   </div>

   <button type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn" id="vertical-menu-btn">
	   <i class="ri-menu-2-line align-middle"></i>
   </button>

   <div data-simplebar="init" class="vertical-scroll simplebar-scrollable-y">
	<div class="simplebar-wrapper" style="margin: 0px;">
		<div class="simplebar-height-auto-observer-wrapper">
			<div class="simplebar-height-auto-observer"></div>
		</div>
		<div class="simplebar-mask">
			<div class="simplebar-offset" style="right: 0px; bottom: 0px;">
			
				<div class="simplebar-content-wrapper"  role="region" aria-label="scrollable content"
					style="height: 100%; overflow: hidden scroll;">
					<div class="simplebar-content" style="padding: 0px;">

						<!--- Sidemenu -->
						<div id="sidebar-menu" class="mm-active">

					  
							<!-- Left Menu Start -->
							<ul class="metismenu list-unstyled mm-show" id="side-menu">
								<li class="menu-title">Menu</li>


								<li class="mm-active">
									<a href="/official/create-ticket" class="waves-effect active">
										<i class="mdi mdi-ticket-confirmation-outline"></i>
										<span>Create Ticket</span>
									</a>
								</li>
					
								<li class="/">
									<a href="index.html" class="waves-effect active">
										<i class="mdi mdi-list-status"></i>
										<span>Ticket Status</span>
									</a>
								</li>
					
					
								<li class="/">
									<a href="index.html" class="waves-effect active">
										<i class="ri-ticket-2-line"></i>
										<span>Add New User</span>
									</a>
								</li>
					

							  

							</ul>

						</div>
						<!-- Sidebar -->
					</div>
				</div>
			</div>
		</div>
		<div class="simplebar-placeholder" style="width: 250px; height: 962px;"></div>
	</div>
	<div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
		<div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
	</div>
	<div class="simplebar-track simplebar-vertical" style="visibility: visible;">
		<div class="simplebar-scrollbar"
			style="height: 693px; transform: translate3d(0px, 124px, 0px); display: block;"></div>
	</div>
</div>

<div class="dropdown px-3 sidebar-user sidebar-user-info">
	<button type="button" class="btn w-100 px-0 border-0" id="page-header-user-dropdown" data-bs-toggle="dropdown"
		aria-haspopup="true" aria-expanded="false">
		<span class="d-flex align-items-center">
			<div class="flex-shrink-0">
				<i class="ri ri-user-line"></i>
			</div>

			<div class="flex-grow-1 ms-2 text-start">
				<span class="ms-1 fw-medium user-name-text"><b>{name}</b></span>
			</div>

			<div class="flex-shrink-0 text-end">
				<i class="mdi mdi-dots-vertical font-size-16"></i>
			</div>
		</span>
	</button>
	<div class="dropdown-menu dropdown-menu-end">
		<!-- item-->
		<a class="dropdown-item" href><i
				class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1"></i> <span
				class="align-middle">Profile</span></a>
	
		<a class="dropdown-item" href><i
				class="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-1"></i> <span
				class="align-middle">Help</span></a>
		<div class="dropdown-divider"></div>
	
		<a class="dropdown-item" href on:click={handleLogout} ><i
			class="mdi mdi-lock text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Logout</span></a>

		<a class="dropdown-item" href ><i
				class="mdi mdi-lock text-muted font-size-16 align-middle me-1"></i> <span class="align-middle">Lock
				screen</span></a>
	</div>
</div>

  

</div>


