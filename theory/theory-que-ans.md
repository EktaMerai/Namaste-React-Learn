Q 1. What is emmet?

Emmet is a plugin for many popular text editors which greatly improves HTML & CSS workflow
cheatsheet for emmet: https://docs.emmet.io/cheat-sheet/

Q 2. Difference between a Library and Framework?

<table><tbody><tr><td><strong>Parameters</strong></td><td><strong>Library</strong></td><td><strong>Framework</strong></td></tr><tr><td>Definition</td><td>Libraries provide developers with predefined functions and classes to make their work easier and boost the development process.</td><td>Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms.&nbsp;</td></tr><tr><td>Inversion of Control</td><td>By using a library, you can control the flow of the application and call the library.&nbsp;</td><td>In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code.</td></tr><tr><td>Collection</td><td>Generally, libraries are a collection of helper modules, objects, classes, functions, message templates, pre-written code, etc.</td><td>Frameworks consist of a lot of APIs, compilers, toolsets, support programs, libraries, etc.</td></tr><tr><td>Code Modification</td><td>Codes in libraries are geared toward a particular program or to solve a specific development problem. Therefore, developers must modify library code to meet their needs.</td><td>Despite the fact that frameworks generate new codes for developers. These codes cannot be altered or modified later. Unlike libraries, frameworks do not allow users to modify their pre-written codes, so you don’t have to worry about deleting or changing them.</td></tr><tr><td>Scope</td><td>It is possible to call a library out of context. You may use the library wherever you see fit in your code.</td><td>On the other hand, you can only call and use what belongs to a Framework within the same Framework.&nbsp;</td></tr><tr><td>Function</td><td>In the program linking and binding process, they play an important role.</td><td>Using them, you can build and deploy applications in a standard way as the framework already provides code to perform common tasks and uses code provided by a developer for custom functionality.</td></tr><tr><td>Complexity</td><td>Having a library means understanding the functionality of each method, and it isn’t easy to create complex interactions since you need to call many methods to get the desired results.&nbsp;</td><td>Frameworks, on the other hand, embody the basic flow, and since plugins need to be added to code, it is easier to do the right modification.</td></tr><tr><td>Extensibility</td><td>Generally, libraries aren’t designed for extensibility; they are designed to accomplish a specific purpose.</td><td>Frameworks provide general functionality. Because of this, they are built to be extensible, which allows developers to incorporate app-specific features without modifying the framework’s source code.</td></tr><tr><td>Replaceable</td><td>It is easy to replace a library with another library. For instance, if you do not like the jQuery date picker library, you can use another date picker like a bootstrap date picker or pick date.</td><td>Frameworks are difficult to replace. If, for instance, you were using AngularJS to build your product, you cannot simply swap it out for another framework. It requires rewriting the entire codebase.</td></tr><tr><td>Performance</td><td>Less code is required to build libraries, which leads to faster loading times and better performance.</td><td>Developing a framework requires a lot of coding, which increases loading times and decreases performance.</td></tr><tr><td>Usage</td><td>The purpose of libraries is to perform a defined and specific task. Eg: Image manipulation, network protocols, math operations, etc.</td><td>Frameworks can be used for performing a wide range of tasks. Among these are Web application systems, plug-in managers, GUI systems, and so on.</td></tr><tr><td>Existing Projects</td><td>You can integrate libraries seamlessly into existing projects to add functionality.&nbsp;</td><td>Incorporating frameworks seamlessly into an existing project is impossible. Instead, frameworks should be used when starting a new project.</td></tr><tr><td>Benefits</td><td>Good code quality, reusability, and control, enhanced speed and performance of the program, etc.</td><td>Faster programming, support from the community, great support for MVC (Model View Controller) pattern, etc.</td></tr><tr><td>Examples</td><td>JQuery, React JS, etc.</td><td>Spring, NodeJS, AngularJS, Vue JS, etc.</td></tr></tbody></table>

Q 3. What is CDN? Why do we use it?
A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.


Q 4. What is crossorigin ?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
Web pages often make requests to load resources on other servers. Here is where CORS comes in.
A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.


Q 5. What is diference between React and ReactDOM
React: React is a javascript library, designed for building better user interfaces.

React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM

In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.

Q 6. What is difference between react.development.js and react.production.js files via CDN?
Both React and ReactDOM are available over a CDN.
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
The versions above are only meant for development, and are not suitable for production. Minified and optimized production versions of React are available at:
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
To load a specific version of react and react-dom, replace 18 with the version number.

Q 7. What is async and defer? 
Async - means execute code when it is downloaded and do not block DOM construction during downloading process
Defer - means execute code after it's downloaded and browser finished DOM construction and rendering process.

<table>
<thead>
<tr>
<th></th>
<th>Order</th>
<th><code>DOMContentLoaded</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><code>async</code></td>
<td><em>Load-first order</em>. Their document order doesn’t matter – which loads first runs first</td>
<td>Irrelevant. May load and execute while the document has not yet been fully downloaded. That happens if scripts are small or cached, and the document is long enough.</td>
</tr>
<tr>
<td><code>defer</code></td>
<td><em>Document order</em> (as they go in the document).</td>
<td>Execute after the document is loaded and parsed (they wait if needed), right before <code>DOMContentLoaded</code>.</td>
</tr>
</tbody>
</table>

