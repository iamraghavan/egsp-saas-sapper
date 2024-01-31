<script>
    import { getUserInfo } from '../utils/userDetails'; // Adjust the path based on your project structure
  
    let { name, username, role } = getUserInfo();
  </script>

<div class="hp-sidebar hp-bg-color-black-20 hp-bg-color-dark-90 border-end border-black-40 hp-border-color-dark-80">
    <div class="hp-sidebar-container">
        <div class="hp-sidebar-header-menu">
            <div class="row justify-content-between align-items-end mx-0">
               

                <div class="w-auto px-0">
                    <div class="hp-header-logo d-flex align-items-center">
                        <a href="/" class="position-relative">
                           

                            
                            <img class="hp-logo hp-sidebar-hidden hp-dir-none hp-dark-none" src="/Logo.png" alt="logo">
                           
                        </a>

                        
                    </div>
                </div>

               
            </div>

            <ul>
                <li>
                    <div class="menu-title">DASHBOARDS</div>

                    <ul>
                    

                        <li>
                            <a href="/controller/create-ticket">
                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="E-Commerce" aria-label="E-Commerce"></div>

                                <span>
                                    <span class="submenu-item-icon">
                                        <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+UlEQVR4nKXUu0pDQRCA4Q8svDyBN0ziXYkIglYWAREUERufwkJsRCT4LjYWWpjWRrwWYuMrycIcOYaTcE7ywxQ7s/wMO8NSnkW84AHjBmQJH6jhAHeDSn5CktjHdVXJMt7Qwlbk9tCuIlkJyWycb7CJEXRwhXPcYqKXZLVLkrGNy5CltzrBER4VsBaSmaIidtDMnetx/x/reMe0/rRDmEka+WKzpCRjF98h+2MjJFPKUYtO5vPJNInPCp3M4RUL3YUvTFbspFFU7MQITyPGekjq/SRimdJSnUU8YbSqpIgLHA8rEZt7OKwkkb6ItP5DSRLp07rHcxXJL/5OKLd6gbLOAAAAAElFTkSuQmCC">
                                    </span>

                                    <span>Create Ticket</span>
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="/controller/ticket-status">
                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="E-Commerce" aria-label="E-Commerce"></div>

                                <span>
                                    <span class="submenu-item-icon">
                                        <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVR4nGNgoBFQYWBgKGFgYCgngEuganGCOwwMDP+JxLfwGQRS0ECEyxugaoeYQf9JwDgBSPIIAwNDBwF8ZGiG0W4iEuRuugZ2A7W81jCoDLpNrUwLKhpqiUiQNQwMDMpEuJx0AABBZ2CKfQCY2gAAAABJRU5ErkJggg==">
                                    </span>

                                    <span>Ticket Status</span>
                                </span>
                            </a>
                        </li>


                        

                        <li>
                            <a href="/controller/add-user">
                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="E-Commerce" aria-label="E-Commerce"></div>

                                <span>
                                    <span class="submenu-item-icon">
                                        <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGElEQVR4nK3UvyuFYRjG8Y9BfkUsBqM/waAMZ7BINjoMMhiVoiz+AcQgm8FqUwaZ/SwG4U8wGYzMytGj+9TpeHvPeeSqu+7e5+37Pvf1XO/Dbw1iBw94wjb6ZaoDd6g11TvGc0ATBZBa1GkOaKEE9JgDmioBneWAxkpARzmg6f/yqBvPBZAvVGRqsQB07Q9KWXprAs3H2jA2wq+9VtlKKf5oAq1gEveoYjRGPcZ+EWAVLwWjfUaO+uLdWXRGv4vlOmQtfoNaSVUbPppOsDf6LtymZr0FoBaVxpnDCV4DdhCwK/GwHVAl4jGEc4xgIEDJO5tt1FYYW9cheqKfadhZW0p3VDI2eVJXgtzEHZalJVzgMsZJO/mBfANh83vSlBF7ugAAAABJRU5ErkJggg==">
                                    </span>

                                    <span>Add New User</span>
                                </span>
                            </a>
                        </li>


                        <li>
                            <a href="/controller/all-user-data">
                                <div class="tooltip-item in-active" data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="E-Commerce" aria-label="E-Commerce"></div>

                                <span>
                                    <span class="submenu-item-icon">
                                        <img alt src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1klEQVR4nK3UsUoDQRDG8V80ivgINkYrX0HQTkIqW0tRsRAPxYgIXhsrtfQFfNKwMsiGE26X3B8GZoeZj2F3ZhmYY8zxWmnzqP0jBRJjTHDYY5PIzWt/aSLhDTOc9dgscg+idkXoAaOK6xhFTUdoJVBI85/Q/VBCp9l5E9/hX2An/MsSoZPsPMU79nCN3SyvVygPLPCIu3WEtnAV/i3O0WIfL3jCRmlHpfzgE1/rCj3jAzdDDOR2Hmxi3NuKFWlj5zotJmqWNs1ah/QVpNco/T6OKq6gjiXKqDLvqTnX9gAAAABJRU5ErkJggg==">
                                    </span>

                                    <span>All User Data</span>
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
                            <img alt src="data:image/png;base64,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">
                        </div>
                    </div>

                    <div class="w-auto ms-8 px-0 hp-sidebar-hidden mt-4">
                        <span class="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1">{name}</span>
                        <a href="/" class="hp-badge-text fw-normal hp-text-color-dark-30">{role}</a>
                    </div>
                </div>
            </div>

            <div class="col hp-flex-none w-auto px-0 hp-sidebar-hidden">
                <a href="/">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewbox="0 0 24 24" class="remix-icon hp-text-color-black-100 hp-text-color-dark-0" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>

