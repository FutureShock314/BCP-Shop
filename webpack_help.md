Webpack Help
- In `./src` add files that are related to the page
    - (e.g a js for a dir named 'home', create `./src/home.js`)
- Add `"./[path]/main": './src/[name].js'` to `webpack.config.js` (with quotes)
    - Replace `[name]` with the name as documented in the above step
    - Replace `[path]` with the path to the directory where the js needs to go
        - (e.g for the example, add `"./home/main": './src/home.js'` to `webpack.config.js`)