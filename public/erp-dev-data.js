window.ERP_DEV_DATA = {
  "roles": [
    {
      "id": "cmsob89vw000107tghun0jc95",
      "name": "兼職人員",
      "pagePermissions": [
        "sales",
        "shifts",
        "events"
      ],
      "notes": "非正式員工",
      "active": true,
      "createdAt": "2026-08-11T06:59:25.581Z",
      "updatedAt": "2026-08-11T06:59:42.554Z"
    },
    {
      "id": "cmsob47f0000007tgji68sdze",
      "name": "營運人員",
      "pagePermissions": [
        "dashboard",
        "sales",
        "shifts",
        "reports-monthly",
        "inventory",
        "petty-cash",
        "fixed-expenses",
        "events"
      ],
      "notes": "正職員工",
      "active": true,
      "createdAt": "2026-08-11T06:56:15.756Z",
      "updatedAt": "2026-08-11T06:59:56.994Z"
    },
    {
      "id": "cmso9gxw3000007zqehr4ntsy",
      "name": "Admin",
      "pagePermissions": [
        "dashboard",
        "sales",
        "items",
        "employees",
        "shifts",
        "reports-monthly",
        "reports-yearly",
        "inventory",
        "petty-cash",
        "fixed-expenses",
        "events",
        "sops",
        "customer-service-records",
        "permissions"
      ],
      "notes": "最高權限帳號，擁有全部模組與頁面權限。",
      "active": true,
      "createdAt": "2026-08-11T06:10:10.708Z",
      "updatedAt": "2026-08-11T07:05:31.410Z"
    }
  ],
  "users": [
    {
      "id": "cms3bshas000007h2xv6d8d72",
      "email": "lazyer1016@gmail.com",
      "name": "測試使用者",
      "roleId": "cmso9gxw3000007zqehr4ntsy",
      "pagePermissions": [
        "dashboard",
        "sales",
        "items",
        "employees",
        "shifts",
        "reports-monthly",
        "reports-yearly",
        "inventory",
        "petty-cash",
        "fixed-expenses",
        "events",
        "sops",
        "customer-service-records",
        "permissions"
      ],
      "isAdmin": false,
      "active": true,
      "createdAt": "2026-07-27T14:31:58.611Z",
      "updatedAt": "2026-08-11T07:05:37.681Z",
      "role": {
        "id": "cmso9gxw3000007zqehr4ntsy",
        "name": "Admin"
      }
    },
    {
      "id": "cms39bod7000007733abntbxf",
      "email": "admin@example.com",
      "name": "系統管理員",
      "roleId": "cmso9gxw3000007zqehr4ntsy",
      "pagePermissions": [
        "dashboard",
        "sales",
        "items",
        "employees",
        "shifts",
        "reports-monthly",
        "reports-yearly",
        "inventory",
        "petty-cash",
        "fixed-expenses",
        "events",
        "sops",
        "customer-service-records",
        "permissions"
      ],
      "isAdmin": true,
      "active": true,
      "createdAt": "2026-07-27T13:22:55.387Z",
      "updatedAt": "2026-08-11T06:52:43.926Z",
      "role": {
        "id": "cmso9gxw3000007zqehr4ntsy",
        "name": "Admin"
      }
    }
  ],
  "employee-tags": [
    {
      "id": "cms4u7881000407dol2wnw0pk",
      "name": "內部品牌",
      "createdAt": "2026-07-28T15:55:05.954Z",
      "updatedAt": "2026-07-28T15:55:05.954Z"
    },
    {
      "id": "cms4u64iq000107do0ssylj36",
      "name": "內部員工",
      "createdAt": "2026-07-28T15:54:14.498Z",
      "updatedAt": "2026-07-28T15:54:14.498Z"
    },
    {
      "id": "cms4u6jc3000307dobcge9pl3",
      "name": "外部合作廠商",
      "createdAt": "2026-07-28T15:54:33.699Z",
      "updatedAt": "2026-07-28T15:54:33.699Z"
    },
    {
      "id": "cms4u7cl7000507doza52xxnw",
      "name": "外部品牌",
      "createdAt": "2026-07-28T15:55:11.612Z",
      "updatedAt": "2026-07-28T15:55:11.612Z"
    },
    {
      "id": "cms4u6b8v000207dob82x8pa5",
      "name": "外部員工",
      "createdAt": "2026-07-28T15:54:23.216Z",
      "updatedAt": "2026-07-28T15:54:23.216Z"
    },
    {
      "id": "cms4u5w7c000007do8oetq04a",
      "name": "管理員",
      "createdAt": "2026-07-28T15:54:03.721Z",
      "updatedAt": "2026-07-28T15:54:03.721Z"
    }
  ],
  "employees": [
    {
      "id": "cms4umosa0002070seb77x0vr",
      "name": "政府機構",
      "phone": null,
      "role": "政府機構",
      "active": true,
      "createdAt": "2026-07-28T16:07:07.258Z",
      "updatedAt": "2026-07-28T16:07:07.258Z",
      "tagIds": [
        "cms4u6jc3000307dobcge9pl3"
      ],
      "tags": [
        {
          "id": "cms4u6jc3000307dobcge9pl3",
          "name": "外部合作廠商",
          "createdAt": "2026-07-28T15:54:33.699Z",
          "updatedAt": "2026-07-28T15:54:33.699Z"
        }
      ]
    },
    {
      "id": "cms4ucz75000007t10nzskgzs",
      "name": "房東",
      "phone": null,
      "role": "房東",
      "active": true,
      "createdAt": "2026-07-28T15:59:34.193Z",
      "updatedAt": "2026-07-28T15:59:34.193Z",
      "tagIds": [
        "cms4u6jc3000307dobcge9pl3"
      ],
      "tags": [
        {
          "id": "cms4u6jc3000307dobcge9pl3",
          "name": "外部合作廠商",
          "createdAt": "2026-07-28T15:54:33.699Z",
          "updatedAt": "2026-07-28T15:54:33.699Z"
        }
      ]
    },
    {
      "id": "cms4rd8rj0004074vjofgl69k",
      "name": "Admin",
      "phone": null,
      "role": "開發者",
      "active": true,
      "createdAt": "2026-07-28T14:35:47.743Z",
      "updatedAt": "2026-07-28T15:54:51.155Z",
      "tagIds": [
        "cms4u5w7c000007do8oetq04a"
      ],
      "tags": [
        {
          "id": "cms4u5w7c000007do8oetq04a",
          "name": "管理員",
          "createdAt": "2026-07-28T15:54:03.721Z",
          "updatedAt": "2026-07-28T15:54:03.721Z"
        }
      ]
    },
    {
      "id": "cms4rbbh80001074vr4hnm15m",
      "name": "公司品牌Ｂ",
      "phone": null,
      "role": "公司品牌Ｂ",
      "active": true,
      "createdAt": "2026-07-28T14:34:17.948Z",
      "updatedAt": "2026-07-28T15:55:19.702Z",
      "tagIds": [
        "cms4u7881000407dol2wnw0pk"
      ],
      "tags": [
        {
          "id": "cms4u7881000407dol2wnw0pk",
          "name": "內部品牌",
          "createdAt": "2026-07-28T15:55:05.954Z",
          "updatedAt": "2026-07-28T15:55:05.954Z"
        }
      ]
    },
    {
      "id": "cms4rb5550000074voewshn44",
      "name": "公司品牌Ａ",
      "phone": null,
      "role": "公司品牌Ａ",
      "active": true,
      "createdAt": "2026-07-28T14:34:09.737Z",
      "updatedAt": "2026-07-28T15:55:30.640Z",
      "tagIds": [
        "cms4u7881000407dol2wnw0pk"
      ],
      "tags": [
        {
          "id": "cms4u7881000407dol2wnw0pk",
          "name": "內部品牌",
          "createdAt": "2026-07-28T15:55:05.954Z",
          "updatedAt": "2026-07-28T15:55:05.954Z"
        }
      ]
    },
    {
      "id": "cms4p2pc80003075loz9i3h6c",
      "name": "E012",
      "phone": null,
      "role": "兼職老師",
      "active": true,
      "createdAt": "2026-07-28T13:31:36.776Z",
      "updatedAt": "2026-07-28T15:55:38.788Z",
      "tagIds": [
        "cms4u6b8v000207dob82x8pa5"
      ],
      "tags": [
        {
          "id": "cms4u6b8v000207dob82x8pa5",
          "name": "外部員工",
          "createdAt": "2026-07-28T15:54:23.216Z",
          "updatedAt": "2026-07-28T15:54:23.216Z"
        }
      ]
    },
    {
      "id": "cms4p2dqu0002075lm664zdok",
      "name": "E011",
      "phone": null,
      "role": "兼職老師",
      "active": true,
      "createdAt": "2026-07-28T13:31:21.751Z",
      "updatedAt": "2026-07-28T15:55:45.453Z",
      "tagIds": [
        "cms4u6b8v000207dob82x8pa5"
      ],
      "tags": [
        {
          "id": "cms4u6b8v000207dob82x8pa5",
          "name": "外部員工",
          "createdAt": "2026-07-28T15:54:23.216Z",
          "updatedAt": "2026-07-28T15:54:23.216Z"
        }
      ]
    },
    {
      "id": "cms4p24hr0001075l8bmt8g8g",
      "name": "E004",
      "phone": null,
      "role": "正職老師",
      "active": true,
      "createdAt": "2026-07-28T13:31:09.759Z",
      "updatedAt": "2026-07-28T15:55:52.306Z",
      "tagIds": [
        "cms4u64iq000107do0ssylj36"
      ],
      "tags": [
        {
          "id": "cms4u64iq000107do0ssylj36",
          "name": "內部員工",
          "createdAt": "2026-07-28T15:54:14.498Z",
          "updatedAt": "2026-07-28T15:54:14.498Z"
        }
      ]
    },
    {
      "id": "cms4p1vby0000075lnb5znb5x",
      "name": "E003",
      "phone": null,
      "role": "正職老師",
      "active": true,
      "createdAt": "2026-07-28T13:30:57.887Z",
      "updatedAt": "2026-07-28T15:56:01.372Z",
      "tagIds": [
        "cms4u64iq000107do0ssylj36"
      ],
      "tags": [
        {
          "id": "cms4u64iq000107do0ssylj36",
          "name": "內部員工",
          "createdAt": "2026-07-28T15:54:14.498Z",
          "updatedAt": "2026-07-28T15:54:14.498Z"
        }
      ]
    },
    {
      "id": "cms3cgvb5000107s6d69ls6hg",
      "name": "E010",
      "phone": null,
      "role": "兼職老師",
      "active": true,
      "createdAt": "2026-07-27T14:50:56.513Z",
      "updatedAt": "2026-07-28T16:22:36.732Z",
      "tagIds": [
        "cms4u6b8v000207dob82x8pa5"
      ],
      "tags": [
        {
          "id": "cms4u6b8v000207dob82x8pa5",
          "name": "外部員工",
          "createdAt": "2026-07-28T15:54:23.216Z",
          "updatedAt": "2026-07-28T15:54:23.216Z"
        }
      ]
    },
    {
      "id": "cms3cfz3o000007s6f60h8zjr",
      "name": "E001",
      "phone": null,
      "role": "正職老師",
      "active": true,
      "createdAt": "2026-07-27T14:50:14.772Z",
      "updatedAt": "2026-07-28T15:56:12.184Z",
      "tagIds": [
        "cms4u64iq000107do0ssylj36"
      ],
      "tags": [
        {
          "id": "cms4u64iq000107do0ssylj36",
          "name": "內部員工",
          "createdAt": "2026-07-28T15:54:14.498Z",
          "updatedAt": "2026-07-28T15:54:14.498Z"
        }
      ]
    },
    {
      "id": "seed-employee-amy",
      "name": "E002",
      "phone": null,
      "role": "正職老師",
      "active": true,
      "createdAt": "2026-07-27T13:22:55.394Z",
      "updatedAt": "2026-07-28T15:56:19.385Z",
      "tagIds": [
        "cms4u64iq000107do0ssylj36"
      ],
      "tags": [
        {
          "id": "cms4u64iq000107do0ssylj36",
          "name": "內部員工",
          "createdAt": "2026-07-28T15:54:14.498Z",
          "updatedAt": "2026-07-28T15:54:14.498Z"
        }
      ]
    }
  ],
  "items": [
    {
      "id": "cmso9o9sp000207ftgcd3ifcq",
      "type": "COURSE_SERVICE",
      "name": "權限驗收活動品項 3001 編輯",
      "price": "999",
      "cost": "100",
      "requiresInventory": false,
      "active": true,
      "notes": "活動：權限驗收活動 3001 編輯",
      "eventId": "cmso9o9sm000007ftg9bbqr32",
      "servicePersonId": null,
      "createdAt": "2026-08-11T06:15:52.729Z",
      "updatedAt": "2026-08-11T06:16:28.787Z"
    },
    {
      "id": "cmso9io7m0002070l6cv7t5it",
      "type": "COURSE_SERVICE",
      "name": "權限驗收活動品項 編輯",
      "price": "999",
      "cost": "100",
      "requiresInventory": false,
      "active": true,
      "notes": "活動：權限驗收活動 20260811 編輯",
      "eventId": "cmso9io7j0000070lvz3cizpd",
      "servicePersonId": null,
      "createdAt": "2026-08-11T06:11:31.474Z",
      "updatedAt": "2026-08-11T06:12:06.429Z"
    },
    {
      "id": "cmslfyhxx000707i593do8ukh",
      "type": "RITUAL_SERVICE",
      "name": "天赦日",
      "price": "300",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": "活動：天赦日",
      "eventId": "cms68qxl8000607on14gurg05",
      "servicePersonId": "seed-employee-amy",
      "createdAt": "2026-08-09T06:48:29.014Z",
      "updatedAt": "2026-08-09T15:24:49.276Z"
    },
    {
      "id": "cmslfzrfd000b07i5qkvhn6qm",
      "type": "RITUAL_SERVICE",
      "name": "天赦日補財庫",
      "price": "1800",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": "活動：天赦日",
      "eventId": "cms68qxl8000607on14gurg05",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "createdAt": "2026-08-09T06:49:27.962Z",
      "updatedAt": "2026-08-09T15:24:49.286Z"
    },
    {
      "id": "cmslfzrfe000d07i5wr14mxsd",
      "type": "RITUAL_SERVICE",
      "name": "天赦日補緣庫",
      "price": "1800",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": "活動：天赦日",
      "eventId": "cms68qxl8000607on14gurg05",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "createdAt": "2026-08-09T06:49:27.962Z",
      "updatedAt": "2026-08-09T15:24:49.294Z"
    },
    {
      "id": "cmslg14yv000f07i5x3fjhdl8",
      "type": "COURSE_SERVICE",
      "name": "直覺塔羅占卜課程",
      "price": "5500",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": "活動：線上課程體驗營",
      "eventId": "seed-event-course",
      "servicePersonId": null,
      "createdAt": "2026-08-09T06:50:32.167Z",
      "updatedAt": "2026-08-09T14:58:04.752Z"
    },
    {
      "id": "cmslg14yv000h07i5lz3ro5zd",
      "type": "COURSE_SERVICE",
      "name": "劇情推演雷諾曼占卜課程",
      "price": "5500",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": "活動：線上課程體驗營",
      "eventId": "seed-event-course",
      "servicePersonId": null,
      "createdAt": "2026-08-09T06:50:32.168Z",
      "updatedAt": "2026-08-09T14:57:57.383Z"
    },
    {
      "id": "seed-product-coursebook",
      "type": "PHYSICAL_PRODUCT",
      "name": "課程教材包",
      "price": "600",
      "cost": "220",
      "requiresInventory": true,
      "active": true,
      "notes": "商品銷售範例",
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-08-11T06:10:10.751Z",
      "updatedAt": "2026-08-11T06:10:10.751Z"
    },
    {
      "id": "seed-service-consulting",
      "type": "DIVINATION_SERVICE",
      "name": "一對一諮詢服務",
      "price": "1800",
      "cost": "300",
      "requiresInventory": false,
      "active": true,
      "notes": "服務銷售範例",
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-08-11T06:10:10.749Z",
      "updatedAt": "2026-08-11T06:10:10.749Z"
    },
    {
      "id": "cmslx04bz000007okhob7d0ix",
      "type": "OIL_DONATION",
      "name": "香油錢",
      "price": "0",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-08-09T14:45:38.159Z",
      "updatedAt": "2026-08-09T14:57:25.981Z"
    },
    {
      "id": "cms4pzm700003074whmjxyykf",
      "type": "PHYSICAL_PRODUCT",
      "name": "大天使許願卡",
      "price": "500",
      "cost": "0",
      "requiresInventory": true,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:57:12.348Z",
      "updatedAt": "2026-07-28T13:57:12.348Z"
    },
    {
      "id": "cms4pwoh10008071420vqc2i6",
      "type": "PHYSICAL_PRODUCT",
      "name": "希臘眾神卡",
      "price": "500",
      "cost": "0",
      "requiresInventory": true,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:54:55.334Z",
      "updatedAt": "2026-07-28T13:54:55.334Z"
    },
    {
      "id": "cms4pwoh100050714w7ycpexd",
      "type": "PHYSICAL_PRODUCT",
      "name": "愛情籤詩卡",
      "price": "500",
      "cost": "0",
      "requiresInventory": true,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:54:55.333Z",
      "updatedAt": "2026-07-28T13:54:55.333Z"
    },
    {
      "id": "cms4pwoh000020714ffgvofk5",
      "type": "PHYSICAL_PRODUCT",
      "name": "前世記憶雷諾曼牌書",
      "price": "650",
      "cost": "0",
      "requiresInventory": true,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:54:55.332Z",
      "updatedAt": "2026-07-28T13:54:55.332Z"
    },
    {
      "id": "cms4ptgst000007s8q8g3yd3d",
      "type": "PHYSICAL_PRODUCT",
      "name": "前世記憶雷諾曼牌卡",
      "price": "600",
      "cost": "0",
      "requiresInventory": true,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:52:25.422Z",
      "updatedAt": "2026-07-28T13:54:55.327Z"
    },
    {
      "id": "cms4ot37f000j07jiztwtdvs9",
      "type": "DIVINATION_SERVICE",
      "name": "現場問事服務",
      "price": "200",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:24:08.187Z",
      "updatedAt": "2026-07-28T13:24:08.187Z"
    },
    {
      "id": "cms4ot36z000i07jia4zk730z",
      "type": "DIVINATION_SERVICE",
      "name": "雷諾曼占卜B",
      "price": "600",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:24:08.172Z",
      "updatedAt": "2026-07-28T13:24:08.172Z"
    },
    {
      "id": "cms4ot36g000h07jialtb19u6",
      "type": "DIVINATION_SERVICE",
      "name": "塔羅占卜B",
      "price": "600",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:24:08.152Z",
      "updatedAt": "2026-07-28T13:24:08.152Z"
    },
    {
      "id": "cms4ot362000g07ji23e0fvxm",
      "type": "DIVINATION_SERVICE",
      "name": "四柱八字命盤解析",
      "price": "3000",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "createdAt": "2026-07-28T13:24:08.138Z",
      "updatedAt": "2026-08-09T15:28:23.750Z"
    },
    {
      "id": "cms4ot35k000f07jidxcd15is",
      "type": "DIVINATION_SERVICE",
      "name": "紫微命盤解析",
      "price": "3000",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "createdAt": "2026-07-28T13:24:08.120Z",
      "updatedAt": "2026-08-09T15:28:23.740Z"
    },
    {
      "id": "cms4ot354000e07jiy62f5aea",
      "type": "COURSE_SERVICE",
      "name": "天秦道學院課程",
      "price": "2000",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "createdAt": "2026-07-28T13:24:08.105Z",
      "updatedAt": "2026-08-09T15:28:23.732Z"
    },
    {
      "id": "cms4ot34j000d07jiw62tylzg",
      "type": "FENG_SHUI_SERVICE",
      "name": "居家風水調整",
      "price": "5000",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:24:08.084Z",
      "updatedAt": "2026-07-28T13:24:08.084Z"
    },
    {
      "id": "cms4ot342000c07jima8hiveu",
      "type": "DIVINATION_SERVICE",
      "name": "居家風水檢測",
      "price": "600",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:24:08.066Z",
      "updatedAt": "2026-07-28T13:24:08.066Z"
    },
    {
      "id": "cms4op5vw000b07jilxcnd0xa",
      "type": "RITUAL_SERVICE",
      "name": "財神送窮迎福",
      "price": "300",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "createdAt": "2026-07-28T13:21:05.037Z",
      "updatedAt": "2026-08-09T15:28:23.724Z"
    },
    {
      "id": "cms4op5vh000a07jied8unjtp",
      "type": "RITUAL_SERVICE",
      "name": "桃花人緣",
      "price": "300",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "createdAt": "2026-07-28T13:21:05.021Z",
      "updatedAt": "2026-08-09T15:24:49.301Z"
    },
    {
      "id": "cms4op5v1000907jivhgpwo65",
      "type": "RITUAL_SERVICE",
      "name": "祭改好運",
      "price": "300",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "createdAt": "2026-07-28T13:21:05.005Z",
      "updatedAt": "2026-08-09T15:28:23.714Z"
    },
    {
      "id": "cms4op5uj000807jibz99per6",
      "type": "RITUAL_SERVICE",
      "name": "月老紅線儀式",
      "price": "600",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "createdAt": "2026-07-28T13:21:04.987Z",
      "updatedAt": "2026-08-09T15:24:49.309Z"
    },
    {
      "id": "cms4op5u3000707jixm0mui74",
      "type": "DIVINATION_SERVICE",
      "name": "月老紅線檢測",
      "price": "600",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:21:04.972Z",
      "updatedAt": "2026-07-28T13:21:04.972Z"
    },
    {
      "id": "cms4op5t5000507jiqjsrdlkq",
      "type": "DIVINATION_SERVICE",
      "name": "冤親債主占卜A",
      "price": "1000",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:21:04.937Z",
      "updatedAt": "2026-07-28T13:21:04.937Z"
    },
    {
      "id": "cms4op5sn000407jit4dhmit3",
      "type": "DIVINATION_SERVICE",
      "name": "靈魂居所-ALL",
      "price": "8000",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:21:04.919Z",
      "updatedAt": "2026-07-28T13:21:04.919Z"
    },
    {
      "id": "cms4op5rt000307ji11exqlds",
      "type": "DIVINATION_SERVICE",
      "name": "雷諾曼占卜A",
      "price": "1000",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:21:04.890Z",
      "updatedAt": "2026-07-28T13:21:04.890Z"
    },
    {
      "id": "cms4op5r3000207jiyezujusf",
      "type": "DIVINATION_SERVICE",
      "name": "塔羅占卜A",
      "price": "1000",
      "cost": "0",
      "requiresInventory": false,
      "active": true,
      "notes": null,
      "eventId": null,
      "servicePersonId": null,
      "createdAt": "2026-07-28T13:21:04.863Z",
      "updatedAt": "2026-07-28T13:21:04.863Z"
    }
  ],
  "inventory": [
    {
      "id": "cmso9gxxn000j07zqlfcrogoq",
      "itemId": "seed-product-coursebook",
      "type": "SALE",
      "quantity": -1,
      "reason": "種子銷售扣庫存",
      "movedAt": "2026-08-11T06:10:10.764Z",
      "createdAt": "2026-08-11T06:10:10.764Z"
    },
    {
      "id": "cmso9gxxc000407zqivi4dnqq",
      "itemId": "seed-product-coursebook",
      "type": "PURCHASE",
      "quantity": 20,
      "reason": "開帳庫存",
      "movedAt": "2026-08-11T06:10:10.752Z",
      "createdAt": "2026-08-11T06:10:10.752Z"
    },
    {
      "id": "cms4pzm7h0005074wqjc62djo",
      "itemId": "cms4pzm700003074whmjxyykf",
      "type": "PURCHASE",
      "quantity": 300,
      "reason": "批次新增開帳庫存",
      "movedAt": "2026-07-28T13:57:12.366Z",
      "createdAt": "2026-07-28T13:57:12.366Z"
    },
    {
      "id": "cms4pwoh2000a0714bbcf2ymv",
      "itemId": "cms4pwoh10008071420vqc2i6",
      "type": "ADJUSTMENT",
      "quantity": 600,
      "reason": "修正實體商品開帳庫存",
      "movedAt": "2026-07-28T13:54:55.334Z",
      "createdAt": "2026-07-28T13:54:55.334Z"
    },
    {
      "id": "cms4pwoh1000707140peofn66",
      "itemId": "cms4pwoh100050714w7ycpexd",
      "type": "ADJUSTMENT",
      "quantity": 450,
      "reason": "修正實體商品開帳庫存",
      "movedAt": "2026-07-28T13:54:55.333Z",
      "createdAt": "2026-07-28T13:54:55.334Z"
    },
    {
      "id": "cms4pwoh0000407146vllhya3",
      "itemId": "cms4pwoh000020714ffgvofk5",
      "type": "ADJUSTMENT",
      "quantity": 300,
      "reason": "修正實體商品開帳庫存",
      "movedAt": "2026-07-28T13:54:55.332Z",
      "createdAt": "2026-07-28T13:54:55.333Z"
    },
    {
      "id": "cms4pwogz00010714jt9icscs",
      "itemId": "cms4ptgst000007s8q8g3yd3d",
      "type": "ADJUSTMENT",
      "quantity": 450,
      "reason": "修正實體商品開帳庫存",
      "movedAt": "2026-07-28T13:54:55.330Z",
      "createdAt": "2026-07-28T13:54:55.332Z"
    }
  ],
  "assets": [],
  "petty-cash": [
    {
      "id": "cmslw1w2e000b07g7i2k2at14",
      "type": "EXPENSE",
      "amount": "1680",
      "purpose": "活動耗材",
      "employeeId": "cms4p2dqu0002075lm664zdok",
      "checkedOut": true,
      "entryDate": "2026-08-16T16:00:00.000Z",
      "notes": "批次新增八月零用金測試資料",
      "createdAt": "2026-08-09T14:19:01.142Z",
      "updatedAt": "2026-08-09T15:12:26.417Z"
    },
    {
      "id": "cmslw1w2b000907g7yysld0ow",
      "type": "EXPENSE",
      "amount": "760",
      "purpose": "臨時雜支",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "checkedOut": true,
      "entryDate": "2026-08-15T16:00:00.000Z",
      "notes": "批次新增八月零用金測試資料",
      "createdAt": "2026-08-09T14:19:01.140Z",
      "updatedAt": "2026-08-09T15:12:26.560Z"
    },
    {
      "id": "cmslw1w27000707g7nfwxa82p",
      "type": "EXPENSE",
      "amount": "1450",
      "purpose": "交通補貼",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "checkedOut": true,
      "entryDate": "2026-08-14T16:00:00.000Z",
      "notes": "批次新增八月零用金測試資料",
      "createdAt": "2026-08-09T14:19:01.136Z",
      "updatedAt": "2026-08-09T15:12:27.632Z"
    },
    {
      "id": "cmslw1w25000507g7ixhbku2h",
      "type": "EXPENSE",
      "amount": "980",
      "purpose": "清潔用品",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "checkedOut": true,
      "entryDate": "2026-08-13T16:00:00.000Z",
      "notes": "批次新增八月零用金測試資料",
      "createdAt": "2026-08-09T14:19:01.134Z",
      "updatedAt": "2026-08-09T15:12:28.902Z"
    },
    {
      "id": "cmslw1w24000307g75gzwgcoi",
      "type": "EXPENSE",
      "amount": "1260",
      "purpose": "茶水點心",
      "employeeId": "seed-employee-amy",
      "checkedOut": true,
      "entryDate": "2026-08-12T16:00:00.000Z",
      "notes": "批次新增八月零用金測試資料",
      "createdAt": "2026-08-09T14:19:01.133Z",
      "updatedAt": "2026-08-09T15:12:29.706Z"
    },
    {
      "id": "cmslw1w22000107g7w5298o0z",
      "type": "EXPENSE",
      "amount": "820",
      "purpose": "文具與列印",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "checkedOut": true,
      "entryDate": "2026-08-11T16:00:00.000Z",
      "notes": "批次新增八月零用金測試資料",
      "createdAt": "2026-08-09T14:19:01.130Z",
      "updatedAt": "2026-08-09T15:12:30.351Z"
    },
    {
      "id": "cmslkpihw000n07pz4fi2p9il",
      "type": "INCOME",
      "amount": "10000",
      "purpose": "存入",
      "employeeId": null,
      "checkedOut": false,
      "entryDate": "2026-08-09T00:00:00.000Z",
      "notes": null,
      "createdAt": "2026-08-09T09:01:27.909Z",
      "updatedAt": "2026-08-09T09:01:38.683Z"
    },
    {
      "id": "cms4ut3ms000307a4ueo6s066",
      "type": "EXPENSE",
      "amount": "5000",
      "purpose": "法會用消耗品",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "checkedOut": true,
      "entryDate": "2026-07-29T00:00:00.000Z",
      "notes": null,
      "createdAt": "2026-07-28T16:12:06.437Z",
      "updatedAt": "2026-08-09T15:12:32.467Z"
    },
    {
      "id": "cms4q6kxw000007d7nexmn47e",
      "type": "INCOME",
      "amount": "10000",
      "purpose": "每月零用金初始額度",
      "employeeId": null,
      "checkedOut": false,
      "entryDate": "2026-07-28T00:00:00.000Z",
      "notes": null,
      "createdAt": "2026-07-28T14:02:37.317Z",
      "updatedAt": "2026-07-28T16:11:35.703Z"
    },
    {
      "id": "cms4qp9hi000107pjslxi3w54",
      "type": "EXPENSE",
      "amount": "300",
      "purpose": "印刷",
      "employeeId": "cms4p2pc80003075loz9i3h6c",
      "checkedOut": true,
      "entryDate": "2026-07-28T00:00:00.000Z",
      "notes": null,
      "createdAt": "2026-07-28T14:17:08.934Z",
      "updatedAt": "2026-07-28T14:40:37.259Z"
    },
    {
      "id": "cms4qpypc000307pjv2q98xt5",
      "type": "EXPENSE",
      "amount": "3300",
      "purpose": "清潔用品",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "checkedOut": true,
      "entryDate": "2026-07-28T00:00:00.000Z",
      "notes": null,
      "createdAt": "2026-07-28T14:17:41.616Z",
      "updatedAt": "2026-07-28T14:40:32.805Z"
    }
  ],
  "fixed-expenses": [
    {
      "id": "cmslkd9s7000107htqhfjtbzk",
      "type": "EXPENSE",
      "amount": "65000",
      "purpose": "房租",
      "employeeId": "cms4ucz75000007t10nzskgzs",
      "entryDate": "2026-08-10T00:00:00.000Z",
      "createdAt": "2026-08-09T08:51:56.744Z",
      "updatedAt": "2026-08-09T08:51:56.744Z"
    },
    {
      "id": "cmslkd9s9000307ht4wj1vw9k",
      "type": "EXPENSE",
      "amount": "30000",
      "purpose": "正職人員薪資",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "entryDate": "2026-08-10T00:00:00.000Z",
      "createdAt": "2026-08-09T08:51:56.745Z",
      "updatedAt": "2026-08-09T08:51:56.745Z"
    },
    {
      "id": "cmslkd9sa000507ht5qabc5z0",
      "type": "EXPENSE",
      "amount": "30000",
      "purpose": "正職人員薪資",
      "employeeId": "seed-employee-amy",
      "entryDate": "2026-08-10T00:00:00.000Z",
      "createdAt": "2026-08-09T08:51:56.747Z",
      "updatedAt": "2026-08-09T08:51:56.747Z"
    },
    {
      "id": "cmslkd9sc000707ht4gdmlug2",
      "type": "EXPENSE",
      "amount": "5000",
      "purpose": "水電",
      "employeeId": "cms4umosa0002070seb77x0vr",
      "entryDate": "2026-08-10T00:00:00.000Z",
      "createdAt": "2026-08-09T08:51:56.748Z",
      "updatedAt": "2026-08-09T08:51:56.748Z"
    },
    {
      "id": "cmslv8lbq000407vwievkrjkc",
      "type": "EXPENSE",
      "amount": "30000",
      "purpose": "正職人員薪資",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "entryDate": "2026-08-09T00:00:00.000Z",
      "createdAt": "2026-08-09T13:56:14.198Z",
      "updatedAt": "2026-08-09T13:56:14.198Z"
    },
    {
      "id": "cmslv8unw000607vwsmmloi50",
      "type": "EXPENSE",
      "amount": "30000",
      "purpose": "正職人員薪資",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "entryDate": "2026-08-09T00:00:00.000Z",
      "createdAt": "2026-08-09T13:56:26.300Z",
      "updatedAt": "2026-08-09T13:56:26.300Z"
    },
    {
      "id": "cms4um0ju0001070si38iu9jg",
      "type": "EXPENSE",
      "amount": "65000",
      "purpose": "房租",
      "employeeId": "cms4ucz75000007t10nzskgzs",
      "entryDate": "2026-07-29T00:00:00.000Z",
      "createdAt": "2026-07-28T16:06:35.850Z",
      "updatedAt": "2026-07-28T16:06:35.850Z"
    },
    {
      "id": "cms4un6zx0004070s3sigw28k",
      "type": "EXPENSE",
      "amount": "5000",
      "purpose": "水電",
      "employeeId": "cms4umosa0002070seb77x0vr",
      "entryDate": "2026-07-29T00:00:00.000Z",
      "createdAt": "2026-07-28T16:07:30.862Z",
      "updatedAt": "2026-07-28T16:07:30.862Z"
    },
    {
      "id": "cms4unk0y0006070svzoc0dxl",
      "type": "EXPENSE",
      "amount": "30000",
      "purpose": "正職人員薪資",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "entryDate": "2026-07-29T00:00:00.000Z",
      "createdAt": "2026-07-28T16:07:47.747Z",
      "updatedAt": "2026-07-28T16:08:17.027Z"
    },
    {
      "id": "cms4unui70008070s5uipewxc",
      "type": "EXPENSE",
      "amount": "30000",
      "purpose": "正職人員薪資",
      "employeeId": "seed-employee-amy",
      "entryDate": "2026-07-29T00:00:00.000Z",
      "createdAt": "2026-07-28T16:08:01.327Z",
      "updatedAt": "2026-07-28T16:08:01.327Z"
    }
  ],
  "shifts": [
    {
      "id": "cmslkewdv002n07k9crq77z19",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-31T01:00:00.000Z",
      "endsAt": "2026-08-31T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.691Z",
      "updatedAt": "2026-08-09T08:53:12.691Z"
    },
    {
      "id": "cmslkewdv002p07k9mu9o94vv",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-31T01:00:00.000Z",
      "endsAt": "2026-08-31T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.692Z",
      "updatedAt": "2026-08-09T08:53:12.692Z"
    },
    {
      "id": "cmslkewdu002l07k97gcfwhd8",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-30T01:00:00.000Z",
      "endsAt": "2026-08-30T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.690Z",
      "updatedAt": "2026-08-09T08:53:12.690Z"
    },
    {
      "id": "cmslkewdt002j07k9eu17tf8l",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-29T01:00:00.000Z",
      "endsAt": "2026-08-29T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.689Z",
      "updatedAt": "2026-08-09T08:53:12.689Z"
    },
    {
      "id": "cmslzdtd0000f07s7hhabkjne",
      "employeeId": null,
      "eventId": "cmslzdtcu000907s7x5ymodck",
      "type": "ONSITE",
      "startsAt": "2026-08-29T01:00:00.000Z",
      "endsAt": "2026-08-29T10:00:00.000Z",
      "location": "",
      "notes": "公益占卜活動（2026-08-26 至 2026-08-29）",
      "createdAt": "2026-08-09T15:52:16.356Z",
      "updatedAt": "2026-08-09T15:52:16.356Z"
    },
    {
      "id": "cmslgfdpn000307rps4kexg4j",
      "employeeId": null,
      "eventId": "seed-event-course",
      "type": "ONSITE",
      "startsAt": "2026-08-28T01:00:00.000Z",
      "endsAt": "2026-08-28T10:00:00.000Z",
      "location": "",
      "notes": "線上課程體驗營（2026-08-25 至 2026-08-28）",
      "createdAt": "2026-08-09T07:01:36.683Z",
      "updatedAt": "2026-08-09T07:01:36.683Z"
    },
    {
      "id": "cmslkewds002h07k9iaxzooz2",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-28T01:00:00.000Z",
      "endsAt": "2026-08-28T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.688Z",
      "updatedAt": "2026-08-09T08:53:12.688Z"
    },
    {
      "id": "cmslzdtd0000e07s7xt61xdw5",
      "employeeId": null,
      "eventId": "cmslzdtcu000907s7x5ymodck",
      "type": "ONSITE",
      "startsAt": "2026-08-28T01:00:00.000Z",
      "endsAt": "2026-08-28T10:00:00.000Z",
      "location": "",
      "notes": "公益占卜活動（2026-08-26 至 2026-08-29）",
      "createdAt": "2026-08-09T15:52:16.356Z",
      "updatedAt": "2026-08-09T15:52:16.356Z"
    },
    {
      "id": "cmslgfdpn000207rpeood4p22",
      "employeeId": null,
      "eventId": "seed-event-course",
      "type": "ONSITE",
      "startsAt": "2026-08-27T01:00:00.000Z",
      "endsAt": "2026-08-27T10:00:00.000Z",
      "location": "",
      "notes": "線上課程體驗營（2026-08-25 至 2026-08-28）",
      "createdAt": "2026-08-09T07:01:36.683Z",
      "updatedAt": "2026-08-09T07:01:36.683Z"
    },
    {
      "id": "cmslkewdq002f07k9w2jbbfj1",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-27T01:00:00.000Z",
      "endsAt": "2026-08-27T10:00:00.000Z",
      "location": null,
      "notes": "公休",
      "createdAt": "2026-08-09T08:53:12.687Z",
      "updatedAt": "2026-08-09T08:53:12.687Z"
    },
    {
      "id": "cmslzdtd0000d07s7l0410ejz",
      "employeeId": null,
      "eventId": "cmslzdtcu000907s7x5ymodck",
      "type": "ONSITE",
      "startsAt": "2026-08-27T01:00:00.000Z",
      "endsAt": "2026-08-27T10:00:00.000Z",
      "location": "",
      "notes": "公益占卜活動（2026-08-26 至 2026-08-29）",
      "createdAt": "2026-08-09T15:52:16.356Z",
      "updatedAt": "2026-08-09T15:52:16.356Z"
    },
    {
      "id": "cmslgfdpn000107rpmdd2eot9",
      "employeeId": null,
      "eventId": "seed-event-course",
      "type": "ONSITE",
      "startsAt": "2026-08-26T01:00:00.000Z",
      "endsAt": "2026-08-26T10:00:00.000Z",
      "location": "",
      "notes": "線上課程體驗營（2026-08-25 至 2026-08-28）",
      "createdAt": "2026-08-09T07:01:36.683Z",
      "updatedAt": "2026-08-09T07:01:36.683Z"
    },
    {
      "id": "cmslkewdp002d07k990khjzvt",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-26T01:00:00.000Z",
      "endsAt": "2026-08-26T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.686Z",
      "updatedAt": "2026-08-09T08:53:12.686Z"
    },
    {
      "id": "cmslzdtd0000c07s7eqewz2da",
      "employeeId": null,
      "eventId": "cmslzdtcu000907s7x5ymodck",
      "type": "ONSITE",
      "startsAt": "2026-08-26T01:00:00.000Z",
      "endsAt": "2026-08-26T10:00:00.000Z",
      "location": "",
      "notes": "公益占卜活動（2026-08-26 至 2026-08-29）",
      "createdAt": "2026-08-09T15:52:16.356Z",
      "updatedAt": "2026-08-09T15:52:16.356Z"
    },
    {
      "id": "cmslgfdpn000007rp3dp5lzoi",
      "employeeId": null,
      "eventId": "seed-event-course",
      "type": "ONSITE",
      "startsAt": "2026-08-25T01:00:00.000Z",
      "endsAt": "2026-08-25T10:00:00.000Z",
      "location": "",
      "notes": "線上課程體驗營（2026-08-25 至 2026-08-28）",
      "createdAt": "2026-08-09T07:01:36.683Z",
      "updatedAt": "2026-08-09T07:01:36.683Z"
    },
    {
      "id": "cmslkewdn002907k95iqan7uz",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-25T01:00:00.000Z",
      "endsAt": "2026-08-25T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.684Z",
      "updatedAt": "2026-08-09T08:53:12.684Z"
    },
    {
      "id": "cmslkewdo002b07k923363v2a",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-25T01:00:00.000Z",
      "endsAt": "2026-08-25T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.685Z",
      "updatedAt": "2026-08-09T08:53:12.685Z"
    },
    {
      "id": "cmslkewdl002507k9o049kakg",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-24T01:00:00.000Z",
      "endsAt": "2026-08-24T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.682Z",
      "updatedAt": "2026-08-09T08:53:12.682Z"
    },
    {
      "id": "cmslkewdm002707k9baow793n",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-24T01:00:00.000Z",
      "endsAt": "2026-08-24T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.683Z",
      "updatedAt": "2026-08-09T08:53:12.683Z"
    },
    {
      "id": "cmslkewdk002107k9rydyu6g8",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-23T01:00:00.000Z",
      "endsAt": "2026-08-23T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.680Z",
      "updatedAt": "2026-08-09T08:53:12.680Z"
    },
    {
      "id": "cmslkewdh001x07k91pa89d9o",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-22T01:00:00.000Z",
      "endsAt": "2026-08-22T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.678Z",
      "updatedAt": "2026-08-09T08:53:12.678Z"
    },
    {
      "id": "cmslkewdf001t07k91ruq4c4o",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-21T01:00:00.000Z",
      "endsAt": "2026-08-21T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.676Z",
      "updatedAt": "2026-08-09T08:53:12.676Z"
    },
    {
      "id": "cmso9jf6k0005070ljgr4a8zi",
      "employeeId": null,
      "eventId": "cmso9io7j0000070lvz3cizpd",
      "type": "ONSITE",
      "startsAt": "2026-08-21T01:00:00.000Z",
      "endsAt": "2026-08-21T10:00:00.000Z",
      "location": "",
      "notes": "權限驗收活動 20260811 編輯（2026-08-20 至 2026-08-21）",
      "createdAt": "2026-08-11T06:12:06.428Z",
      "updatedAt": "2026-08-11T06:12:06.428Z"
    },
    {
      "id": "cmslkewde001r07k9xt6jaldr",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-20T01:00:00.000Z",
      "endsAt": "2026-08-20T10:00:00.000Z",
      "location": null,
      "notes": "公休",
      "createdAt": "2026-08-09T08:53:12.674Z",
      "updatedAt": "2026-08-09T08:53:12.674Z"
    },
    {
      "id": "cmso9jf6k0004070lkd1vge23",
      "employeeId": null,
      "eventId": "cmso9io7j0000070lvz3cizpd",
      "type": "ONSITE",
      "startsAt": "2026-08-20T01:00:00.000Z",
      "endsAt": "2026-08-20T10:00:00.000Z",
      "location": "",
      "notes": "權限驗收活動 20260811 編輯（2026-08-20 至 2026-08-21）",
      "createdAt": "2026-08-11T06:12:06.428Z",
      "updatedAt": "2026-08-11T06:12:06.428Z"
    },
    {
      "id": "cmslkewdd001p07k9bfy3ejev",
      "employeeId": "cms4p2pc80003075loz9i3h6c",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-19T01:00:00.000Z",
      "endsAt": "2026-08-19T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.674Z",
      "updatedAt": "2026-08-09T08:53:12.674Z"
    },
    {
      "id": "cmslgfdpp000807rpxf55mvkr",
      "employeeId": null,
      "eventId": "cms68qxl8000607on14gurg05",
      "type": "ONSITE",
      "startsAt": "2026-08-18T01:00:00.000Z",
      "endsAt": "2026-08-18T10:00:00.000Z",
      "location": "",
      "notes": "天赦日（2026-08-14 至 2026-08-18）",
      "createdAt": "2026-08-09T07:01:36.685Z",
      "updatedAt": "2026-08-09T07:01:36.685Z"
    },
    {
      "id": "cmslkewdb001l07k9rlyadswk",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-18T01:00:00.000Z",
      "endsAt": "2026-08-18T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.671Z",
      "updatedAt": "2026-08-09T08:53:12.671Z"
    },
    {
      "id": "cmslkewdc001n07k9v1kkvw6o",
      "employeeId": "cms4p2pc80003075loz9i3h6c",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-18T01:00:00.000Z",
      "endsAt": "2026-08-18T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.673Z",
      "updatedAt": "2026-08-09T08:53:12.673Z"
    },
    {
      "id": "cmslgfdpp000707rp6e7czbke",
      "employeeId": null,
      "eventId": "cms68qxl8000607on14gurg05",
      "type": "ONSITE",
      "startsAt": "2026-08-17T01:00:00.000Z",
      "endsAt": "2026-08-17T10:00:00.000Z",
      "location": "",
      "notes": "天赦日（2026-08-14 至 2026-08-18）",
      "createdAt": "2026-08-09T07:01:36.685Z",
      "updatedAt": "2026-08-09T07:01:36.685Z"
    },
    {
      "id": "cmslkewd9001h07k95qlazcfe",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-17T01:00:00.000Z",
      "endsAt": "2026-08-17T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.669Z",
      "updatedAt": "2026-08-09T08:53:12.669Z"
    },
    {
      "id": "cmslkewda001j07k98eca6iil",
      "employeeId": "cms4p2pc80003075loz9i3h6c",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-17T01:00:00.000Z",
      "endsAt": "2026-08-17T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.670Z",
      "updatedAt": "2026-08-09T08:53:12.670Z"
    },
    {
      "id": "cmslgfdpp000607rpojesikb4",
      "employeeId": null,
      "eventId": "cms68qxl8000607on14gurg05",
      "type": "ONSITE",
      "startsAt": "2026-08-16T01:00:00.000Z",
      "endsAt": "2026-08-16T10:00:00.000Z",
      "location": "",
      "notes": "天赦日（2026-08-14 至 2026-08-18）",
      "createdAt": "2026-08-09T07:01:36.685Z",
      "updatedAt": "2026-08-09T07:01:36.685Z"
    },
    {
      "id": "cmslkewd6001b07k9cgxf7buv",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-16T01:00:00.000Z",
      "endsAt": "2026-08-16T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.666Z",
      "updatedAt": "2026-08-09T08:53:12.666Z"
    },
    {
      "id": "cmslgfdpp000507rpcnz9cdip",
      "employeeId": null,
      "eventId": "cms68qxl8000607on14gurg05",
      "type": "ONSITE",
      "startsAt": "2026-08-15T01:00:00.000Z",
      "endsAt": "2026-08-15T10:00:00.000Z",
      "location": "",
      "notes": "天赦日（2026-08-14 至 2026-08-18）",
      "createdAt": "2026-08-09T07:01:36.685Z",
      "updatedAt": "2026-08-09T07:01:36.685Z"
    },
    {
      "id": "cmslkewd2001507k9vutqjew9",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-15T01:00:00.000Z",
      "endsAt": "2026-08-15T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.663Z",
      "updatedAt": "2026-08-09T08:53:12.663Z"
    },
    {
      "id": "cmslgfdpp000407rpmcrt071w",
      "employeeId": null,
      "eventId": "cms68qxl8000607on14gurg05",
      "type": "ONSITE",
      "startsAt": "2026-08-14T01:00:00.000Z",
      "endsAt": "2026-08-14T10:00:00.000Z",
      "location": "",
      "notes": "天赦日（2026-08-14 至 2026-08-18）",
      "createdAt": "2026-08-09T07:01:36.685Z",
      "updatedAt": "2026-08-09T07:01:36.685Z"
    },
    {
      "id": "cmslkewcz000z07k9lt4jjnu9",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-14T01:00:00.000Z",
      "endsAt": "2026-08-14T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.660Z",
      "updatedAt": "2026-08-09T08:53:12.660Z"
    },
    {
      "id": "cmslkewcy000x07k90xt43r1f",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-13T01:00:00.000Z",
      "endsAt": "2026-08-13T10:00:00.000Z",
      "location": null,
      "notes": "公休",
      "createdAt": "2026-08-09T08:53:12.659Z",
      "updatedAt": "2026-08-09T08:53:12.659Z"
    },
    {
      "id": "cmslkewcx000v07k99gobi8ty",
      "employeeId": "cms4p2dqu0002075lm664zdok",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-12T01:00:00.000Z",
      "endsAt": "2026-08-12T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.658Z",
      "updatedAt": "2026-08-09T08:53:12.658Z"
    },
    {
      "id": "cmso9gxxe000607zq5wyisskx",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-11T06:10:10.753Z",
      "endsAt": "2026-08-11T10:10:10.753Z",
      "location": "門市",
      "notes": null,
      "createdAt": "2026-08-11T06:10:10.755Z",
      "updatedAt": "2026-08-11T06:10:10.755Z"
    },
    {
      "id": "cmslkewcv000r07k94a76dukt",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-11T01:00:00.000Z",
      "endsAt": "2026-08-11T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.655Z",
      "updatedAt": "2026-08-09T08:53:12.655Z"
    },
    {
      "id": "cmslkewcw000t07k90saoz614",
      "employeeId": "cms4p2dqu0002075lm664zdok",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-11T01:00:00.000Z",
      "endsAt": "2026-08-11T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.657Z",
      "updatedAt": "2026-08-09T08:53:12.657Z"
    },
    {
      "id": "cmslkewct000n07k9d9n11psz",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-10T01:00:00.000Z",
      "endsAt": "2026-08-10T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.653Z",
      "updatedAt": "2026-08-09T08:53:12.653Z"
    },
    {
      "id": "cmslkewcu000p07k9vqb5p4l2",
      "employeeId": "cms4p2dqu0002075lm664zdok",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-10T01:00:00.000Z",
      "endsAt": "2026-08-10T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.654Z",
      "updatedAt": "2026-08-09T08:53:12.654Z"
    },
    {
      "id": "cmslkewcs000l07k9r4ngy36t",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-09T01:00:00.000Z",
      "endsAt": "2026-08-09T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.652Z",
      "updatedAt": "2026-08-09T08:53:12.652Z"
    },
    {
      "id": "cmslkewcr000j07k9xo3d4vcw",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-08T01:00:00.000Z",
      "endsAt": "2026-08-08T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.651Z",
      "updatedAt": "2026-08-09T08:53:12.651Z"
    },
    {
      "id": "cmslkewcq000h07k9djun7lvc",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-07T01:00:00.000Z",
      "endsAt": "2026-08-07T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.650Z",
      "updatedAt": "2026-08-09T08:53:12.650Z"
    },
    {
      "id": "cmslkewco000f07k9e9d36upq",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-06T01:00:00.000Z",
      "endsAt": "2026-08-06T10:00:00.000Z",
      "location": null,
      "notes": "公休",
      "createdAt": "2026-08-09T08:53:12.649Z",
      "updatedAt": "2026-08-09T08:53:12.649Z"
    },
    {
      "id": "cmslkewcn000d07k9cxashpdm",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-05T01:00:00.000Z",
      "endsAt": "2026-08-05T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.648Z",
      "updatedAt": "2026-08-09T08:53:12.648Z"
    },
    {
      "id": "cmslkewcl000907k9e7jimyax",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-04T01:00:00.000Z",
      "endsAt": "2026-08-04T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.645Z",
      "updatedAt": "2026-08-09T08:53:12.645Z"
    },
    {
      "id": "cmslkewcm000b07k9pj6kk30g",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-04T01:00:00.000Z",
      "endsAt": "2026-08-04T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.647Z",
      "updatedAt": "2026-08-09T08:53:12.647Z"
    },
    {
      "id": "cmslkkmt4000h07pzhk27clrl",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-04T01:00:00.000Z",
      "endsAt": "2026-08-04T10:00:00.000Z",
      "location": null,
      "notes": "Crimson測試",
      "createdAt": "2026-08-09T08:57:40.217Z",
      "updatedAt": "2026-08-09T08:57:40.217Z"
    },
    {
      "id": "cmslkewci000507k9eint9197",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-03T01:00:00.000Z",
      "endsAt": "2026-08-03T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.643Z",
      "updatedAt": "2026-08-09T08:53:12.643Z"
    },
    {
      "id": "cmslkewck000707k95vreabmi",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-03T01:00:00.000Z",
      "endsAt": "2026-08-03T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.644Z",
      "updatedAt": "2026-08-09T08:53:12.644Z"
    },
    {
      "id": "cmslkewch000307k9qm3rqy9y",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-02T01:00:00.000Z",
      "endsAt": "2026-08-02T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.641Z",
      "updatedAt": "2026-08-09T08:53:12.641Z"
    },
    {
      "id": "cmslkewcf000107k9qyjwp8rb",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-08-01T01:00:00.000Z",
      "endsAt": "2026-08-01T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-08-09T08:53:12.639Z",
      "updatedAt": "2026-08-09T08:53:12.639Z"
    },
    {
      "id": "cms63elnf001r072tunhs155x",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-31T01:00:00.000Z",
      "endsAt": "2026-07-31T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T13:00:32.668Z",
      "updatedAt": "2026-07-29T13:00:32.668Z"
    },
    {
      "id": "cms63elny001t072tfwh4oz65",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-31T01:00:00.000Z",
      "endsAt": "2026-07-31T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T13:00:32.686Z",
      "updatedAt": "2026-07-29T13:00:32.686Z"
    },
    {
      "id": "cms63efyb001p072tekirw3da",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-30T01:00:00.000Z",
      "endsAt": "2026-07-30T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T13:00:25.284Z",
      "updatedAt": "2026-07-29T13:00:25.284Z"
    },
    {
      "id": "cms63ebwz001n072thi7rkjn7",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-29T01:00:00.000Z",
      "endsAt": "2026-07-29T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T13:00:20.051Z",
      "updatedAt": "2026-07-29T13:00:20.051Z"
    },
    {
      "id": "cms63e8hc001l072t4jdro2i7",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-28T01:00:00.000Z",
      "endsAt": "2026-07-28T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T13:00:15.601Z",
      "updatedAt": "2026-07-29T13:00:15.601Z"
    },
    {
      "id": "cms6363qk000307py33ctz2o1",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-27T01:00:00.000Z",
      "endsAt": "2026-07-27T10:00:00.000Z",
      "location": null,
      "notes": "公休",
      "createdAt": "2026-07-29T12:53:56.205Z",
      "updatedAt": "2026-07-29T12:53:56.205Z"
    },
    {
      "id": "cms63fa6r001v072tqc2c519r",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-26T01:00:00.000Z",
      "endsAt": "2026-07-26T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T13:01:04.467Z",
      "updatedAt": "2026-07-29T13:01:04.467Z"
    },
    {
      "id": "cms63djyi001b072t3mad4rct",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-25T01:00:00.000Z",
      "endsAt": "2026-07-25T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:43.819Z",
      "updatedAt": "2026-07-29T12:59:43.819Z"
    },
    {
      "id": "cms63djyz001d072t6aqg6fh7",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-25T01:00:00.000Z",
      "endsAt": "2026-07-25T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:43.835Z",
      "updatedAt": "2026-07-29T12:59:43.835Z"
    },
    {
      "id": "cms63demx0017072teeo7wh6m",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-24T01:00:00.000Z",
      "endsAt": "2026-07-24T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:36.921Z",
      "updatedAt": "2026-07-29T12:59:36.921Z"
    },
    {
      "id": "cms63denx0019072to0evz8cq",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-24T01:00:00.000Z",
      "endsAt": "2026-07-24T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:36.957Z",
      "updatedAt": "2026-07-29T12:59:36.957Z"
    },
    {
      "id": "cms63d58g0015072th28pm7yr",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-23T01:00:00.000Z",
      "endsAt": "2026-07-23T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:24.736Z",
      "updatedAt": "2026-07-29T12:59:24.736Z"
    },
    {
      "id": "cms64g5r70005077dkoiw07e2",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-23T01:00:00.000Z",
      "endsAt": "2026-07-23T10:00:00.000Z",
      "location": null,
      "notes": "公益占卜現場服務",
      "createdAt": "2026-07-29T13:29:44.996Z",
      "updatedAt": "2026-07-29T13:29:44.996Z"
    },
    {
      "id": "cms63d1io0013072tgnigp6tv",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-22T01:00:00.000Z",
      "endsAt": "2026-07-22T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:19.921Z",
      "updatedAt": "2026-07-29T12:59:19.921Z"
    },
    {
      "id": "cms64g5qp0004077dxdwhuphv",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-22T01:00:00.000Z",
      "endsAt": "2026-07-22T10:00:00.000Z",
      "location": null,
      "notes": "公益占卜現場服務",
      "createdAt": "2026-07-29T13:29:44.977Z",
      "updatedAt": "2026-07-29T13:29:44.977Z"
    },
    {
      "id": "cms63cxd30011072toj2fa95q",
      "employeeId": "cms4p24hr0001075l8bmt8g8g",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-21T01:00:00.000Z",
      "endsAt": "2026-07-21T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:14.536Z",
      "updatedAt": "2026-07-29T12:59:14.536Z"
    },
    {
      "id": "cms64g5q50003077dsi1fuhi5",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-21T01:00:00.000Z",
      "endsAt": "2026-07-21T10:00:00.000Z",
      "location": null,
      "notes": "公益占卜現場服務",
      "createdAt": "2026-07-29T13:29:44.958Z",
      "updatedAt": "2026-07-29T13:29:44.958Z"
    },
    {
      "id": "cms635yh7000207pynyteuxgu",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-20T01:00:00.000Z",
      "endsAt": "2026-07-20T10:00:00.000Z",
      "location": null,
      "notes": "公休",
      "createdAt": "2026-07-29T12:53:49.387Z",
      "updatedAt": "2026-07-29T12:53:49.387Z"
    },
    {
      "id": "cms63dw3x001h072tfgctpzk7",
      "employeeId": "cms4p2pc80003075loz9i3h6c",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-19T01:00:00.000Z",
      "endsAt": "2026-07-19T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:59.566Z",
      "updatedAt": "2026-07-29T12:59:59.566Z"
    },
    {
      "id": "cms63c46m000r072t1e08vja7",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-18T01:00:00.000Z",
      "endsAt": "2026-07-18T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:58:36.718Z",
      "updatedAt": "2026-07-29T12:58:36.718Z"
    },
    {
      "id": "cms63cpfy000x072t8gsnr0lk",
      "employeeId": "cms4p2pc80003075loz9i3h6c",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-18T01:00:00.000Z",
      "endsAt": "2026-07-18T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:04.271Z",
      "updatedAt": "2026-07-29T12:59:04.271Z"
    },
    {
      "id": "cms63byox000n072tgbn60frj",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-17T01:00:00.000Z",
      "endsAt": "2026-07-17T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:58:29.601Z",
      "updatedAt": "2026-07-29T12:58:29.601Z"
    },
    {
      "id": "cms63cjh3000v072tsbe51v6n",
      "employeeId": "cms4p2pc80003075loz9i3h6c",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-17T01:00:00.000Z",
      "endsAt": "2026-07-17T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:58:56.535Z",
      "updatedAt": "2026-07-29T12:58:56.535Z"
    },
    {
      "id": "cms63bt94000l072t6dmm90td",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-16T01:00:00.000Z",
      "endsAt": "2026-07-16T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:58:22.552Z",
      "updatedAt": "2026-07-29T12:58:22.552Z"
    },
    {
      "id": "cms64f5lc0002077dua7wacfy",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-16T01:00:00.000Z",
      "endsAt": "2026-07-16T10:00:00.000Z",
      "location": null,
      "notes": "天赦日儀式報名",
      "createdAt": "2026-07-29T13:28:58.128Z",
      "updatedAt": "2026-07-29T13:28:58.128Z"
    },
    {
      "id": "cms68qxlb000b07ons9fxw62t",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-16T01:00:00.000Z",
      "endsAt": "2026-07-16T10:00:00.000Z",
      "location": "",
      "notes": "天赦日",
      "createdAt": "2026-07-29T15:30:06.095Z",
      "updatedAt": "2026-07-29T15:30:06.095Z"
    },
    {
      "id": "cms63bpku000j072t7n3hm0ue",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-15T01:00:00.000Z",
      "endsAt": "2026-07-15T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:58:17.790Z",
      "updatedAt": "2026-07-29T12:58:17.790Z"
    },
    {
      "id": "cms64f5kv0001077dx18xd23x",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-15T01:00:00.000Z",
      "endsAt": "2026-07-15T10:00:00.000Z",
      "location": null,
      "notes": "天赦日儀式報名",
      "createdAt": "2026-07-29T13:28:58.111Z",
      "updatedAt": "2026-07-29T13:28:58.111Z"
    },
    {
      "id": "cms68qxlb000a07onxs9arzdz",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-15T01:00:00.000Z",
      "endsAt": "2026-07-15T10:00:00.000Z",
      "location": "",
      "notes": "天赦日",
      "createdAt": "2026-07-29T15:30:06.095Z",
      "updatedAt": "2026-07-29T15:30:06.095Z"
    },
    {
      "id": "cms63bl1b000h072tkt2vx2w1",
      "employeeId": "cms4p1vby0000075lnb5znb5x",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-14T01:00:00.000Z",
      "endsAt": "2026-07-14T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:58:11.904Z",
      "updatedAt": "2026-07-29T12:58:11.904Z"
    },
    {
      "id": "cms64f5kd0000077d3o13g3lf",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-14T01:00:00.000Z",
      "endsAt": "2026-07-14T10:00:00.000Z",
      "location": null,
      "notes": "天赦日儀式報名",
      "createdAt": "2026-07-29T13:28:58.094Z",
      "updatedAt": "2026-07-29T13:28:58.094Z"
    },
    {
      "id": "cms68qxlb000907onxnq90gyn",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-14T01:00:00.000Z",
      "endsAt": "2026-07-14T10:00:00.000Z",
      "location": "",
      "notes": "天赦日",
      "createdAt": "2026-07-29T15:30:06.095Z",
      "updatedAt": "2026-07-29T15:30:06.095Z"
    },
    {
      "id": "cms635w3o000107pyzaysmbtl",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-13T01:00:00.000Z",
      "endsAt": "2026-07-13T10:00:00.000Z",
      "location": null,
      "notes": "公休",
      "createdAt": "2026-07-29T12:53:46.309Z",
      "updatedAt": "2026-07-29T12:53:46.309Z"
    },
    {
      "id": "cms63dshk001f072t6ad055hz",
      "employeeId": "cms4p2dqu0002075lm664zdok",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-12T01:00:00.000Z",
      "endsAt": "2026-07-12T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:59:54.873Z",
      "updatedAt": "2026-07-29T12:59:54.873Z"
    },
    {
      "id": "cms63b4u8000b072to9wlisnt",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-11T01:00:00.000Z",
      "endsAt": "2026-07-11T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:57:50.912Z",
      "updatedAt": "2026-07-29T12:57:50.912Z"
    },
    {
      "id": "cms63b4uo000d072tbc0rki7m",
      "employeeId": "cms4p2dqu0002075lm664zdok",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-11T01:00:00.000Z",
      "endsAt": "2026-07-11T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:57:50.929Z",
      "updatedAt": "2026-07-29T12:57:50.929Z"
    },
    {
      "id": "cms63avv30007072trxk5bylt",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-10T01:00:00.000Z",
      "endsAt": "2026-07-10T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:57:39.279Z",
      "updatedAt": "2026-07-29T12:57:39.279Z"
    },
    {
      "id": "cms63avvj0009072tw5ohtuad",
      "employeeId": "cms4p2dqu0002075lm664zdok",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-10T01:00:00.000Z",
      "endsAt": "2026-07-10T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:57:39.296Z",
      "updatedAt": "2026-07-29T12:57:39.296Z"
    },
    {
      "id": "cms63am1s0005072txece1mrr",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-09T01:00:00.000Z",
      "endsAt": "2026-07-09T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:57:26.561Z",
      "updatedAt": "2026-07-29T12:57:26.561Z"
    },
    {
      "id": "cms63ai0e0003072taxzgzd2z",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-08T01:00:00.000Z",
      "endsAt": "2026-07-08T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:57:21.326Z",
      "updatedAt": "2026-07-29T12:57:21.326Z"
    },
    {
      "id": "cms63acqm0001072tk48aqyxn",
      "employeeId": "seed-employee-amy",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-07T01:00:00.000Z",
      "endsAt": "2026-07-07T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:57:14.494Z",
      "updatedAt": "2026-07-29T12:57:14.494Z"
    },
    {
      "id": "cms635qa9000007py608hiium",
      "employeeId": null,
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-06T01:00:00.000Z",
      "endsAt": "2026-07-06T10:00:00.000Z",
      "location": null,
      "notes": "公休",
      "createdAt": "2026-07-29T12:53:38.769Z",
      "updatedAt": "2026-07-29T12:53:38.769Z"
    },
    {
      "id": "cms62zrlf000f07cqztlohxf4",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-05T01:00:00.000Z",
      "endsAt": "2026-07-05T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:49:00.531Z",
      "updatedAt": "2026-07-29T12:49:00.531Z"
    },
    {
      "id": "cms62ze6b000907cqgz34qqvq",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-04T01:00:00.000Z",
      "endsAt": "2026-07-04T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:48:43.139Z",
      "updatedAt": "2026-07-29T12:48:43.139Z"
    },
    {
      "id": "cms62ze6r000b07cq70yv7ni2",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-04T01:00:00.000Z",
      "endsAt": "2026-07-04T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:48:43.155Z",
      "updatedAt": "2026-07-29T12:48:43.155Z"
    },
    {
      "id": "cms62z5f3000507cqgufv81zv",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-03T01:00:00.000Z",
      "endsAt": "2026-07-03T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:48:31.791Z",
      "updatedAt": "2026-07-29T12:48:31.791Z"
    },
    {
      "id": "cms62z5fm000707cqhgtqpn2f",
      "employeeId": "cms3cgvb5000107s6d69ls6hg",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-03T01:00:00.000Z",
      "endsAt": "2026-07-03T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:48:31.811Z",
      "updatedAt": "2026-07-29T12:48:31.811Z"
    },
    {
      "id": "cms62yyoz000307cq9dcyzaie",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-02T01:00:00.000Z",
      "endsAt": "2026-07-02T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:48:23.075Z",
      "updatedAt": "2026-07-29T12:48:23.075Z"
    },
    {
      "id": "cms62yt1g000107cqt1gfuxwi",
      "employeeId": "cms3cfz3o000007s6f60h8zjr",
      "eventId": null,
      "type": "ONSITE",
      "startsAt": "2026-07-01T01:00:00.000Z",
      "endsAt": "2026-07-01T10:00:00.000Z",
      "location": null,
      "notes": null,
      "createdAt": "2026-07-29T12:48:15.748Z",
      "updatedAt": "2026-07-29T12:48:15.748Z"
    }
  ],
  "sops": [
    {
      "id": "cmso9gxxl000b07zq8htw46rp",
      "title": "每日結帳流程",
      "category": "營收",
      "status": "ACTIVE",
      "description": "確認營收流水、現金、匯款與零用金支出。",
      "createdAt": "2026-08-11T06:10:10.761Z",
      "updatedAt": "2026-08-11T06:10:10.761Z"
    },
    {
      "id": "cms39bodk00090773139esdom",
      "title": "每日結帳流程",
      "category": "營收",
      "status": "ACTIVE",
      "description": "確認營收流水、現金、匯款與零用金支出。",
      "createdAt": "2026-07-27T13:22:55.401Z",
      "updatedAt": "2026-07-27T13:22:55.401Z"
    }
  ],
  "sop-steps": [
    {
      "id": "cms39bodk000a0773uqhtfsse",
      "sopId": "cms39bodk00090773139esdom",
      "title": "核對當日銷售單",
      "owner": "櫃台",
      "sortOrder": 1,
      "status": "TODO",
      "description": null,
      "createdAt": "2026-07-27T13:22:55.401Z",
      "updatedAt": "2026-07-27T13:22:55.401Z"
    },
    {
      "id": "cmso9gxxl000c07zqrv03vd3s",
      "sopId": "cmso9gxxl000b07zq8htw46rp",
      "title": "核對當日銷售單",
      "owner": "櫃台",
      "sortOrder": 1,
      "status": "TODO",
      "description": null,
      "createdAt": "2026-08-11T06:10:10.761Z",
      "updatedAt": "2026-08-11T06:10:10.761Z"
    },
    {
      "id": "cms39bodk000b0773jeyd3n6i",
      "sopId": "cms39bodk00090773139esdom",
      "title": "確認現金與匯款",
      "owner": "會計",
      "sortOrder": 2,
      "status": "TODO",
      "description": null,
      "createdAt": "2026-07-27T13:22:55.401Z",
      "updatedAt": "2026-07-27T13:22:55.401Z"
    },
    {
      "id": "cmso9gxxl000d07zqpovaxzji",
      "sopId": "cmso9gxxl000b07zq8htw46rp",
      "title": "確認現金與匯款",
      "owner": "會計",
      "sortOrder": 2,
      "status": "TODO",
      "description": null,
      "createdAt": "2026-08-11T06:10:10.761Z",
      "updatedAt": "2026-08-11T06:10:10.761Z"
    }
  ],
  "events": [
    {
      "id": "cmso9o9sm000007ftg9bbqr32",
      "title": "權限驗收活動 3001 編輯",
      "term": null,
      "startsAt": "2026-08-22T00:00:00.000Z",
      "endsAt": "2026-08-23T00:00:00.000Z",
      "preparationNote": null,
      "active": true,
      "createdAt": "2026-08-11T06:15:52.726Z",
      "updatedAt": "2026-08-11T06:16:28.781Z"
    },
    {
      "id": "cmso9io7j0000070lvz3cizpd",
      "title": "權限驗收活動 20260811 編輯",
      "term": null,
      "startsAt": "2026-08-20T00:00:00.000Z",
      "endsAt": "2026-08-21T00:00:00.000Z",
      "preparationNote": null,
      "active": true,
      "createdAt": "2026-08-11T06:11:31.471Z",
      "updatedAt": "2026-08-11T06:12:06.423Z"
    },
    {
      "id": "cmslzdtcu000907s7x5ymodck",
      "title": "公益占卜活動",
      "term": null,
      "startsAt": "2026-08-26T00:00:00.000Z",
      "endsAt": "2026-08-29T00:00:00.000Z",
      "preparationNote": null,
      "active": true,
      "createdAt": "2026-08-09T15:52:16.349Z",
      "updatedAt": "2026-08-09T15:52:16.349Z"
    },
    {
      "id": "cms68qxl8000607on14gurg05",
      "title": "天赦日",
      "term": null,
      "startsAt": "2026-08-14T00:00:00.000Z",
      "endsAt": "2026-08-18T00:00:00.000Z",
      "preparationNote": null,
      "active": true,
      "createdAt": "2026-07-29T15:30:06.093Z",
      "updatedAt": "2026-08-09T06:49:27.959Z"
    },
    {
      "id": "seed-event-course",
      "title": "線上課程體驗營",
      "term": "第一期",
      "startsAt": "2026-08-25T00:00:00.000Z",
      "endsAt": "2026-08-28T00:00:00.000Z",
      "preparationNote": "確認講義、匯款資訊與課前通知。",
      "active": true,
      "createdAt": "2026-07-27T13:22:55.398Z",
      "updatedAt": "2026-08-09T06:50:32.164Z"
    }
  ],
  "event-registrations": [
    {
      "id": "cmsli5hby000d073wdvnzxs5w",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000h07i5lz3ro5zd",
      "customerId": null,
      "saleId": "cmsli5hby000e073wpnsfs2s0",
      "attendeeName": "測試課程-何欣怡",
      "phone": "0922-000-204",
      "registeredAt": "2026-08-27T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "COURSE-04",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.046Z",
      "updatedAt": "2026-08-09T07:49:54.047Z"
    },
    {
      "id": "cmsli5hc1000u073wjh0nq4bm",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000h07i5lz3ro5zd",
      "customerId": null,
      "saleId": "cmsli5hc2000v073wo2s6gtfm",
      "attendeeName": "測試課程-廖家瑜",
      "phone": "0922-000-208",
      "registeredAt": "2026-08-27T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "COURSE-08",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.050Z",
      "updatedAt": "2026-08-09T07:49:54.051Z"
    },
    {
      "id": "cmsli5hbx000b073wygs035gn",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000f07i5x3fjhdl8",
      "customerId": null,
      "saleId": null,
      "attendeeName": "測試課程-楊子晴",
      "phone": "0922-000-203",
      "registeredAt": "2026-08-26T16:00:00.000Z",
      "status": "REGISTERED",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": null,
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.046Z",
      "updatedAt": "2026-08-09T07:49:54.046Z"
    },
    {
      "id": "cmsli5hc1000s073wtazwd95p",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000f07i5x3fjhdl8",
      "customerId": null,
      "saleId": null,
      "attendeeName": "測試課程-曾柏宏",
      "phone": "0922-000-207",
      "registeredAt": "2026-08-26T16:00:00.000Z",
      "status": "REGISTERED",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": null,
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.049Z",
      "updatedAt": "2026-08-09T07:49:54.049Z"
    },
    {
      "id": "cmsli5hbw0006073webtze4ww",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000h07i5lz3ro5zd",
      "customerId": null,
      "saleId": "cmsli5hbw0007073w1fz42gqz",
      "attendeeName": "測試課程-鄭宇軒",
      "phone": "0922-000-202",
      "registeredAt": "2026-08-25T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "COURSE-02",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.045Z",
      "updatedAt": "2026-08-09T07:49:54.045Z"
    },
    {
      "id": "cmsli5hc0000n073wqquuv6ah",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000h07i5lz3ro5zd",
      "customerId": null,
      "saleId": "cmsli5hc0000o073wfe27cwho",
      "attendeeName": "測試課程-羅婉婷",
      "phone": "0922-000-206",
      "registeredAt": "2026-08-25T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "COURSE-06",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.048Z",
      "updatedAt": "2026-08-09T07:49:54.049Z"
    },
    {
      "id": "cmsli5hc40014073w3g6grbw3",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000h07i5lz3ro5zd",
      "customerId": null,
      "saleId": "cmsli5hc40015073w2v92o0fr",
      "attendeeName": "測試課程-謝宗霖",
      "phone": "0922-000-210",
      "registeredAt": "2026-08-25T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "COURSE-10",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.052Z",
      "updatedAt": "2026-08-09T07:49:54.053Z"
    },
    {
      "id": "cmsli5hbu0001073w1cuxe44l",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000f07i5x3fjhdl8",
      "customerId": null,
      "saleId": "cmsli5hbv0002073wql22uw4h",
      "attendeeName": "測試課程-周品妤",
      "phone": "0922-000-201",
      "registeredAt": "2026-08-24T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "COURSE-01",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.042Z",
      "updatedAt": "2026-08-09T07:49:54.044Z"
    },
    {
      "id": "cmsli5hbz000i073wgysmpv8v",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000f07i5x3fjhdl8",
      "customerId": null,
      "saleId": "cmsli5hbz000j073wrql9j27r",
      "attendeeName": "測試課程-郭承翰",
      "phone": "0922-000-205",
      "registeredAt": "2026-08-24T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "COURSE-05",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.047Z",
      "updatedAt": "2026-08-09T07:49:54.048Z"
    },
    {
      "id": "cmsli5hc3000z073wvp94ogsf",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000f07i5x3fjhdl8",
      "customerId": null,
      "saleId": "cmsli5hc30010073w699ej06b",
      "attendeeName": "測試課程-宋佳穎",
      "phone": "0922-000-209",
      "registeredAt": "2026-08-24T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "COURSE-09",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.051Z",
      "updatedAt": "2026-08-09T07:49:54.052Z"
    },
    {
      "id": "cmslhyujq001107qnuwlqba1y",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfyhxx000707i593do8ukh",
      "customerId": null,
      "saleId": "cmslhyujq001207qnc4w63pus",
      "attendeeName": "測試-許庭瑋",
      "phone": "0911-000-110",
      "registeredAt": "2026-08-17T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "300",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "TEST-10",
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.583Z",
      "updatedAt": "2026-08-09T07:44:44.583Z"
    },
    {
      "id": "cmslhyujo000i07qnrskf30tb",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfzrfd000b07i5qkvhn6qm",
      "customerId": null,
      "saleId": null,
      "attendeeName": "測試-黃冠宇",
      "phone": "0911-000-105",
      "registeredAt": "2026-08-17T00:00:00.000Z",
      "status": "REGISTERED",
      "paidAmount": "1800",
      "paymentMethod": "TRANSFER",
      "remittanceRef": null,
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.580Z",
      "updatedAt": "2026-08-09T07:48:43.842Z"
    },
    {
      "id": "cmslhyujn000d07qnfig9lliz",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfyhxx000707i593do8ukh",
      "customerId": null,
      "saleId": "cmslhyujn000e07qnbz51uwxs",
      "attendeeName": "測試-張雅婷",
      "phone": "0911-000-104",
      "registeredAt": "2026-08-16T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "300",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "TEST-04",
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.579Z",
      "updatedAt": "2026-08-09T07:44:44.580Z"
    },
    {
      "id": "cmslhyujp000w07qndeub1bmo",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfzrfe000d07i5wr14mxsd",
      "customerId": null,
      "saleId": "cmslhyujq000x07qnb8uvco42",
      "attendeeName": "測試-蔡明哲",
      "phone": "0911-000-109",
      "registeredAt": "2026-08-16T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "1800",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "TEST-09",
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.582Z",
      "updatedAt": "2026-08-09T07:44:44.582Z"
    },
    {
      "id": "cmslhyujl000807qnfhufnl26",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfzrfe000d07i5wr14mxsd",
      "customerId": null,
      "saleId": "cmslhyujl000907qnmnw0xziv",
      "attendeeName": "測試-林志明",
      "phone": "0911-000-103",
      "registeredAt": "2026-08-15T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "1800",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "TEST-03",
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.577Z",
      "updatedAt": "2026-08-09T07:44:44.578Z"
    },
    {
      "id": "cmslhyujp000u07qndff5a9o3",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfzrfd000b07i5qkvhn6qm",
      "customerId": null,
      "saleId": null,
      "attendeeName": "測試-劉佳玲",
      "phone": "0911-000-108",
      "registeredAt": "2026-08-15T00:00:00.000Z",
      "status": "REGISTERED",
      "paidAmount": "1800",
      "paymentMethod": "TRANSFER",
      "remittanceRef": null,
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.582Z",
      "updatedAt": "2026-08-09T07:48:39.493Z"
    },
    {
      "id": "cmslhyujp000p07qnijrkfrwu",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfyhxx000707i593do8ukh",
      "customerId": null,
      "saleId": "cmslhyujp000q07qnxtf8re77",
      "attendeeName": "測試-吳宗翰",
      "phone": "0911-000-107",
      "registeredAt": "2026-08-14T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "300",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "TEST-07",
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.581Z",
      "updatedAt": "2026-08-09T07:44:44.581Z"
    },
    {
      "id": "cmslhyujk000607qndizea3hz",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfzrfd000b07i5qkvhn6qm",
      "customerId": null,
      "saleId": null,
      "attendeeName": "測試-陳怡君",
      "phone": "0911-000-102",
      "registeredAt": "2026-08-14T00:00:00.000Z",
      "status": "REGISTERED",
      "paidAmount": "1800",
      "paymentMethod": "TRANSFER",
      "remittanceRef": null,
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.577Z",
      "updatedAt": "2026-08-09T07:48:47.746Z"
    },
    {
      "id": "cmslhyujh000107qn5fbfw5kz",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfyhxx000707i593do8ukh",
      "customerId": null,
      "saleId": "cmslhyuji000207qniklnknca",
      "attendeeName": "測試-王小美",
      "phone": "0911-000-101",
      "registeredAt": "2026-08-13T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "300",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "TEST-01",
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.574Z",
      "updatedAt": "2026-08-09T07:44:44.576Z"
    },
    {
      "id": "cmslhyujo000k07qndj1uhzui",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfzrfe000d07i5wr14mxsd",
      "customerId": null,
      "saleId": "cmslhyujo000l07qnil9ypwsy",
      "attendeeName": "測試-李佩珊",
      "phone": "0911-000-106",
      "registeredAt": "2026-08-13T16:00:00.000Z",
      "status": "PAID",
      "paidAmount": "1800",
      "paymentMethod": "TRANSFER",
      "remittanceRef": "TEST-06",
      "notes": null,
      "createdAt": "2026-08-09T07:44:44.580Z",
      "updatedAt": "2026-08-09T07:44:44.581Z"
    },
    {
      "id": "cmso9gxxi000807zq9cttqy22",
      "eventId": "seed-event-course",
      "itemId": null,
      "customerId": "seed-customer-lin",
      "saleId": null,
      "attendeeName": "林小姐",
      "phone": "0988-000-111",
      "registeredAt": "2026-08-11T06:10:10.759Z",
      "status": "REGISTERED",
      "paidAmount": "0",
      "paymentMethod": "TRANSFER",
      "remittanceRef": null,
      "notes": null,
      "createdAt": "2026-08-11T06:10:10.759Z",
      "updatedAt": "2026-08-11T06:10:10.759Z"
    },
    {
      "id": "cms39bodj00060773rcnvehvj",
      "eventId": "seed-event-course",
      "itemId": "cmslg14yv000f07i5x3fjhdl8",
      "customerId": "seed-customer-lin",
      "saleId": "cmslhknrq000907tuxbf53i0c",
      "attendeeName": "林小姐",
      "phone": "0988-000-111",
      "registeredAt": "2026-08-09T00:00:00.000Z",
      "status": "PAID",
      "paidAmount": "5500",
      "paymentMethod": "TRANSFER",
      "remittanceRef": null,
      "notes": null,
      "createdAt": "2026-07-27T13:22:55.399Z",
      "updatedAt": "2026-08-09T07:43:59.014Z"
    },
    {
      "id": "cmslinlgr000l07edyfgovr6h",
      "eventId": "cms68qxl8000607on14gurg05",
      "itemId": "cmslfzrfd000b07i5qkvhn6qm",
      "customerId": null,
      "saleId": "cmslinno3000n07ed8jn13geo",
      "attendeeName": "Crimsontest01",
      "phone": null,
      "registeredAt": "2026-08-09T00:00:00.000Z",
      "status": "PAID",
      "paidAmount": "1800",
      "paymentMethod": "CASH",
      "remittanceRef": null,
      "notes": null,
      "createdAt": "2026-08-09T08:03:59.211Z",
      "updatedAt": "2026-08-09T08:29:58.921Z"
    }
  ],
  "customers": [
    {
      "id": "seed-customer-lin",
      "name": "林小姐",
      "phone": "0988-000-111",
      "email": "lin@example.com",
      "serviceLink": "https://example.com/customer/lin",
      "notes": null,
      "createdAt": "2026-07-27T13:22:55.397Z",
      "updatedAt": "2026-07-27T13:22:55.397Z"
    }
  ],
  "customer-service-records": [],
  "course-payments": [
    {
      "id": "cmso9gxxj000a07zqzz9x8oa6",
      "customerId": "seed-customer-lin",
      "courseName": "線上課程體驗營",
      "amount": "1200",
      "paymentMethod": "TRANSFER",
      "paidAt": null,
      "remittanceRef": null,
      "status": "待確認",
      "createdAt": "2026-08-11T06:10:10.760Z",
      "updatedAt": "2026-08-11T06:10:10.760Z"
    },
    {
      "id": "cms39bodk00080773f6t3md1n",
      "customerId": "seed-customer-lin",
      "courseName": "線上課程體驗營",
      "amount": "1200",
      "paymentMethod": "TRANSFER",
      "paidAt": null,
      "remittanceRef": null,
      "status": "待確認",
      "createdAt": "2026-07-27T13:22:55.400Z",
      "updatedAt": "2026-07-27T13:22:55.400Z"
    }
  ],
  "sales": [
    {
      "id": "cmslwh0wu00290733edydh607",
      "soldAt": "2026-08-28T06:20:00.000Z",
      "customerName": "八月補登客戶21",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.263Z",
      "updatedAt": "2026-08-09T14:30:47.263Z",
      "lines": [
        {
          "id": "cmslwh0wu002b0733t1pf6o2v",
          "saleId": "cmslwh0wu00290733edydh607",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmsli5hby000e073wpnsfs2s0",
      "soldAt": "2026-08-28T00:00:00.000Z",
      "customerName": "測試課程-何欣怡",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.047Z",
      "updatedAt": "2026-08-09T08:02:32.599Z",
      "lines": [
        {
          "id": "cmslilqmu000f07ed58xotvtd",
          "saleId": "cmsli5hby000e073wpnsfs2s0",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmsli5hc2000v073wo2s6gtfm",
      "soldAt": "2026-08-28T00:00:00.000Z",
      "customerName": "測試課程-廖家瑜",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.050Z",
      "updatedAt": "2026-08-09T08:02:40.154Z",
      "lines": [
        {
          "id": "cmslilwgq000h07edm6cnu96j",
          "saleId": "cmsli5hc2000v073wo2s6gtfm",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmslwh0wu002507332tg58gui",
      "soldAt": "2026-08-27T05:13:00.000Z",
      "customerName": "八月補登客戶20",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "20000",
      "discount": "0",
      "total": "20000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.262Z",
      "updatedAt": "2026-08-09T14:30:47.262Z",
      "lines": [
        {
          "id": "cmslwh0wu00270733rrzuqfkm",
          "saleId": "cmslwh0wu002507332tg58gui",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 4,
          "unitPrice": "5000",
          "lineTotal": "20000"
        }
      ]
    },
    {
      "id": "cmslwh0wu002107333e6x2fko",
      "soldAt": "2026-08-26T04:06:00.000Z",
      "customerName": "八月補登客戶19",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "5400",
      "discount": "0",
      "total": "5400",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.262Z",
      "updatedAt": "2026-08-09T15:24:49.288Z",
      "lines": [
        {
          "id": "cmslwh0wu002307330dk8faav",
          "saleId": "cmslwh0wu002107333e6x2fko",
          "itemId": "cmslfzrfd000b07i5qkvhn6qm",
          "quantity": 3,
          "unitPrice": "1800",
          "lineTotal": "5400"
        }
      ]
    },
    {
      "id": "cmsli5hbw0007073w1fz42gqz",
      "soldAt": "2026-08-26T00:00:00.000Z",
      "customerName": "測試課程-鄭宇軒",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": null,
      "createdAt": "2026-08-09T07:49:54.045Z",
      "updatedAt": "2026-08-09T08:02:49.102Z",
      "lines": [
        {
          "id": "cmslim3d9000j07ediqg28xy3",
          "saleId": "cmsli5hbw0007073w1fz42gqz",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmsli5hc0000o073wfe27cwho",
      "soldAt": "2026-08-25T16:00:00.000Z",
      "customerName": "測試課程-羅婉婷",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "活動報名：線上課程體驗營／COURSE-06",
      "createdAt": "2026-08-09T07:49:54.048Z",
      "updatedAt": "2026-08-09T08:42:14.089Z",
      "lines": [
        {
          "id": "cmsli5hc0000q073whlxjybtb",
          "saleId": "cmsli5hc0000o073wfe27cwho",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmsli5hc40015073w2v92o0fr",
      "soldAt": "2026-08-25T16:00:00.000Z",
      "customerName": "測試課程-謝宗霖",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "活動報名：線上課程體驗營／COURSE-10",
      "createdAt": "2026-08-09T07:49:54.052Z",
      "updatedAt": "2026-08-09T08:42:14.089Z",
      "lines": [
        {
          "id": "cmsli5hc40017073wnm6s9lbu",
          "saleId": "cmsli5hc40015073w2v92o0fr",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmslwh0wt001x07331rrtjksh",
      "soldAt": "2026-08-25T03:59:00.000Z",
      "customerName": "八月補登客戶18",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "3600",
      "discount": "0",
      "total": "3600",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.262Z",
      "updatedAt": "2026-08-09T15:24:49.295Z",
      "lines": [
        {
          "id": "cmslwh0wt001z0733pb9gdg9s",
          "saleId": "cmslwh0wt001x07331rrtjksh",
          "itemId": "cmslfzrfe000d07i5wr14mxsd",
          "quantity": 2,
          "unitPrice": "1800",
          "lineTotal": "3600"
        }
      ]
    },
    {
      "id": "cmsli5hbv0002073wql22uw4h",
      "soldAt": "2026-08-24T16:00:00.000Z",
      "customerName": "測試課程-周品妤",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "活動報名：線上課程體驗營／COURSE-01",
      "createdAt": "2026-08-09T07:49:54.043Z",
      "updatedAt": "2026-08-09T08:42:14.089Z",
      "lines": [
        {
          "id": "cmsli5hbv0004073w436ctsop",
          "saleId": "cmsli5hbv0002073wql22uw4h",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmsli5hbz000j073wrql9j27r",
      "soldAt": "2026-08-24T16:00:00.000Z",
      "customerName": "測試課程-郭承翰",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "活動報名：線上課程體驗營／COURSE-05",
      "createdAt": "2026-08-09T07:49:54.047Z",
      "updatedAt": "2026-08-09T08:42:14.089Z",
      "lines": [
        {
          "id": "cmsli5hbz000l073whu32de6g",
          "saleId": "cmsli5hbz000j073wrql9j27r",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmsli5hc30010073w699ej06b",
      "soldAt": "2026-08-24T16:00:00.000Z",
      "customerName": "測試課程-宋佳穎",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "活動報名：線上課程體驗營／COURSE-09",
      "createdAt": "2026-08-09T07:49:54.051Z",
      "updatedAt": "2026-08-09T08:42:14.089Z",
      "lines": [
        {
          "id": "cmsli5hc30012073w3q8521qr",
          "saleId": "cmsli5hc30010073w699ej06b",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmslwh0x100450733ozo9cq36",
      "soldAt": "2026-08-24T07:19:00.000Z",
      "customerName": "八月補登客戶38",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "200",
      "discount": "0",
      "total": "200",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.270Z",
      "updatedAt": "2026-08-09T14:30:47.270Z",
      "lines": [
        {
          "id": "cmslwh0x100470733f8xckack",
          "saleId": "cmslwh0x100450733ozo9cq36",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 1,
          "unitPrice": "200",
          "lineTotal": "200"
        }
      ]
    },
    {
      "id": "cmslwh0wt001t07332hxqg8yl",
      "soldAt": "2026-08-24T02:52:00.000Z",
      "customerName": "八月補登客戶17",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.261Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cmslwh0wt001v07336vvu3rk2",
          "saleId": "cmslwh0wt001t07332hxqg8yl",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "2000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cmslwh0wt001p0733nlm0g2x1",
      "soldAt": "2026-08-23T09:45:00.000Z",
      "customerName": "八月補登客戶16",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "4000",
      "discount": "0",
      "total": "4000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.261Z",
      "updatedAt": "2026-08-09T14:30:47.261Z",
      "lines": [
        {
          "id": "cmslwh0wt001r0733jw0u4yns",
          "saleId": "cmslwh0wt001p0733nlm0g2x1",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 4,
          "unitPrice": "1000",
          "lineTotal": "4000"
        }
      ]
    },
    {
      "id": "cmslwh0x100410733pcp56dfg",
      "soldAt": "2026-08-23T06:12:00.000Z",
      "customerName": "八月補登客戶37",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.269Z",
      "updatedAt": "2026-08-09T15:24:49.279Z",
      "lines": [
        {
          "id": "cmslwh0x100430733zbc5l2y9",
          "saleId": "cmslwh0x100410733pcp56dfg",
          "itemId": "cmslfyhxx000707i593do8ukh",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cmslwh0ws001l0733pbuzqhgj",
      "soldAt": "2026-08-22T08:38:00.000Z",
      "customerName": "八月補登客戶15",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.261Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cmslwh0ws001n0733xosd475j",
          "saleId": "cmslwh0ws001l0733pbuzqhgj",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cmslwh0x1003x07337m2x0ktn",
      "soldAt": "2026-08-22T05:05:00.000Z",
      "customerName": "八月補登客戶36",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "24000",
      "discount": "0",
      "total": "24000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.269Z",
      "updatedAt": "2026-08-09T14:30:47.269Z",
      "lines": [
        {
          "id": "cmslwh0x1003z0733c0776caq",
          "saleId": "cmslwh0x1003x07337m2x0ktn",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 3,
          "unitPrice": "8000",
          "lineTotal": "24000"
        }
      ]
    },
    {
      "id": "cmslwh0ws001h07337ctrhh1l",
      "soldAt": "2026-08-21T07:31:00.000Z",
      "customerName": "八月補登客戶14",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "11000",
      "discount": "0",
      "total": "11000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.260Z",
      "updatedAt": "2026-08-09T14:30:47.260Z",
      "lines": [
        {
          "id": "cmslwh0ws001j07338qyzn48j",
          "saleId": "cmslwh0ws001h07337ctrhh1l",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 2,
          "unitPrice": "5500",
          "lineTotal": "11000"
        }
      ]
    },
    {
      "id": "cmslwh0x0003t073334u50lh4",
      "soldAt": "2026-08-21T04:58:00.000Z",
      "customerName": "八月補登客戶35",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.269Z",
      "updatedAt": "2026-08-09T14:30:47.269Z",
      "lines": [
        {
          "id": "cmslwh0x0003v07338ng9vksw",
          "saleId": "cmslwh0x0003t073334u50lh4",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cmslwh0ws001d0733a92lqomn",
      "soldAt": "2026-08-20T06:24:00.000Z",
      "customerName": "八月補登客戶13",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.260Z",
      "updatedAt": "2026-08-09T14:30:47.260Z",
      "lines": [
        {
          "id": "cmslwh0ws001f0733b8l2h8c5",
          "saleId": "cmslwh0ws001d0733a92lqomn",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cmslwh0x0003p07332b5jkdc7",
      "soldAt": "2026-08-20T03:51:00.000Z",
      "customerName": "八月補登客戶34",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.268Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cmslwh0x0003r07331iejn9qs",
          "saleId": "cmslwh0x0003p07332b5jkdc7",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 2,
          "unitPrice": "3000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cmslwh0wr00190733aig5jlzr",
      "soldAt": "2026-08-19T05:17:00.000Z",
      "customerName": "八月補登客戶12",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "32000",
      "discount": "0",
      "total": "32000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.260Z",
      "updatedAt": "2026-08-09T14:30:47.260Z",
      "lines": [
        {
          "id": "cmslwh0wr001b0733wi402xjr",
          "saleId": "cmslwh0wr00190733aig5jlzr",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 4,
          "unitPrice": "8000",
          "lineTotal": "32000"
        }
      ]
    },
    {
      "id": "cmslwh0wz003l0733j0m0k0k0",
      "soldAt": "2026-08-19T02:44:00.000Z",
      "customerName": "八月補登客戶33",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.268Z",
      "updatedAt": "2026-08-09T14:30:47.268Z",
      "lines": [
        {
          "id": "cmslwh0wz003n0733hxwkwbki",
          "saleId": "cmslwh0wz003l0733j0m0k0k0",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmslwh0wz003h0733wthkdmae",
      "soldAt": "2026-08-18T09:37:00.000Z",
      "customerName": "八月補登客戶32",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "20000",
      "discount": "0",
      "total": "20000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.267Z",
      "updatedAt": "2026-08-09T14:30:47.267Z",
      "lines": [
        {
          "id": "cmslwh0wz003j0733tf1uqa3g",
          "saleId": "cmslwh0wz003h0733wthkdmae",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 4,
          "unitPrice": "5000",
          "lineTotal": "20000"
        }
      ]
    },
    {
      "id": "cmslwh0wr001507330bdgilmh",
      "soldAt": "2026-08-18T04:10:00.000Z",
      "customerName": "八月補登客戶11",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.259Z",
      "updatedAt": "2026-08-09T14:30:47.259Z",
      "lines": [
        {
          "id": "cmslwh0wr00170733p826r386",
          "saleId": "cmslwh0wr001507330bdgilmh",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cmslhyujq001207qnc4w63pus",
      "soldAt": "2026-08-17T16:00:00.000Z",
      "customerName": "測試-許庭瑋",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "活動報名：天赦日／TEST-10",
      "createdAt": "2026-08-09T07:44:44.583Z",
      "updatedAt": "2026-08-09T15:24:49.279Z",
      "lines": [
        {
          "id": "cmslhyujq001407qnhus4zfcn",
          "saleId": "cmslhyujq001207qnc4w63pus",
          "itemId": "cmslfyhxx000707i593do8ukh",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cmslwh0wz003d0733cic88abp",
      "soldAt": "2026-08-17T08:30:00.000Z",
      "customerName": "八月補登客戶31",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "5400",
      "discount": "0",
      "total": "5400",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.267Z",
      "updatedAt": "2026-08-09T15:24:49.288Z",
      "lines": [
        {
          "id": "cmslwh0wz003f0733x08v256d",
          "saleId": "cmslwh0wz003d0733cic88abp",
          "itemId": "cmslfzrfd000b07i5qkvhn6qm",
          "quantity": 3,
          "unitPrice": "1800",
          "lineTotal": "5400"
        }
      ]
    },
    {
      "id": "cmslwh0wq00110733hepj15id",
      "soldAt": "2026-08-17T03:03:00.000Z",
      "customerName": "八月補登客戶10",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.259Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cmslwh0wq0013073361ybsq4e",
          "saleId": "cmslwh0wq00110733hepj15id",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 2,
          "unitPrice": "3000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cmslhyujn000e07qnbz51uwxs",
      "soldAt": "2026-08-16T16:00:00.000Z",
      "customerName": "測試-張雅婷",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "活動報名：天赦日／TEST-04",
      "createdAt": "2026-08-09T07:44:44.579Z",
      "updatedAt": "2026-08-09T15:24:49.279Z",
      "lines": [
        {
          "id": "cmslhyujn000g07qnisagnaaf",
          "saleId": "cmslhyujn000e07qnbz51uwxs",
          "itemId": "cmslfyhxx000707i593do8ukh",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cmslhyujq000x07qnb8uvco42",
      "soldAt": "2026-08-16T16:00:00.000Z",
      "customerName": "測試-蔡明哲",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "活動報名：天赦日／TEST-09",
      "createdAt": "2026-08-09T07:44:44.582Z",
      "updatedAt": "2026-08-09T15:24:49.295Z",
      "lines": [
        {
          "id": "cmslhyujq000z07qny2ncwgmg",
          "saleId": "cmslhyujq000x07qnb8uvco42",
          "itemId": "cmslfzrfe000d07i5wr14mxsd",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslwh0wy00390733zm0yhujk",
      "soldAt": "2026-08-16T07:23:00.000Z",
      "customerName": "八月補登客戶30",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "3600",
      "discount": "0",
      "total": "3600",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.267Z",
      "updatedAt": "2026-08-09T15:24:49.295Z",
      "lines": [
        {
          "id": "cmslwh0wy003b0733tt0iez2k",
          "saleId": "cmslwh0wy00390733zm0yhujk",
          "itemId": "cmslfzrfe000d07i5wr14mxsd",
          "quantity": 2,
          "unitPrice": "1800",
          "lineTotal": "3600"
        }
      ]
    },
    {
      "id": "cmslwh0wq000x0733lqavm3c4",
      "soldAt": "2026-08-16T02:56:00.000Z",
      "customerName": "八月補登客戶09",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.258Z",
      "updatedAt": "2026-08-09T14:30:47.258Z",
      "lines": [
        {
          "id": "cmslwh0wq000z0733ike30h0x",
          "saleId": "cmslwh0wq000x0733lqavm3c4",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmslhyujl000907qnmnw0xziv",
      "soldAt": "2026-08-15T16:00:00.000Z",
      "customerName": "測試-林志明",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "活動報名：天赦日／TEST-03",
      "createdAt": "2026-08-09T07:44:44.578Z",
      "updatedAt": "2026-08-09T15:24:49.295Z",
      "lines": [
        {
          "id": "cmslhyujl000b07qngoxg5y4j",
          "saleId": "cmslhyujl000907qnmnw0xziv",
          "itemId": "cmslfzrfe000d07i5wr14mxsd",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslwh0wp000t0733rdpomkqn",
      "soldAt": "2026-08-15T09:49:00.000Z",
      "customerName": "八月補登客戶08",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "20000",
      "discount": "0",
      "total": "20000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.258Z",
      "updatedAt": "2026-08-09T14:30:47.258Z",
      "lines": [
        {
          "id": "cmslwh0wp000v0733ttxo9e08",
          "saleId": "cmslwh0wp000t0733rdpomkqn",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 4,
          "unitPrice": "5000",
          "lineTotal": "20000"
        }
      ]
    },
    {
      "id": "cmslwh0wy00350733wz3gj1kc",
      "soldAt": "2026-08-15T06:16:00.000Z",
      "customerName": "八月補登客戶29",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.266Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cmslwh0wy00370733aw0pu0lu",
          "saleId": "cmslwh0wy00350733wz3gj1kc",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "2000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cmslhyujp000q07qnxtf8re77",
      "soldAt": "2026-08-14T16:00:00.000Z",
      "customerName": "測試-吳宗翰",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "活動報名：天赦日／TEST-07",
      "createdAt": "2026-08-09T07:44:44.581Z",
      "updatedAt": "2026-08-09T15:24:49.279Z",
      "lines": [
        {
          "id": "cmslhyujp000s07qn0mxtnko3",
          "saleId": "cmslhyujp000q07qnxtf8re77",
          "itemId": "cmslfyhxx000707i593do8ukh",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cmslwh0wp000p07338e0s6r7b",
      "soldAt": "2026-08-14T08:42:00.000Z",
      "customerName": "八月補登客戶07",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "5400",
      "discount": "0",
      "total": "5400",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.257Z",
      "updatedAt": "2026-08-09T15:24:49.288Z",
      "lines": [
        {
          "id": "cmslwh0wp000r0733qjcdf94p",
          "saleId": "cmslwh0wp000p07338e0s6r7b",
          "itemId": "cmslfzrfd000b07i5qkvhn6qm",
          "quantity": 3,
          "unitPrice": "1800",
          "lineTotal": "5400"
        }
      ]
    },
    {
      "id": "cmslwh0wy0031073334gtssaw",
      "soldAt": "2026-08-14T05:09:00.000Z",
      "customerName": "八月補登客戶28",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "4000",
      "discount": "0",
      "total": "4000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.266Z",
      "updatedAt": "2026-08-09T14:30:47.266Z",
      "lines": [
        {
          "id": "cmslwh0wy00330733be04e6n5",
          "saleId": "cmslwh0wy0031073334gtssaw",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 4,
          "unitPrice": "1000",
          "lineTotal": "4000"
        }
      ]
    },
    {
      "id": "cmslhyuji000207qniklnknca",
      "soldAt": "2026-08-13T16:00:00.000Z",
      "customerName": "測試-王小美",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "活動報名：天赦日／TEST-01",
      "createdAt": "2026-08-09T07:44:44.575Z",
      "updatedAt": "2026-08-09T15:24:49.279Z",
      "lines": [
        {
          "id": "cmslhyuji000407qnvkemujrc",
          "saleId": "cmslhyuji000207qniklnknca",
          "itemId": "cmslfyhxx000707i593do8ukh",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cmslhyujo000l07qnil9ypwsy",
      "soldAt": "2026-08-13T16:00:00.000Z",
      "customerName": "測試-李佩珊",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "活動報名：天赦日／TEST-06",
      "createdAt": "2026-08-09T07:44:44.581Z",
      "updatedAt": "2026-08-09T15:24:49.295Z",
      "lines": [
        {
          "id": "cmslhyujo000n07qn5vgtjtj4",
          "saleId": "cmslhyujo000l07qnil9ypwsy",
          "itemId": "cmslfzrfe000d07i5wr14mxsd",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslwh0wo000l0733wtx6n4bq",
      "soldAt": "2026-08-13T07:35:00.000Z",
      "customerName": "八月補登客戶06",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "3600",
      "discount": "0",
      "total": "3600",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.256Z",
      "updatedAt": "2026-08-09T15:24:49.295Z",
      "lines": [
        {
          "id": "cmslwh0wo000n0733yagxnlvm",
          "saleId": "cmslwh0wo000l0733wtx6n4bq",
          "itemId": "cmslfzrfe000d07i5wr14mxsd",
          "quantity": 2,
          "unitPrice": "1800",
          "lineTotal": "3600"
        }
      ]
    },
    {
      "id": "cmslwh0wx002x07330n4ynfl0",
      "soldAt": "2026-08-13T04:02:00.000Z",
      "customerName": "八月補登客戶27",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.266Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cmslwh0wx002z0733oo0i40yv",
          "saleId": "cmslwh0wx002x07330n4ynfl0",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cmslwh0wn000h07331elv8tvs",
      "soldAt": "2026-08-12T06:28:00.000Z",
      "customerName": "八月補登客戶05",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.256Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cmslwh0wn000j0733icguvtet",
          "saleId": "cmslwh0wn000h07331elv8tvs",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "2000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cmslwh0wx002t0733nj4mxdpr",
      "soldAt": "2026-08-12T03:55:00.000Z",
      "customerName": "八月補登客戶26",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "11000",
      "discount": "0",
      "total": "11000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.265Z",
      "updatedAt": "2026-08-09T14:30:47.265Z",
      "lines": [
        {
          "id": "cmslwh0wx002v0733yyge2nyf",
          "saleId": "cmslwh0wx002t0733nj4mxdpr",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 2,
          "unitPrice": "5500",
          "lineTotal": "11000"
        }
      ]
    },
    {
      "id": "cmso9gxxm000e07zqn954ntuj",
      "soldAt": "2026-08-11T06:10:10.762Z",
      "customerName": "林小姐",
      "salesPersonId": null,
      "servicePersonId": null,
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "2400",
      "discount": "0",
      "total": "2400",
      "notes": null,
      "createdAt": "2026-08-11T06:10:10.762Z",
      "updatedAt": "2026-08-11T06:10:10.762Z",
      "lines": [
        {
          "id": "cmso9gxxm000g07zqghqwa1fr",
          "saleId": "cmso9gxxm000e07zqn954ntuj",
          "itemId": "seed-service-consulting",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        },
        {
          "id": "cmso9gxxm000h07zq1hmxcfrd",
          "saleId": "cmso9gxxm000e07zqn954ntuj",
          "itemId": "seed-product-coursebook",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslwh0wn000d0733hj39xlfr",
      "soldAt": "2026-08-11T05:21:00.000Z",
      "customerName": "八月補登客戶04",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "4000",
      "discount": "0",
      "total": "4000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.255Z",
      "updatedAt": "2026-08-09T14:30:47.255Z",
      "lines": [
        {
          "id": "cmslwh0wn000f0733ant3zc8l",
          "saleId": "cmslwh0wn000d0733hj39xlfr",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 4,
          "unitPrice": "1000",
          "lineTotal": "4000"
        }
      ]
    },
    {
      "id": "cmslwh0ww002p0733t310lbbe",
      "soldAt": "2026-08-11T02:48:00.000Z",
      "customerName": "八月補登客戶25",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.265Z",
      "updatedAt": "2026-08-09T14:30:47.265Z",
      "lines": [
        {
          "id": "cmslwh0ww002r0733yv3frvhi",
          "saleId": "cmslwh0ww002p0733t310lbbe",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cmslwh0ww002l0733zi4weyld",
      "soldAt": "2026-08-10T09:41:00.000Z",
      "customerName": "八月補登客戶24",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "32000",
      "discount": "0",
      "total": "32000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.264Z",
      "updatedAt": "2026-08-09T14:30:47.264Z",
      "lines": [
        {
          "id": "cmslwh0ww002n07330mudg7a6",
          "saleId": "cmslwh0ww002l0733zi4weyld",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 4,
          "unitPrice": "8000",
          "lineTotal": "32000"
        }
      ]
    },
    {
      "id": "cmslwh0wm00090733jyet9322",
      "soldAt": "2026-08-10T04:14:00.000Z",
      "customerName": "八月補登客戶03",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.254Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cmslwh0wm000b0733w3kpq2cc",
          "saleId": "cmslwh0wm00090733jyet9322",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cmslvzsyy006907bhcyiiirf1",
      "soldAt": "2026-08-09T10:02:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.818Z",
      "updatedAt": "2026-08-09T14:17:23.818Z",
      "lines": [
        {
          "id": "cmslvzsyy006b07bhw0fkfiyw",
          "saleId": "cmslvzsyy006907bhcyiiirf1",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cmslwh0wv002h0733r0q9y1vf",
      "soldAt": "2026-08-09T08:34:00.000Z",
      "customerName": "八月補登客戶23",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.264Z",
      "updatedAt": "2026-08-09T14:30:47.264Z",
      "lines": [
        {
          "id": "cmslwh0wv002j0733nzoeycmk",
          "saleId": "cmslwh0wv002h0733r0q9y1vf",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cmslvzsx7000107bhjvgq6efa",
      "soldAt": "2026-08-09T08:19:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.755Z",
      "updatedAt": "2026-08-09T14:17:23.755Z",
      "lines": [
        {
          "id": "cmslvzsx7000307bh7469pyp7",
          "saleId": "cmslvzsx7000107bhjvgq6efa",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsyl004t07bh2igztra9",
      "soldAt": "2026-08-09T07:51:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "5400",
      "discount": "0",
      "total": "5400",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.806Z",
      "updatedAt": "2026-08-09T15:24:49.295Z",
      "lines": [
        {
          "id": "cmslvzsyl004v07bhhf9r7j5h",
          "saleId": "cmslvzsyl004t07bh2igztra9",
          "itemId": "cmslfzrfe000d07i5wr14mxsd",
          "quantity": 1,
          "unitPrice": "5400",
          "lineTotal": "5400"
        }
      ]
    },
    {
      "id": "cmslvzsxo001p07bhkjg8e45n",
      "soldAt": "2026-08-09T05:14:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "8000",
      "discount": "0",
      "total": "8000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.773Z",
      "updatedAt": "2026-08-09T14:17:23.773Z",
      "lines": [
        {
          "id": "cmslvzsxo001r07bh0zpk0pqa",
          "saleId": "cmslvzsxo001p07bhkjg8e45n",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 1,
          "unitPrice": "8000",
          "lineTotal": "8000"
        }
      ]
    },
    {
      "id": "cmslvzsy0003107bhrrr081d3",
      "soldAt": "2026-08-09T03:57:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "16500",
      "discount": "0",
      "total": "16500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.785Z",
      "updatedAt": "2026-08-09T14:17:23.785Z",
      "lines": [
        {
          "id": "cmslvzsy0003307bhlauwxfxh",
          "saleId": "cmslvzsy0003107bhrrr081d3",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "16500",
          "lineTotal": "16500"
        }
      ]
    },
    {
      "id": "cmslvzsxn001l07bhyhzjhrjw",
      "soldAt": "2026-08-09T03:50:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "500",
      "discount": "0",
      "total": "500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.771Z",
      "updatedAt": "2026-08-09T15:24:49.279Z",
      "lines": [
        {
          "id": "cmslvzsxn001n07bhbredbsr6",
          "saleId": "cmslvzsxn001l07bhyhzjhrjw",
          "itemId": "cmslfyhxx000707i593do8ukh",
          "quantity": 1,
          "unitPrice": "500",
          "lineTotal": "500"
        }
      ]
    },
    {
      "id": "cmslwh0wl00050733bgh5cngy",
      "soldAt": "2026-08-09T03:07:00.000Z",
      "customerName": "八月補登客戶02",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "11000",
      "discount": "0",
      "total": "11000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.254Z",
      "updatedAt": "2026-08-09T14:30:47.254Z",
      "lines": [
        {
          "id": "cmslwh0wl0007073337vggzzy",
          "saleId": "cmslwh0wl00050733bgh5cngy",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 2,
          "unitPrice": "5500",
          "lineTotal": "11000"
        }
      ]
    },
    {
      "id": "cmslvzsza007t07bhlj0brvz9",
      "soldAt": "2026-08-09T02:49:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "500",
      "discount": "0",
      "total": "500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.831Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cmslvzsza007v07bhelt35e4c",
          "saleId": "cmslvzsza007t07bhlj0brvz9",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "500",
          "lineTotal": "500"
        }
      ]
    },
    {
      "id": "cmslvzszo009507bhpkvvg09s",
      "soldAt": "2026-08-09T02:31:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.844Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cmslvzszo009707bhvj7kjfx7",
          "saleId": "cmslvzszo009507bhpkvvg09s",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "1200",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cmslvzsxy002t07bhoemii6b1",
      "soldAt": "2026-08-09T02:10:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.783Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cmslvzsxy002v07bhn2wwkkb0",
          "saleId": "cmslvzsxy002t07bhoemii6b1",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "1200",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cmslvzszd008507bhxuoh2sha",
      "soldAt": "2026-08-09T02:03:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.834Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cmslvzszd008707bhtstqq3gk",
          "saleId": "cmslvzszd008507bhxuoh2sha",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 1,
          "unitPrice": "900",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cmslhknrq000907tuxbf53i0c",
      "soldAt": "2026-08-09T00:00:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "活動報名：線上課程體驗營",
      "createdAt": "2026-08-09T07:33:42.615Z",
      "updatedAt": "2026-08-09T08:42:14.089Z",
      "lines": [
        {
          "id": "cmslhxve1000i07anna3zkd46",
          "saleId": "cmslhknrq000907tuxbf53i0c",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmslinno3000n07ed8jn13geo",
      "soldAt": "2026-08-09T00:00:00.000Z",
      "customerName": "Crimsontest01",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "208",
      "createdAt": "2026-08-09T08:04:02.068Z",
      "updatedAt": "2026-08-09T15:24:49.288Z",
      "lines": [
        {
          "id": "cmsljpwp1000507pzlyuidtsn",
          "saleId": "cmslinno3000n07ed8jn13geo",
          "itemId": "cmslfzrfd000b07i5qkvhn6qm",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslxbepe000607s7xfd6ohaz",
      "soldAt": "2026-08-09T00:00:00.000Z",
      "customerName": null,
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": null,
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "16890",
      "discount": "0",
      "total": "16890",
      "notes": null,
      "createdAt": "2026-08-09T14:54:24.818Z",
      "updatedAt": "2026-08-09T14:54:24.818Z",
      "lines": [
        {
          "id": "cmslxbepe000807s7bh5eyaz3",
          "saleId": "cmslxbepe000607s7xfd6ohaz",
          "itemId": "cmslx04bz000007okhob7d0ix",
          "quantity": 1,
          "unitPrice": "16890",
          "lineTotal": "16890"
        }
      ]
    },
    {
      "id": "cmslwh0wv002d07331h2q47h6",
      "soldAt": "2026-08-08T07:27:00.000Z",
      "customerName": "八月補登客戶22",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.263Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cmslwh0wv002f073361boz8m9",
          "saleId": "cmslwh0wv002d07331h2q47h6",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 2,
          "unitPrice": "3000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cmslvzsxv002h07bh2kadyf6y",
      "soldAt": "2026-08-08T06:07:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "11000",
      "discount": "0",
      "total": "11000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.780Z",
      "updatedAt": "2026-08-09T14:17:23.780Z",
      "lines": [
        {
          "id": "cmslvzsxv002j07bh11jjtjgb",
          "saleId": "cmslvzsxv002h07bh2kadyf6y",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "11000",
          "lineTotal": "11000"
        }
      ]
    },
    {
      "id": "cmslvzsyq005l07bhpd9zd7pc",
      "soldAt": "2026-08-08T05:49:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.811Z",
      "updatedAt": "2026-08-09T14:17:23.811Z",
      "lines": [
        {
          "id": "cmslvzsyq005n07bhlj5b3mlg",
          "saleId": "cmslvzsyq005l07bhpd9zd7pc",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "1200",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cmslvzsy3003907bh7njoa9gp",
      "soldAt": "2026-08-08T05:41:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.787Z",
      "updatedAt": "2026-08-09T14:17:23.787Z",
      "lines": [
        {
          "id": "cmslvzsy3003b07bhn5qhepbu",
          "saleId": "cmslvzsy3003907bh7njoa9gp",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cmslvzsy7003l07bhihb6obbh",
      "soldAt": "2026-08-08T04:43:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "10000",
      "discount": "0",
      "total": "10000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.792Z",
      "updatedAt": "2026-08-09T14:17:23.792Z",
      "lines": [
        {
          "id": "cmslvzsy7003n07bh4pw3bw0l",
          "saleId": "cmslvzsy7003l07bhihb6obbh",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 1,
          "unitPrice": "10000",
          "lineTotal": "10000"
        }
      ]
    },
    {
      "id": "cmslwh0wj00010733r7fnsna0",
      "soldAt": "2026-08-08T02:00:00.000Z",
      "customerName": "八月補登客戶01",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "八月營收補登：增加約30萬營收",
      "createdAt": "2026-08-09T14:30:47.251Z",
      "updatedAt": "2026-08-09T14:30:47.251Z",
      "lines": [
        {
          "id": "cmslwh0wj00030733z3wxuf40",
          "saleId": "cmslwh0wj00010733r7fnsna0",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cmslvzsyh004d07bh49xuso4k",
      "soldAt": "2026-08-07T11:09:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.801Z",
      "updatedAt": "2026-08-09T14:17:23.801Z",
      "lines": [
        {
          "id": "cmslvzsyh004f07bhzx6wlr49",
          "saleId": "cmslvzsyh004d07bh49xuso4k",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "1200",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cmslvzsz5007907bh75qc0oqa",
      "soldAt": "2026-08-07T08:04:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.825Z",
      "updatedAt": "2026-08-09T14:17:23.825Z",
      "lines": [
        {
          "id": "cmslvzsz5007b07bh1tprr2yc",
          "saleId": "cmslvzsz5007907bh75qc0oqa",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsz8007l07bh7vw6gjgv",
      "soldAt": "2026-08-07T06:50:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "16500",
      "discount": "0",
      "total": "16500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.829Z",
      "updatedAt": "2026-08-09T14:17:23.829Z",
      "lines": [
        {
          "id": "cmslvzsz8007n07bhbs4t0vn6",
          "saleId": "cmslvzsz8007l07bh7vw6gjgv",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "16500",
          "lineTotal": "16500"
        }
      ]
    },
    {
      "id": "cmslvzsyw006107bh85nmsqaw",
      "soldAt": "2026-08-07T04:47:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.816Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cmslvzsyw006307bhx031xztj",
          "saleId": "cmslvzsyw006107bh85nmsqaw",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsya003t07bhl1r9v8e9",
      "soldAt": "2026-08-07T04:03:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "16000",
      "discount": "0",
      "total": "16000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.794Z",
      "updatedAt": "2026-08-09T14:17:23.794Z",
      "lines": [
        {
          "id": "cmslvzsya003v07bh23fkt0qz",
          "saleId": "cmslvzsya003t07bhl1r9v8e9",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 1,
          "unitPrice": "16000",
          "lineTotal": "16000"
        }
      ]
    },
    {
      "id": "cmslvzsye004507bh4gg4e7a5",
      "soldAt": "2026-08-07T02:06:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "500",
      "discount": "0",
      "total": "500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.799Z",
      "updatedAt": "2026-08-09T14:17:23.799Z",
      "lines": [
        {
          "id": "cmslvzsye004707bhq2chombp",
          "saleId": "cmslvzsye004507bh4gg4e7a5",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 1,
          "unitPrice": "500",
          "lineTotal": "500"
        }
      ]
    },
    {
      "id": "cmslvzsxl001d07bh3e1lfjd1",
      "soldAt": "2026-08-06T11:15:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.769Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cmslvzsxl001f07bhzk7bwfwz",
          "saleId": "cmslvzsxl001d07bh3e1lfjd1",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "6000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cmslvzsxa000507bhjiwv2ebt",
      "soldAt": "2026-08-06T11:14:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "500",
      "discount": "0",
      "total": "500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.758Z",
      "updatedAt": "2026-08-09T15:24:49.279Z",
      "lines": [
        {
          "id": "cmslvzsxa000707bhthqb8306",
          "saleId": "cmslvzsxa000507bhjiwv2ebt",
          "itemId": "cmslfyhxx000707i593do8ukh",
          "quantity": 1,
          "unitPrice": "500",
          "lineTotal": "500"
        }
      ]
    },
    {
      "id": "cmslvzsy2003507bhmyw8eops",
      "soldAt": "2026-08-06T10:41:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.786Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cmslvzsy2003707bhk6gvx3m4",
          "saleId": "cmslvzsy2003507bhmyw8eops",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "900",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cmslvzsxd000h07bhyi6wwcfv",
      "soldAt": "2026-08-06T09:49:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.762Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cmslvzsxd000j07bh5k0e83cl",
          "saleId": "cmslvzsxd000h07bhyi6wwcfv",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 1,
          "unitPrice": "900",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cmslvzsyo005907bh7y6uh479",
      "soldAt": "2026-08-06T08:29:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.808Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cmslvzsyo005b07bh5yo1c6qe",
          "saleId": "cmslvzsyo005907bh7y6uh479",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsyp005h07bhnr32figq",
      "soldAt": "2026-08-06T07:27:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.809Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cmslvzsyp005j07bhhtxjozuf",
          "saleId": "cmslvzsyp005h07bhnr32figq",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 1,
          "unitPrice": "6000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cmslvzsz9007p07bhsloivnhu",
      "soldAt": "2026-08-06T07:23:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.830Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cmslvzsz9007r07bh5dsujbz5",
          "saleId": "cmslvzsz9007p07bhsloivnhu",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "1200",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cmslvzsy8003p07bh5emlhani",
      "soldAt": "2026-08-06T07:21:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.793Z",
      "updatedAt": "2026-08-09T14:17:23.793Z",
      "lines": [
        {
          "id": "cmslvzsy8003r07bh068muztn",
          "saleId": "cmslvzsy8003p07bh5emlhani",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "1200",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cmslvzsxu002d07bh4ynjizac",
      "soldAt": "2026-08-06T06:50:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.779Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cmslvzsxu002f07bhcy8nr8e5",
          "saleId": "cmslvzsxu002d07bh4ynjizac",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 1,
          "unitPrice": "900",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cmslvzszw009l07bhmno7ww0b",
      "soldAt": "2026-08-06T05:45:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "500",
      "discount": "0",
      "total": "500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.853Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cmslvzszw009n07bhhm1t4b6k",
          "saleId": "cmslvzszw009l07bhmno7ww0b",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 1,
          "unitPrice": "500",
          "lineTotal": "500"
        }
      ]
    },
    {
      "id": "cmslvzsz4007507bh3at0ru34",
      "soldAt": "2026-08-06T05:06:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "11000",
      "discount": "0",
      "total": "11000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.824Z",
      "updatedAt": "2026-08-09T14:17:23.824Z",
      "lines": [
        {
          "id": "cmslvzsz4007707bh75z2w3ks",
          "saleId": "cmslvzsz4007507bh3at0ru34",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "11000",
          "lineTotal": "11000"
        }
      ]
    },
    {
      "id": "cmslvzszc008107bhbnk0sadx",
      "soldAt": "2026-08-06T03:39:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.833Z",
      "updatedAt": "2026-08-09T14:17:23.833Z",
      "lines": [
        {
          "id": "cmslvzszc008307bhcy1hma1v",
          "saleId": "cmslvzszc008107bhbnk0sadx",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmslvzsxz002x07bhjqrzl608",
      "soldAt": "2026-08-06T02:57:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.784Z",
      "updatedAt": "2026-08-09T15:24:49.279Z",
      "lines": [
        {
          "id": "cmslvzsxz002z07bhnmheg8gi",
          "saleId": "cmslvzsxz002x07bhjqrzl608",
          "itemId": "cmslfyhxx000707i593do8ukh",
          "quantity": 1,
          "unitPrice": "900",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cmslvzsz0006l07bhjsw8dbpw",
      "soldAt": "2026-08-06T02:06:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.821Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cmslvzsz0006n07bhn4ftjecq",
          "saleId": "cmslvzsz0006l07bhjsw8dbpw",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsxm001h07bhdckku6ko",
      "soldAt": "2026-08-05T11:32:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.770Z",
      "updatedAt": "2026-08-09T15:24:49.295Z",
      "lines": [
        {
          "id": "cmslvzsxm001j07bh9cclt3fz",
          "saleId": "cmslvzsxm001h07bhdckku6ko",
          "itemId": "cmslfzrfe000d07i5wr14mxsd",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslvzszl009107bhlqk2nxeb",
      "soldAt": "2026-08-05T11:16:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.842Z",
      "updatedAt": "2026-08-09T14:17:23.842Z",
      "lines": [
        {
          "id": "cmslvzszl009307bh8bs9p1wm",
          "saleId": "cmslvzszl009107bhlqk2nxeb",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsyc003x07bhpke7915l",
      "soldAt": "2026-08-05T09:21:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.796Z",
      "updatedAt": "2026-08-09T14:17:23.796Z",
      "lines": [
        {
          "id": "cmslvzsyc003z07bhat2mgirr",
          "saleId": "cmslvzsyc003x07bhpke7915l",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslvzsxh000t07bh5jlfitrm",
      "soldAt": "2026-08-05T08:33:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.765Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cmslvzsxh000v07bh4cr8u17v",
          "saleId": "cmslvzsxh000t07bh5jlfitrm",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "6000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cmslvzszj008t07bhv8b37t6i",
      "soldAt": "2026-08-05T08:20:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "10000",
      "discount": "0",
      "total": "10000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.839Z",
      "updatedAt": "2026-08-09T14:17:23.839Z",
      "lines": [
        {
          "id": "cmslvzszj008v07bhozs8mj3s",
          "saleId": "cmslvzszj008t07bhv8b37t6i",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 1,
          "unitPrice": "10000",
          "lineTotal": "10000"
        }
      ]
    },
    {
      "id": "cmslvzszq009d07bhpewdu6pz",
      "soldAt": "2026-08-05T07:48:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.847Z",
      "updatedAt": "2026-08-09T14:17:23.847Z",
      "lines": [
        {
          "id": "cmslvzszq009f07bhlqpwfhhq",
          "saleId": "cmslvzszq009d07bhpewdu6pz",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsxx002l07bhzi42sx37",
      "soldAt": "2026-08-05T02:59:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "4000",
      "discount": "0",
      "total": "4000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.781Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cmslvzsxx002n07bhpfccxifv",
          "saleId": "cmslvzsxx002l07bhzi42sx37",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "4000",
          "lineTotal": "4000"
        }
      ]
    },
    {
      "id": "cmslvzszh008l07bhq693o4ta",
      "soldAt": "2026-08-04T11:33:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.837Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cmslvzszh008n07bhga23avm6",
          "saleId": "cmslvzszh008l07bhq693o4ta",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 1,
          "unitPrice": "900",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cmslvzsz3007107bh0aya6u6p",
      "soldAt": "2026-08-04T09:17:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.824Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cmslvzsz3007307bh0p4plf9v",
          "saleId": "cmslvzsz3007107bh0aya6u6p",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzszt009h07bh8tgv2z56",
      "soldAt": "2026-08-04T06:36:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.850Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cmslvzszt009j07bhd8t1xkek",
          "saleId": "cmslvzszt009h07bh8tgv2z56",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 1,
          "unitPrice": "900",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cmslvzsym005107bhpd78cli8",
      "soldAt": "2026-08-04T06:20:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.807Z",
      "updatedAt": "2026-08-09T14:17:23.807Z",
      "lines": [
        {
          "id": "cmslvzsym005307bhuwywtdqb",
          "saleId": "cmslvzsym005107bhpd78cli8",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslvzszz009t07bhgn9j0h6g",
      "soldAt": "2026-08-04T05:23:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "11000",
      "discount": "0",
      "total": "11000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.855Z",
      "updatedAt": "2026-08-09T14:17:23.855Z",
      "lines": [
        {
          "id": "cmslvzszz009v07bhqaeee0e0",
          "saleId": "cmslvzszz009t07bhgn9j0h6g",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "11000",
          "lineTotal": "11000"
        }
      ]
    },
    {
      "id": "cmslvzsyt005t07bhuii8avgd",
      "soldAt": "2026-08-04T04:24:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.814Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cmslvzsyt005v07bhp34tkug7",
          "saleId": "cmslvzsyt005t07bhuii8avgd",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 1,
          "unitPrice": "900",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cmslvzsxk001507bhulvphvdx",
      "soldAt": "2026-08-04T04:04:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.768Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cmslvzsxk001707bh8or54rpt",
          "saleId": "cmslvzsxk001507bhulvphvdx",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 1,
          "unitPrice": "9000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cmslvzsyd004107bhtbnemj4k",
      "soldAt": "2026-08-04T03:39:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.798Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cmslvzsyd004307bhmz9synmx",
          "saleId": "cmslvzsyd004107bhtbnemj4k",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsyo005d07bhs3neunla",
      "soldAt": "2026-08-03T11:14:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "500",
      "discount": "0",
      "total": "500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.809Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cmslvzsyo005f07bhnj19dpdx",
          "saleId": "cmslvzsyo005d07bhs3neunla",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "500",
          "lineTotal": "500"
        }
      ]
    },
    {
      "id": "cmslvzsyf004907bhbxx4va81",
      "soldAt": "2026-08-03T06:21:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.800Z",
      "updatedAt": "2026-08-09T14:17:23.800Z",
      "lines": [
        {
          "id": "cmslvzsyf004b07bh921ezaqy",
          "saleId": "cmslvzsyf004907bhbxx4va81",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cmslvzsym004x07bhg9jbpn1z",
      "soldAt": "2026-08-03T05:32:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.806Z",
      "updatedAt": "2026-08-09T14:17:23.806Z",
      "lines": [
        {
          "id": "cmslvzsym004z07bhqdy2crod",
          "saleId": "cmslvzsym004x07bhg9jbpn1z",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsz7007h07bhe2jxecas",
      "soldAt": "2026-08-03T05:02:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.827Z",
      "updatedAt": "2026-08-09T14:17:23.827Z",
      "lines": [
        {
          "id": "cmslvzsz7007j07bha4wlgunl",
          "saleId": "cmslvzsz7007h07bhe2jxecas",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslvzsyx006507bhktizh2tl",
      "soldAt": "2026-08-03T03:40:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.817Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cmslvzsyx006707bh442tavcn",
          "saleId": "cmslvzsyx006507bhktizh2tl",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzszk008x07bhfjqax18e",
      "soldAt": "2026-08-03T03:10:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.841Z",
      "updatedAt": "2026-08-09T14:17:23.841Z",
      "lines": [
        {
          "id": "cmslvzszk008z07bh9zqlk5ra",
          "saleId": "cmslvzszk008x07bhfjqax18e",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmslvzszg008h07bh2fkds32p",
      "soldAt": "2026-08-02T11:51:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.836Z",
      "updatedAt": "2026-08-09T14:17:23.836Z",
      "lines": [
        {
          "id": "cmslvzszg008j07bhe2cyvkyl",
          "saleId": "cmslvzszg008h07bh2fkds32p",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslvzsxt002907bh62jjwujf",
      "soldAt": "2026-08-02T08:45:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.778Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cmslvzsxt002b07bhnwcqe1fu",
          "saleId": "cmslvzsxt002907bh62jjwujf",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsxp001t07bhow0u9n6f",
      "soldAt": "2026-08-02T06:42:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.774Z",
      "updatedAt": "2026-08-09T15:24:49.279Z",
      "lines": [
        {
          "id": "cmslvzsxp001v07bhyrw89kzu",
          "saleId": "cmslvzsxp001t07bhow0u9n6f",
          "itemId": "cmslfyhxx000707i593do8ukh",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsze008907bh6j804gi5",
      "soldAt": "2026-08-02T06:29:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.834Z",
      "updatedAt": "2026-08-09T14:17:23.834Z",
      "lines": [
        {
          "id": "cmslvzsze008b07bhdp3et38j",
          "saleId": "cmslvzsze008907bh6j804gi5",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsyl004p07bh954s81xq",
      "soldAt": "2026-08-02T05:54:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "16000",
      "discount": "0",
      "total": "16000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.805Z",
      "updatedAt": "2026-08-09T14:17:23.805Z",
      "lines": [
        {
          "id": "cmslvzsyl004r07bh5gzt7e3j",
          "saleId": "cmslvzsyl004p07bh954s81xq",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 1,
          "unitPrice": "16000",
          "lineTotal": "16000"
        }
      ]
    },
    {
      "id": "cmslvzsy6003h07bhltlp7zfv",
      "soldAt": "2026-08-02T02:21:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.790Z",
      "updatedAt": "2026-08-09T14:17:23.790Z",
      "lines": [
        {
          "id": "cmslvzsy6003j07bhfsrj5vx1",
          "saleId": "cmslvzsy6003h07bhltlp7zfv",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cmslvzsz6007d07bh3bs9hfhr",
      "soldAt": "2026-08-01T10:11:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.826Z",
      "updatedAt": "2026-08-09T14:17:23.826Z",
      "lines": [
        {
          "id": "cmslvzsz6007f07bhmucx4rcy",
          "saleId": "cmslvzsz6007d07bh3bs9hfhr",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "1200",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cmslvzsxc000d07bh4wgzbc28",
      "soldAt": "2026-08-01T08:58:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "5500",
      "discount": "0",
      "total": "5500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.760Z",
      "updatedAt": "2026-08-09T14:17:23.760Z",
      "lines": [
        {
          "id": "cmslvzsxc000f07bhzolsqiom",
          "saleId": "cmslvzsxc000d07bh4wgzbc28",
          "itemId": "cmslg14yv000h07i5lz3ro5zd",
          "quantity": 1,
          "unitPrice": "5500",
          "lineTotal": "5500"
        }
      ]
    },
    {
      "id": "cmslvzsxq001x07bhenct4846",
      "soldAt": "2026-08-01T08:39:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "500",
      "discount": "0",
      "total": "500",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.775Z",
      "updatedAt": "2026-08-09T14:17:23.775Z",
      "lines": [
        {
          "id": "cmslvzsxq001z07bhehkny8rk",
          "saleId": "cmslvzsxq001x07bhenct4846",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 1,
          "unitPrice": "500",
          "lineTotal": "500"
        }
      ]
    },
    {
      "id": "cmslvzsxf000l07bhvuarpqht",
      "soldAt": "2026-08-01T07:01:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.763Z",
      "updatedAt": "2026-08-09T14:17:23.763Z",
      "lines": [
        {
          "id": "cmslvzsxf000n07bhwse6v1yx",
          "saleId": "cmslvzsxf000l07bhvuarpqht",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cmslvzsy4003d07bh5wiev8i8",
      "soldAt": "2026-08-01T06:49:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.789Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cmslvzsy4003f07bhy9el51qa",
          "saleId": "cmslvzsy4003d07bh5wiev8i8",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "1800",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cmslvzsxx002p07bhbafyf2bx",
      "soldAt": "2026-08-01T06:47:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "11000",
      "discount": "0",
      "total": "11000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.782Z",
      "updatedAt": "2026-08-09T14:17:23.782Z",
      "lines": [
        {
          "id": "cmslvzsxx002r07bh5bg7r6q1",
          "saleId": "cmslvzsxx002p07bhbafyf2bx",
          "itemId": "cmslg14yv000f07i5x3fjhdl8",
          "quantity": 1,
          "unitPrice": "11000",
          "lineTotal": "11000"
        }
      ]
    },
    {
      "id": "cmslvzszi008p07bh8izvjg7k",
      "soldAt": "2026-08-01T06:29:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.838Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cmslvzszi008r07bh5kkv3pxc",
          "saleId": "cmslvzszi008p07bh8izvjg7k",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 1,
          "unitPrice": "6000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cmslvzszf008d07bhx0yjqhki",
      "soldAt": "2026-08-01T04:21:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.835Z",
      "updatedAt": "2026-08-09T14:17:23.835Z",
      "lines": [
        {
          "id": "cmslvzszf008f07bheg7zj3i8",
          "saleId": "cmslvzszf008d07bhx0yjqhki",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cmslvzsz1006p07bhmw2ztsj7",
      "soldAt": "2026-08-01T02:38:00.000Z",
      "customerName": "批次營收客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "批次產生營收資料：目標月營收約70萬",
      "createdAt": "2026-08-09T14:17:23.822Z",
      "updatedAt": "2026-08-09T14:17:23.822Z",
      "lines": [
        {
          "id": "cmslvzsz1006r07bhq3dank5e",
          "saleId": "cmslvzsz1006p07bhmw2ztsj7",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "2000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjk900lm07k63jvti2g8",
      "soldAt": "2026-07-31T09:59:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.410Z",
      "updatedAt": "2026-07-28T13:47:02.410Z",
      "lines": [
        {
          "id": "cms4pmjk900lo07k6eqvwcuox",
          "saleId": "cms4pmjk900lm07k63jvti2g8",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 3,
          "unitPrice": "200",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjw00hc07k68jqkkuf9",
      "soldAt": "2026-07-31T06:33:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "8000",
      "discount": "0",
      "total": "8000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.397Z",
      "updatedAt": "2026-07-28T13:47:02.397Z",
      "lines": [
        {
          "id": "cms4pmjjw00he07k65czffuen",
          "saleId": "cms4pmjjw00hc07k68jqkkuf9",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 1,
          "unitPrice": "8000",
          "lineTotal": "8000"
        }
      ]
    },
    {
      "id": "cms4pmjju00ge07k6ks5j6yni",
      "soldAt": "2026-07-31T06:15:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.394Z",
      "updatedAt": "2026-07-28T13:47:02.394Z",
      "lines": [
        {
          "id": "cms4pmjju00gg07k6kygegdea",
          "saleId": "cms4pmjju00ge07k6ks5j6yni",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjk800l107k6wg8skzrz",
      "soldAt": "2026-07-31T05:56:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.408Z",
      "updatedAt": "2026-07-28T13:47:02.408Z",
      "lines": [
        {
          "id": "cms4pmjk800l307k646d9dsoq",
          "saleId": "cms4pmjk800l107k6wg8skzrz",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjiv004a07k6va5hqywg",
      "soldAt": "2026-07-31T03:11:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.359Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjiv004c07k6fxj21ldr",
          "saleId": "cms4pmjiv004a07k6va5hqywg",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "2000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjkc00mf07k6z7u1xxeg",
      "soldAt": "2026-07-30T06:44:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.413Z",
      "updatedAt": "2026-07-28T13:47:02.413Z",
      "lines": [
        {
          "id": "cms4pmjkc00mh07k6b9hwaqgo",
          "saleId": "cms4pmjkc00mf07k6z7u1xxeg",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjn00e207k6qvykv73m",
      "soldAt": "2026-07-30T06:09:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.387Z",
      "updatedAt": "2026-07-28T13:47:02.387Z",
      "lines": [
        {
          "id": "cms4pmjjn00e407k6yg34bc3m",
          "saleId": "cms4pmjjn00e207k6qvykv73m",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4ppbi0001l07p6g1bv5kw0",
      "soldAt": "2026-07-30T05:01:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "8000",
      "discount": "0",
      "total": "8000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.928Z",
      "updatedAt": "2026-07-28T13:49:11.928Z",
      "lines": [
        {
          "id": "cms4ppbi0001n07p6ygzvbm3m",
          "saleId": "cms4ppbi0001l07p6g1bv5kw0",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 1,
          "unitPrice": "8000",
          "lineTotal": "8000"
        }
      ]
    },
    {
      "id": "cms4ppbi0001p07p63dztockw",
      "soldAt": "2026-07-30T05:01:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.929Z",
      "updatedAt": "2026-07-28T13:49:11.929Z",
      "lines": [
        {
          "id": "cms4ppbi1001r07p6444bqx19",
          "saleId": "cms4ppbi0001p07p63dztockw",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbil005t07p6q3xpfcse",
      "soldAt": "2026-07-30T03:45:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.949Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4ppbil005v07p6g3u99zx2",
          "saleId": "cms4ppbil005t07p6q3xpfcse",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbil005x07p6ontd5i19",
      "soldAt": "2026-07-30T03:45:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.950Z",
      "updatedAt": "2026-07-28T13:49:11.950Z",
      "lines": [
        {
          "id": "cms4ppbil005z07p6pa6kxsna",
          "saleId": "cms4ppbil005x07p6ontd5i19",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbho000107p631c03aps",
      "soldAt": "2026-07-30T03:10:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.916Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4ppbho000307p6xnpkukon",
          "saleId": "cms4ppbho000107p631c03aps",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbhp000507p6jsps8int",
      "soldAt": "2026-07-30T03:10:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.918Z",
      "updatedAt": "2026-07-28T13:49:11.918Z",
      "lines": [
        {
          "id": "cms4ppbhp000707p6ap1whv3v",
          "saleId": "cms4ppbhp000507p6jsps8int",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4pmjin001r07k6knmoamqh",
      "soldAt": "2026-07-29T10:48:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.352Z",
      "updatedAt": "2026-07-28T13:47:02.352Z",
      "lines": [
        {
          "id": "cms4pmjin001t07k6d8bwcxux",
          "saleId": "cms4pmjin001r07k6knmoamqh",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjie000107k6rpcawvix",
      "soldAt": "2026-07-29T09:19:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.342Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjie000307k67vanmt79",
          "saleId": "cms4pmjie000107k6rpcawvix",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 3,
          "unitPrice": "2000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4pmjj9009707k6buolznr1",
      "soldAt": "2026-07-29T06:44:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.373Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjj9009907k68msa3stz",
          "saleId": "cms4pmjj9009707k6buolznr1",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjjg00bs07k6ck8wio6r",
      "soldAt": "2026-07-29T06:06:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.380Z",
      "updatedAt": "2026-07-28T13:47:02.380Z",
      "lines": []
    },
    {
      "id": "cms4pmjke00mw07k6q3av48pu",
      "soldAt": "2026-07-29T02:15:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.414Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjke00my07k6ss8y2j50",
          "saleId": "cms4pmjke00mw07k6q3av48pu",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjj1006f07k60734spg3",
      "soldAt": "2026-07-28T10:31:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.365Z",
      "updatedAt": "2026-07-28T13:47:02.365Z",
      "lines": [
        {
          "id": "cms4pmjj1006h07k6lnii7s3g",
          "saleId": "cms4pmjj1006f07k60734spg3",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjjj00co07k6ednpguii",
      "soldAt": "2026-07-28T09:46:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.384Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4pmjjj00cq07k6fqrtbfyj",
          "saleId": "cms4pmjjj00co07k6ednpguii",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cms4pmjjd00as07k69s9huxci",
      "soldAt": "2026-07-28T07:37:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.378Z",
      "updatedAt": "2026-07-28T13:47:02.378Z",
      "lines": [
        {
          "id": "cms4pmjjd00au07k6lc7qu2su",
          "saleId": "cms4pmjjd00as07k69s9huxci",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjju00gi07k6exkujjew",
      "soldAt": "2026-07-28T07:30:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.395Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4pmjju00gk07k6ebmjqsww",
          "saleId": "cms4pmjju00gi07k6exkujjew",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cms4pmjk300ju07k6lsref0b3",
      "soldAt": "2026-07-28T06:32:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.404Z",
      "updatedAt": "2026-07-28T13:47:02.404Z",
      "lines": [
        {
          "id": "cms4pmjk400jw07k65kw1wgif",
          "saleId": "cms4pmjk300ju07k6lsref0b3",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjjv00h407k6961phhz3",
      "soldAt": "2026-07-28T05:08:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.396Z",
      "updatedAt": "2026-07-28T13:47:02.396Z",
      "lines": [
        {
          "id": "cms4pmjjv00h607k6ps4o8fnn",
          "saleId": "cms4pmjjv00h407k6961phhz3",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4pmjji00c807k68wby8ss7",
      "soldAt": "2026-07-28T04:10:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.382Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cms4pmjji00ca07k6saiuvfec",
          "saleId": "cms4pmjji00c807k68wby8ss7",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjk000il07k64hv0sy2t",
      "soldAt": "2026-07-28T02:40:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.401Z",
      "updatedAt": "2026-07-28T13:47:02.401Z",
      "lines": [
        {
          "id": "cms4pmjk000in07k6ivghn8rz",
          "saleId": "cms4pmjk000il07k64hv0sy2t",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjiz005s07k66is67wr8",
      "soldAt": "2026-07-28T02:13:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.363Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjiz005u07k6o948mp2p",
          "saleId": "cms4pmjiz005s07k66is67wr8",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 3,
          "unitPrice": "300",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cms39bodl000c077358dx4yf9",
      "soldAt": "2026-07-27T13:22:55.402Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "2400",
      "discount": "0",
      "total": "2400",
      "notes": null,
      "createdAt": "2026-07-27T13:22:55.402Z",
      "updatedAt": "2026-08-09T08:42:14.089Z",
      "lines": []
    },
    {
      "id": "cms4pmjjy00ht07k6on86jidp",
      "soldAt": "2026-07-27T09:49:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.398Z",
      "updatedAt": "2026-07-28T13:47:02.398Z",
      "lines": [
        {
          "id": "cms4pmjjy00hv07k64alhllyh",
          "saleId": "cms4pmjjy00ht07k6on86jidp",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4ppbig004x07p6khpwpghj",
      "soldAt": "2026-07-27T08:08:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.944Z",
      "updatedAt": "2026-07-28T13:49:11.944Z",
      "lines": [
        {
          "id": "cms4ppbig004z07p6bxq85iro",
          "saleId": "cms4ppbig004x07p6khpwpghj",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4ppbig005107p6zufqhioe",
      "soldAt": "2026-07-27T08:08:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.945Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4ppbig005307p6iswhzolk",
          "saleId": "cms4ppbig005107p6zufqhioe",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 2,
          "unitPrice": "3000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4pmjjb009u07k69qbu4af1",
      "soldAt": "2026-07-27T07:59:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.375Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4pmjjb009w07k6mc60y8a6",
          "saleId": "cms4pmjjb009u07k69qbu4af1",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 2,
          "unitPrice": "3000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4ppbih005507p6ta218uph",
      "soldAt": "2026-07-27T07:59:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.946Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4ppbih005707p6zd3svexc",
          "saleId": "cms4ppbih005507p6ta218uph",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4ppbih005907p6y2eksfi4",
      "soldAt": "2026-07-27T07:59:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "4000",
      "discount": "0",
      "total": "4000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.946Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4ppbii005b07p6mr2pxd10",
          "saleId": "cms4ppbih005907p6y2eksfi4",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 2,
          "unitPrice": "2000",
          "lineTotal": "4000"
        }
      ]
    },
    {
      "id": "cms4pmjk300jq07k6sj6fvl3x",
      "soldAt": "2026-07-27T07:19:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.404Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjk300js07k6pabpbo64",
          "saleId": "cms4pmjk300jq07k6sj6fvl3x",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4ppbir006x07p6lg1ti0lc",
      "soldAt": "2026-07-27T06:28:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.955Z",
      "updatedAt": "2026-07-28T13:49:11.955Z",
      "lines": [
        {
          "id": "cms4ppbir006z07p6bwm4ylbz",
          "saleId": "cms4ppbir006x07p6lg1ti0lc",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbir007107p6ekm3qi34",
      "soldAt": "2026-07-27T06:28:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.956Z",
      "updatedAt": "2026-07-28T13:49:11.956Z",
      "lines": []
    },
    {
      "id": "cms4pmjjv00gw07k641nl3djl",
      "soldAt": "2026-07-27T04:43:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.395Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4pmjjv00gy07k6coundqcr",
          "saleId": "cms4pmjjv00gw07k641nl3djl",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 3,
          "unitPrice": "300",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cms4pmjim001b07k63beonl5l",
      "soldAt": "2026-07-27T03:01:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.350Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjim001d07k6gy0fcmyt",
          "saleId": "cms4pmjim001b07k63beonl5l",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 3,
          "unitPrice": "2000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4pmjk800l907k60p9cz6bz",
      "soldAt": "2026-07-27T01:55:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.409Z",
      "updatedAt": "2026-07-28T13:47:02.409Z",
      "lines": [
        {
          "id": "cms4pmjk800lb07k68tc7soiu",
          "saleId": "cms4pmjk800l907k60p9cz6bz",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjk700kx07k6ta6l0zs6",
      "soldAt": "2026-07-26T10:10:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.408Z",
      "updatedAt": "2026-07-28T13:47:02.408Z",
      "lines": [
        {
          "id": "cms4pmjk700kz07k6e20ku4ls",
          "saleId": "cms4pmjk700kx07k6ta6l0zs6",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4pmjih000507k61zsgdlnh",
      "soldAt": "2026-07-26T08:45:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "400",
      "discount": "0",
      "total": "400",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.345Z",
      "updatedAt": "2026-07-28T13:47:02.345Z",
      "lines": [
        {
          "id": "cms4pmjih000707k615parsx7",
          "saleId": "cms4pmjih000507k61zsgdlnh",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 2,
          "unitPrice": "200",
          "lineTotal": "400"
        }
      ]
    },
    {
      "id": "cms4pmjjc00ab07k672k12u0x",
      "soldAt": "2026-07-26T07:16:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.376Z",
      "updatedAt": "2026-07-28T13:47:02.376Z",
      "lines": [
        {
          "id": "cms4pmjjc00ad07k6wstr7nsz",
          "saleId": "cms4pmjjc00ab07k672k12u0x",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjis003c07k63o2wuny5",
      "soldAt": "2026-07-26T04:47:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.356Z",
      "updatedAt": "2026-07-28T13:47:02.356Z",
      "lines": [
        {
          "id": "cms4pmjis003e07k60ucxahfc",
          "saleId": "cms4pmjis003c07k63o2wuny5",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4pmjil000z07k6iutqk137",
      "soldAt": "2026-07-26T03:39:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.349Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cms4pmjil001107k66xmfhop4",
          "saleId": "cms4pmjil000z07k6iutqk137",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjl00dd07k6uk5vu2we",
      "soldAt": "2026-07-26T02:42:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.386Z",
      "updatedAt": "2026-07-28T13:47:02.386Z",
      "lines": [
        {
          "id": "cms4pmjjl00df07k6pta7subv",
          "saleId": "cms4pmjjl00dd07k6uk5vu2we",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjiu003y07k64cl5qfkz",
      "soldAt": "2026-07-26T01:53:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.358Z",
      "updatedAt": "2026-07-28T13:47:02.358Z",
      "lines": [
        {
          "id": "cms4pmjiu004007k645hpt424",
          "saleId": "cms4pmjiu003y07k64cl5qfkz",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjj5007x07k6thcyj9lj",
      "soldAt": "2026-07-26T01:49:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.369Z",
      "updatedAt": "2026-07-28T13:47:02.369Z",
      "lines": [
        {
          "id": "cms4pmjj5007z07k6nlnwo9w8",
          "saleId": "cms4pmjj5007x07k6thcyj9lj",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4ppbhw000p07p666wzfhvq",
      "soldAt": "2026-07-25T10:08:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "24000",
      "discount": "0",
      "total": "24000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.924Z",
      "updatedAt": "2026-07-28T13:49:11.924Z",
      "lines": [
        {
          "id": "cms4ppbhw000r07p61d17berx",
          "saleId": "cms4ppbhw000p07p666wzfhvq",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 3,
          "unitPrice": "8000",
          "lineTotal": "24000"
        }
      ]
    },
    {
      "id": "cms4ppbhw000t07p6dag90wwc",
      "soldAt": "2026-07-25T10:08:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.925Z",
      "updatedAt": "2026-07-28T13:49:11.925Z",
      "lines": []
    },
    {
      "id": "cms4pmjin001n07k6uxu656o3",
      "soldAt": "2026-07-25T09:14:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.351Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4pmjin001p07k630dypacj",
          "saleId": "cms4pmjin001n07k6uxu656o3",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjiw004r07k6pl6gi4ng",
      "soldAt": "2026-07-25T08:15:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.360Z",
      "updatedAt": "2026-07-28T13:47:02.360Z",
      "lines": [
        {
          "id": "cms4pmjiw004t07k69ki8vlup",
          "saleId": "cms4pmjiw004r07k6pl6gi4ng",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjjb00a207k6to64wvk3",
      "soldAt": "2026-07-25T05:03:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "16000",
      "discount": "0",
      "total": "16000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.376Z",
      "updatedAt": "2026-07-28T13:47:02.376Z",
      "lines": [
        {
          "id": "cms4pmjjb00a407k607pkwfab",
          "saleId": "cms4pmjjb00a207k6to64wvk3",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 2,
          "unitPrice": "8000",
          "lineTotal": "16000"
        }
      ]
    },
    {
      "id": "cms4pmjjh00c007k6n0biq18j",
      "soldAt": "2026-07-25T05:03:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.381Z",
      "updatedAt": "2026-07-28T13:47:02.381Z",
      "lines": []
    },
    {
      "id": "cms4pmjk100ix07k6ix89g3i0",
      "soldAt": "2026-07-25T03:37:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.401Z",
      "updatedAt": "2026-07-28T13:47:02.401Z",
      "lines": [
        {
          "id": "cms4pmjk100iz07k6lh3v3vm9",
          "saleId": "cms4pmjk100ix07k6ix89g3i0",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 3,
          "unitPrice": "200",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjj0006107k6zjy5dit6",
      "soldAt": "2026-07-25T02:53:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.364Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4pmjj0006307k6wwesjmhs",
          "saleId": "cms4pmjj0006107k6zjy5dit6",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjip002f07k6dwswtxfk",
      "soldAt": "2026-07-25T02:26:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.353Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjip002h07k69xupirwc",
          "saleId": "cms4pmjip002f07k6dwswtxfk",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjih000907k60m4swbjm",
      "soldAt": "2026-07-24T09:43:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.346Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjii000b07k6fjx2qqsg",
          "saleId": "cms4pmjih000907k60m4swbjm",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjiv004e07k6bvcg0nex",
      "soldAt": "2026-07-24T08:54:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.359Z",
      "updatedAt": "2026-07-28T13:47:02.359Z",
      "lines": [
        {
          "id": "cms4pmjiv004g07k6tygpcrqu",
          "saleId": "cms4pmjiv004e07k6bvcg0nex",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjjd00ak07k6gq3cd6k9",
      "soldAt": "2026-07-24T04:41:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.377Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjjd00am07k6gwsn1j83",
          "saleId": "cms4pmjjd00ak07k6gq3cd6k9",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4pmjiy005g07k6r2uem1kg",
      "soldAt": "2026-07-24T01:59:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.362Z",
      "updatedAt": "2026-07-28T13:47:02.362Z",
      "lines": [
        {
          "id": "cms4pmjiy005i07k6wupmjzzi",
          "saleId": "cms4pmjiy005g07k6r2uem1kg",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjiw004z07k657f4407v",
      "soldAt": "2026-07-23T09:17:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.361Z",
      "updatedAt": "2026-07-28T13:47:02.361Z",
      "lines": [
        {
          "id": "cms4pmjiw005107k6u0syk5tb",
          "saleId": "cms4pmjiw004z07k657f4407v",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4ppbi5002p07p69oaptw0j",
      "soldAt": "2026-07-23T08:02:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "4000",
      "discount": "0",
      "total": "4000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.933Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4ppbi5002r07p6cntqb0fp",
          "saleId": "cms4ppbi5002p07p69oaptw0j",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 2,
          "unitPrice": "2000",
          "lineTotal": "4000"
        }
      ]
    },
    {
      "id": "cms4ppbi5002t07p62pqoqui7",
      "soldAt": "2026-07-23T08:02:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.934Z",
      "updatedAt": "2026-07-28T13:49:11.934Z",
      "lines": [
        {
          "id": "cms4ppbi5002v07p68m9jli7s",
          "saleId": "cms4ppbi5002t07p62pqoqui7",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjjq00ez07k6fc0j4des",
      "soldAt": "2026-07-23T07:54:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.390Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjjq00f107k6vhrl0e70",
          "saleId": "cms4pmjjq00ez07k6fc0j4des",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjn00e607k6lk2x9859",
      "soldAt": "2026-07-23T07:18:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.388Z",
      "updatedAt": "2026-07-28T13:47:02.388Z",
      "lines": [
        {
          "id": "cms4pmjjn00e807k6gkq94kav",
          "saleId": "cms4pmjjn00e607k6lk2x9859",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjk400k607k6k7a9wtpv",
      "soldAt": "2026-07-23T06:59:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.405Z",
      "updatedAt": "2026-07-28T13:47:02.405Z",
      "lines": []
    },
    {
      "id": "cms4pmjke00n007k63tpdyq3h",
      "soldAt": "2026-07-23T06:09:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.414Z",
      "updatedAt": "2026-07-28T13:47:02.414Z",
      "lines": [
        {
          "id": "cms4pmjke00n207k6u6y7fhbi",
          "saleId": "cms4pmjke00n007k63tpdyq3h",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbhz001d07p6bgy4h0yx",
      "soldAt": "2026-07-23T05:10:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.927Z",
      "updatedAt": "2026-07-28T13:49:11.927Z",
      "lines": [
        {
          "id": "cms4ppbhz001f07p6myqvby54",
          "saleId": "cms4ppbhz001d07p6bgy4h0yx",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 3,
          "unitPrice": "200",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbhz001h07p67zuajsbp",
      "soldAt": "2026-07-23T05:10:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.927Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cms4ppbhz001j07p607y8arw4",
          "saleId": "cms4ppbhz001h07p67zuajsbp",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbhy001507p6mrttkefk",
      "soldAt": "2026-07-23T04:22:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.926Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cms4ppbhy001707p6zru9fepx",
          "saleId": "cms4ppbhy001507p6mrttkefk",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4ppbhy001907p6dp1j9hyb",
      "soldAt": "2026-07-23T04:22:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.927Z",
      "updatedAt": "2026-07-28T13:49:11.927Z",
      "lines": [
        {
          "id": "cms4ppbhy001b07p6l69udpul",
          "saleId": "cms4ppbhy001907p6dp1j9hyb",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbis007507p6his30kld",
      "soldAt": "2026-07-23T02:59:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.956Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4ppbis007707p6j5p5njki",
          "saleId": "cms4ppbis007507p6his30kld",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4ppbis007907p66pksj2bu",
      "soldAt": "2026-07-23T02:59:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.957Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4ppbis007b07p6b8u7gg19",
          "saleId": "cms4ppbis007907p66pksj2bu",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "2000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjk000ip07k687g0ysnt",
      "soldAt": "2026-07-22T10:05:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.401Z",
      "updatedAt": "2026-07-28T13:47:02.401Z",
      "lines": [
        {
          "id": "cms4pmjk000ir07k6qrdpuo7n",
          "saleId": "cms4pmjk000ip07k687g0ysnt",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjje00b407k60j89rzaz",
      "soldAt": "2026-07-22T09:22:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "400",
      "discount": "0",
      "total": "400",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.378Z",
      "updatedAt": "2026-07-28T13:47:02.378Z",
      "lines": [
        {
          "id": "cms4pmjje00b607k66mvorgu4",
          "saleId": "cms4pmjje00b407k60j89rzaz",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 2,
          "unitPrice": "200",
          "lineTotal": "400"
        }
      ]
    },
    {
      "id": "cms4pmjiy005c07k6qmm6eame",
      "soldAt": "2026-07-22T08:38:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.362Z",
      "updatedAt": "2026-07-28T13:47:02.362Z",
      "lines": [
        {
          "id": "cms4pmjiy005e07k6mtgay9o2",
          "saleId": "cms4pmjiy005c07k6qmm6eame",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 3,
          "unitPrice": "200",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjkc00mb07k6313gvumf",
      "soldAt": "2026-07-22T08:04:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.412Z",
      "updatedAt": "2026-07-28T13:47:02.412Z",
      "lines": [
        {
          "id": "cms4pmjkc00md07k62hbds6f7",
          "saleId": "cms4pmjkc00mb07k6313gvumf",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjj5008107k6e6zhyzpb",
      "soldAt": "2026-07-22T07:13:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.370Z",
      "updatedAt": "2026-07-28T13:47:02.370Z",
      "lines": [
        {
          "id": "cms4pmjj5008307k6tga5s1hw",
          "saleId": "cms4pmjj5008107k6e6zhyzpb",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjiu004607k6h4osl13q",
      "soldAt": "2026-07-22T06:59:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.359Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4pmjiu004807k6usuy7jsq",
          "saleId": "cms4pmjiu004607k6h4osl13q",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjk500ka07k6jsh18l6r",
      "soldAt": "2026-07-22T05:48:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.405Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjk500kc07k64akx085z",
          "saleId": "cms4pmjk500ka07k6jsh18l6r",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4pmjis003k07k6i8uowq4x",
      "soldAt": "2026-07-22T05:35:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.357Z",
      "updatedAt": "2026-07-28T13:47:02.357Z",
      "lines": [
        {
          "id": "cms4pmjit003m07k6qelhnhbl",
          "saleId": "cms4pmjis003k07k6i8uowq4x",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjjd00ao07k6frf71l4g",
      "soldAt": "2026-07-22T03:44:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.377Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjjd00aq07k66pun849p",
          "saleId": "cms4pmjjd00ao07k6frf71l4g",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbid004907p6x03j027l",
      "soldAt": "2026-07-22T03:43:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.941Z",
      "updatedAt": "2026-07-28T13:49:11.941Z",
      "lines": [
        {
          "id": "cms4ppbid004b07p6wmkpopfp",
          "saleId": "cms4ppbid004907p6x03j027l",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4ppbid004d07p6nb2tl0gg",
      "soldAt": "2026-07-22T03:43:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.941Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4ppbid004f07p6k5esdoq4",
          "saleId": "cms4ppbid004d07p6nb2tl0gg",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjiq002n07k6hr0oilz5",
      "soldAt": "2026-07-22T02:07:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.354Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjiq002p07k64nmv582u",
          "saleId": "cms4pmjiq002n07k6hr0oilz5",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 3,
          "unitPrice": "2000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4pmjj6008907k6ep2k8tsn",
      "soldAt": "2026-07-22T01:32:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "8000",
      "discount": "0",
      "total": "8000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.370Z",
      "updatedAt": "2026-07-28T13:47:02.370Z",
      "lines": [
        {
          "id": "cms4pmjj6008b07k66xm1d3ge",
          "saleId": "cms4pmjj6008907k6ep2k8tsn",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 1,
          "unitPrice": "8000",
          "lineTotal": "8000"
        }
      ]
    },
    {
      "id": "cms4pmjj2006v07k67g0clfzq",
      "soldAt": "2026-07-21T09:13:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "24000",
      "discount": "0",
      "total": "24000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.367Z",
      "updatedAt": "2026-07-28T13:47:02.367Z",
      "lines": [
        {
          "id": "cms4pmjj2006x07k6rkhnx4ej",
          "saleId": "cms4pmjj2006v07k67g0clfzq",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 3,
          "unitPrice": "8000",
          "lineTotal": "24000"
        }
      ]
    },
    {
      "id": "cms4pmjk600kt07k6n9a9tew4",
      "soldAt": "2026-07-21T08:03:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.407Z",
      "updatedAt": "2026-07-28T13:47:02.407Z",
      "lines": [
        {
          "id": "cms4pmjk600kv07k699pueqnm",
          "saleId": "cms4pmjk600kt07k6n9a9tew4",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4ppbi7003507p6c9zxi1tr",
      "soldAt": "2026-07-21T05:33:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.936Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4ppbi7003707p6vdz8cpo0",
          "saleId": "cms4ppbi7003507p6c9zxi1tr",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbi8003907p6bf9423wf",
      "soldAt": "2026-07-21T05:33:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "24000",
      "discount": "0",
      "total": "24000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.936Z",
      "updatedAt": "2026-07-28T13:49:11.936Z",
      "lines": [
        {
          "id": "cms4ppbi8003b07p6zgill7lh",
          "saleId": "cms4ppbi8003907p6bf9423wf",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 3,
          "unitPrice": "8000",
          "lineTotal": "24000"
        }
      ]
    },
    {
      "id": "cms4pmjjf00bc07k6h3yun3rm",
      "soldAt": "2026-07-21T05:26:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.379Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjjf00be07k6hicw4aud",
          "saleId": "cms4pmjjf00bc07k6h3yun3rm",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 3,
          "unitPrice": "300",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cms4ppbib003t07p6jfvjv2ik",
      "soldAt": "2026-07-21T05:18:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.939Z",
      "updatedAt": "2026-07-28T13:49:11.939Z",
      "lines": [
        {
          "id": "cms4ppbib003v07p6951b30bd",
          "saleId": "cms4ppbib003t07p6jfvjv2ik",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbib003x07p6w8qd95qh",
      "soldAt": "2026-07-21T05:18:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.940Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4ppbib003z07p6fieu4k4d",
          "saleId": "cms4ppbib003x07p6w8qd95qh",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 2,
          "unitPrice": "3000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4pmjj5007t07k6uiccjhns",
      "soldAt": "2026-07-21T03:44:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "5000",
      "discount": "0",
      "total": "5000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.369Z",
      "updatedAt": "2026-07-28T13:47:02.369Z",
      "lines": [
        {
          "id": "cms4pmjj5007v07k6fd6ztz8w",
          "saleId": "cms4pmjj5007t07k6uiccjhns",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 1,
          "unitPrice": "5000",
          "lineTotal": "5000"
        }
      ]
    },
    {
      "id": "cms4pmjis003g07k6esh10teg",
      "soldAt": "2026-07-21T01:39:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.357Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cms4pmjis003i07k6koiybrq6",
          "saleId": "cms4pmjis003g07k6esh10teg",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjji00cc07k61vk69er7",
      "soldAt": "2026-07-21T01:07:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "24000",
      "discount": "0",
      "total": "24000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.382Z",
      "updatedAt": "2026-07-28T13:47:02.382Z",
      "lines": [
        {
          "id": "cms4pmjji00ce07k66cxcevky",
          "saleId": "cms4pmjji00cc07k61vk69er7",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 3,
          "unitPrice": "8000",
          "lineTotal": "24000"
        }
      ]
    },
    {
      "id": "cms4pmjjj00cs07k6mmggmma9",
      "soldAt": "2026-07-20T08:43:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.384Z",
      "updatedAt": "2026-07-28T13:47:02.384Z",
      "lines": []
    },
    {
      "id": "cms4pmjim001f07k6c0qzai54",
      "soldAt": "2026-07-20T07:54:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.351Z",
      "updatedAt": "2026-07-28T13:47:02.351Z",
      "lines": [
        {
          "id": "cms4pmjim001h07k6h8o6h5wg",
          "saleId": "cms4pmjim001f07k6c0qzai54",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjl00d907k6ch6d8vk8",
      "soldAt": "2026-07-20T07:49:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.385Z",
      "updatedAt": "2026-07-28T13:47:02.385Z",
      "lines": [
        {
          "id": "cms4pmjjl00db07k66wm5uvxn",
          "saleId": "cms4pmjjl00d907k6ch6d8vk8",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjjk00d007k6yik6tqqs",
      "soldAt": "2026-07-20T07:21:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.385Z",
      "updatedAt": "2026-07-28T13:47:02.385Z",
      "lines": [
        {
          "id": "cms4pmjjk00d207k63t7caual",
          "saleId": "cms4pmjjk00d007k6yik6tqqs",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjjv00h007k6sqmkulvw",
      "soldAt": "2026-07-20T05:06:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.396Z",
      "updatedAt": "2026-07-28T13:47:02.396Z",
      "lines": [
        {
          "id": "cms4pmjjv00h207k6d9a4vee5",
          "saleId": "cms4pmjjv00h007k6sqmkulvw",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjj6008507k6ic87f0as",
      "soldAt": "2026-07-20T04:24:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.370Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjj6008707k65c0q8buq",
          "saleId": "cms4pmjj6008507k6ic87f0as",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 3,
          "unitPrice": "300",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cms4pmjio002307k6azuycutn",
      "soldAt": "2026-07-19T10:43:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.352Z",
      "updatedAt": "2026-07-28T13:47:02.352Z",
      "lines": [
        {
          "id": "cms4pmjio002507k6gdcav8ki",
          "saleId": "cms4pmjio002307k6azuycutn",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbhx000x07p6n9jz2nnw",
      "soldAt": "2026-07-19T10:42:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "24000",
      "discount": "0",
      "total": "24000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.925Z",
      "updatedAt": "2026-07-28T13:49:11.925Z",
      "lines": [
        {
          "id": "cms4ppbhx000z07p6cwozlgx3",
          "saleId": "cms4ppbhx000x07p6n9jz2nnw",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 3,
          "unitPrice": "8000",
          "lineTotal": "24000"
        }
      ]
    },
    {
      "id": "cms4ppbhx001107p6kvgnww3g",
      "soldAt": "2026-07-19T10:42:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "15000",
      "discount": "0",
      "total": "15000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.926Z",
      "updatedAt": "2026-07-28T13:49:11.926Z",
      "lines": [
        {
          "id": "cms4ppbhx001307p6uzjfw7c7",
          "saleId": "cms4ppbhx001107p6kvgnww3g",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 3,
          "unitPrice": "5000",
          "lineTotal": "15000"
        }
      ]
    },
    {
      "id": "cms4pmjip002j07k6lsp87zgz",
      "soldAt": "2026-07-19T10:26:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.354Z",
      "updatedAt": "2026-07-28T13:47:02.354Z",
      "lines": []
    },
    {
      "id": "cms4pmjjy00hp07k6cvmg5gxs",
      "soldAt": "2026-07-19T05:49:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "16000",
      "discount": "0",
      "total": "16000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.398Z",
      "updatedAt": "2026-07-28T13:47:02.398Z",
      "lines": [
        {
          "id": "cms4pmjjy00hr07k642zxowoq",
          "saleId": "cms4pmjjy00hp07k6cvmg5gxs",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 2,
          "unitPrice": "8000",
          "lineTotal": "16000"
        }
      ]
    },
    {
      "id": "cms4pmjkb00m707k6c7zt1q7i",
      "soldAt": "2026-07-19T05:08:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.412Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4pmjkb00m907k66fs6d024",
          "saleId": "cms4pmjkb00m707k6c7zt1q7i",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 3,
          "unitPrice": "300",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cms4ppbi1001t07p6q8lqf702",
      "soldAt": "2026-07-19T05:03:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.930Z",
      "updatedAt": "2026-07-28T13:49:11.930Z",
      "lines": [
        {
          "id": "cms4ppbi1001v07p63jrq69cz",
          "saleId": "cms4ppbi1001t07p6q8lqf702",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4ppbi2001x07p6r3nan318",
      "soldAt": "2026-07-19T05:03:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "400",
      "discount": "0",
      "total": "400",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.930Z",
      "updatedAt": "2026-07-28T13:49:11.930Z",
      "lines": [
        {
          "id": "cms4ppbi2001z07p6mr2qp3pv",
          "saleId": "cms4ppbi2001x07p6r3nan318",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 2,
          "unitPrice": "200",
          "lineTotal": "400"
        }
      ]
    },
    {
      "id": "cms4pmjk400k207k6fj4q6rdc",
      "soldAt": "2026-07-19T04:16:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.405Z",
      "updatedAt": "2026-07-28T13:47:02.405Z",
      "lines": [
        {
          "id": "cms4pmjk400k407k6dadvyid9",
          "saleId": "cms4pmjk400k207k6fj4q6rdc",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4ppbio006h07p65u7kx3qx",
      "soldAt": "2026-07-19T02:50:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "400",
      "discount": "0",
      "total": "400",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.953Z",
      "updatedAt": "2026-07-28T13:49:11.953Z",
      "lines": [
        {
          "id": "cms4ppbio006j07p64c2wp53x",
          "saleId": "cms4ppbio006h07p65u7kx3qx",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 2,
          "unitPrice": "200",
          "lineTotal": "400"
        }
      ]
    },
    {
      "id": "cms4ppbip006l07p643mm47ll",
      "soldAt": "2026-07-19T02:50:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.953Z",
      "updatedAt": "2026-07-28T13:49:11.953Z",
      "lines": [
        {
          "id": "cms4ppbip006n07p6sw7hzqx8",
          "saleId": "cms4ppbip006l07p643mm47ll",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4ppbi2002107p6t8d2kx3x",
      "soldAt": "2026-07-19T01:10:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.931Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4ppbi2002307p6zl4hy136",
          "saleId": "cms4ppbi2002107p6t8d2kx3x",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4ppbi2002507p6nhe83z39",
      "soldAt": "2026-07-19T01:10:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.931Z",
      "updatedAt": "2026-07-28T13:49:11.931Z",
      "lines": [
        {
          "id": "cms4ppbi2002707p65sn1wm0i",
          "saleId": "cms4ppbi2002507p6nhe83z39",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjf00bg07k6bn3znzlv",
      "soldAt": "2026-07-18T08:59:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.380Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4pmjjf00bi07k6icn1hi79",
          "saleId": "cms4pmjjf00bg07k6bn3znzlv",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cms4pmjjt00g507k62pgw9dt8",
      "soldAt": "2026-07-18T06:27:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "200",
      "discount": "0",
      "total": "200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.394Z",
      "updatedAt": "2026-07-28T13:47:02.394Z",
      "lines": [
        {
          "id": "cms4pmjjt00g707k67ylcei0y",
          "saleId": "cms4pmjjt00g507k62pgw9dt8",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 1,
          "unitPrice": "200",
          "lineTotal": "200"
        }
      ]
    },
    {
      "id": "cms4pmjiw004v07k65vp0gdcz",
      "soldAt": "2026-07-18T02:36:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.360Z",
      "updatedAt": "2026-07-28T13:47:02.360Z",
      "lines": [
        {
          "id": "cms4pmjiw004x07k673h8c1u0",
          "saleId": "cms4pmjiw004v07k65vp0gdcz",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjk800l507k612pukf8q",
      "soldAt": "2026-07-18T01:38:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.408Z",
      "updatedAt": "2026-07-28T13:47:02.408Z",
      "lines": [
        {
          "id": "cms4pmjk800l707k6nqghfm7i",
          "saleId": "cms4pmjk800l507k612pukf8q",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjk000ih07k6zdjw8o5q",
      "soldAt": "2026-07-18T01:31:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.400Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cms4pmjk000ij07k6wnxc5f96",
          "saleId": "cms4pmjk000ih07k6zdjw8o5q",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjjh00c407k69zaodcsh",
      "soldAt": "2026-07-17T08:30:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "4000",
      "discount": "0",
      "total": "4000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.382Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjjh00c607k60chqjcqs",
          "saleId": "cms4pmjjh00c407k69zaodcsh",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 2,
          "unitPrice": "2000",
          "lineTotal": "4000"
        }
      ]
    },
    {
      "id": "cms4pmjiv004n07k6i63gv2j2",
      "soldAt": "2026-07-17T04:13:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.360Z",
      "updatedAt": "2026-07-28T13:47:02.360Z",
      "lines": [
        {
          "id": "cms4pmjiv004p07k66dbngd4e",
          "saleId": "cms4pmjiv004n07k6i63gv2j2",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 3,
          "unitPrice": "200",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjk300jm07k632zydh42",
      "soldAt": "2026-07-17T02:34:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "16000",
      "discount": "0",
      "total": "16000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.403Z",
      "updatedAt": "2026-07-28T13:47:02.403Z",
      "lines": [
        {
          "id": "cms4pmjk300jo07k6u9haul2l",
          "saleId": "cms4pmjk300jm07k632zydh42",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 2,
          "unitPrice": "8000",
          "lineTotal": "16000"
        }
      ]
    },
    {
      "id": "cms4pmjka00lu07k6td8rq8dr",
      "soldAt": "2026-07-17T02:23:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.410Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cms4pmjka00lw07k62o51iboy",
          "saleId": "cms4pmjka00lu07k6td8rq8dr",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cms4pmjip002b07k6dxo6023a",
      "soldAt": "2026-07-17T02:11:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.353Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjip002d07k67c7mi3p6",
          "saleId": "cms4pmjip002b07k6dxo6023a",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4ppbi4002h07p6t9pff33i",
      "soldAt": "2026-07-16T09:29:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.932Z",
      "updatedAt": "2026-07-28T13:49:11.932Z",
      "lines": [
        {
          "id": "cms4ppbi4002j07p69iyi46sa",
          "saleId": "cms4ppbi4002h07p6t9pff33i",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbi4002l07p68mbvcd92",
      "soldAt": "2026-07-16T09:29:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "15000",
      "discount": "0",
      "total": "15000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.933Z",
      "updatedAt": "2026-07-28T13:49:11.933Z",
      "lines": [
        {
          "id": "cms4ppbi4002n07p6ippitu6b",
          "saleId": "cms4ppbi4002l07p68mbvcd92",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 3,
          "unitPrice": "5000",
          "lineTotal": "15000"
        }
      ]
    },
    {
      "id": "cms4pmjk400jy07k6x4waasum",
      "soldAt": "2026-07-16T08:44:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.404Z",
      "updatedAt": "2026-07-28T13:47:02.404Z",
      "lines": [
        {
          "id": "cms4pmjk400k007k67u8dtrj6",
          "saleId": "cms4pmjk400jy07k6x4waasum",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjjr00fc07k6j3je54cz",
      "soldAt": "2026-07-16T07:31:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.391Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4pmjjr00fe07k6inbymcgu",
          "saleId": "cms4pmjjr00fc07k6j3je54cz",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjje00b007k62du3unfp",
      "soldAt": "2026-07-16T07:30:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.378Z",
      "updatedAt": "2026-07-28T13:47:02.378Z",
      "lines": [
        {
          "id": "cms4pmjje00b207k6ry1yxkl9",
          "saleId": "cms4pmjje00b007k62du3unfp",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4pmjio002707k6o0wzpndz",
      "soldAt": "2026-07-16T06:00:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.353Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjio002907k622si6l18",
          "saleId": "cms4pmjio002707k6o0wzpndz",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjj00ck07k6seu473c2",
      "soldAt": "2026-07-15T10:29:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.383Z",
      "updatedAt": "2026-07-28T13:47:02.383Z",
      "lines": [
        {
          "id": "cms4pmjjj00cm07k6zuwsuo6g",
          "saleId": "cms4pmjjj00ck07k6seu473c2",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjio001z07k6u8ntpvt1",
      "soldAt": "2026-07-15T09:28:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "400",
      "discount": "0",
      "total": "400",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.352Z",
      "updatedAt": "2026-07-28T13:47:02.352Z",
      "lines": [
        {
          "id": "cms4pmjio002107k6lncdh8im",
          "saleId": "cms4pmjio001z07k6u8ntpvt1",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 2,
          "unitPrice": "200",
          "lineTotal": "400"
        }
      ]
    },
    {
      "id": "cms4pmjjp00er07k6rzq04hwy",
      "soldAt": "2026-07-15T07:53:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.390Z",
      "updatedAt": "2026-07-28T13:47:02.390Z",
      "lines": [
        {
          "id": "cms4pmjjp00et07k6zeqmgxxx",
          "saleId": "cms4pmjjp00er07k6rzq04hwy",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjik000v07k61you7oth",
      "soldAt": "2026-07-15T07:06:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.349Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjik000x07k6i8ax00ty",
          "saleId": "cms4pmjik000v07k61you7oth",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "2000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjin001v07k6h6cmhbhx",
      "soldAt": "2026-07-15T05:28:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.352Z",
      "updatedAt": "2026-07-28T13:47:02.352Z",
      "lines": [
        {
          "id": "cms4pmjin001x07k6ciyhhaeo",
          "saleId": "cms4pmjin001v07k6h6cmhbhx",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjke00n407k6rs8y1wv6",
      "soldAt": "2026-07-15T04:54:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.415Z",
      "updatedAt": "2026-07-28T13:47:02.415Z",
      "lines": [
        {
          "id": "cms4pmjke00n607k61irw3dko",
          "saleId": "cms4pmjke00n407k6rs8y1wv6",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbif004p07p6sfegfv14",
      "soldAt": "2026-07-15T04:47:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.943Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4ppbif004r07p6wslyj87k",
          "saleId": "cms4ppbif004p07p6sfegfv14",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbif004t07p6yoiy2r07",
      "soldAt": "2026-07-15T04:47:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.944Z",
      "updatedAt": "2026-07-28T13:49:11.944Z",
      "lines": [
        {
          "id": "cms4ppbif004v07p6h3fz6chf",
          "saleId": "cms4ppbif004t07p6yoiy2r07",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjk200j507k6dksjpt2o",
      "soldAt": "2026-07-15T02:40:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.402Z",
      "updatedAt": "2026-07-28T13:47:02.402Z",
      "lines": [
        {
          "id": "cms4pmjk200j707k69m6pcle3",
          "saleId": "cms4pmjk200j507k6dksjpt2o",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjka00lq07k6fifcp405",
      "soldAt": "2026-07-15T02:27:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.410Z",
      "updatedAt": "2026-07-28T13:47:02.410Z",
      "lines": [
        {
          "id": "cms4pmjka00ls07k63km29xd4",
          "saleId": "cms4pmjka00lq07k6fifcp405",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbi9003d07p6i7eqb011",
      "soldAt": "2026-07-15T01:37:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.937Z",
      "updatedAt": "2026-07-28T13:49:11.937Z",
      "lines": [
        {
          "id": "cms4ppbi9003f07p6ew8z66il",
          "saleId": "cms4ppbi9003d07p6i7eqb011",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbi9003h07p6nf93h8ze",
      "soldAt": "2026-07-15T01:37:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.937Z",
      "updatedAt": "2026-07-28T13:49:11.937Z",
      "lines": [
        {
          "id": "cms4ppbi9003j07p62m1i5own",
          "saleId": "cms4ppbi9003h07p6nf93h8ze",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjkc00mj07k6jcbqxa7b",
      "soldAt": "2026-07-14T05:50:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.413Z",
      "updatedAt": "2026-07-28T13:47:02.413Z",
      "lines": [
        {
          "id": "cms4pmjkc00ml07k65inttd90",
          "saleId": "cms4pmjkc00mj07k6jcbqxa7b",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjj3007d07k61rot9hd0",
      "soldAt": "2026-07-14T04:49:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.368Z",
      "updatedAt": "2026-07-28T13:47:02.368Z",
      "lines": []
    },
    {
      "id": "cms4pmjj6008h07k6ltaetox0",
      "soldAt": "2026-07-14T04:25:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "15000",
      "discount": "0",
      "total": "15000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.371Z",
      "updatedAt": "2026-07-28T13:47:02.371Z",
      "lines": [
        {
          "id": "cms4pmjj7008j07k6ik6ss062",
          "saleId": "cms4pmjj6008h07k6ltaetox0",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 3,
          "unitPrice": "5000",
          "lineTotal": "15000"
        }
      ]
    },
    {
      "id": "cms4pmjj1006n07k6umbzpw3x",
      "soldAt": "2026-07-14T02:59:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.366Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cms4pmjj1006p07k65nqkzoxv",
          "saleId": "cms4pmjj1006n07k6umbzpw3x",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 2,
          "unitPrice": "3000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4ppbip006p07p60c9cinnx",
      "soldAt": "2026-07-14T02:52:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.954Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4ppbiq006r07p6f3h80dyx",
          "saleId": "cms4ppbip006p07p60c9cinnx",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbiq006t07p6723q19t5",
      "soldAt": "2026-07-14T02:52:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.954Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4ppbiq006v07p69ktx2czb",
          "saleId": "cms4ppbiq006t07p6723q19t5",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 3,
          "unitPrice": "300",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cms4ppbic004107p6dfhc5blf",
      "soldAt": "2026-07-13T08:55:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.940Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4ppbic004307p6q3as1cox",
          "saleId": "cms4ppbic004107p6dfhc5blf",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4ppbic004507p673np1ji3",
      "soldAt": "2026-07-13T08:55:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.940Z",
      "updatedAt": "2026-07-28T13:49:11.940Z",
      "lines": [
        {
          "id": "cms4ppbic004707p6rzncst5r",
          "saleId": "cms4ppbic004507p673np1ji3",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbi6002x07p6qqwn70pe",
      "soldAt": "2026-07-13T08:50:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.935Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4ppbi6002z07p6ed0ak140",
          "saleId": "cms4ppbi6002x07p6qqwn70pe",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4ppbi6003107p6f84nhsrw",
      "soldAt": "2026-07-13T08:50:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.935Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4ppbi7003307p6oi9mdhir",
          "saleId": "cms4ppbi6003107p6f84nhsrw",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 3,
          "unitPrice": "2000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4pmjiq002r07k6v3abl6em",
      "soldAt": "2026-07-13T03:51:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "8000",
      "discount": "0",
      "total": "8000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.354Z",
      "updatedAt": "2026-07-28T13:47:02.354Z",
      "lines": [
        {
          "id": "cms4pmjiq002t07k6jb6xoaui",
          "saleId": "cms4pmjiq002r07k6v3abl6em",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 1,
          "unitPrice": "8000",
          "lineTotal": "8000"
        }
      ]
    },
    {
      "id": "cms4pmjjl00dh07k6r39mdizr",
      "soldAt": "2026-07-13T02:29:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5000",
      "discount": "0",
      "total": "5000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.386Z",
      "updatedAt": "2026-07-28T13:47:02.386Z",
      "lines": [
        {
          "id": "cms4pmjjl00dj07k6dsrgrypq",
          "saleId": "cms4pmjjl00dh07k6r39mdizr",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 1,
          "unitPrice": "5000",
          "lineTotal": "5000"
        }
      ]
    },
    {
      "id": "cms4pmjka00ly07k68xvlgfqg",
      "soldAt": "2026-07-13T01:26:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.411Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjka00m007k6a5u6sc2c",
          "saleId": "cms4pmjka00ly07k68xvlgfqg",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4pmjij000m07k65i3pz15j",
      "soldAt": "2026-07-13T01:23:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.348Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cms4pmjij000o07k6begxv4ii",
          "saleId": "cms4pmjij000m07k65i3pz15j",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cms4ppbii005d07p615ptvh1p",
      "soldAt": "2026-07-12T10:10:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "24000",
      "discount": "0",
      "total": "24000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.947Z",
      "updatedAt": "2026-07-28T13:49:11.947Z",
      "lines": [
        {
          "id": "cms4ppbii005f07p6cwqnlo4r",
          "saleId": "cms4ppbii005d07p615ptvh1p",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 3,
          "unitPrice": "8000",
          "lineTotal": "24000"
        }
      ]
    },
    {
      "id": "cms4ppbij005h07p6mmj7pbkd",
      "soldAt": "2026-07-12T10:10:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.947Z",
      "updatedAt": "2026-07-28T13:49:11.947Z",
      "lines": [
        {
          "id": "cms4ppbij005j07p60bjmyejp",
          "saleId": "cms4ppbij005h07p6mmj7pbkd",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbia003l07p6e5ujyv8v",
      "soldAt": "2026-07-12T08:34:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.938Z",
      "updatedAt": "2026-07-28T13:49:11.938Z",
      "lines": [
        {
          "id": "cms4ppbia003n07p6kty1y4s7",
          "saleId": "cms4ppbia003l07p6e5ujyv8v",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbia003p07p6bh40cizq",
      "soldAt": "2026-07-12T08:34:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "24000",
      "discount": "0",
      "total": "24000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.939Z",
      "updatedAt": "2026-07-28T13:49:11.939Z",
      "lines": [
        {
          "id": "cms4ppbia003r07p6vz7m50re",
          "saleId": "cms4ppbia003p07p6bh40cizq",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 3,
          "unitPrice": "8000",
          "lineTotal": "24000"
        }
      ]
    },
    {
      "id": "cms4pmjjk00cw07k625nyvbvd",
      "soldAt": "2026-07-12T07:15:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.384Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjjk00cy07k61i16mdy6",
          "saleId": "cms4pmjjk00cw07k625nyvbvd",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjj4007l07k6ehet6jgs",
      "soldAt": "2026-07-12T06:51:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.368Z",
      "updatedAt": "2026-07-28T13:47:02.368Z",
      "lines": [
        {
          "id": "cms4pmjj4007n07k6mpsv8dh3",
          "saleId": "cms4pmjj4007l07k6ehet6jgs",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4pmjjq00ev07k6zr7gql7j",
      "soldAt": "2026-07-12T06:47:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "5000",
      "discount": "0",
      "total": "5000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.390Z",
      "updatedAt": "2026-07-28T13:47:02.390Z",
      "lines": [
        {
          "id": "cms4pmjjq00ex07k6nb3g6u38",
          "saleId": "cms4pmjjq00ev07k6zr7gql7j",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 1,
          "unitPrice": "5000",
          "lineTotal": "5000"
        }
      ]
    },
    {
      "id": "cms4pmjjw00h807k65npor1np",
      "soldAt": "2026-07-12T05:18:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.396Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjjw00ha07k6qw2ghmo7",
          "saleId": "cms4pmjjw00h807k65npor1np",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4pmjiy005o07k6tiz2vyg1",
      "soldAt": "2026-07-12T03:20:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "8000",
      "discount": "0",
      "total": "8000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.363Z",
      "updatedAt": "2026-07-28T13:47:02.363Z",
      "lines": [
        {
          "id": "cms4pmjiz005q07k6dseojyps",
          "saleId": "cms4pmjiy005o07k6tiz2vyg1",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 1,
          "unitPrice": "8000",
          "lineTotal": "8000"
        }
      ]
    },
    {
      "id": "cms4pmjjr00fg07k6lhdhj3bj",
      "soldAt": "2026-07-11T10:53:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.392Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4pmjjr00fi07k6ofr0a13r",
          "saleId": "cms4pmjjr00fg07k6lhdhj3bj",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4pmjjn00dy07k6bg4or8ak",
      "soldAt": "2026-07-11T10:29:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.387Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cms4pmjjn00e007k6k6jg8201",
          "saleId": "cms4pmjjn00dy07k6bg4or8ak",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjm00dl07k6zo25kihe",
      "soldAt": "2026-07-11T08:54:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.386Z",
      "updatedAt": "2026-07-28T13:47:02.386Z",
      "lines": [
        {
          "id": "cms4pmjjm00dn07k6fo2yum2v",
          "saleId": "cms4pmjjm00dl07k6zo25kihe",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4ppbit007d07p6z4h9kewj",
      "soldAt": "2026-07-11T06:23:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.957Z",
      "updatedAt": "2026-07-28T13:49:11.957Z",
      "lines": [
        {
          "id": "cms4ppbit007f07p61h9yyhcc",
          "saleId": "cms4ppbit007d07p6z4h9kewj",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbit007h07p6oztkdyhj",
      "soldAt": "2026-07-11T06:23:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.958Z",
      "updatedAt": "2026-07-28T13:49:11.958Z",
      "lines": []
    },
    {
      "id": "cms4pmjir002z07k6a10g54vj",
      "soldAt": "2026-07-11T02:33:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.355Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4pmjir003107k63bzzq5vw",
          "saleId": "cms4pmjir002z07k6a10g54vj",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 3,
          "unitPrice": "300",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cms4pmjj7008l07k6c4zjl1p4",
      "soldAt": "2026-07-11T01:39:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.371Z",
      "updatedAt": "2026-07-28T13:47:02.371Z",
      "lines": [
        {
          "id": "cms4pmjj7008n07k65df3i0k0",
          "saleId": "cms4pmjj7008l07k6c4zjl1p4",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjiy005k07k607w49ubb",
      "soldAt": "2026-07-11T01:08:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "5000",
      "discount": "0",
      "total": "5000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.363Z",
      "updatedAt": "2026-07-28T13:47:02.363Z",
      "lines": [
        {
          "id": "cms4pmjiy005m07k67gntx01y",
          "saleId": "cms4pmjiy005k07k607w49ubb",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 1,
          "unitPrice": "5000",
          "lineTotal": "5000"
        }
      ]
    },
    {
      "id": "cms4pmjjs00fx07k69nd7dxtb",
      "soldAt": "2026-07-10T10:52:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.393Z",
      "updatedAt": "2026-07-28T13:47:02.393Z",
      "lines": [
        {
          "id": "cms4pmjjs00fz07k66paxvpt6",
          "saleId": "cms4pmjjs00fx07k69nd7dxtb",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjjm00dp07k6gglovgmi",
      "soldAt": "2026-07-10T09:55:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.386Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cms4pmjjm00dr07k6m6oi42ks",
          "saleId": "cms4pmjjm00dp07k6gglovgmi",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 3,
          "unitPrice": "300",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cms4ppbi3002907p6wyau2ask",
      "soldAt": "2026-07-10T07:54:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.931Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cms4ppbi3002b07p6akk33k2h",
          "saleId": "cms4ppbi3002907p6wyau2ask",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbi3002d07p6la9gu34v",
      "soldAt": "2026-07-10T07:54:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.932Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cms4ppbi3002f07p6vpqg6437",
          "saleId": "cms4ppbi3002d07p6la9gu34v",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4pmjjd00aw07k6trp2wyta",
      "soldAt": "2026-07-10T07:22:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.378Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjjd00ay07k6tv6wy6t5",
          "saleId": "cms4pmjjd00aw07k6trp2wyta",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjj8008z07k6dhweyey4",
      "soldAt": "2026-07-10T04:14:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.373Z",
      "updatedAt": "2026-07-28T13:47:02.373Z",
      "lines": [
        {
          "id": "cms4pmjj8009107k6gfrk8ujs",
          "saleId": "cms4pmjj8008z07k6dhweyey4",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjjt00g107k6llppxpyj",
      "soldAt": "2026-07-10T03:46:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.393Z",
      "updatedAt": "2026-07-28T13:47:02.393Z",
      "lines": []
    },
    {
      "id": "cms4pmjjg00bo07k6vwvp0xba",
      "soldAt": "2026-07-10T02:57:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.380Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4pmjjg00bq07k67okst5ya",
          "saleId": "cms4pmjjg00bo07k6vwvp0xba",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cms4pmjim001j07k6wrvehm9j",
      "soldAt": "2026-07-09T08:25:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.351Z",
      "updatedAt": "2026-07-28T13:47:02.351Z",
      "lines": [
        {
          "id": "cms4pmjim001l07k603gdq22t",
          "saleId": "cms4pmjim001j07k6wrvehm9j",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjp00en07k6rhr6y5fq",
      "soldAt": "2026-07-09T07:24:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "9000",
      "discount": "0",
      "total": "9000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.389Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4pmjjp00ep07k6td7pksys",
          "saleId": "cms4pmjjp00en07k6rhr6y5fq",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 3,
          "unitPrice": "3000",
          "lineTotal": "9000"
        }
      ]
    },
    {
      "id": "cms4ppbht000907p632f7lvn3",
      "soldAt": "2026-07-09T06:17:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.921Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4ppbht000b07p6jyo107ol",
          "saleId": "cms4ppbht000907p632f7lvn3",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4ppbht000d07p60geapsh3",
      "soldAt": "2026-07-09T06:17:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.922Z",
      "updatedAt": "2026-08-09T15:28:23.752Z",
      "lines": [
        {
          "id": "cms4ppbht000f07p6reqysu4f",
          "saleId": "cms4ppbht000d07p60geapsh3",
          "itemId": "cms4ot362000g07ji23e0fvxm",
          "quantity": 2,
          "unitPrice": "3000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4ppbiu007l07p6c3t1pkvj",
      "soldAt": "2026-07-09T05:52:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "24000",
      "discount": "0",
      "total": "24000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.958Z",
      "updatedAt": "2026-07-28T13:49:11.958Z",
      "lines": [
        {
          "id": "cms4ppbiu007n07p6yj1dp1rl",
          "saleId": "cms4ppbiu007l07p6c3t1pkvj",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 3,
          "unitPrice": "8000",
          "lineTotal": "24000"
        }
      ]
    },
    {
      "id": "cms4ppbiu007p07p6wdwc10eb",
      "soldAt": "2026-07-09T05:52:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "200",
      "discount": "0",
      "total": "200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.959Z",
      "updatedAt": "2026-07-28T13:49:11.959Z",
      "lines": [
        {
          "id": "cms4ppbiu007r07p6120iug6i",
          "saleId": "cms4ppbiu007p07p6wdwc10eb",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 1,
          "unitPrice": "200",
          "lineTotal": "200"
        }
      ]
    },
    {
      "id": "cms4pmjjn00ea07k6uw7cnkp4",
      "soldAt": "2026-07-09T05:32:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.388Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjjo00ec07k63dm0jmb2",
          "saleId": "cms4pmjjn00ea07k6uw7cnkp4",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjkd00ms07k68shm0ax4",
      "soldAt": "2026-07-09T04:20:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.414Z",
      "updatedAt": "2026-07-28T13:47:02.414Z",
      "lines": [
        {
          "id": "cms4pmjkd00mu07k6okzq3v9e",
          "saleId": "cms4pmjkd00ms07k68shm0ax4",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4pmjj1006j07k6qc15i7l9",
      "soldAt": "2026-07-08T10:02:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.365Z",
      "updatedAt": "2026-07-28T13:47:02.365Z",
      "lines": [
        {
          "id": "cms4pmjj1006l07k6p3ijqurq",
          "saleId": "cms4pmjj1006j07k6qc15i7l9",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjix005307k6aw7prtkm",
      "soldAt": "2026-07-08T06:46:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.361Z",
      "updatedAt": "2026-07-28T13:47:02.361Z",
      "lines": [
        {
          "id": "cms4pmjix005507k6c15ow5y1",
          "saleId": "cms4pmjix005307k6aw7prtkm",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4pmjji00cg07k64kj2u56z",
      "soldAt": "2026-07-08T04:16:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.383Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjji00ci07k6vm20hax7",
          "saleId": "cms4pmjji00cg07k64kj2u56z",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjil001307k6ho5h6m0t",
      "soldAt": "2026-07-07T08:05:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.349Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjil001507k60z3rc56f",
          "saleId": "cms4pmjil001307k6ho5h6m0t",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4pmjil001707k6fqyvbfqe",
      "soldAt": "2026-07-07T08:04:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.350Z",
      "updatedAt": "2026-07-28T13:47:02.350Z",
      "lines": [
        {
          "id": "cms4pmjil001907k6r99bg1u1",
          "saleId": "cms4pmjil001707k6fqyvbfqe",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjj6008d07k67dm4hvjb",
      "soldAt": "2026-07-07T07:29:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.371Z",
      "updatedAt": "2026-07-28T13:47:02.371Z",
      "lines": [
        {
          "id": "cms4pmjj6008f07k6o2g0isbs",
          "saleId": "cms4pmjj6008d07k67dm4hvjb",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjr00fk07k6sgzjvup6",
      "soldAt": "2026-07-07T03:33:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.392Z",
      "updatedAt": "2026-07-28T13:47:02.392Z",
      "lines": [
        {
          "id": "cms4pmjjr00fm07k69slugmk3",
          "saleId": "cms4pmjjr00fk07k6sgzjvup6",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjk200je07k6kl14q4sx",
      "soldAt": "2026-07-07T01:10:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.403Z",
      "updatedAt": "2026-07-28T13:47:02.403Z",
      "lines": [
        {
          "id": "cms4pmjk200jg07k6u4xcxbca",
          "saleId": "cms4pmjk200je07k6kl14q4sx",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjjz00i507k6y448u3iw",
      "soldAt": "2026-07-06T10:39:00.000Z",
      "customerName": "線上客戶",
      "salesPersonId": "cms4p2pc80003075loz9i3h6c",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.399Z",
      "updatedAt": "2026-07-28T13:47:02.399Z",
      "lines": [
        {
          "id": "cms4pmjjz00i707k6ebnktgx5",
          "saleId": "cms4pmjjz00i507k6y448u3iw",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjiu004207k6a5nrzzae",
      "soldAt": "2026-07-06T09:33:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "4000",
      "discount": "0",
      "total": "4000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.358Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjiu004407k6eoos8faa",
          "saleId": "cms4pmjiu004207k6a5nrzzae",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 2,
          "unitPrice": "2000",
          "lineTotal": "4000"
        }
      ]
    },
    {
      "id": "cms4pmjjy00hx07k6bc6pr7dj",
      "soldAt": "2026-07-06T08:40:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.399Z",
      "updatedAt": "2026-07-28T13:47:02.399Z",
      "lines": [
        {
          "id": "cms4pmjjy00hz07k6ad7qdds8",
          "saleId": "cms4pmjjy00hx07k6bc6pr7dj",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbie004h07p6fpny4jb6",
      "soldAt": "2026-07-06T05:35:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.942Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4ppbie004j07p6mh6juzg4",
          "saleId": "cms4ppbie004h07p6fpny4jb6",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4ppbie004l07p6vzzyyatn",
      "soldAt": "2026-07-06T05:35:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.942Z",
      "updatedAt": "2026-07-28T13:49:11.942Z",
      "lines": [
        {
          "id": "cms4ppbie004n07p69xzeuf65",
          "saleId": "cms4ppbie004l07p6vzzyyatn",
          "itemId": "cms4ot36z000i07jia4zk730z",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjja009g07k6l97lhmsh",
      "soldAt": "2026-07-06T03:23:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.374Z",
      "updatedAt": "2026-07-28T13:47:02.374Z",
      "lines": [
        {
          "id": "cms4pmjja009i07k6d9hzkprj",
          "saleId": "cms4pmjja009g07k6l97lhmsh",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjiq002v07k6ma5u74g0",
      "soldAt": "2026-07-06T02:56:00.000Z",
      "customerName": "李先生",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "6000",
      "discount": "0",
      "total": "6000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.355Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjiq002x07k6cwu4xr9r",
          "saleId": "cms4pmjiq002v07k6ma5u74g0",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 3,
          "unitPrice": "2000",
          "lineTotal": "6000"
        }
      ]
    },
    {
      "id": "cms4ppbhu000h07p65rqe3q5q",
      "soldAt": "2026-07-06T02:16:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.923Z",
      "updatedAt": "2026-07-28T13:49:11.923Z",
      "lines": [
        {
          "id": "cms4ppbhu000j07p62d1g5n4q",
          "saleId": "cms4ppbhu000h07p65rqe3q5q",
          "itemId": "cms4op5rt000307ji11exqlds",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbhv000l07p6xx3j9z2v",
      "soldAt": "2026-07-06T02:16:00.000Z",
      "customerName": "陳先生",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.924Z",
      "updatedAt": "2026-07-28T13:49:11.924Z",
      "lines": [
        {
          "id": "cms4ppbhv000n07p6aij6m6qs",
          "saleId": "cms4ppbhv000l07p6xx3j9z2v",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 3,
          "unitPrice": "200",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjii000d07k6cel742ww",
      "soldAt": "2026-07-06T02:06:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.346Z",
      "updatedAt": "2026-07-28T13:47:02.346Z",
      "lines": [
        {
          "id": "cms4pmjii000f07k645xxa096",
          "saleId": "cms4pmjii000d07k6cel742ww",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjj4007h07k6o2suqjld",
      "soldAt": "2026-07-05T09:44:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.368Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjj4007j07k6melabml4",
          "saleId": "cms4pmjj4007h07k6o2suqjld",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjjs00fo07k6l7io14qn",
      "soldAt": "2026-07-05T09:16:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.392Z",
      "updatedAt": "2026-07-28T13:47:02.392Z",
      "lines": []
    },
    {
      "id": "cms4pmjje00b807k641ta9bp9",
      "soldAt": "2026-07-05T07:21:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "15000",
      "discount": "0",
      "total": "15000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.379Z",
      "updatedAt": "2026-07-28T13:47:02.379Z",
      "lines": [
        {
          "id": "cms4pmjje00ba07k6ew2tql2a",
          "saleId": "cms4pmjje00b807k641ta9bp9",
          "itemId": "cms4ot34j000d07jiw62tylzg",
          "quantity": 3,
          "unitPrice": "5000",
          "lineTotal": "15000"
        }
      ]
    },
    {
      "id": "cms4pmjj9009307k6lac3vieq",
      "soldAt": "2026-07-05T05:01:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.373Z",
      "updatedAt": "2026-07-28T13:47:02.373Z",
      "lines": [
        {
          "id": "cms4pmjj9009507k61cmm36qv",
          "saleId": "cms4pmjj9009307k6lac3vieq",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjjz00i107k69tfm0djv",
      "soldAt": "2026-07-04T08:35:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "900",
      "discount": "0",
      "total": "900",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.399Z",
      "updatedAt": "2026-08-09T15:24:49.302Z",
      "lines": [
        {
          "id": "cms4pmjjz00i307k611p9zb0g",
          "saleId": "cms4pmjjz00i107k69tfm0djv",
          "itemId": "cms4op5vh000a07jied8unjtp",
          "quantity": 3,
          "unitPrice": "300",
          "lineTotal": "900"
        }
      ]
    },
    {
      "id": "cms4pmjjb009y07k6d86x69n8",
      "soldAt": "2026-07-04T06:42:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.376Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4pmjjb00a007k61zi390ag",
          "saleId": "cms4pmjjb009y07k6d86x69n8",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbij005l07p6lccbju19",
      "soldAt": "2026-07-04T05:28:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "8000",
      "discount": "0",
      "total": "8000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.948Z",
      "updatedAt": "2026-07-28T13:49:11.948Z",
      "lines": [
        {
          "id": "cms4ppbij005n07p63rf722f9",
          "saleId": "cms4ppbij005l07p6lccbju19",
          "itemId": "cms4op5sn000407jit4dhmit3",
          "quantity": 1,
          "unitPrice": "8000",
          "lineTotal": "8000"
        }
      ]
    },
    {
      "id": "cms4ppbik005p07p63vup20y4",
      "soldAt": "2026-07-04T05:28:00.000Z",
      "customerName": "黃先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.948Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4ppbik005r07p67qc76xfp",
          "saleId": "cms4ppbik005p07p63vup20y4",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "2000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjjg00bw07k6kfchana1",
      "soldAt": "2026-07-04T04:30:00.000Z",
      "customerName": "林小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.381Z",
      "updatedAt": "2026-07-28T13:47:02.381Z",
      "lines": [
        {
          "id": "cms4pmjjg00by07k68le0yrix",
          "saleId": "cms4pmjjg00bw07k6kfchana1",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjj4007p07k6xpuet1pz",
      "soldAt": "2026-07-04T04:18:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms3cgvb5000107s6d69ls6hg",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "300",
      "discount": "0",
      "total": "300",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.369Z",
      "updatedAt": "2026-08-09T15:28:23.725Z",
      "lines": [
        {
          "id": "cms4pmjj4007r07k6iwcjksqo",
          "saleId": "cms4pmjj4007p07k6xpuet1pz",
          "itemId": "cms4op5vw000b07jilxcnd0xa",
          "quantity": 1,
          "unitPrice": "300",
          "lineTotal": "300"
        }
      ]
    },
    {
      "id": "cms4pmjj3007907k668d6z4i7",
      "soldAt": "2026-07-04T02:02:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1000",
      "discount": "0",
      "total": "1000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.368Z",
      "updatedAt": "2026-07-28T13:47:02.368Z",
      "lines": [
        {
          "id": "cms4pmjj3007b07k678mcga3n",
          "saleId": "cms4pmjj3007907k668d6z4i7",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 1,
          "unitPrice": "1000",
          "lineTotal": "1000"
        }
      ]
    },
    {
      "id": "cms4pmjk900ld07k6u5sfx9cc",
      "soldAt": "2026-07-03T09:36:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p24hr0001075l8bmt8g8g",
      "paymentMethod": "TRANSFER",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.409Z",
      "updatedAt": "2026-07-28T13:47:02.409Z",
      "lines": [
        {
          "id": "cms4pmjk900lf07k6tf7lw21q",
          "saleId": "cms4pmjk900ld07k6u5sfx9cc",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4ppbin006907p6ogd4iee7",
      "soldAt": "2026-07-03T05:07:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.951Z",
      "updatedAt": "2026-07-28T13:49:11.951Z",
      "lines": [
        {
          "id": "cms4ppbin006b07p6vb596yok",
          "saleId": "cms4ppbin006907p6ogd4iee7",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4ppbin006d07p6p7f4y4wj",
      "soldAt": "2026-07-03T05:07:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.952Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cms4ppbin006f07p6ndir2ja6",
          "saleId": "cms4ppbin006d07p6p7f4y4wj",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjk100j107k6pa963ofv",
      "soldAt": "2026-07-03T02:18:00.000Z",
      "customerName": "吳小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.402Z",
      "updatedAt": "2026-07-28T13:47:02.402Z",
      "lines": [
        {
          "id": "cms4pmjk100j307k6hr30bcz2",
          "saleId": "cms4pmjk100j107k6pa963ofv",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjj2006r07k695y5w3w9",
      "soldAt": "2026-07-02T08:58:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "4000",
      "discount": "0",
      "total": "4000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.366Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjj2006t07k6gjzej01a",
          "saleId": "cms4pmjj2006r07k695y5w3w9",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 2,
          "unitPrice": "2000",
          "lineTotal": "4000"
        }
      ]
    },
    {
      "id": "cms4pmjir003807k6h5w6m8e8",
      "soldAt": "2026-07-02T08:19:00.000Z",
      "customerName": "鄭先生",
      "salesPersonId": "cms4p2dqu0002075lm664zdok",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "1200",
      "discount": "0",
      "total": "1200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.356Z",
      "updatedAt": "2026-07-28T13:47:02.356Z",
      "lines": [
        {
          "id": "cms4pmjir003a07k6exucywfi",
          "saleId": "cms4pmjir003807k6h5w6m8e8",
          "itemId": "cms4ot342000c07jima8hiveu",
          "quantity": 2,
          "unitPrice": "600",
          "lineTotal": "1200"
        }
      ]
    },
    {
      "id": "cms4pmjk100it07k6ok8rm6k8",
      "soldAt": "2026-07-02T05:05:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "200",
      "discount": "0",
      "total": "200",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.401Z",
      "updatedAt": "2026-07-28T13:47:02.401Z",
      "lines": [
        {
          "id": "cms4pmjk100iv07k62p9x51ze",
          "saleId": "cms4pmjk100it07k6ok8rm6k8",
          "itemId": "cms4ot37f000j07jiztwtdvs9",
          "quantity": 1,
          "unitPrice": "200",
          "lineTotal": "200"
        }
      ]
    },
    {
      "id": "cms4pmjjz00id07k6v7bnlqbj",
      "soldAt": "2026-07-02T03:04:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms3cgvb5000107s6d69ls6hg",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "1800",
      "discount": "0",
      "total": "1800",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.400Z",
      "updatedAt": "2026-07-28T13:47:02.400Z",
      "lines": [
        {
          "id": "cms4pmjjz00if07k6jw3uuhi3",
          "saleId": "cms4pmjjz00id07k6v7bnlqbj",
          "itemId": "cms4op5u3000707jixm0mui74",
          "quantity": 3,
          "unitPrice": "600",
          "lineTotal": "1800"
        }
      ]
    },
    {
      "id": "cms4pmjjf00bk07k6xbe8vok4",
      "soldAt": "2026-07-02T02:12:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "seed-employee-amy",
      "servicePersonId": "cms4p2dqu0002075lm664zdok",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.380Z",
      "updatedAt": "2026-08-09T15:28:23.717Z",
      "lines": [
        {
          "id": "cms4pmjjf00bm07k60wgs2703",
          "saleId": "cms4pmjjf00bk07k6xbe8vok4",
          "itemId": "cms4op5v1000907jivhgpwo65",
          "quantity": 2,
          "unitPrice": "300",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjz00i907k6hnekhojp",
      "soldAt": "2026-07-01T10:28:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "OTHER",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.400Z",
      "updatedAt": "2026-08-09T15:28:23.741Z",
      "lines": [
        {
          "id": "cms4pmjjz00ib07k6f9emo7xn",
          "saleId": "cms4pmjjz00i907k6hnekhojp",
          "itemId": "cms4ot35k000f07jidxcd15is",
          "quantity": 1,
          "unitPrice": "3000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4pmjjx00hg07k6xkijwp69",
      "soldAt": "2026-07-01T07:36:00.000Z",
      "customerName": "劉先生",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "CASH",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.397Z",
      "updatedAt": "2026-07-28T13:47:02.397Z",
      "lines": [
        {
          "id": "cms4pmjjx00hi07k61kvvig8m",
          "saleId": "cms4pmjjx00hg07k6xkijwp69",
          "itemId": "cms4op5r3000207jiyezujusf",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjk200ji07k629ebss0t",
      "soldAt": "2026-07-01T04:26:00.000Z",
      "customerName": "現場客",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "cms4p1vby0000075lnb5znb5x",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.403Z",
      "updatedAt": "2026-08-09T15:24:49.309Z",
      "lines": [
        {
          "id": "cms4pmjk200jk07k6mg55fur7",
          "saleId": "cms4pmjk200ji07k629ebss0t",
          "itemId": "cms4op5uj000807jibz99per6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4pmjjo00ee07k62rp0t646",
      "soldAt": "2026-07-01T03:28:00.000Z",
      "customerName": "張小姐",
      "salesPersonId": "cms3cfz3o000007s6f60h8zjr",
      "servicePersonId": "cms4p2pc80003075loz9i3h6c",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "3000",
      "discount": "0",
      "total": "3000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.388Z",
      "updatedAt": "2026-07-28T13:47:02.388Z",
      "lines": [
        {
          "id": "cms4pmjjo00eg07k6waiw0sj0",
          "saleId": "cms4pmjjo00ee07k62rp0t646",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 3,
          "unitPrice": "1000",
          "lineTotal": "3000"
        }
      ]
    },
    {
      "id": "cms4ppbim006107p67gvi37qp",
      "soldAt": "2026-07-01T03:25:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "600",
      "discount": "0",
      "total": "600",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.950Z",
      "updatedAt": "2026-07-28T13:49:11.950Z",
      "lines": [
        {
          "id": "cms4ppbim006307p6q223rwax",
          "saleId": "cms4ppbim006107p67gvi37qp",
          "itemId": "cms4ot36g000h07jialtb19u6",
          "quantity": 1,
          "unitPrice": "600",
          "lineTotal": "600"
        }
      ]
    },
    {
      "id": "cms4ppbim006507p6on3szrqo",
      "soldAt": "2026-07-01T03:25:00.000Z",
      "customerName": "王小姐",
      "salesPersonId": "cms4p24hr0001075l8bmt8g8g",
      "servicePersonId": "seed-employee-amy",
      "paymentMethod": "LINE_PAY",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:49:11.951Z",
      "updatedAt": "2026-07-28T13:49:11.951Z",
      "lines": [
        {
          "id": "cms4ppbim006707p66lqflyrv",
          "saleId": "cms4ppbim006507p6on3szrqo",
          "itemId": "cms4op5t5000507jiqjsrdlkq",
          "quantity": 2,
          "unitPrice": "1000",
          "lineTotal": "2000"
        }
      ]
    },
    {
      "id": "cms4pmjjq00f307k6gzscwq0d",
      "soldAt": "2026-07-01T02:46:00.000Z",
      "customerName": "許小姐",
      "salesPersonId": "cms4p1vby0000075lnb5znb5x",
      "servicePersonId": "cms3cfz3o000007s6f60h8zjr",
      "paymentMethod": "CARD",
      "status": "CLOSED",
      "subtotal": "2000",
      "discount": "0",
      "total": "2000",
      "notes": "2026/07 測試批次營收資料",
      "createdAt": "2026-07-28T13:47:02.391Z",
      "updatedAt": "2026-08-09T15:28:23.733Z",
      "lines": [
        {
          "id": "cms4pmjjq00f507k6k6fasrue",
          "saleId": "cms4pmjjq00f307k6gzscwq0d",
          "itemId": "cms4ot354000e07jiy62f5aea",
          "quantity": 1,
          "unitPrice": "2000",
          "lineTotal": "2000"
        }
      ]
    }
  ]
};
