1. What is `NPM`?
npm is the package manager for the Node JavaScript platform.It puts modules in place so that node can find them, and manages dependency conflicts intelligently.

2.What is `Parcel/Webpack`? Why do we need it?
Parcel has first-class support for React Fast Refresh, which gives you quick feedback as you edit your code without needing to reload the page
Parcel builds your code in parallel using worker threads, utilizing all of the cores on your machine. Everything is cached, so you never build the same code twice. It's like using watch mode, but even when you restart Parcel!
- Automatic production optimization.
- Image optimization
- Minification
- Compression

3. What is `.parcel-cache`
cache folder (or . parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

4. What is `npx` ?
A tool for executing Node packages

5. What is difference between `dependencies` vs `devDependencies`
The devDependencies are those dependencies which are installed only the developer machine but dependencies on the
other hand project depends to run everywhere.

6. What is Tree Shaking?
Removing of the dead code, checks whether imported and exported files are used.

7. What is Hot Module Replacement?
Hot Module Replacement (or HMR) is one of the most useful features offered by webpack. It allows all kinds of modules to be updated at runtime without the need for a full refresh. 

8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
- Zero config : Parcel supports many languages and file types out of the box, from web technologies like HTML, CSS, and JavaScript, to assets like images, fonts, videos, and more. And when you use a file type that isn't included by default, Parcel will automatically install all of the necessary plugins and dev dependencies for you!

- Hot reloading: When you make a change, Parcel automatically updates your code in the browser – no page reload necessary!

-Image optimization: Parcel supports resizing, converting, and optimizing images! Just pass query parameters for the format and size you need when referencing the image file in your HTML, CSS, JavaScript, etc. and Parcel will take care of the conversion and optimization process.

9. What is `.gitignore`? What should we add and not add into it?
.gitignore is a file in which those files are added which are not supossed to be tracked by git while
pushing to the git repository.

10. What is the difference between `package.json` and `package-lock.json`
- The package.json file is the core of any node project. It stores critical metadata about a project that is necessary before releasing IT to npm, and it also specifies the functional properties of a project that npm utilizes.

-The package-lock.json is a lockfile that holds information on the dependencies or packages installed for a node.js project, including their exact version numbers. 

- The package for your project. json is the primary format for configuring and describing how to communicate with and execute your application. The npm CLI utilizes it to distinguish your project and comprehend how to handle its dependencies. 

- Its objective is to offer an immutable version of package.json, so you may fetch an earlier version of your code and end up with the same node_modules folder. 

11. Why should I not modify `package-lock.json`?
If package-lock.json is modified then it might lead to inconsistency and conflicts in the versions of the dependencies
and may cause problem is successful installation of the application.

12. What is `node_modules` ? Is it a good idea to push that on git?
node_modules is a folder where all the dependencies and dependencies of the dependencies resides.
No

13. What is the `dist` folder?
dist is the folder which is created when the build of the application is created. It contains the bundled
and minified code. It contains all the assets of the application all the images and media which is
processed and optimized as part of the build.

14. What is `browserlists`?
It is a package which defines the list of browsers on which the application will work. The developer
can define the list of browsers manualy on which the devleoper wants the application to be working.





