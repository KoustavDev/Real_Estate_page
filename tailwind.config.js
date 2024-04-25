/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm:"0.75rem",
        base:"0.875rem",
        md:"1rem",
        lg:"1.25rem",
        xl:"1.5rem",
        "2xl":"1.75rem",
        "3sm":"2.25rem",
      },
      backgroundImage: {
        'team-bg-image': "url('/teams/team.png')"
      },
    },
  },
  plugins: [],
}

