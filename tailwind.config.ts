import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], darkMode:'class', theme:{extend:{colors:{brand:'#6256E8'}}}, plugins:[] };
export default config;
