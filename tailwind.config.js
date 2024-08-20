/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      overscrollBehavior: {
        contain: 'contain',
      },
      scrollSnapType: {
        inline: 'inline mandatory',
      },
      scrollbarWidth: {
        none: 'none',
      },
      colors: {
        customDarkGray: 'hsl(240, 2%, 12%)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.line-clamp-2': {
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
        },
        '.scrollbar-none': {
          scrollbarWidth: 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Safari and Chrome */
          },
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
