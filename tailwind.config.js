module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js}"],
    content: [
        './src/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
      ],
    theme: {
      screens: {
        'sm': {'min': '360px', 'max': '768px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1336px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1336px', 'max': '9999px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
      },
        extend: {
            lineHeight: {
                '16': '64px',
            },

            width: {
                '9/10': '90%',
                '8/10': '80%',
                '7/10': '70%',
                '6/10': '60%',
                '5/10': '50%',
                '4/10': '40%',
                '3/10': '30%',
                '1000': '1000px',
                '240': '240px',
              },
        }
    },
    plugins: [],
}