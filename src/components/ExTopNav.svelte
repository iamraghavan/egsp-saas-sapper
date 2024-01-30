<script>
    import { getUserInfo } from '../utils/userDetails'; // Adjust the path based on your project structure
  
    let { name, username, role, email } = getUserInfo();

    const handleLogout = () => {
    // Clear local storage
    localStorage.clear();



    goto('/');
  };
  </script>

<header>
    <div class="row w-100 m-0">
        <div class="col px-0">
            <div class="row w-100 align-items-center justify-content-between position-relative">
                <div class="col w-auto hp-flex-none hp-mobile-sidebar-button me-24 px-0" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
                    <button type="button" class="btn btn-text btn-icon-only">
                        <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAT0lEQVR4nO3WwQkAIAwDwIzezesWKuEO8jf4aBIAHpmSZEuS1w9QJK0/MiUBAPLBRTbj0zoatySpKTIlAQDywUU249M6GrckqSkyJQEg1x3OPOvHECpbTAAAAABJRU5ErkJggg==" style="
    height: auto;
    width: 27px;
    margin-left: 10px;
">
                    </button>
                </div>

               

                <div class="hp-horizontal-logo-menu d-flex align-items-center w-auto">
                    <div class="col hp-flex-none w-auto hp-horizontal-block">
                        <div class="hp-header-logo d-flex align-items-center">
                            <a href="/" class="position-relative">
                               

                                
                                <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none" src="img/logo-dark.svg" alt="logo">
                               
                            </a>

                        </div>
                    </div>

                    <div class="col hp-flex-none w-auto hp-horizontal-block hp-horizontal-menu ps-24">
                        <ul class="d-flex flex-wrap align-items-center">
                            <li class="px-6">
                                <a href class="px-12 py-4" data-bs-toggle="dropdown">
                                    <span>Dashboards</span>
                                    <i class="ri-arrow-down-s-line"></i>
                                </a>

                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="/executive/product-request">
                                            <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="E-Commerce" aria-label="E-Commerce"></div>
            
                                            <span>
                                                <span class="submenu-item-icon">
                                                    <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+UlEQVR4nKXUu0pDQRCA4Q8svDyBN0ziXYkIglYWAREUERufwkJsRCT4LjYWWpjWRrwWYuMrycIcOYaTcE7ywxQ7s/wMO8NSnkW84AHjBmQJH6jhAHeDSn5CktjHdVXJMt7Qwlbk9tCuIlkJyWycb7CJEXRwhXPcYqKXZLVLkrGNy5CltzrBER4VsBaSmaIidtDMnetx/x/reMe0/rRDmEka+WKzpCRjF98h+2MjJFPKUYtO5vPJNInPCp3M4RUL3YUvTFbspFFU7MQITyPGekjq/SRimdJSnUU8YbSqpIgLHA8rEZt7OKwkkb6ItP5DSRLp07rHcxXJL/5OKLd6gbLOAAAAAElFTkSuQmCC">
                                                </span>
            
                                                <span>Product Request Ticket</span>
                                            </span>
                                        </a>
                                    </li>
            
                                   
                                
                                </ul>

                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="/executive/update-ticket">
                                            <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="E-Commerce" aria-label="E-Commerce"></div>
            
                                            <span>
                                                <span class="submenu-item-icon">
                                                    <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nGNgoBFQYWBgKGFgYCgngEuganGCOwwMDP+JxLfwGQRS0ECEyxugaoeYQf9JwDgBSPIIAwNDBwF8ZGiG0W4iEuRuugZ2A7W81jCoDLpNrUwLKhpqiUiQNQwMDMpEuJx0AABBZ2CKfQCY2gAAAABJRU5ErkJggg==">
                                                </span>
            
                                                <span>Update Ticket Status</span>
                                            </span>
                                        </a>
                                    </li>
            
                                   
                                
                                </ul>
                         
                            </li>

                           
                        </ul>
                    </div>
                </div>

               

                <div class="col hp-flex-none w-auto pe-0">
                    <div class="row align-items-center justify-content-end">
                        


                       

                        <div class="hover-dropdown-fade w-auto px-0 ms-6 position-relative">
                            <div class="hp-cursor-pointer rounded-4 border hp-border-color-dark-80">
                                <div class="rounded-3 overflow-hidden m-4 d-flex">
                                    <div class="avatar-item hp-bg-info-4 d-flex" style="width: 32px; height: 32px;">
                                        <img alt="" src="data:image/png;base64,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">
                                    </div>
                                </div>
                            </div>

                            <div class="hp-header-profile-menu dropdown-fade position-absolute pt-18" style="top: 100%; width: 260px;">
                                <div class="rounded hp-bg-black-0 hp-bg-dark-100 px-18 py-24">
                                    <span class="d-block h5 hp-text-color-black-100 hp-text-color-dark-0 mb-16">{username}</span>

                                    
                               

                                  
                                    <div class="divider mt-12 mb-18"></div>

                                    <div class="row">
                                        

                                        <div class="col-12 mt-24">
                                            <a href class="hp-p1-body fw-medium" on:click={handleLogout}>Logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="offcanvas offcanvas-start hp-mobile-sidebar bg-black-20 hp-bg-dark-90" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel" style="width: 256px;">
    <div class="offcanvas-header justify-content-between align-items-center ms-16 me-8 mt-16 p-0">
        <div class="w-auto px-0">
            <div class="hp-header-logo d-flex align-items-center">
                <a href="/" class="position-relative">
               

                   
                    <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none" src="/img/logo-dark.svg" alt="logo">
  
                    
                </a>

              
            </div>
        </div>

        <div class="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-hidden" data-bs-dismiss="offcanvas" aria-label="Close">
            <button type="button" class="btn btn-text btn-icon-only bg-transparent">
                <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFUlEQVR4nO3cu0oDQRiG4Q+0sdUbMZsqsTeJdopYeCw9K1aebb0OQb0Jb0G8ERW0UTwkIiQgkolhk935M/M+sKXryMvE3ezMSgAAAAAAAAAAAAAAAAAAAKEaknQpaUH2jUu6lTSmgGNcS2pI+jQepSDpoTnW+1CjtGK0jg9J87KnKOnpz1jvJI0oMLOS3v/8oT8zZVE2Z0bj13GuQM04oiwZifEYU4z/oix7HFPiiHGmSExLemsTZcXDWKKP0SnKV85RiNFllFWPMU4Vuak2UeqS1jK+tCVGiijrOd1nMDM8RSk6Ypz08XcEpeaIstGHcxPDUJSiY2Yc93DO6KK8tomymeJcJUnPxMguyhYx/Kk6omx38bNlx8w4ymHcQaumiEIMT1F2HDFemBn+oux2EeMwh/FFqeKIsidpghi2rr5e28yMfU9jjE7FEeD3ceB7kLGZ7BCFGMZmyYGPAcWs0sVHFldWOanxT30w7kXKXPbau1sv8/2VnRgtRMlYlS8Xw3gmUuLBlL2nhiWiZPtcfTPFuVjcMECLHE56HWysa7M2+nBuohhdKPfIqsV0i67rGa3vZZG1wRXwCTPF3h6RJPZdUxZ3USVEsbfPsBDrZk/LO3ELsUaZNb4t+iGmKIP84oALBYhXaxh8+czVgLx8ZjyGl8/8GJZ0I2lO9iXN1zON+h4IAAAAAAAAAAAAAAAAAACAMvENcwTs4pqjD4oAAAAASUVORK5CYII=">
            </button>
        </div>
    </div>

    <div class="hp-sidebar hp-bg-color-black-20 hp-bg-color-dark-90 border-end border-black-40 hp-border-color-dark-80">
        <div class="hp-sidebar-container">
            <div class="hp-sidebar-header-menu">
                <div class="row justify-content-between align-items-end mx-0">
                    <div class="w-auto px-0 hp-sidebar-collapse-button hp-sidebar-visible">
                        
                    </div>

                    <div class="w-auto px-0">
                        <div class="hp-header-logo d-flex align-items-center">
                            <a href="/" class="position-relative">
                               

                               
                                <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-block" src="/img/logo-dark.svg" alt="logo">
                                
                            </a>


                        </div>
                    </div>

                   
                </div>

                <ul>
                    <li>
                        <div class="menu-title">DASHBOARDS</div>

                        <ul>
                     
                            <li>
                                <a href="/executive/product-request">
                                    <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="E-Commerce" aria-label="E-Commerce"></div>
    
                                    <span>
                                        <span class="submenu-item-icon">
                                            <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+UlEQVR4nKXUu0pDQRCA4Q8svDyBN0ziXYkIglYWAREUERufwkJsRCT4LjYWWpjWRrwWYuMrycIcOYaTcE7ywxQ7s/wMO8NSnkW84AHjBmQJH6jhAHeDSn5CktjHdVXJMt7Qwlbk9tCuIlkJyWycb7CJEXRwhXPcYqKXZLVLkrGNy5CltzrBER4VsBaSmaIidtDMnetx/x/reMe0/rRDmEka+WKzpCRjF98h+2MjJFPKUYtO5vPJNInPCp3M4RUL3YUvTFbspFFU7MQITyPGekjq/SRimdJSnUU8YbSqpIgLHA8rEZt7OKwkkb6ItP5DSRLp07rHcxXJL/5OKLd6gbLOAAAAAElFTkSuQmCC">
                                        </span>
    
                                        <span>Product Request Ticket</span>
                                    </span>
                                </a>
                            </li>
    
                            <li>
                                <a href="/executive/update-ticket">
                                    <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="E-Commerce" aria-label="E-Commerce"></div>
    
                                    <span>
                                        <span class="submenu-item-icon">
                                            <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nGNgoBFQYWBgKGFgYCgngEuganGCOwwMDP+JxLfwGQRS0ECEyxugaoeYQf9JwDgBSPIIAwNDBwF8ZGiG0W4iEuRuugZ2A7W81jCoDLpNrUwLKhpqiUiQNQwMDMpEuJx0AABBZ2CKfQCY2gAAAABJRU5ErkJggg==">
                                        </span>
    
                                        <span>Update Ticket Status</span>
                                    </span>
                                </a>
                            </li>
                            
                        </ul>
                    </li>

                
                </ul>
            </div>

            <div class="row justify-content-between align-items-center hp-sidebar-footer mx-0 hp-bg-color-dark-90">
                <div class="divider border-black-40 hp-border-color-dark-70 hp-sidebar-hidden mt-0 px-0"></div>

                <div class="col">
                    <div class="row align-items-center">
                        <div class="w-auto px-0">
                            <div class="avatar-item bg-primary-4 d-flex align-items-center justify-content-center rounded-circle" style="width: 48px; height: 48px;">
                                <img alt="" src="data:image/png;base64,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">
                            </div>
                        </div>

                        <div class="w-auto ms-8 px-0 hp-sidebar-hidden mt-4">
                            <span class="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1">{name}</span>
                            <a href="profile-information.html" class="hp-badge-text fw-normal hp-text-color-dark-30">{role}</a>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
</div>