import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const { resolve } = require("path");


// module.exports = {
//   build:{
//     rollupOptions:{
//       input:{
//         main : resolve(__dirname, "index.html"),
//       }
//     }
//   }
// }

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: 'util'
    }
  },
  plugins: [react()]
})

