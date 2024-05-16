const upperItems = [
  {
    link:'/',
    title:'แดชบอร์ด',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hotel"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"/><path d="M8 7h.01"/><path d="M16 7h.01"/><path d="M12 7h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 11h.01"/><path d="M10 22v-6.5m4 0V22"/></svg>'
  },
  {
    link:'',
    title:'ตั้งค่า',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>'
  },
  {
    link:'',
    title:'ทีมงาน',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
  }
]

const sidebarMenus = [
  {
    label: 'สินค้า',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    submenu: [
      {
        label: "สินค้าของฉัน",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
        url: "/app/item"
      },
      {
        label: "เพิ่มสินค้าใหม่",
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>',
        url: "/app/item/new-item"
      },
      {
        label: "สินค้าในช่องทางต่างๆ",
        icon:'<svg style="transform:rotate(90deg)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-fork"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>',
        submenu: [
          {
            label: "Website Item",
            icon: `<div class="dot" style="background-color:#0A5FD9"></div>`,
            url: "/app/website-item"
          },
          {
            label: "Lazada",
            icon: `<div class="dot" style="background-color:#6100DD"></div>`,
            url: '/app/item?item_group=%5B"descendants+of+%28inclusive%29"%2C"Lazada"%5D'
          },
          {
            label: "TikTok",
            icon: `<div class="dot" style="background-color:#000000"></div>`,
            url: '/app/item?item_group=%5B"descendants+of+%28inclusive%29"%2C"Tiktok+Shop"%5D'
          },
          {
            label: "Shopee",
            icon: `<div class="dot" style="background-color:#FF6B00"></div>`,
            url: '/app/item?item_group=%5B"descendants+of+%28inclusive%29"%2C"Shopee"%5D'
          },
          {
            label: "Line MyShop",
            icon: `<div class="dot" style="background-color:#00BA1E"></div>`,
            url: '/app/item?item_group=%5B"descendants+of+%28inclusive%29"%2C"Line+MyShop"%5D'
          }
        ]
      },
      {
        label: "หมวดหมู่สินค้า",
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-tree"><path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M3 5a2 2 0 0 0 2 2h3"/><path d="M3 3v13a2 2 0 0 0 2 2h3"/></svg>',
        url: "/app/item-group/view/tree"
      },
      {
        label: "ยี่ห้อสินค้า",
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baseline"><path d="M4 20h16"/><path d="m6 16 6-12 6 12"/><path d="M8 12h8"/></svg>',
        url: "/app/brand"
      },
      {
        label:'คลังสินค้า',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-warehouse"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/></svg>',
        url: "/app/warehouse/view/tree"
      },
      {
        label:'คุณลักษณะของสินค้า',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tags"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"/></svg>',
        url: "/app/item-attribute"
      }
    ]
  },
  {
    label: "การค้าขาย",
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
    submenu: [
      {
        label: "คำสั่งซื้อ",
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-pen"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"/><path d="M4 13.5V6a2 2 0 0 1 2-2h2"/></svg>',
        url: "/app/sales-invoice"
      },
      {
        label:'ช่องทางการขาย',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.55 10.23A9 9 0 1 1 8 4.94"/><path d="M8 10a5 5 0 1 0 8.9 2.02"/></svg>',
        submenu: [
          {
            label: "Website",
            icon: `<div class="dot" style="background-color:#0A5FD9"></div>`,
            url: "/app/sales-invoice?custom_channel=Website"
          },
          {
            label: "Lazada",
            icon: `<div class="dot" style="background-color:#6100DD"></div>`,
            url: "/app/sales-invoice?custom_channel=Lazada"
          },
          {
            label: "TikTok",
            icon: `<div class="dot" style="background-color:#000000"></div>`,
            url: "/app/sales-invoice?custom_channel=TikTok+Shop"
          },
          {
            label: "Shopee",
            icon: `<div class="dot" style="background-color:#FF6B00"></div>`,
            url: "/app/sales-invoice?custom_channel=Shopee"
          },
          {
            label: "Line MyShop",
            icon: `<div class="dot" style="background-color:#00BA1E"></div>`,
            url: "/app/sales-invoice?custom_channel=LINE+MyShop"
          }
        ]
      },
      {
        label:'การแจ้งโอนเงิน',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',
        url: "/app/payment-entry"
      },
      // {
      //   label:'การจัดส่ง',
      //   icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-plus"><path d="M16 16h6"/><path d="M19 13v6"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>',
      //   url: "/app/sales-invoice?status=Return"
      // },
      {
        label:'คืนสินค้า',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-receipt"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>',
        url:'/app/sales-invoice?status=%5B"in"%2C%5B"Return"%2C"Cancelled"%2Cnull%5D%5D'
      },
    ]
  },
  {
    label:'ลูกค้า',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>',
    submenu: [
      {
        label:'ลูกค้า',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        url:'/app/customer'
      },
      {
        label:'แดชบอร์ดลูกค้า',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-left"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>',
        url: "/app/dashboard-view/Customers"
      },
      {
        label:'กลุ่มลูกค้า',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-user"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>',
        url: "/app/customer-group/view/tree"
      },
    ]
  },
  {
    label:'การตลาด',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>',
    badgePrefix:`<div style="background: linear-gradient(96.29deg, #C7BEFF 5.86%, #FFD3FB 104.34%);color:#460051" class='badge-prefix'>
      New
    </div>`,
    submenu: [
      {
        label:'Reduced',
        bgColor:'#FEF8FF',
        badgeSuffix:`<div style="background:linear-gradient(96.29deg, #FAECFF 5.86%, #FFD0FA 104.34%);color:#AF3BD4" class='badge-suffix'>
          Pro
        </div>`,
        icon:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" rx="3" fill="url(#paint0_linear_2950_13728)"/>
          <path d="M7.77799 3.55566C6.57133 3.55566 5.47168 4.01365 4.64325 4.76526L6.79879 5.7601C6.9827 5.84499 7.1829 5.88895 7.38548 5.88895H9.64466C9.9024 5.88895 10.1113 6.09788 10.1113 6.35562V10.0889C10.1113 10.3467 9.9024 10.5556 9.64466 10.5556H5.91133C5.65359 10.5556 5.44466 10.3467 5.44466 10.0889V7.82977C5.44466 7.62719 5.4007 7.42704 5.31581 7.24308L4.32093 5.08764C3.56931 5.91602 3.11133 7.01567 3.11133 8.22233C3.11133 10.7997 5.20064 12.889 7.77799 12.889C10.3553 12.889 12.4447 10.7997 12.4447 8.22233C12.4447 5.64498 10.3553 3.55566 7.77799 3.55566Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_2950_13728" x1="0" y1="-1.33333" x2="15.1111" y2="18.4444" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF5786"/>
          <stop offset="0.583333" stop-color="#CA41C3"/>
          <stop offset="1" stop-color="#9033E5"/>
          </linearGradient>
          </defs>
        </svg>`,
        submenu: [
          // {
          //   label:'แดชบอร์ด',
          //   icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-big"><path d="M3 3v18h18"/><rect width="4" height="7" x="7" y="10" rx="1"/><rect width="4" height="12" x="15" y="5" rx="1"/></svg>',
          //   url:''
          // },
          {
            label:'โค้ดส่วนลด',
            icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>',
            url:'/app/coupon-code'
          },
          {
            label:'จัดการแคมเปญ',
            icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
            submenu: [
              {
                label: "โปรโมชันส่วนลด",
                icon: `<div class="dot"></div>`,
                url: "/app/promotional-scheme"
              },
              {
                label: "Bundle Deal",
                icon: `<div class="dot"></div>`,
                url: "/app/product-bundle"
              },
              {
                label: "Add-on Deal",
                icon: `<div class="dot"></div>`,
                url: "/app/pricing-rule"
              },
              {
                label: "Flash Sale ในร้านค้า",
                icon: `<div class="dot"></div>`,
                url: "/app/pricing-rule"
              },
            ]
          },
        ]
      },
    ]
  },
  {
    label: "ระบบแต้มและรางวัล",
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>',
    submenu: [
      {
        label:'Rewardful',
        bgColor:'#FFFAF8',
        badgeSuffix:`<div style="background: linear-gradient(102.81deg, #FFEDE0 0.4%, #FFD4CB 104.74%);color:#FF7009" class='badge-suffix'>
          Pro
        </div>`,
        icon:`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" rx="3" fill="#FF7009"/>
          <path d="M8.08385 8.95801C10.3309 8.95801 12.1728 10.6649 12.1677 13.1144L4.00001 13.1144C3.99542 10.666 5.83684 8.95801 8.08385 8.95801Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.55927 8.46391C9.31508 8.46152 11.148 6.18962 11.4895 5.56632C11.8544 4.90035 12.2823 4.1193 11.1287 3.48727C9.97515 2.85523 9.54723 3.63628 9.18236 4.30225C8.95735 4.71293 8.47768 6.05452 8.2924 7.10458C7.78688 6.16985 6.92518 5.06187 6.58636 4.7447C6.03198 4.22574 5.38181 3.61711 4.48287 4.5774C3.58394 5.53769 4.23411 6.14632 4.78848 6.66528C5.3297 7.17191 7.85241 8.49853 8.55927 8.46391Z" fill="white"/>
        </svg>`,
        submenu: [
          // {
          //   label:'แดชบอร์ด',
          //   icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-big"><path d="M3 3v18h18"/><rect width="4" height="7" x="7" y="10" rx="1"/><rect width="4" height="12" x="15" y="5" rx="1"/></svg>',
          //   url:''
          // },
          {
            label:'Loyalty Program',
            icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>',
            url:'/app/loyalty-program'
          },
          {
            label:'ระดับลูกค้า',
            icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
            url:'/app/item?type=reward'
          },
          {
            label:'ของรางวัล',
            icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',
            url:'/app/loyalty-point-entry/view/report'
          },
          // {
          //   label:'แลกซื้อผ่านแต้ม',
          //   icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-carrot"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"/><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"/><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"/></svg>',
          //   url:''
          // },
          // {
          //   label:'การแจกแต้ม',
          //   icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>',
          //   url:''
          // },
          // {
          //   label:'ตั้งค่าพอยท์',
          //   icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
          //   url:''
          // }
        ]
      },
    ]
  },
  {
    label: "การเงิน",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-line-chart"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    badgePrefix:`<div style="background: linear-gradient(96.29deg, #FFE5BE 5.86%, #F8FFD0 104.34%);color:#754600" class='badge-prefix'>
      Beta 0.1
    </div>`,
    submenu: [
      {
        label:'สมุดบัญชี',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-copy"><path d="M2 16V4a2 2 0 0 1 2-2h11"/><path d="M5 14H4a2 2 0 1 0 0 4h1"/><path d="M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12"/></svg>',
        tip:`
          <div style="background-color:#FFE8C0;color:#754600" class='menutip'>
            <svg style='width:40px' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
            หมายเหตุ: รายงานการเงินและบัญชีอยู่ในช่วงทดลองระบบ
          </div>
        `,
        submenu: [
          {
            label: "บัญชีแยกประเภททั่วไป",
            icon: `<div class="dot" style="background-color:#394047"></div>`,
            url: "/app/query-report/Balance%20Sheet"
          },
          {
            label: "บัญชีเงินรับ",
            icon: `<div class="dot" style="background-color:#394047"></div>`,
            url: "/app/query-report/Accounts%20Receivable"
          },
          {
            label: "บัญชีเงินจ่าย",
            icon: `<div class="dot" style="background-color:#394047"></div>`,
            url: "/app/query-report/Accounts%20Payable"
          },
        ]
      },
      {
        label:'งบการเงิน',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
        submenu: [
          {
            label: "งบดุลและฐานะการเงิน",
            icon: `<div class="dot"></div>`,
            url: "/app/query-report/Balance%20Sheet"
          },
          {
            label: "งบกำไรขาดทุน (P&L)",
            icon: `<div class="dot"></div>`,
            url: "/app/query-report/Profit%20and%20Loss%20Statement"
          },
          {
            label: "งบการเงินรวม",
            icon: `<div class="dot"></div>`,
            url: "/app/query-report/Consolidated%20Financial%20Statement"
          },
          {
            label: "งบกระแสเงินสด",
            icon: `<div class="dot"></div>`,
            url: "/app/query-report/Cash%20Flow"
          },
          {
            label: "งบทดลอง",
            icon: `<div class="dot"></div>`,
            url: "/app/query-report/Trial%20Balance"
          },
        ]
      },
      {
        label:'อัตรากำไรขั้นต้น',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><polyline points="10 2 10 10 13 7 16 10 16 2"/></svg>',
        url:'/app/query-report/Gross%20Profit?'
      }
    ]
  },
  {
    label:'การตั้งค่า',
    icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
    submenu: [
      {
        label:'ข้อมูลธุรกิจ',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
        url: "/app/company/Zaviago"
      },
      {
        label:'เว็บร้านค้า',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>',
        url: "/app/storefront-website-settings"
      },
      {
        label:'ขนส่งและการจัดส่ง',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
        url: "/app/shipping-rule"
      },
      {
        label:'อัตราภาษี',
        icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>',
        url: "/app/sales-taxes-and-charges-template"
      },
      // {
      //   label:'ตั้งค่าอีเมลแจ้งเตือน',
      //   icon:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mails"><rect width="16" height="13" x="6" y="4" rx="2"/><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"/><path d="M2 8v11c0 1.1.9 2 2 2h14"/></svg>',
      //   url: ""
      // },
    ]
  },
];

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
    </svg>`,
    enabled: true
  },
  {
    title:'บล็อกและบทความ',
    desc:'สร้างข่าวสารและเขียนบทความ',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="7" fill="#242424"/>
      <path d="M17.5 8C14.785 8 12.3108 9.03047 10.4468 10.7216L15.2968 12.96C15.7106 13.151 16.161 13.2499 16.6168 13.2499H21.7C22.2799 13.2499 22.75 13.72 22.75 14.2999V22.6999C22.75 23.2798 22.2799 23.7499 21.7 23.7499H13.3C12.7201 23.7499 12.25 23.2798 12.25 22.6999V17.6167C12.25 17.1609 12.1511 16.7106 11.9601 16.2967L9.7216 11.4469C8.03047 13.3108 7 15.785 7 18.5C7 24.299 11.701 29 17.5 29C23.299 29 28 24.299 28 18.5C28 12.701 23.299 8 17.5 8Z" fill="white"/>
    </svg>`,
    enabled: false
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
  </svg>`,
  enabled: false
  },
  {
    title:'เว็บไซต์',
    desc:'สร้างและออกแบบเว็บไซต์',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
      <rect width="36" height="36" rx="7" fill='white'/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0014 18.9473C29.1869 19.141 29.0496 19.4625 28.7814 19.4625H21.9731C21.9226 19.4625 21.8817 19.5034 21.8817 19.5538V24.5443C21.8817 24.6834 21.7875 24.8048 21.6528 24.8393L11.0125 27.5649C10.9547 27.5797 10.8985 27.5361 10.8985 27.4764L10.8985 21.2297C10.8985 21.0906 10.9927 20.9692 11.1275 20.9347L17.641 19.2662C17.7095 19.2486 17.733 19.1632 17.6829 19.1132L7.08969 8.51992C6.89783 8.32806 7.03372 8 7.30505 8H18.4799C18.5048 8 18.5286 8.01017 18.5458 8.02816L29.0014 18.9473Z" fill="#1A1A1A"/>
    </svg>`,
    enabled: false
  },
  {
    title:'Projects Manager',
    desc:'จัดการงานและโปรเจกต์',
    icon:`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="7" fill="#FF4A00"/>
      <path d="M28.8283 16.1667H22.4172L26.9584 11.6215C26.5958 11.125 26.1951 10.6476 25.7754 10.2083C25.3365 9.7691 24.8786 9.36806 24.3634 9.02431L19.8222 13.5694V7.15278C19.2307 7.05729 18.6201 7 17.9905 7H17.9714C17.3417 7 16.7311 7.05729 16.1396 7.15278V13.5694L11.5984 9.02431C11.1023 9.38715 10.6253 9.78819 10.1865 10.2083C9.74761 10.6476 9.366 11.1059 9.00347 11.6215L13.5638 16.1667H7.15265C7.15265 16.1667 7 17.3698 7 18C7 18.6302 7.05724 19.2413 7.15265 19.8333H13.5638L9.02255 24.3785C9.72853 25.3715 10.6062 26.25 11.6175 26.9757L16.1587 22.4306V28.8472C16.7502 28.9427 17.3608 29 17.9905 29H18.0095C18.6392 29 19.2498 28.9427 19.8413 28.8472V22.4306L24.3825 26.9757C24.8786 26.6128 25.3556 26.2118 25.7944 25.7917C26.2333 25.3524 26.634 24.8941 26.9774 24.3785L22.4363 19.8333H28.8474C28.9428 19.2413 29 18.6302 29 18V17.9809C28.9809 17.3698 28.9428 16.7587 28.8283 16.1667ZM20.7381 18.0191C20.7381 18.8403 20.5854 19.6233 20.3183 20.349C19.5932 20.6163 18.8109 20.7691 17.9905 20.7691C17.17 20.7691 16.3877 20.6163 15.6626 20.349C15.3955 19.6233 15.2428 18.8403 15.2428 18.0191V18C15.2428 17.1788 15.3955 16.3958 15.6626 15.6701C16.3877 15.4028 17.17 15.25 17.9905 15.25C18.8109 15.25 19.5932 15.4028 20.3183 15.6701C20.5854 16.3958 20.7381 17.1788 20.7381 18.0191Z" fill="white"/>
    </svg>`,
    enabled: false
  },
  {
    title:'Canvas',
    desc:'ระบบออกแบบ Graphic',
    icon:`<svg width='36' height='36' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="7" fill="#7000FF"/>
      <path d="M18.2416 8.56352C17.5258 8.02219 16.6261 7.8616 15.7717 8.12206L9.9919 9.88424C8.8012 10.2475 8.00073 11.34 8.00073 12.6039V25.1588C8.00073 26.0654 8.4111 26.8956 9.12675 27.4361C9.84253 27.9775 10.7432 28.138 11.5967 27.8776L15.9113 26.5617C15.7764 26.1095 15.7081 25.6376 15.7081 25.1588V19.4571C15.7081 18.2598 16.1377 17.1162 16.9199 16.239C17.494 15.5929 18.2387 15.1161 19.071 14.8616L19.3676 14.7755V10.8417C19.3676 9.93511 18.9573 9.10492 18.2415 8.56352H18.2416Z" fill="white"/>
      <path d="M29.0005 17.6953V23.397C29.0005 24.66 28.201 25.7535 27.0094 26.1158L21.2296 27.878C20.9618 27.9602 20.6892 28.0004 20.4195 28.0004C19.8289 28.0004 19.2509 27.8086 18.7596 27.4365C18.5352 27.2662 18.3406 27.0694 18.1807 26.8491C17.9861 26.5848 17.8406 26.2901 17.7491 25.9739C17.7481 25.9739 17.7472 25.9739 17.7462 25.9748L17.7481 25.9729C17.674 25.7134 17.6335 25.4403 17.6335 25.1593V19.4575C17.6335 18.8721 17.805 18.3229 18.1075 17.8666C18.41 17.4104 18.8435 17.0462 19.3675 16.8298C19.4513 16.7956 19.5371 16.7642 19.6248 16.7378L20.3318 16.5224L25.4046 14.9756C26.259 14.7151 27.1588 14.8757 27.8745 15.4171C28.5903 15.9585 29.0006 16.7887 29.0006 17.6953H29.0005Z" fill="white"/>
    </svg>`,
    enabled: false
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

  $('.site-name').html(window.location.hostname)

  $('#modal-menus-trigger').html(`
    <a href="" class='modal-menus-trigger-btn'>
      <div class='modal-menus-desc'>
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

  function buildMenu(sidebarMenus, $parent, depth = 0) {
    var $ul = $(`<ul class='menulists'>`);
    sidebarMenus.forEach(function(item) {
      var $li = $("<li>");
      var $a = $(`<a style="${item.bgColor ? `background-color:${item.bgColor}` : ''};${depth === 1 && item.bgColor ? 'margin-bottom:5px' : ''}">`).attr("href", item.url).html(`
        <span class='with-icon'>
          ${item.icon || ''}
          ${item.label}
          ${item.badgePrefix || ''}
        </span>
      `); 
      $a.addClass('menulink-btn');
      if (depth === 0){
        $a.addClass('first')
      }
      if (depth === 1 && item.bgColor || item.innerBgColor){
        $a.addClass('second-with-bg')
      }
      $li.append($a);
      $ul.append(item.tip || '')

      if (item.submenu) {
        var $submenu = $("<ul>").addClass("submenu");
        buildMenu(item.submenu, $submenu, depth + 1);
        $submenu.css('margin-bottom', '20px')
        if (depth === 1){
          $submenu.css('margin-bottom', '0')
        }

        if (item.innerBgColor) {
          $submenu.css('background-color', item.innerBgColor)
          $submenu.css('padding', '0 8px 8px 0')
        }
        $li.addClass('has-submenu');
        $a.append(`<svg class='submenu-toggle' style="color:${depth === 0 ? '#18181B' : '#7A7A7A'};" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>`)
        $a.append(item.badgeSuffix || '')
        $li.append($submenu);
      }
      $ul.append($li);

      $parent.append($ul);
    });
  }
  
  buildMenu(sidebarMenus, $("#lower-menu"));

  $("#lower-menu").on("click", "a", function(event) {
    event.preventDefault();
    var $submenu = $(this).closest("li").find("> ul");
    var $submenuToggle = $(this).find(".submenu-toggle");

    if ($submenu.is(":visible")) {
      $submenu.slideUp("fast");
      $submenuToggle.removeClass("expanded");
    } else {
      $submenu.slideDown("fast");
      $submenuToggle.addClass("expanded");
    }

    if ($(this).closest("li").hasClass('has-submenu')) {
      event.stopPropagation();
    }
  });

  $(".submenu").not("#lower-menu .submenu").hide();

  var modalButton = $('#trigger')
  var modalMenu = $('#modal-menus-trigger');
  var sidebarOverlay = $('#navbar-overlay-mobile')
  var sidebar = $('#rightside')

  modalButton.on('click', function(){
    sidebarOverlay.addClass("active")
    sidebar.addClass("active")
  })

  sidebarOverlay.on('click', function(){
    sidebarOverlay.removeClass("active")
    sidebar.removeClass("active")
  })

  // modalButton.on('click', function (event) {
  //   modalMenu.show();
  //   event.stopPropagation();
  // });

  // $(document).on('click', function (event) {
  //   if (!modalMenu.is(event.target) && modalMenu.has(event.target).length === 0) {
  //     modalMenu.hide();
  //   }
  // });
})
