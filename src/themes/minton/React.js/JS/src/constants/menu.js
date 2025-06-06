const MENU_ITEMS = [{
  key: "navigation",
  label: "Navigation",
  isTitle: true
}, {
  key: "dashboards",
  label: "Dashboards",
  isTitle: false,
  icon: "ri-dashboard-line",
  badge: {
    variant: "success",
    text: "3"
  },
  children: [{
    key: "ds-sales",
    label: "Sales",
    url: "/dashboard/sales",
    parentKey: "dashboards"
  }, {
    key: "ds-crm",
    label: "CRM",
    url: "/dashboard/crm",
    parentKey: "dashboards"
  }, {
    key: "ds-analytics",
    label: "Analytics",
    url: "/dashboard/analytics",
    parentKey: "dashboards"
  }]
}, {
  key: "layouts",
  label: "Layouts",
  isTitle: false,
  icon: "ri-layout-line",
  children: [{
    key: "dark",
    label: "Dark",
    url: "/layouts/dark",
    parentKey: "layouts"
  }, {
    key: "vertical",
    label: "Vertical",
    url: "/layouts/vertical",
    parentKey: "layouts"
  }, {
    key: "horizontal",
    label: "Horizontal",
    url: "/layouts/horizontal",
    parentKey: "layouts"
  }, {
    key: "detached",
    label: "Detached",
    url: "/layouts/detached",
    parentKey: "layouts"
  }, {
    key: "two-column",
    label: "Two Column",
    url: "/layouts/two-column",
    parentKey: "layouts"
  }]
}, {
  key: "apps",
  label: "Apps",
  isTitle: true
}, {
  key: "apps-chat",
  label: "Chat",
  isTitle: false,
  icon: "ri-message-2-line",
  url: "/apps/chat"
}, {
  key: "apps-ecommerce",
  label: "Ecommerce",
  isTitle: false,
  icon: "ri-shopping-cart-2-line",
  children: [{
    key: "ecommerce-products",
    label: "Products List",
    url: "/apps/ecommerce/products",
    parentKey: "apps-ecommerce"
  }, {
    key: "ecommerce-products-grid",
    label: "Products Grid",
    url: "/apps/ecommerce/products-grid",
    parentKey: "apps-ecommerce"
  }, {
    key: "ecommerce-detail",
    label: "Product Detail",
    url: "/apps/ecommerce/product-detail",
    parentKey: "apps-ecommerce"
  }, {
    key: "ecommerce-product-create",
    label: "Create Product",
    url: "/apps/ecommerce/product-create",
    parentKey: "apps-ecommerce"
  }, {
    key: "ecommerce-customers",
    label: "Customers",
    url: "/apps/ecommerce/customers",
    parentKey: "apps-ecommerce"
  }, {
    key: "ecommerce-orders",
    label: "Orders",
    url: "/apps/ecommerce/orders",
    parentKey: "apps-ecommerce"
  }, {
    key: "ecommerce-order-detail",
    label: "Order Detail",
    url: "/apps/ecommerce/order-detail",
    parentKey: "apps-ecommerce"
  }, {
    key: "ecommerce-sellers",
    label: "Sellers",
    url: "/apps/ecommerce/sellers",
    parentKey: "apps-ecommerce"
  }, {
    key: "ecommerce-shopping-cart",
    label: "Shopping Cart",
    url: "/apps/ecommerce/shopping-cart",
    parentKey: "apps-ecommerce"
  }, {
    key: "ecommerce-checkout",
    label: "Checkout",
    url: "/apps/ecommerce/checkout",
    parentKey: "apps-ecommerce"
  }]
}, {
  key: "apps-calendar",
  label: "Calendar",
  isTitle: false,
  icon: "ri-calendar-2-line",
  url: "/apps/calendar"
}, {
  key: "apps-email",
  label: "Email",
  isTitle: false,
  icon: "ri-mail-line",
  children: [{
    key: "email-inbox",
    label: "Inbox",
    url: "/apps/email/inbox",
    parentKey: "apps-email"
  }, {
    key: "email-read-email",
    label: "Read Email",
    url: "/apps/email/details",
    parentKey: "apps-email"
  }]
}, {
  key: "apps-companies",
  label: "Companies",
  isTitle: false,
  icon: "ri-building-4-line",
  url: "/apps/companies"
}, {
  key: "apps-tasks",
  label: "Tasks",
  isTitle: false,
  icon: "ri-task-line",
  children: [{
    key: "task-list",
    label: "List",
    url: "/apps/tasks/list",
    parentKey: "apps-tasks"
  }, {
    key: "task-details",
    label: "Details",
    url: "/apps/tasks/details",
    parentKey: "apps-tasks"
  }, {
    key: "task-kanban",
    label: "Kanban Board",
    url: "/apps/tasks/kanban",
    parentKey: "apps-tasks"
  }]
}, {
  key: "apps-tickets",
  label: "Tickets",
  isTitle: false,
  icon: "ri-customer-service-2-line",
  url: "/apps/tickets"
}, {
  key: "apps-contacts",
  label: "Contacts",
  isTitle: false,
  icon: "ri-profile-line",
  children: [{
    key: "contacts-list",
    label: "Members List",
    url: "/apps/contacts/list",
    parentKey: "apps-contacts"
  }, {
    key: "contacts-profile",
    label: "Profile",
    url: "/apps/contacts/profile",
    parentKey: "apps-contacts"
  }]
}, {
  key: "apps-file-manager",
  label: "File Manager",
  isTitle: false,
  icon: "ri-folders-line",
  url: "/apps/file-manager"
}, {
  key: "custom",
  label: "Custom",
  isTitle: true
}, {
  key: 'auth-pages',
  label: 'Auth Pages',
  isTitle: false,
  icon: 'ri-shield-user-line',
  children: [{
    key: 'auth-login',
    url: "/auth/login",
    label: "Login",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-register',
    url: "/auth/register",
    label: "Register",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-confirm',
    url: "/auth/confirm",
    label: "Confirm Password",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-forget-password',
    url: "/auth/forget-password",
    label: "Forget Password",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-signin-signup',
    url: "/auth/signin-signup",
    label: "SignIn-SignUp",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-lock-screen',
    url: "/auth/lock-screen",
    label: "Lock Screen",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-logout',
    url: "/auth/logout",
    label: "Logout",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-login2',
    url: "/auth2/login",
    label: "Login2",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-logout2',
    url: "/auth2/logout",
    label: "Logout2",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-register2',
    url: "/auth2/register",
    label: "Register2",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-confirm2',
    url: "/auth2/confirm",
    label: "Confirm Password 2",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-forget-password2',
    url: "/auth2/forget-password",
    label: "Forget Password2",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-signin-signup2',
    url: "/auth2/signin-signup",
    label: "SignIn-SignUp2",
    parentKey: 'auth-pages'
  }, {
    key: 'auth-lock-screen2',
    url: "/auth2/lock-screen",
    label: "Lock Screen2",
    parentKey: 'auth-pages'
  }]
}, {
  key: "extra-pages",
  label: "Extra Pages",
  isTitle: false,
  icon: "ri-pages-line",
  children: [{
    key: "page-starter",
    label: "Starter",
    url: "/pages/starter",
    parentKey: "extra-pages"
  }, {
    key: "page-timeline",
    label: "Timeline",
    url: "/pages/timeline",
    parentKey: "extra-pages"
  }, {
    key: "page-sitemap",
    label: "Sitemap",
    url: "/pages/sitemap",
    parentKey: "extra-pages"
  }, {
    key: "page-invoice",
    label: "Invoice",
    url: "/pages/invoice",
    parentKey: "extra-pages"
  }, {
    key: "page-faq",
    label: "FAQs",
    url: "/pages/faq",
    parentKey: "extra-pages"
  }, {
    key: "page-search-result",
    label: "Search Results",
    url: "/pages/search-results",
    parentKey: "extra-pages"
  }, {
    key: "page-pricing",
    label: "Pricing",
    url: "/pages/pricing",
    parentKey: "extra-pages"
  }, {
    key: "page-maintenance",
    label: "Maintenance",
    url: "/maintenance",
    parentKey: "extra-pages"
  }, {
    key: "page-coming-soon",
    label: "Coming Soon",
    url: "/coming-soon",
    parentKey: "extra-pages"
  }, {
    key: "page-gallery",
    label: "Gallery",
    url: "/pages/gallery",
    parentKey: "extra-pages"
  }, {
    key: "page-404",
    label: "Error - 404",
    url: "/404",
    parentKey: "extra-pages"
  }, {
    key: "page-404-alt",
    label: "Error - 404-alt",
    url: "/pages/404-alt",
    parentKey: "extra-pages"
  }, {
    key: "page-500",
    label: "Error - 500",
    url: "/error-500",
    parentKey: "extra-pages"
  }]
}, {
  key: "components",
  label: "Components",
  isTitle: true
}, {
  key: "base-ui",
  label: "Base UI",
  isTitle: false,
  icon: "ri-pencil-ruler-2-line",
  children: [{
    key: "base-ui-avatars",
    label: "Avatars",
    url: "/ui/avatars",
    parentKey: "base-ui"
  }, {
    key: "base-ui-buttons",
    label: "Buttons",
    url: "/ui/buttons",
    parentKey: "base-ui"
  }, {
    key: "base-ui-cards",
    label: "Cards",
    url: "/ui/cards",
    parentKey: "base-ui"
  }, {
    key: "base-ui-carousel",
    label: "Carousel",
    url: "/ui/carousel",
    parentKey: "base-ui"
  }, {
    key: "base-ui-dropdown",
    label: "Dropdowns",
    url: "/ui/dropdowns",
    parentKey: "base-ui"
  }, {
    key: "base-ui-embedvideo",
    label: "Embed Video",
    url: "/ui/embedvideo",
    parentKey: "base-ui"
  }, {
    key: "base-ui-general",
    label: "General UI",
    url: "/ui/general",
    parentKey: "base-ui"
  }, {
    key: "base-ui-grid",
    label: "Grid",
    url: "/ui/grid",
    parentKey: "base-ui"
  }, {
    key: "base-ui-images",
    label: "Images",
    url: "/ui/images",
    parentKey: "base-ui"
  }, {
    key: "base-ui-listgroup",
    label: "List Group",
    url: "/ui/listgroup",
    parentKey: "base-ui"
  }, {
    key: "base-ui-modals",
    label: "Modals",
    url: "/ui/modals",
    parentKey: "base-ui"
  }, {
    key: "base-ui-notifications",
    label: "Notifications",
    url: "/ui/notifications",
    parentKey: "base-ui"
  }, {
    key: "base-ui-offcanvas",
    label: "Offcanvas",
    url: "/ui/offcanvas",
    parentKey: "base-ui"
  }, {
    key: "base-ui-placeholders",
    label: "Placeholders",
    url: "/ui/placeholders",
    parentKey: "base-ui"
  }, {
    key: "base-ui-portlets",
    label: "Portlets",
    url: "/ui/portlets",
    parentKey: "base-ui"
  }, {
    key: "base-ui-progress",
    label: "Progress",
    url: "/ui/progress",
    parentKey: "base-ui"
  }, {
    key: "base-ui-ribbons",
    label: "Ribbons",
    url: "/ui/ribbons",
    parentKey: "base-ui"
  }, {
    key: "base-ui-spinners",
    label: "Spinners",
    url: "/ui/spinners",
    parentKey: "base-ui"
  }, {
    key: "base-ui-tabs-accordions",
    label: "Tabs & Accordions",
    url: "/ui/tabs-accordions",
    parentKey: "base-ui"
  }, {
    key: "base-ui-tooltips-popovers",
    label: "Tooltips & Popovers",
    url: "/ui/tooltips-popovers",
    parentKey: "base-ui"
  }, {
    key: "base-ui-typography",
    label: "Typography",
    url: "/ui/typography",
    parentKey: "base-ui"
  }]
}, {
  key: "extended-ui",
  label: "Extended UI",
  isTitle: false,
  icon: "ri-stack-line",
  badge: {
    variant: "info",
    text: "Hot"
  },
  children: [{
    key: "extended-ui-nestable",
    label: "Nestable List",
    url: "/extended-ui/nestable",
    parentKey: "extended-ui"
  }, {
    key: "extended-ui-sweet-alert",
    label: "Sweet Alert",
    url: "/extended-ui/sweet-alert",
    parentKey: "extended-ui"
  }]
}, {
  key: "widgets",
  label: "Widgets",
  isTitle: false,
  icon: "ri-honour-line",
  url: "/widgets"
}, {
  key: "icons",
  label: "Icons",
  isTitle: false,
  icon: "ri-markup-line",
  children: [{
    key: "icon-feather",
    label: "Feather",
    url: "/icons/feather",
    parentKey: "icons"
  }, {
    key: "icon-remiix",
    label: "Remix",
    url: "/icons/remix",
    parentKey: "icons"
  }, {
    key: "icon-boxicons",
    label: "Boxicons",
    url: "/icons/boxicons",
    parentKey: "icons"
  }, {
    key: "icon-mdiicons",
    label: "Material Design Icons",
    url: "/icons/mdi",
    parentKey: "icons"
  }, {
    key: "icon-font-awesome",
    label: "Font Awesome 5",
    url: "/icons/font-awesome",
    parentKey: "icons"
  }, {
    key: "icon-weather",
    label: "Weather",
    url: "/icons/weather",
    parentKey: "icons"
  }]
}, {
  key: "forms",
  label: "Forms",
  isTitle: false,
  icon: "ri-eraser-line",
  children: [{
    key: "form-basic",
    label: "General Elements",
    url: "/forms/basic",
    parentKey: "forms"
  }, {
    key: "form-advanced",
    label: "Form Advanced",
    url: "/forms/advanced",
    parentKey: "forms"
  }, {
    key: "form-validation",
    label: "Validation",
    url: "/forms/validation",
    parentKey: "forms"
  }, {
    key: "form-upload",
    label: "File Uploads",
    url: "/forms/upload",
    parentKey: "forms"
  }, {
    key: "form-editors",
    label: "Editors",
    url: "/forms/editors",
    parentKey: "forms"
  }]
}, {
  key: "tables",
  label: "Tables",
  isTitle: false,
  icon: "ri-table-line",
  children: [{
    key: "table-basic",
    label: "Basic Tables",
    url: "/tables/basic",
    parentKey: "tables"
  }, {
    key: "table-advanced",
    label: "Advanced Tables",
    url: "/tables/advanced",
    parentKey: "tables"
  }]
}, {
  key: "charts",
  label: "Charts",
  isTitle: false,
  icon: "ri-bar-chart-line",
  children: [{
    key: "chart-apex",
    label: "Apex Charts",
    url: "/charts/apex",
    parentKey: "charts"
  }, {
    key: "chart-chartjs",
    label: "Chartjs",
    url: "/charts/chartjs",
    parentKey: "charts"
  }]
}, {
  key: "maps",
  label: "Maps",
  isTitle: false,
  icon: "ri-map-pin-line",
  children: [{
    key: "maps-vectormaps",
    label: "Vector Maps",
    url: "/maps/vectormaps",
    parentKey: "maps"
  }]
}, {
  key: "menu-levels",
  label: "Menu Levels",
  isTitle: false,
  icon: "ri-share-line",
  children: [{
    key: "menu-levels-1-1",
    label: "Level 1.1",
    url: "/",
    parentKey: "menu-levels",
    children: [{
      key: "menu-levels-2-1",
      label: "Level 2.1",
      url: "/",
      parentKey: "menu-levels-1-1",
      children: [{
        key: "menu-levels-3-1",
        label: "Level 3.1",
        url: "/",
        parentKey: "menu-levels-2-1"
      }, {
        key: "menu-levels-3-2",
        label: "Level 3.2",
        url: "/",
        parentKey: "menu-levels-2-1"
      }]
    }, {
      key: "menu-levels-2-2",
      label: "Level 2.2",
      url: "/",
      parentKey: "menu-levels-1-1"
    }]
  }, {
    key: "menu-levels-1-2",
    label: "Level 1.2",
    url: "/",
    parentKey: "menu-levels"
  }]
}];
const HORIZONTAL_MENU_ITEMS = [{
  key: "dashboards",
  icon: "ri-dashboard-line",
  label: "Dashboard",
  isTitle: true,
  children: [{
    key: "ds-sales",
    label: "Sales",
    url: "/dashboard/sales",
    parentKey: "dashboards"
  }, {
    key: "ds-crm",
    label: "CRM",
    url: "/dashboard/crm",
    parentKey: "dashboards"
  }, {
    key: "ds-analytics",
    label: "Analytics",
    url: "/dashboard/analytics",
    parentKey: "dashboards"
  }]
}, {
  key: "apps",
  icon: "ri-apps-2-line",
  label: "Apps",
  isTitle: true,
  children: [{
    key: "apps-calendar",
    label: "Calendar",
    isTitle: false,
    icon: "ri-calendar-2-line",
    url: "/apps/calendar",
    parentKey: "apps"
  }, {
    key: "apps-chat",
    label: "Chat",
    isTitle: false,
    icon: "ri-message-2-line",
    url: "/apps/chat",
    parentKey: "apps"
  }, {
    key: "apps-ecommerce",
    label: "Ecommerce",
    isTitle: false,
    icon: "ri-shopping-cart-2-line",
    parentKey: "apps",
    children: [{
      key: "ecommerce-products",
      label: "Products List",
      url: "/apps/ecommerce/products",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-products-grid",
      label: "Products Grid",
      url: "/apps/ecommerce/products-grid",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-detail",
      label: "Product Detail",
      url: "/apps/ecommerce/product-detail",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-product-create",
      label: "Create Product",
      url: "/apps/ecommerce/product-create",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-customers",
      label: "Customers",
      url: "/apps/ecommerce/customers",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-orders",
      label: "Orders",
      url: "/apps/ecommerce/orders",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-order-detail",
      label: "Order Detail",
      url: "/apps/ecommerce/order-detail",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-sellers",
      label: "Sellers",
      url: "/apps/ecommerce/sellers",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-shopping-cart",
      label: "Shopping Cart",
      url: "/apps/ecommerce/shopping-cart",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-checkout",
      label: "Checkout",
      url: "/apps/ecommerce/checkout",
      parentKey: "apps-ecommerce"
    }]
  }, {
    key: "apps-email",
    label: "Email",
    isTitle: false,
    icon: "ri-mail-line",
    parentKey: "apps",
    children: [{
      key: "email-inbox",
      label: "Inbox",
      url: "/apps/email/inbox",
      parentKey: "apps-email"
    }, {
      key: "email-read-email",
      label: "Read Email",
      url: "/apps/email/details",
      parentKey: "apps-email"
    }]
  }, {
    key: "apps-companies",
    label: "Companies",
    isTitle: false,
    icon: "ri-building-4-line",
    url: "/apps/companies",
    parentKey: "apps"
  }, {
    key: "apps-tasks",
    label: "Tasks",
    isTitle: false,
    icon: "ri-task-line",
    parentKey: "apps",
    children: [{
      key: "task-list",
      label: "List",
      url: "/apps/tasks/list",
      parentKey: "apps-tasks"
    }, {
      key: "task-details",
      label: "Details",
      url: "/apps/tasks/details",
      parentKey: "apps-tasks"
    }, {
      key: "task-kanban",
      label: "Kanban Board",
      url: "/apps/tasks/kanban",
      parentKey: "apps-tasks"
    }]
  }, {
    key: "apps-contacts",
    label: "Contacts",
    isTitle: false,
    icon: "ri-profile-line",
    parentKey: "apps",
    children: [{
      key: "contacts-list",
      label: "Members List",
      url: "/apps/contacts/list",
      parentKey: "apps-contacts"
    }, {
      key: "contacts-profile",
      label: "Profile",
      url: "/apps/contacts/profile",
      parentKey: "apps-contacts"
    }]
  }, {
    key: "apps-file-manager",
    label: "File Manager",
    isTitle: false,
    icon: "ri-folders-line",
    url: "/apps/file-manager",
    parentKey: "apps"
  }, {
    key: "apps-tickets",
    label: "Tickets",
    isTitle: false,
    icon: "ri-customer-service-2-line",
    url: "/apps/tickets",
    parentKey: "apps"
  }]
}, {
  key: "base-ui",
  icon: "ri-pencil-ruler-2-line",
  label: "UI Elements",
  isTitle: true,
  children: [{
    key: "base-ui-avatars",
    label: "Avatars",
    url: "/ui/avatars",
    parentKey: "base-ui"
  }, {
    key: "base-ui-buttons",
    label: "Buttons",
    url: "/ui/buttons",
    parentKey: "base-ui"
  }, {
    key: "base-ui-cards",
    label: "Cards",
    url: "/ui/cards",
    parentKey: "base-ui"
  }, {
    key: "base-ui-carousel",
    label: "Carousel",
    url: "/ui/carousel",
    parentKey: "base-ui"
  }, {
    key: "base-ui-dropdown",
    label: "Dropdowns",
    url: "/ui/dropdowns",
    parentKey: "base-ui"
  }, {
    key: "base-ui-embedvideo",
    label: "Embed Video",
    url: "/ui/embedvideo",
    parentKey: "base-ui"
  }, {
    key: "base-ui-general",
    label: "General UI",
    url: "/ui/general",
    parentKey: "base-ui"
  }, {
    key: "base-ui-grid",
    label: "Grid",
    url: "/ui/grid",
    parentKey: "base-ui"
  }, {
    key: "base-ui-images",
    label: "Images",
    url: "/ui/images",
    parentKey: "base-ui"
  }, {
    key: "base-ui-listgroup",
    label: "List Group",
    url: "/ui/listgroup",
    parentKey: "base-ui"
  }, {
    key: "base-ui-modals",
    label: "Modals",
    url: "/ui/modals",
    parentKey: "base-ui"
  }, {
    key: "base-ui-notifications",
    label: "Notifications",
    url: "/ui/notifications",
    parentKey: "base-ui"
  }, {
    key: "base-ui-offcanvas",
    label: "Offcanvas",
    url: "/ui/offcanvas",
    parentKey: "base-ui"
  }, {
    key: "base-ui-placeholders",
    label: "Placeholders",
    url: "/ui/placeholders",
    parentKey: "base-ui"
  }, {
    key: "base-ui-portlets",
    label: "Portlets",
    url: "/ui/portlets",
    parentKey: "base-ui"
  }, {
    key: "base-ui-progress",
    label: "Progress",
    url: "/ui/progress",
    parentKey: "base-ui"
  }, {
    key: "base-ui-ribbons",
    label: "Ribbons",
    url: "/ui/ribbons",
    parentKey: "base-ui"
  }, {
    key: "base-ui-spinners",
    label: "Spinners",
    url: "/ui/spinners",
    parentKey: "base-ui"
  }, {
    key: "base-ui-tabs-accordions",
    label: "Tabs & Accordions",
    url: "/ui/tabs-accordions",
    parentKey: "base-ui"
  }, {
    key: "base-ui-tooltips-popovers",
    label: "Tooltips & Popovers",
    url: "/ui/tooltips-popovers",
    parentKey: "base-ui"
  }, {
    key: "base-ui-typography",
    label: "Typography",
    url: "/ui/typography",
    parentKey: "base-ui"
  }]
}, {
  key: "components",
  icon: "ri-stack-line",
  label: "Components",
  isTitle: true,
  children: [{
    key: "extended-ui",
    label: "Extended UI",
    isTitle: false,
    icon: "ri-stack-line",
    badge: {
      variant: "info",
      text: "Hot"
    },
    parentKey: "components",
    children: [{
      key: "extended-ui-nestable",
      label: "Nestable List",
      url: "/extended-ui/nestable",
      parentKey: "extended-ui"
    }, {
      key: "extended-ui-sweet-alert",
      label: "Sweet Alert",
      url: "/extended-ui/sweet-alert",
      parentKey: "extended-ui"
    }]
  }, {
    key: "widgets",
    label: "Widgets",
    isTitle: false,
    icon: "ri-honour-line",
    url: "/widgets",
    parentKey: "components"
  }, {
    key: "forms",
    label: "Forms",
    isTitle: false,
    icon: "ri-eraser-line",
    parentKey: "components",
    children: [{
      key: "form-basic",
      label: "General Elements",
      url: "/forms/basic",
      parentKey: "forms"
    }, {
      key: "form-advanced",
      label: "Form Advanced",
      url: "/forms/advanced",
      parentKey: "forms"
    }, {
      key: "form-validation",
      label: "Validation",
      url: "/forms/validation",
      parentKey: "forms"
    }, {
      key: "form-upload",
      label: "File Uploads",
      url: "/forms/upload",
      parentKey: "forms"
    }, {
      key: "form-editors",
      label: "Editors",
      url: "/forms/editors",
      parentKey: "forms"
    }]
  }, {
    key: "charts",
    label: "Charts",
    isTitle: false,
    icon: "ri-bar-chart-line",
    parentKey: "components",
    children: [{
      key: "chart-apex",
      label: "Apex Charts",
      url: "/charts/apex",
      parentKey: "charts"
    }, {
      key: "chart-chartjs",
      label: "Chartjs",
      url: "/charts/chartjs",
      parentKey: "charts"
    }]
  }, {
    key: "maps",
    label: "Maps",
    isTitle: false,
    icon: "ri-map-pin-line",
    parentKey: "components",
    children: [{
      key: "maps-vectormaps",
      label: "Vector Maps",
      url: "/maps/vectormaps",
      parentKey: "maps"
    }]
  }, {
    key: "menu-levels",
    label: "Menu Levels",
    isTitle: false,
    icon: "ri-share-line",
    parentKey: "components",
    children: [{
      key: "menu-levels-1-1",
      label: "Level 1.1",
      url: "/",
      parentKey: "menu-levels",
      children: [{
        key: "menu-levels-2-1",
        label: "Level 2.1",
        url: "/",
        parentKey: "menu-levels-1-1",
        children: [{
          key: "menu-levels-3-1",
          label: "Level 3.1",
          url: "/",
          parentKey: "menu-levels-2-1"
        }, {
          key: "menu-levels-3-2",
          label: "Level 3.2",
          url: "/",
          parentKey: "menu-levels-2-1"
        }]
      }, {
        key: "menu-levels-2-2",
        label: "Level 2.2",
        url: "/",
        parentKey: "menu-levels-1-1"
      }]
    }, {
      key: "menu-levels-1-2",
      label: "Level 1.2",
      url: "/",
      parentKey: "menu-levels"
    }]
  }]
}, {
  key: "pages",
  icon: "ri-pages-line",
  label: "Pages",
  isTitle: true,
  children: [{
    key: "error-pages",
    label: "Errors",
    isTitle: false,
    icon: "ri-bug-line",
    parentKey: "pages",
    children: [{
      key: "page-404",
      label: "Error - 404",
      url: "/404",
      parentKey: "error-pages"
    }, {
      key: "page-404-alt",
      label: "Error - 404-alt",
      url: "/pages/404-alt",
      parentKey: "error-pages"
    }, {
      key: "page-500",
      label: "Error - 500",
      url: "/error-500",
      parentKey: "error-pages"
    }]
  }, {
    key: "extra-pages",
    label: "Utility",
    isTitle: false,
    icon: "ri-pages-line",
    parentKey: "pages",
    children: [{
      key: "page-starter",
      label: "Starter",
      url: "/pages/starter",
      parentKey: "extra-pages"
    }, {
      key: "page-timeline",
      label: "Timeline",
      url: "/pages/timeline",
      parentKey: "extra-pages"
    }, {
      key: "page-sitemap",
      label: "Sitemap",
      url: "/pages/sitemap",
      parentKey: "extra-pages"
    }, {
      key: "page-invoice",
      label: "Invoice",
      url: "/pages/invoice",
      parentKey: "extra-pages"
    }, {
      key: "page-faq",
      label: "FAQs",
      url: "/pages/faq",
      parentKey: "extra-pages"
    }, {
      key: "page-search-result",
      label: "Search Results",
      url: "/pages/search-results",
      parentKey: "extra-pages"
    }, {
      key: "page-pricing",
      label: "Pricing",
      url: "/pages/pricing",
      parentKey: "extra-pages"
    }, {
      key: "page-maintenance",
      label: "Maintenance",
      url: "/maintenance",
      parentKey: "extra-pages"
    }, {
      key: "page-coming-soon",
      label: "Coming Soon",
      url: "/coming-soon",
      parentKey: "extra-pages"
    }, {
      key: "page-gallery",
      label: "Gallery",
      url: "/pages/gallery",
      parentKey: "extra-pages"
    }]
  }]
}, {
  key: "layouts",
  label: "Layouts",
  isTitle: false,
  icon: "ri-layout-line",
  children: [{
    key: "dark",
    label: "Dark",
    url: "/layouts/dark",
    parentKey: "layouts"
  }, {
    key: "vertical",
    label: "Vertical",
    url: "/layouts/vertical",
    parentKey: "layouts"
  }, {
    key: "horizontal",
    label: "Horizontal",
    url: "/layouts/horizontal",
    parentKey: "layouts"
  }, {
    key: "detached",
    label: "Detached",
    url: "/layouts/detached",
    parentKey: "layouts"
  }, {
    key: "two-column",
    label: "Two Column",
    url: "/layouts/two-column",
    parentKey: "layouts"
  }]
}];
const TWO_COl_MENU_ITEMS = [{
  key: "dashboards",
  icon: "ri-dashboard-line",
  label: "Dashboard",
  isTitle: true,
  children: [{
    key: "ds-sales",
    label: "Sales",
    url: "/dashboard/sales",
    parentKey: "dashboards"
  }, {
    key: "ds-crm",
    label: "CRM",
    url: "/dashboard/crm",
    parentKey: "dashboards"
  }, {
    key: "ds-analytics",
    label: "Analytics",
    url: "/dashboard/analytics",
    parentKey: "dashboards"
  }]
}, {
  key: "layouts",
  label: "Layouts",
  isTitle: false,
  icon: "ri-layout-line",
  children: [{
    key: "dark",
    label: "Dark",
    url: "/layouts/dark",
    parentKey: "layouts"
  }, {
    key: "vertical",
    label: "Vertical",
    url: "/layouts/vertical",
    parentKey: "layouts"
  }, {
    key: "horizontal",
    label: "Horizontal",
    url: "/layouts/horizontal",
    parentKey: "layouts"
  }, {
    key: "detached",
    label: "Detached",
    url: "/layouts/detached",
    parentKey: "layouts"
  }, {
    key: "two-column",
    label: "Two Column",
    url: "/layouts/two-column",
    parentKey: "layouts"
  }]
}, {
  key: "apps",
  icon: "ri-apps-2-line",
  label: "Apps",
  isTitle: true,
  children: [{
    key: "apps-calendar",
    label: "Calendar",
    isTitle: false,
    icon: "ri-calendar-2-line",
    url: "/apps/calendar",
    parentKey: "apps"
  }, {
    key: "apps-chat",
    label: "Chat",
    isTitle: false,
    icon: "ri-message-2-line",
    url: "/apps/chat",
    parentKey: "apps"
  }, {
    key: "apps-ecommerce",
    label: "Ecommerce",
    isTitle: false,
    icon: "ri-shopping-cart-2-line",
    parentKey: "apps",
    children: [{
      key: "ecommerce-products",
      label: "Products List",
      url: "/apps/ecommerce/products",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-products-grid",
      label: "Products Grid",
      url: "/apps/ecommerce/products-grid",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-detail",
      label: "Product Detail",
      url: "/apps/ecommerce/product-detail",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-product-create",
      label: "Create Product",
      url: "/apps/ecommerce/product-create",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-customers",
      label: "Customers",
      url: "/apps/ecommerce/customers",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-orders",
      label: "Orders",
      url: "/apps/ecommerce/orders",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-order-detail",
      label: "Order Detail",
      url: "/apps/ecommerce/order-detail",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-sellers",
      label: "Sellers",
      url: "/apps/ecommerce/sellers",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-shopping-cart",
      label: "Shopping Cart",
      url: "/apps/ecommerce/shopping-cart",
      parentKey: "apps-ecommerce"
    }, {
      key: "ecommerce-checkout",
      label: "Checkout",
      url: "/apps/ecommerce/checkout",
      parentKey: "apps-ecommerce"
    }]
  }, {
    key: "apps-email",
    label: "Email",
    isTitle: false,
    icon: "ri-mail-line",
    parentKey: "apps",
    children: [{
      key: "email-inbox",
      label: "Inbox",
      url: "/apps/email/inbox",
      parentKey: "apps-email"
    }, {
      key: "email-read-email",
      label: "Read Email",
      url: "/apps/email/details",
      parentKey: "apps-email"
    }]
  }, {
    key: "apps-companies",
    label: "Companies",
    isTitle: false,
    icon: "ri-building-4-line",
    url: "/apps/companies",
    parentKey: "apps"
  }, {
    key: "apps-tasks",
    label: "Tasks",
    isTitle: false,
    icon: "ri-task-line",
    parentKey: "apps",
    children: [{
      key: "task-list",
      label: "List",
      url: "/apps/tasks/list",
      parentKey: "apps-tasks"
    }, {
      key: "task-details",
      label: "Details",
      url: "/apps/tasks/details",
      parentKey: "apps-tasks"
    }, {
      key: "task-kanban",
      label: "Kanban Board",
      url: "/apps/tasks/kanban",
      parentKey: "apps-tasks"
    }]
  }, {
    key: "apps-contacts",
    label: "Contacts",
    isTitle: false,
    icon: "ri-profile-line",
    parentKey: "apps",
    children: [{
      key: "contacts-list",
      label: "Members List",
      url: "/apps/contacts/list",
      parentKey: "apps-contacts"
    }, {
      key: "contacts-profile",
      label: "Profile",
      url: "/apps/contacts/profile",
      parentKey: "apps-contacts"
    }]
  }, {
    key: "apps-file-manager",
    label: "File Manager",
    isTitle: false,
    icon: "ri-folders-line",
    url: "/apps/file-manager",
    parentKey: "apps"
  }, {
    key: "apps-tickets",
    label: "Tickets",
    isTitle: false,
    icon: "ri-customer-service-2-line",
    url: "/apps/tickets",
    parentKey: "apps"
  }]
}, {
  key: "extra-pages",
  icon: "ri-pages-line",
  label: "Pages",
  isTitle: true,
  children: [{
    key: "page-starter",
    label: "Starter",
    url: "/pages/starter",
    parentKey: "extra-pages"
  }, {
    key: "page-timeline",
    label: "Timeline",
    url: "/pages/timeline",
    parentKey: "extra-pages"
  }, {
    key: "page-sitemap",
    label: "Sitemap",
    url: "/pages/sitemap",
    parentKey: "extra-pages"
  }, {
    key: "page-invoice",
    label: "Invoice",
    url: "/pages/invoice",
    parentKey: "extra-pages"
  }, {
    key: "page-faq",
    label: "FAQs",
    url: "/pages/faq",
    parentKey: "extra-pages"
  }, {
    key: "page-search-result",
    label: "Search Results",
    url: "/pages/search-results",
    parentKey: "extra-pages"
  }, {
    key: "page-pricing",
    label: "Pricing",
    url: "/pages/pricing",
    parentKey: "extra-pages"
  }, {
    key: "page-maintenance",
    label: "Maintenance",
    url: "/maintenance",
    parentKey: "extra-pages"
  }, {
    key: "page-coming-soon",
    label: "Coming Soon",
    url: "/coming-soon",
    parentKey: "extra-pages"
  }, {
    key: "page-gallery",
    label: "Gallery",
    url: "/pages/gallery",
    parentKey: "extra-pages"
  }, {
    key: "error-pages",
    label: "Errors",
    isTitle: false,
    icon: "ri-bug-line",
    parentKey: "extra-pages",
    children: [{
      key: "page-404",
      label: "Error - 404",
      url: "/404",
      parentKey: "error-pages"
    }, {
      key: "page-404-alt",
      label: "Error - 404-alt",
      url: "/404-alt",
      parentKey: "error-pages"
    }, {
      key: "page-500",
      label: "Error - 500",
      url: "/error-500",
      parentKey: "error-pages"
    }]
  }]
}, {
  key: "base-ui",
  icon: "ri-pencil-ruler-2-line",
  label: "UI Elements",
  isTitle: true,
  children: [{
    key: "base-ui-avatars",
    label: "Avatars",
    url: "/ui/avatars",
    parentKey: "base-ui"
  }, {
    key: "base-ui-buttons",
    label: "Buttons",
    url: "/ui/buttons",
    parentKey: "base-ui"
  }, {
    key: "base-ui-cards",
    label: "Cards",
    url: "/ui/cards",
    parentKey: "base-ui"
  }, {
    key: "base-ui-carousel",
    label: "Carousel",
    url: "/ui/carousel",
    parentKey: "base-ui"
  }, {
    key: "base-ui-dropdown",
    label: "Dropdowns",
    url: "/ui/dropdowns",
    parentKey: "base-ui"
  }, {
    key: "base-ui-embedvideo",
    label: "Embed Video",
    url: "/ui/embedvideo",
    parentKey: "base-ui"
  }, {
    key: "base-ui-general",
    label: "General UI",
    url: "/ui/general",
    parentKey: "base-ui"
  }, {
    key: "base-ui-grid",
    label: "Grid",
    url: "/ui/grid",
    parentKey: "base-ui"
  }, {
    key: "base-ui-images",
    label: "Images",
    url: "/ui/images",
    parentKey: "base-ui"
  }, {
    key: "base-ui-listgroup",
    label: "List Group",
    url: "/ui/listgroup",
    parentKey: "base-ui"
  }, {
    key: "base-ui-modals",
    label: "Modals",
    url: "/ui/modals",
    parentKey: "base-ui"
  }, {
    key: "base-ui-notifications",
    label: "Notifications",
    url: "/ui/notifications",
    parentKey: "base-ui"
  }, {
    key: "base-ui-offcanvas",
    label: "Offcanvas",
    url: "/ui/offcanvas",
    parentKey: "base-ui"
  }, {
    key: "base-ui-placeholders",
    label: "Placeholders",
    url: "/ui/placeholders",
    parentKey: "base-ui"
  }, {
    key: "base-ui-portlets",
    label: "Portlets",
    url: "/ui/portlets",
    parentKey: "base-ui"
  }, {
    key: "base-ui-progress",
    label: "Progress",
    url: "/ui/progress",
    parentKey: "base-ui"
  }, {
    key: "base-ui-ribbons",
    label: "Ribbons",
    url: "/ui/ribbons",
    parentKey: "base-ui"
  }, {
    key: "base-ui-spinners",
    label: "Spinners",
    url: "/ui/spinners",
    parentKey: "base-ui"
  }, {
    key: "base-ui-tabs-accordions",
    label: "Tabs & Accordions",
    url: "/ui/tabs-accordions",
    parentKey: "base-ui"
  }, {
    key: "base-ui-tooltips-popovers",
    label: "Tooltips & Popovers",
    url: "/ui/tooltips-popovers",
    parentKey: "base-ui"
  }, {
    key: "base-ui-typography",
    label: "Typography",
    url: "/ui/typography",
    parentKey: "base-ui"
  }]
}, {
  key: "components",
  icon: "ri-stack-line",
  label: "Components",
  isTitle: true,
  children: [{
    key: "extended-ui",
    label: "Extended UI",
    isTitle: false,
    icon: "layers",
    badge: {
      variant: "info",
      text: "Hot"
    },
    parentKey: "components",
    children: [{
      key: "extended-ui-nestable",
      label: "Nestable List",
      url: "/extended-ui/nestable",
      parentKey: "extended-ui"
    }, {
      key: "extended-ui-sweet-alert",
      label: "Sweet Alert",
      url: "/extended-ui/sweet-alert",
      parentKey: "extended-ui"
    }]
  }, {
    key: "icons",
    label: "Icons",
    isTitle: false,
    icon: "cpu",
    parentKey: "components",
    children: [{
      key: "icon-feather",
      label: "Feather",
      url: "/icons/feather",
      parentKey: "icons"
    }, {
      key: "icon-remiix",
      label: "Remix",
      url: "/icons/remix",
      parentKey: "icons"
    }, {
      key: "icon-boxicons",
      label: "Boxicons",
      url: "/icons/boxicons",
      parentKey: "icons"
    }, {
      key: "icon-mdiicons",
      label: "Material Design Icons",
      url: "/icons/mdi",
      parentKey: "icons"
    }, {
      key: "icon-font-awesome",
      label: "Font Awesome 5",
      url: "/icons/font-awesome",
      parentKey: "icons"
    }, {
      key: "icon-weather",
      label: "Weather",
      url: "/icons/weather",
      parentKey: "icons"
    }]
  }, {
    key: "forms",
    label: "Forms",
    isTitle: false,
    icon: "bookmark",
    parentKey: "components",
    children: [{
      key: "form-basic",
      label: "General Elements",
      url: "/forms/basic",
      parentKey: "forms"
    }, {
      key: "form-advanced",
      label: "Form Advanced",
      url: "/forms/advanced",
      parentKey: "forms"
    }, {
      key: "form-validation",
      label: "Validation",
      url: "/forms/validation",
      parentKey: "forms"
    }, {
      key: "form-upload",
      label: "File Uploads",
      url: "/forms/upload",
      parentKey: "forms"
    }, {
      key: "form-editors",
      label: "Editors",
      url: "/forms/editors",
      parentKey: "forms"
    }]
  }, {
    key: "tables",
    label: "Tables",
    isTitle: false,
    icon: "grid",
    parentKey: "components",
    children: [{
      key: "table-basic",
      label: "Basic Tables",
      url: "/tables/basic",
      parentKey: "tables"
    }, {
      key: "table-advanced",
      label: "Advanced Tables",
      url: "/tables/advanced",
      parentKey: "tables"
    }]
  }, {
    key: "charts",
    label: "Charts",
    isTitle: false,
    parentKey: "components",
    icon: "bar-chart-2",
    children: [{
      key: "chart-apex",
      label: "Apex Charts",
      url: "/charts/apex",
      parentKey: "charts"
    }, {
      key: "chart-chartjs",
      label: "Chartjs",
      url: "/charts/chartjs",
      parentKey: "charts"
    }]
  }, {
    key: "maps",
    label: "Maps",
    isTitle: false,
    icon: "map",
    parentKey: "components",
    children: [{
      key: "maps-vectormaps",
      label: "Vector Maps",
      url: "/maps/vectormaps",
      parentKey: "maps"
    }]
  }, {
    key: "menu-levels",
    label: "Menu Levels",
    isTitle: false,
    icon: "share-2",
    parentKey: "components",
    children: [{
      key: "menu-levels-1-1",
      label: "Level 1.1",
      url: "/",
      parentKey: "menu-levels",
      children: [{
        key: "menu-levels-2-1",
        label: "Level 2.1",
        url: "/",
        parentKey: "menu-levels-1-1",
        children: [{
          key: "menu-levels-3-1",
          label: "Level 3.1",
          url: "/",
          parentKey: "menu-levels-2-1"
        }, {
          key: "menu-levels-3-2",
          label: "Level 3.2",
          url: "/",
          parentKey: "menu-levels-2-1"
        }]
      }, {
        key: "menu-levels-2-2",
        label: "Level 2.2",
        url: "/",
        parentKey: "menu-levels-1-1"
      }]
    }, {
      key: "menu-levels-1-2",
      label: "Level 1.2",
      url: "/",
      parentKey: "menu-levels"
    }]
  }]
}, {
  key: "widgets",
  label: "Widgets",
  isTitle: false,
  icon: "ri-honour-line",
  url: "/widgets"
}];
export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };