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
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
    <rect y="0.5" width="30" height="30" rx="8" fill="#0A5FD9"/>
    <path d="M22.8302 7.57273C22.8308 7.57421 22.8316 7.57555 22.8328 7.57669C23.1331 7.88299 23.3597 8.2533 23.4955 8.65967C23.6315 9.06681 23.6729 9.49947 23.6164 9.92489C23.5598 10.3503 23.407 10.7573 23.1693 11.1151C22.9316 11.4729 22.6154 11.7721 22.2445 11.99C19.5712 13.5568 16.4517 14.1944 13.3756 13.8027C10.378 13.421 7.721 12.2691 5.55174 10.1778C5.4949 10.123 5.33321 9.99258 5.33301 9.85785C5.33293 9.80132 5.34568 9.75063 5.36382 9.70716C5.41761 9.57826 5.53359 9.48793 5.63143 9.38824L8.93399 6.02315C9.01415 5.94147 9.09173 5.83289 9.20617 5.83289C9.31619 5.83289 9.39142 5.90035 9.4251 5.93393C10.7259 7.20092 12.2539 7.9467 14.059 8.18152C15.8961 8.42051 17.7608 8.04756 19.3633 7.12069C19.9088 6.80026 20.5459 6.6705 21.1738 6.75197C21.8008 6.83335 22.3827 7.12076 22.8275 7.56874C22.8287 7.56988 22.8296 7.57124 22.8302 7.57273Z" fill="white"/>
    <path d="M22.8127 7.5606C22.283 7.03125 21.5649 6.73389 20.8161 6.73389C20.0673 6.73389 19.3491 7.03125 18.8195 7.5606L6.83355 19.5465C6.3042 20.0761 6.00684 20.7943 6.00684 21.5431C6.00684 22.2919 6.3042 23.0101 6.83355 23.5397L-nan -nanL6.83355 23.5397C7.09568 23.802 7.40693 24.0101 7.74952 24.1521C8.0921 24.2941 8.45931 24.3672 8.83015 24.3672C9.201 24.3672 9.5682 24.2941 9.91079 24.1521C10.2534 24.0101 10.5646 23.802 10.8268 23.5397L22.8127 11.5538C23.075 11.2917 23.2831 10.9804 23.4251 10.6378C23.5671 10.2953 23.6401 9.92805 23.6401 9.5572C23.6401 9.18636 23.5671 8.81915 23.4251 8.47657C23.2831 8.13398 23.075 7.82273 22.8127 7.5606Z" fill="url(#paint0_linear_1351_7820)"/>
    <path d="M6.81442 23.5248C6.5142 23.2183 6.28766 22.8475 6.15197 22.4405C6.01627 22.0334 5.97499 21.6009 6.03124 21.1755C6.08749 20.7501 6.23981 20.3431 6.47664 19.9854C6.71347 19.6276 7.02861 19.3284 7.39818 19.1105C10.0631 17.5439 13.1727 16.9064 16.239 17.298C19.2343 17.6805 22.0228 19.0238 24.1879 21.1235C24.2614 21.1924 24.2782 21.2092 24.2782 21.3102C24.2782 21.4548 24.127 21.5478 24.0269 21.6521L21.0448 24.7598C20.9998 24.8066 20.9565 24.8547 20.9102 24.9001C20.8093 24.9988 20.6121 25.1668 20.4385 25.1668C20.1927 25.1668 19.9844 24.9321 19.849 24.8131C18.6035 23.7193 17.2083 23.1347 15.5567 22.9192C13.7255 22.6802 11.8667 23.0531 10.2693 23.98C9.72496 24.2996 9.08952 24.4284 8.46369 24.346C7.83787 24.2635 7.25745 23.9745 6.81442 23.5248Z" fill="url(#paint1_linear_1351_7820)"/>
    <defs>
      <linearGradient id="paint0_linear_1351_7820" x1="23.4579" y1="8.44648" x2="6.6169" y2="23.4412" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="0.831909" stop-color="#2785FF" stop-opacity="0.79"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1351_7820" x1="6.23336" y1="21.3253" x2="29.1169" y2="23.4413" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="0.606729" stop-color="white"/>
        <stop offset="1" stop-color="#0457D1"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
    </defs>
  </svg>`,
  enabled:true
  },
  {
    title:'บล็อกและบทความ',
    desc:'สร้างข่าวสารและเขียนบทความ',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
    <g clip-path="url(#clip0_1351_7834)">
      <path d="M24.1667 0.5H5.83333C2.61167 0.5 0 3.11167 0 6.33333V24.6667C0 27.8883 2.61167 30.5 5.83333 30.5H24.1667C27.3883 30.5 30 27.8883 30 24.6667V6.33333C30 3.11167 27.3883 0.5 24.1667 0.5Z" fill="#16794C"/>
      <path d="M15.75 7C13.4875 7 11.4257 7.85872 9.87233 9.268L13.914 11.1333C14.2588 11.2925 14.6342 11.3749 15.014 11.3749H19.25C19.7333 11.3749 20.125 11.7667 20.125 12.2499V19.2499C20.125 19.7332 19.7333 20.1249 19.25 20.1249H12.25C11.7667 20.1249 11.375 19.7332 11.375 19.2499V15.0139C11.375 14.6341 11.2926 14.2588 11.1334 13.9139L9.268 9.87242C7.85872 11.4257 7 13.4875 7 15.75C7 20.5825 10.9175 24.5 15.75 24.5C20.5825 24.5 24.5 20.5825 24.5 15.75C24.5 10.9175 20.5825 7 15.75 7Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_1351_7834">
        <rect width="30" height="30" fill="white" transform="translate(0 0.5)"/>
      </clipPath>
    </defs>
  </svg>`,
  enabled:false
  },
  {
    title:'CRM',
    desc:'จัดการและดูข้อมูลลูกค้าต่างๆ',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
    <g clip-path="url(#clip0_1351_7844)">
      <path d="M24.1667 0.5H5.83333C2.61167 0.5 0 3.11167 0 6.33333V24.6667C0 27.8883 2.61167 30.5 5.83333 30.5H24.1667C27.3883 30.5 30 27.8883 30 24.6667V6.33333C30 3.11167 27.3883 0.5 24.1667 0.5Z" fill="#FFBB00"/>
      <path d="M11.144 12.9468C11.1438 12.6087 11.3976 12.2329 11.7109 12.1074L21.3974 8.22731C21.7107 8.10181 21.9649 8.27414 21.9651 8.61221L21.9711 17.2435C21.9713 17.5815 21.7343 17.9624 21.421 18.0879L11.0068 22.2596L11.144 12.9468Z" fill="url(#paint0_linear_1351_7844)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2196 22.2736L11.2527 17.4937L16.2693 15.4842C16.6799 15.3197 17.2496 15.4571 17.5418 15.791L19.572 18.1114C19.8642 18.4453 19.7682 18.8494 19.3576 19.0139L11.235 22.2675C11.2299 22.2696 11.2248 22.2716 11.2196 22.2736Z" fill="url(#paint1_linear_1351_7844)"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3339 17.4487L8.28453 18.6702C7.88141 18.8317 7.788 19.2305 8.07589 19.5609L10.0761 21.8564C10.3604 22.1827 10.9102 22.3203 11.3121 22.1682L11.3339 17.4487Z" fill="url(#paint2_linear_1351_7844)"/>
      <path d="M20.6425 18.4994C20.5935 18.5024 20.1274 18.3411 19.9318 18.2288C19.8621 18.1887 19.7433 18.117 19.7003 18.0894C19.5729 18.0078 19.3426 17.8263 19.236 17.7449L19.3377 19.0221L20.6425 18.4994Z" fill="white"/>
      <path d="M11.2194 22.2738C10.8932 22.4045 10.308 22.16 10.0347 21.8086C10.3176 22.0598 10.7505 21.9648 10.9498 21.7967C11.3178 21.4862 11.3408 20.8133 11.32 20.5651L12.1401 21.905C12.1148 21.9095 11.8114 22.0367 11.2194 22.2738Z" fill="url(#paint3_linear_1351_7844)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear_1351_7844" x1="21.2333" y1="8.29305" x2="17.3986" y2="25.0177" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFDF88"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
      <linearGradient id="paint1_linear_1351_7844" x1="21.4547" y1="8.21167" x2="17.5507" y2="25.1067" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
      <linearGradient id="paint2_linear_1351_7844" x1="8.83434" y1="19.2399" x2="10.3322" y2="22.0374" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="0.5625" stop-color="#FFBB00"/>
      </linearGradient>
      <linearGradient id="paint3_linear_1351_7844" x1="11.3874" y1="20.2769" x2="11.8736" y2="21.9075" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white"/>
      </linearGradient>
      <clipPath id="clip0_1351_7844">
        <rect width="30" height="30" fill="white" transform="translate(0 0.5)"/>
      </clipPath>
    </defs>
  </svg>`,
  enabled:false
  },
  {
    title:'เว็บไซต์',
    desc:'สร้างและออกแบบเว็บไซต์',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36">
      <rect width="36" height="36" rx="7" fill='white'/>
      <path fillRule="evenodd" clipRule="evenodd" d="M29.0014 18.9473C29.1869 19.141 29.0496 19.4625 28.7814 19.4625H21.9731C21.9226 19.4625 21.8817 19.5034 21.8817 19.5538V24.5443C21.8817 24.6834 21.7875 24.8048 21.6528 24.8393L11.0125 27.5649C10.9547 27.5797 10.8985 27.5361 10.8985 27.4764L10.8985 21.2297C10.8985 21.0906 10.9927 20.9692 11.1275 20.9347L17.641 19.2662C17.7095 19.2486 17.733 19.1632 17.6829 19.1132L7.08969 8.51992C6.89783 8.32806 7.03372 8 7.30505 8H18.4799C18.5048 8 18.5286 8.01017 18.5458 8.02816L29.0014 18.9473Z" fill="#1A1A1A"/>
    </svg>`,
  enabled:false
  },
  {
    title:'Projects Manager',
    desc:'จัดการงานและโปรเจกต์',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="7" fill="#FF4A00"/>
      <path d="M28.8283 16.1667H22.4172L26.9584 11.6215C26.5958 11.125 26.1951 10.6476 25.7754 10.2083C25.3365 9.7691 24.8786 9.36806 24.3634 9.02431L19.8222 13.5694V7.15278C19.2307 7.05729 18.6201 7 17.9905 7H17.9714C17.3417 7 16.7311 7.05729 16.1396 7.15278V13.5694L11.5984 9.02431C11.1023 9.38715 10.6253 9.78819 10.1865 10.2083C9.74761 10.6476 9.366 11.1059 9.00347 11.6215L13.5638 16.1667H7.15265C7.15265 16.1667 7 17.3698 7 18C7 18.6302 7.05724 19.2413 7.15265 19.8333H13.5638L9.02255 24.3785C9.72853 25.3715 10.6062 26.25 11.6175 26.9757L16.1587 22.4306V28.8472C16.7502 28.9427 17.3608 29 17.9905 29H18.0095C18.6392 29 19.2498 28.9427 19.8413 28.8472V22.4306L24.3825 26.9757C24.8786 26.6128 25.3556 26.2118 25.7944 25.7917C26.2333 25.3524 26.634 24.8941 26.9774 24.3785L22.4363 19.8333H28.8474C28.9428 19.2413 29 18.6302 29 18V17.9809C28.9809 17.3698 28.9428 16.7587 28.8283 16.1667ZM20.7381 18.0191C20.7381 18.8403 20.5854 19.6233 20.3183 20.349C19.5932 20.6163 18.8109 20.7691 17.9905 20.7691C17.17 20.7691 16.3877 20.6163 15.6626 20.349C15.3955 19.6233 15.2428 18.8403 15.2428 18.0191V18C15.2428 17.1788 15.3955 16.3958 15.6626 15.6701C16.3877 15.4028 17.17 15.25 17.9905 15.25C18.8109 15.25 19.5932 15.4028 20.3183 15.6701C20.5854 16.3958 20.7381 17.1788 20.7381 18.0191Z" fill="white"/>
    </svg>
    `,
    enabled:false
  },
  {
    title:'Canvas',
    desc:'ระบบออกแบบ Graphic',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
    <g clip-path="url(#clip0_1351_7882)">
      <path d="M24.1667 0.5H5.83333C2.61167 0.5 0 3.11167 0 6.33333V24.6667C0 27.8883 2.61167 30.5 5.83333 30.5H24.1667C27.3883 30.5 30 27.8883 30 24.6667V6.33333C30 3.11167 27.3883 0.5 24.1667 0.5Z" fill="#7000FF"/>
      <path d="M15.2011 7.63623C14.6046 7.18512 13.8548 7.05129 13.1428 7.26834L8.3263 8.73683C7.33405 9.03954 6.66699 9.94996 6.66699 11.0032V21.4656C6.66699 22.2211 7.00897 22.913 7.60534 23.3634C8.20183 23.8145 8.95238 23.9483 9.66363 23.7313L13.2591 22.6347C13.1467 22.2579 13.0898 21.8646 13.0898 21.4656V16.7142C13.0898 15.7165 13.4478 14.7635 14.0996 14.0325C14.5781 13.494 15.1986 13.0967 15.8922 12.8846L16.1394 12.8129V9.53471C16.1394 8.77922 15.7976 8.08739 15.2011 7.63623Z" fill="white"/>
      <path d="M24.1668 15.2457V19.9971C24.1668 21.0496 23.5006 21.9609 22.5076 22.2628L17.6911 23.7314C17.4679 23.7999 17.2408 23.8334 17.016 23.8334C16.5238 23.8334 16.0422 23.6735 15.6328 23.3634C15.4458 23.2215 15.2836 23.0575 15.1503 22.8739C14.9882 22.6536 14.8669 22.408 14.7907 22.1445C14.7898 22.1445 14.7891 22.1445 14.7883 22.1453L14.7898 22.1437C14.7281 21.9275 14.6943 21.6999 14.6943 21.4657V16.7142C14.6943 16.2264 14.8373 15.7687 15.0893 15.3885C15.3414 15.0083 15.7027 14.7048 16.1393 14.5245C16.2092 14.496 16.2807 14.4698 16.3538 14.4478L16.9429 14.2683L21.1703 12.9793C21.8823 12.7622 22.6321 12.896 23.2285 13.3472C23.825 13.7984 24.1668 14.4902 24.1668 15.2457Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_1351_7882">
        <rect width="30" height="30" fill="white" transform="translate(0 0.5)"/>
      </clipPath>
    </defs>
  </svg>`,
  enabled:false
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
      <div class='modal-menus-desc'>
        <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 6.5C0 3.18629 2.68629 0.5 6 0.5H24C27.3137 0.5 30 3.18629 30 6.5V24.5C30 27.8137 27.3137 30.5 24 30.5H6C2.68629 30.5 0 27.8137 0 24.5V6.5Z" fill="black"/>
          <g clip-path="url(#clip0_1351_7803)">
          <path d="M12.9855 6.0413L7.86782 8.91234C6.68973 9.5726 5.96387 10.794 5.96387 12.1152V17.887C5.96387 19.2081 6.68973 20.4295 7.86782 21.0898L13.0113 23.9754C14.1894 24.6363 15.6405 24.6363 16.8179 23.9754L20.0201 22.1796L13.0154 18.2082C11.8462 17.5453 11.1271 16.3292 11.1271 15.0133V9.23553C11.1271 7.82975 11.8998 6.68438 12.9876 6.05651C13.0168 6.03932 13.01 6.02743 12.9855 6.0413Z" fill="url(#paint0_linear_1351_7803)"/>
          <path d="M23.9117 12.0833L23.9144 17.8208C23.9144 17.8485 23.8995 17.8479 23.8995 17.8148C23.8825 16.5868 20.353 14.3662 19.0989 13.6636C19.0989 13.6636 18.5455 13.1183 18.1795 12.8018C17.8135 12.4845 17.7958 12.47 17.5229 12.2942C17.2859 12.1422 17.0394 12.0232 16.8812 11.9465L16.8663 11.9393C16.7087 11.8633 16.2362 11.6603 16.2362 11.6603C14.6072 11.1032 14.1346 11.0523 13.1894 11.7621C13.1894 11.7621 12.086 12.8018 11.6657 13.7396C11.2454 14.6774 11.1388 15.5016 11.3242 16.0211C11.3337 16.0469 11.3398 16.0713 11.3446 16.0945C11.8912 17.4401 12.2714 17.6536 13.2268 18.1896C13.2974 18.2299 13.3721 18.2715 13.4502 18.3158L15.8668 19.4314L20.3842 21.0282L16.687 23.9753C15.5096 24.6362 14.0579 24.6362 12.8805 23.9753L7.73628 21.0897C6.55887 20.4294 5.83301 19.2081 5.83301 17.8869V12.1151C5.83301 10.7939 6.55887 9.5725 7.73628 8.91225L12.854 6.04121C12.8791 6.02733 12.8859 6.03923 12.8567 6.05641C12.7976 6.09012 12.7386 6.13837 12.6795 6.19917L13.0455 5.99429C14.2242 5.33469 15.6766 5.33535 16.8554 5.99561L22.005 8.88184C23.1838 9.5421 23.911 10.7628 23.9117 12.0833Z" fill="url(#paint1_linear_1351_7803)"/>
          <path d="M7.96871 21.2339L13.1292 24.138C14.3188 24.8009 15.8215 24.7876 17.0125 24.1234L22.2117 21.2226C23.4027 20.5578 24.136 19.3311 24.1367 18.0033L24.1394 12.2057C24.1401 10.8786 23.4074 9.65193 22.2178 8.98902L18.983 7.18604L18.9415 15.1019C18.9348 16.423 18.2021 17.6424 17.0165 18.3034L11.8112 21.2081C10.5442 21.9146 9.12303 21.8373 8.00809 21.2339C7.97753 21.2174 7.94358 21.22 7.96871 21.2339Z" fill="url(#paint2_linear_1351_7803)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_1351_7803" x1="12.957" y1="6.03522" x2="13.0773" y2="24.4707" gradientUnits="userSpaceOnUse">
          <stop stop-color="#AD7EE1"/>
          <stop offset="1" stop-color="#2A64BB"/>
          </linearGradient>
          <linearGradient id="paint1_linear_1351_7803" x1="5.83301" y1="9.16007" x2="24.3796" y2="20.0162" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="#A2A2A2"/>
          </linearGradient>
          <linearGradient id="paint2_linear_1351_7803" x1="10.5197" y1="24.6284" x2="22.7423" y2="8.04284" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white"/>
          </linearGradient>
          <clipPath id="clip0_1351_7803">
          <rect width="18.3333" height="19.1667" fill="white" transform="translate(5.83301 5.5)"/>
          </clipPath>
          </defs>
        </svg>
        <div>
          <h2 class='modal-app'>zaviago.com</h2>
          <p class='modal-app-host'>${window.location.hostname}</p>
        </div>
      </div>
    </a>
  ${modalMenus.map(menu => {
    return `<a href="" class='modal-menus-trigger-btn'>
        <div class='modal-menus-desc'>
          ${menu.icon}
          <div>
            <h2>${menu.title}</h2>
            <p>${menu.desc}</p>
          </div>
        </div>
        ${menu.enabled ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>` : ''}
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
    modalMenu.toggleClass('active');
    event.stopPropagation();
  });

  $(document).on('click', function (event) {
    if (!modalMenu.is(event.target) && modalMenu.has(event.target).length === 0) {
      modalMenu.removeClass('active');
    }
  });
})
