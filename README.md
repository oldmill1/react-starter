Starter React project with bare minimum stuff needed to display a page that says 'Hello Jane'. 

How to use: 
After cloning, `cd` into the project directory, then do `npm install` in the console. 
After that, just do `npm run` in the console, and your app should be available at `127.0.0.1:9000`.

To use another port, check out `webpack.config.js` under `devServer`.

Based off of [this tutorial](http://blog.jakoblind.no/2017/06/22/how-to-setup-a-project-without-create-react-app/) with a few changes.

- Starting point is `index.js` instead of `app.js`. 
- Mount node has id `root` instead of `app`.
- Main component renamed to `App` to keep things simple, and is presentational/functional (not class-based)
- `webpack-dev-server` is used to serve up a testing server (use by doing `npm start`)
