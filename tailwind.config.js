const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './**/*.liquid',  
  ],
  prefix: 'tw-', 
  theme: {
    extend: {
      scale: {
        '120': '1.2',  
      },
      screens: {
        'ssmshopify': {'max': '500px'},  // Super Small
        'smshopify': {'max': '749px'},  // Small Shopify
        'mdshopify': {'min': '750px', 'max': '989px'},  // Medium Shopify
        "smmdshopify": {'max': '989px'}, // Small Medium Shopify
        'lgshopify': {'min': '990px'},  // Large Shopify
        'mdlgshopify': {'min': '750px'},  // Medium Large Shopify
        'md1300': {'min': '989px', 'max': '1300px'},  // Medium to 1300,
        "1200px": {'min': '1200px'}, 
        "1300px": {'max': '1300px'}, 
        "1400px": {'min': '1400px'}, 
      },
    },
  },
  corePlugins: {
    preflight: true, 
  },
  plugins: [
    require('@tailwindcss/line-clamp'),  
  ],
};
