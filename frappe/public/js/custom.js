const upperItems = [
  {
    link:'/',
    title:'Dashboard',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>'
  },
  {
    link:'',
    title:'Settings',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>'
  }
]

const sidebarMenus = [
  {
    name: 'Selling',
    submenus: [
      {
        title: 'Inventory',
        icon:`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`,
        inner_submenus: [
          {
            link:'/app/item/',
            title: 'Items',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`
          },
          {
            link:'/app/item-group',
            title: 'Item Group',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-group"><path d="M3 7V5c0-1.1.9-2 2-2h2"/><path d="M17 3h2c1.1 0 2 .9 2 2v2"/><path d="M21 17v2c0 1.1-.9 2-2 2h-2"/><path d="M7 21H5c-1.1 0-2-.9-2-2v-2"/><rect width="7" height="5" x="7" y="7" rx="1"/><rect width="7" height="5" x="10" y="12" rx="1"/></svg>`
          },
          {
            link:'/app/brand',
            title:'Brand',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baseline"><path d="M4 20h16"/><path d="m6 16 6-12 6 12"/><path d="M8 12h8"/></svg>`
          }
        ]
      },
      {
        title: 'Orders',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
        inner_submenus: [
          {
            link:'/app/sales-invoice',
            title: 'Sales Invoice',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`
          },
          {
            link:'/app/payment-entry',
            title:'Payment Entry',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`
          }
        ]
      },
      {
        title: 'Customers',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-circle"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>`,
        inner_submenus: [
          {
            link:'/app/customer',
            title: 'Customer',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-square"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>`
          },
          {
            link:'/app/customer-group',
            title:'Customers Group',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
          },
          {
            link:'/app/contact',
            title:'Contact',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mailbox"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"/><polyline points="15,9 18,9 18,11"/><path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"/><line x1="6" x2="7" y1="10" y2="10"/></svg>`
          },
          {
            link:'/app/address',
            title:'Address',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-milestone"><path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"/><path d="M12 13v8"/><path d="M12 3v3"/></svg>`
          }
        ]
      },
      {
        title: 'Stock',
        icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
        inner_submenus: [
          {
            link:'/app/stock-entry',
            title: 'Stock Entry',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-plus"><path d="M16 16h6"/><path d="M19 13v6"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>`
          },
          {
            link:'/app/delivery-note',
            title:'Delivery Note',
            icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-paste"><path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"/><path d="m17 10 4 4-4 4"/></svg>`
          }
        ]
      }
    ]
  },
]

const modalMenus = [
  {
    title:'จัดการธุรกิจ',
    desc:'ระบบจัดการธุรกิจและขายสินค้า',
    icon:`<svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="0.25" width="36" height="36" rx="8" fill="#0A5FD9"/>
      <path d="M27.3966 8.7382C27.3974 8.73997 27.3984 8.74159 27.3997 8.74295C27.7601 9.11051 28.0321 9.55488 28.195 10.0425C28.3583 10.5311 28.4079 11.0503 28.3401 11.5608C28.2723 12.0713 28.0888 12.5597 27.8036 12.9891C27.5184 13.4184 27.1389 13.7775 26.6939 14.039C23.4859 15.9191 19.7425 16.6842 16.0512 16.2142C12.4541 15.7561 9.26564 14.3739 6.66253 11.8643C6.59432 11.7986 6.40028 11.642 6.40005 11.4804C6.39992 11.3953 6.42401 11.3213 6.4547 11.2615C6.5185 11.1372 6.63095 11.0464 6.72879 10.9467L10.7212 6.8787C10.8174 6.78069 10.9105 6.65039 11.0478 6.65039V6.65039C11.1799 6.65039 11.2701 6.73135 11.3106 6.77164C12.8716 8.29203 14.7051 9.18696 16.8712 9.46876C19.0757 9.75554 21.3135 9.308 23.2364 8.19575C23.891 7.81124 24.6556 7.65553 25.409 7.7533C26.1614 7.85094 26.8597 8.19584 27.3935 8.73341C27.3949 8.73478 27.3959 8.73641 27.3966 8.7382V8.7382Z" fill="white"/>
      <path d="M27.3761 8.72448C26.7406 8.08926 25.8788 7.73242 24.9802 7.73242C24.0816 7.73242 23.2199 8.08926 22.5843 8.72448L8.20121 23.1076C7.56598 23.7431 7.20914 24.6049 7.20914 25.5035C7.20914 26.4021 7.56598 27.2639 8.20121 27.8994C8.51576 28.2142 8.88926 28.4639 9.30036 28.6343C9.71146 28.8047 10.1521 28.8924 10.5971 28.8924C11.0421 28.8924 11.4828 28.8047 11.8939 28.6343C12.305 28.4639 12.6785 28.2142 12.993 27.8994L27.3761 13.5163C27.6909 13.2018 27.9407 12.8283 28.111 12.4172C28.2814 12.0061 28.3691 11.5654 28.3691 11.1204C28.3691 10.6754 28.2814 10.2347 28.111 9.82364C27.9407 9.41253 27.6909 9.03903 27.3761 8.72448Z" fill="url(#paint0_linear_723_5264)"/>
      <path d="M8.17825 27.8806C7.81798 27.5128 7.54613 27.0678 7.3833 26.5794C7.22047 26.0909 7.17093 25.5718 7.23843 25.0614C7.30594 24.5509 7.48871 24.0626 7.77291 23.6332C8.05711 23.2039 8.43527 22.8449 8.87876 22.5834C12.0767 20.7035 15.8082 19.9385 19.4877 20.4084C23.0821 20.8674 26.4283 22.4793 29.0264 24.999C29.1146 25.0816 29.1348 25.1018 29.1348 25.2231C29.1348 25.2358 29.1334 25.2483 29.1311 25.2604C29.1025 25.4061 28.962 25.499 28.8593 25.6061L25.2412 29.3766C25.1963 29.4234 25.1529 29.4714 25.107 29.5172C24.9909 29.633 24.7437 29.8509 24.5271 29.8509C24.2322 29.8509 23.9823 29.5693 23.8198 29.4266C22.3252 28.114 20.6509 27.4124 18.669 27.1538C16.4715 26.867 14.2409 27.3145 12.3241 28.4268C11.6709 28.8104 10.9084 28.9649 10.1574 28.8659C9.40638 28.767 8.70988 28.4202 8.17825 27.8806Z" fill="url(#paint1_linear_723_5264)"/>
      <defs>
      <linearGradient id="paint0_linear_723_5264" x1="28.1504" y1="9.78753" x2="7.94122" y2="27.7812" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="0.831909" stop-color="#2785FF" stop-opacity="0.79"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_723_5264" x1="7.48097" y1="25.2412" x2="34.9412" y2="27.7804" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="0.606729" stop-color="white"/>
      <stop offset="1" stop-color="#0457D1"/>
      <stop offset="1" stop-color="white"/>
      </linearGradient>
      </defs>
    </svg>`
  },
  {
    title:'บล็อกและบทความ',
    desc:'สร้างข่าวสารและเขียนบทความ',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="7" fill="#242424"/>
      <path d="M17.5 8C14.785 8 12.3108 9.03047 10.4468 10.7216L15.2968 12.96C15.7106 13.151 16.161 13.2499 16.6168 13.2499H21.7C22.2799 13.2499 22.75 13.72 22.75 14.2999V22.6999C22.75 23.2798 22.2799 23.7499 21.7 23.7499H13.3C12.7201 23.7499 12.25 23.2798 12.25 22.6999V17.6167C12.25 17.1609 12.1511 16.7106 11.9601 16.2967L9.7216 11.4469C8.03047 13.3108 7 15.785 7 18.5C7 24.299 11.701 29 17.5 29C23.299 29 28 24.299 28 18.5C28 12.701 23.299 8 17.5 8Z" fill="white"/>
    </svg>`
  },
  {
    title:'CRM',
    desc:'จัดการและดูข้อมูลลูกค้าต่างๆ',
    icon:`<svg width='36' height='36' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="7" fill="#013395"/>
    <path d="M11.8348 14.1866C11.8344 13.6954 12.2031 13.1495 12.6583 12.9671L26.7311 7.32999C27.1862 7.14765 27.5555 7.39801 27.5559 7.88917L27.5645 20.4289C27.5649 20.9201 27.2206 21.4734 26.7654 21.6557L11.6354 27.7164L11.8348 14.1866Z" fill="url(#paint0_linear_467_3889)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.5826 27.7371L11.6307 20.7927L18.9189 17.8733C19.5155 17.6343 20.3432 17.8339 20.7677 18.3191L23.7172 21.6901C24.1417 22.1753 24.0023 22.7623 23.4057 23.0013L11.605 27.7283C11.5976 27.7313 11.5901 27.7342 11.5826 27.7371Z" fill="url(#paint1_linear_467_3889)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11.7484 20.7274L7.31821 22.5021C6.73255 22.7367 6.59684 23.316 7.01509 23.796L9.92104 27.131C10.3341 27.6051 11.1329 27.805 11.7167 27.584L11.7484 20.7274Z" fill="url(#paint2_linear_467_3889)"/>
    <path d="M25.2733 22.2539C25.2022 22.2583 24.5249 22.0238 24.2408 21.8607C24.1395 21.8025 23.967 21.6983 23.9045 21.6582C23.7194 21.5397 23.3848 21.2759 23.23 21.1577L23.3777 23.0132L25.2733 22.2539Z" fill="white"/>
    <path d="M11.5829 27.7375C11.1089 27.9273 10.2588 27.5722 9.86176 27.0617C10.2727 27.4266 10.9017 27.2886 11.1912 27.0443C11.7259 26.5931 11.7593 25.6156 11.7291 25.255L12.9204 27.2017C12.8837 27.2082 12.4429 27.393 11.5829 27.7375Z" fill="url(#paint3_linear_467_3889)"/>
    <defs>
      <linearGradient id="paint0_linear_467_3889" x1="26.4926" y1="7.42549" x2="20.9216" y2="31.7235" gradientUnits="userSpaceOnUse">
        <stop stop-color="#7ABFFF"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
      <linearGradient id="paint1_linear_467_3889" x1="26.4524" y1="7.3076" x2="20.7805" y2="31.8531" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
      <linearGradient id="paint2_linear_467_3889" x1="8.11698" y1="23.3297" x2="10.2931" y2="27.3939" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="0.5625" stop-color="#BBD8FF"/>
        <stop offset="1" stop-color="#98C5FF"/>
      </linearGradient>
      <linearGradient id="paint3_linear_467_3889" x1="11.8269" y1="24.8363" x2="12.5333" y2="27.2052" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
    </defs>
  </svg>`
  },
  {
    title:'เว็บไซต์',
    desc:'สร้างและออกแบบเว็บไซต์',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
      <rect width="36" height="36" rx="7" fill='white'/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0014 18.9473C29.1869 19.141 29.0496 19.4625 28.7814 19.4625H21.9731C21.9226 19.4625 21.8817 19.5034 21.8817 19.5538V24.5443C21.8817 24.6834 21.7875 24.8048 21.6528 24.8393L11.0125 27.5649C10.9547 27.5797 10.8985 27.5361 10.8985 27.4764L10.8985 21.2297C10.8985 21.0906 10.9927 20.9692 11.1275 20.9347L17.641 19.2662C17.7095 19.2486 17.733 19.1632 17.6829 19.1132L7.08969 8.51992C6.89783 8.32806 7.03372 8 7.30505 8H18.4799C18.5048 8 18.5286 8.01017 18.5458 8.02816L29.0014 18.9473Z" fill="#1A1A1A"/>
    </svg>`
  },
  {
    title:'Projects Manager',
    desc:'จัดการงานและโปรเจกต์',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="7" fill="#FF4A00"/>
      <path d="M28.8283 16.1667H22.4172L26.9584 11.6215C26.5958 11.125 26.1951 10.6476 25.7754 10.2083C25.3365 9.7691 24.8786 9.36806 24.3634 9.02431L19.8222 13.5694V7.15278C19.2307 7.05729 18.6201 7 17.9905 7H17.9714C17.3417 7 16.7311 7.05729 16.1396 7.15278V13.5694L11.5984 9.02431C11.1023 9.38715 10.6253 9.78819 10.1865 10.2083C9.74761 10.6476 9.366 11.1059 9.00347 11.6215L13.5638 16.1667H7.15265C7.15265 16.1667 7 17.3698 7 18C7 18.6302 7.05724 19.2413 7.15265 19.8333H13.5638L9.02255 24.3785C9.72853 25.3715 10.6062 26.25 11.6175 26.9757L16.1587 22.4306V28.8472C16.7502 28.9427 17.3608 29 17.9905 29H18.0095C18.6392 29 19.2498 28.9427 19.8413 28.8472V22.4306L24.3825 26.9757C24.8786 26.6128 25.3556 26.2118 25.7944 25.7917C26.2333 25.3524 26.634 24.8941 26.9774 24.3785L22.4363 19.8333H28.8474C28.9428 19.2413 29 18.6302 29 18V17.9809C28.9809 17.3698 28.9428 16.7587 28.8283 16.1667ZM20.7381 18.0191C20.7381 18.8403 20.5854 19.6233 20.3183 20.349C19.5932 20.6163 18.8109 20.7691 17.9905 20.7691C17.17 20.7691 16.3877 20.6163 15.6626 20.349C15.3955 19.6233 15.2428 18.8403 15.2428 18.0191V18C15.2428 17.1788 15.3955 16.3958 15.6626 15.6701C16.3877 15.4028 17.17 15.25 17.9905 15.25C18.8109 15.25 19.5932 15.4028 20.3183 15.6701C20.5854 16.3958 20.7381 17.1788 20.7381 18.0191Z" fill="white"/>
    </svg>`
  },
  {
    title:'Canvas',
    desc:'ระบบออกแบบ Graphic',
    icon:`<svg width='36' height='36' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="7" fill="#7000FF"/>
      <path d="M18.2416 8.56352C17.5258 8.02219 16.6261 7.8616 15.7717 8.12206L9.9919 9.88424C8.8012 10.2475 8.00073 11.34 8.00073 12.6039V25.1588C8.00073 26.0654 8.4111 26.8956 9.12675 27.4361C9.84253 27.9775 10.7432 28.138 11.5967 27.8776L15.9113 26.5617C15.7764 26.1095 15.7081 25.6376 15.7081 25.1588V19.4571C15.7081 18.2598 16.1377 17.1162 16.9199 16.239C17.494 15.5929 18.2387 15.1161 19.071 14.8616L19.3676 14.7755V10.8417C19.3676 9.93511 18.9573 9.10492 18.2415 8.56352H18.2416Z" fill="white"/>
      <path d="M29.0005 17.6953V23.397C29.0005 24.66 28.201 25.7535 27.0094 26.1158L21.2296 27.878C20.9618 27.9602 20.6892 28.0004 20.4195 28.0004C19.8289 28.0004 19.2509 27.8086 18.7596 27.4365C18.5352 27.2662 18.3406 27.0694 18.1807 26.8491C17.9861 26.5848 17.8406 26.2901 17.7491 25.9739C17.7481 25.9739 17.7472 25.9739 17.7462 25.9748L17.7481 25.9729C17.674 25.7134 17.6335 25.4403 17.6335 25.1593V19.4575C17.6335 18.8721 17.805 18.3229 18.1075 17.8666C18.41 17.4104 18.8435 17.0462 19.3675 16.8298C19.4513 16.7956 19.5371 16.7642 19.6248 16.7378L20.3318 16.5224L25.4046 14.9756C26.259 14.7151 27.1588 14.8757 27.8745 15.4171C28.5903 15.9585 29.0006 16.7887 29.0006 17.6953H29.0005Z" fill="white"/>
    </svg>`
  },
]

$(document).ready(function(){
  $('#upper-menu').html(upperItems.map(item => {
    return `
      <a href="${item.link}" class="menulink-btn">
        ${item.icon}
        ${item.title}
      </a>
    `
  }).join(''))

  $('#site-name').html(window.location.hostname)

  $('#modal-menus-trigger').html(`
    <a href="" class='modal-menus-trigger-btn'>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M0 6C0 2.68629 2.68629 0 6 0H30C33.3137 0 36 2.68629 36 6V30C36 33.3137 33.3137 36 30 36H6C2.68629 36 0 33.3137 0 30V6Z" fill="black"/>
        <g clip-path="url(#clip0_569_4483)">
        <path d="M15.5832 6.64952L9.44197 10.0948C8.02826 10.8871 7.15723 12.3527 7.15723 13.9381V20.8643C7.15723 22.4497 8.02826 23.9154 9.44197 24.7077L15.6142 28.1704C17.0279 28.9635 18.7692 28.9635 20.182 28.1704L24.0247 26.0155L15.6191 21.2498C14.216 20.4543 13.3531 18.995 13.3531 17.4159V10.4826C13.3531 8.79565 14.2803 7.42121 15.5857 6.66776C15.6207 6.64714 15.6126 6.63286 15.5832 6.64952Z" fill="url(#paint0_linear_569_4483)"/>
        <path d="M28.6944 13.8999L28.6977 20.7849C28.6977 20.8182 28.6798 20.8174 28.6798 20.7777C28.6594 19.3042 24.424 16.6393 22.919 15.7963C22.919 15.7963 22.255 15.1419 21.8158 14.762C21.3766 14.3814 21.3554 14.3639 21.0279 14.1529C20.7435 13.9705 20.4477 13.8278 20.2579 13.7358L20.2399 13.727C20.0509 13.6358 19.4838 13.3924 19.4838 13.3924C17.529 12.7238 16.9619 12.6627 15.8277 13.5145C15.8277 13.5145 14.5036 14.762 13.9993 15.8875C13.4949 17.0129 13.367 18.0019 13.5894 18.6253C13.6008 18.6562 13.6081 18.6855 13.6139 18.7133C14.2698 20.3281 14.7261 20.5842 15.8725 21.2274C15.9573 21.2758 16.0469 21.3258 16.1406 21.3789L19.0405 22.7177L24.4615 24.6338L20.0248 28.1703C18.6119 28.9634 16.8699 28.9634 15.457 28.1703L9.28393 24.7076C7.87104 23.9153 7 22.4496 7 20.8642V13.938C7 12.3526 7.87104 10.8869 9.28393 10.0946L15.4252 6.64939C15.4553 6.63274 15.4635 6.64701 15.4284 6.66763C15.3576 6.70808 15.2867 6.76598 15.2158 6.83894L15.655 6.59308C17.0695 5.80156 18.8124 5.80236 20.2269 6.59467L26.4064 10.0582C27.821 10.8505 28.6936 12.3153 28.6944 13.8999Z" fill="url(#paint1_linear_569_4483)"/>
        <path d="M9.56323 24.8805L15.7558 28.3654C17.1834 29.1609 18.9866 29.1451 20.4157 28.348L26.6548 24.8671C28.084 24.0692 28.964 22.5972 28.9648 21.0039L28.968 14.0468C28.9689 12.4542 28.0897 10.9822 26.6621 10.1867L22.7803 8.02313L22.7306 17.5221C22.7225 19.1075 21.8433 20.5708 20.4206 21.3639L14.1743 24.8496C12.6538 25.6974 10.9484 25.6046 9.61049 24.8805C9.57382 24.8607 9.53308 24.8639 9.56323 24.8805Z" fill="url(#paint2_linear_569_4483)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_569_4483" x1="15.549" y1="6.64221" x2="15.6934" y2="28.7648" gradientUnits="userSpaceOnUse">
        <stop stop-color="#AD7EE1"/>
        <stop offset="1" stop-color="#2A64BB"/>
        </linearGradient>
        <linearGradient id="paint1_linear_569_4483" x1="7" y1="10.392" x2="29.2559" y2="23.4194" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#A2A2A2"/>
        </linearGradient>
        <linearGradient id="paint2_linear_569_4483" x1="12.6244" y1="28.954" x2="27.2916" y2="9.0513" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white"/>
        </linearGradient>
        <clipPath id="clip0_569_4483">
        <rect width="22" height="23" fill="white" transform="translate(7 5.99994)"/>
        </clipPath>
        </defs>
      </svg>
      <div>
        <h2 class='modal-app'>zaviago.com</h2>
        <p>${window.location.hostname}</p>
      </div>
    </a>
  ${modalMenus.map(menu => {
    return `<a href="" class='modal-menus-trigger-btn'>
        ${menu.icon}
        <div>
          <h2>${menu.title}</h2>
          <p>${menu.desc}</p>
        </div>
      </a>`
  }).join('')}`)
  
  $('#lower-menu').html(sidebarMenus.forEach(menu => {
    if (menu.submenus){
      $('#lower-menu').append(`
        <button class="main-menu with-submenu">
          ${menu.name}
        </button>
        <div class="submenus active">
          ${menu.submenus.map(submenu => {
            return `
              <button class="menulink-btn ${submenu.inner_submenus ? 'with-innersubmenu' : ''}">
                ${submenu.icon}
                ${submenu.title}
              </button>
              ${submenu.inner_submenus ? `
                <div class="inner-submenus active">
                  ${submenu.inner_submenus.map(inner_submenu => {
                    return `
                      <a href="${inner_submenu.link}" class='menulink-btn inner-submenu ${location.pathname.includes(inner_submenu.link) ? "active" : ""}'>
                        ${inner_submenu.icon}
                        ${inner_submenu.title}
                      </a>
                    `
                  }).join('')}
                </div>
              ` : ''}
            `
          }).join('')}
      `)
    } else {
      $('#lower-menu').append(`
        <button class="main-menu">
          ${menu.name}
        </button>
      `)
    }
  }))

  var modalButton = $('#trigger')
  var modalMenu = $('#modal-menus-trigger');

  modalButton.on('click', function (event) {
    modalMenu.show();
    event.stopPropagation();
  });

  $(document).on('click', function (event) {
    if (!modalMenu.is(event.target) && modalMenu.has(event.target).length === 0) {
      modalMenu.hide();
    }
  });
})
