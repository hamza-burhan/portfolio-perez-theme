document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const BlogId = urlParams.get('id');

    if (BlogId) {
        fetchProjectDetails(BlogId);
    }
});

function fetchProjectDetails(BlogId) {
    // In a real application, you would fetch this data from a server
    const blogDetails = {
        '1': {
            title: 'Mastering Angular: Best Practices for Optimizing Performance in Large-Scale Applications',
            image: 'assets/images//blog-details/banner2.png',
            date: '10/10/2024',
            intro: "Building large-scale Angular applications brings challenges in terms of performance, especially as the app grows in complexity. A sluggish user experience can result from large bundle sizes, inefficient change detection, or unoptimized code. In this blog, we'll dive into some essential techniques to optimize Angular applications, ensuring they remain fast and scalable.",
            p1Title: '1. Lazy Loading Modules: Only Load What You Need',
            p1Content: "Lazy loading allows modules to be loaded only when required. In large-scale applications, this reduces initial load time by breaking the application into smaller, manageable chunks. What to implement: Divide your app into feature modules and load them only when the user navigates to those routes. How to implement: Use Angular’s built-in lazy loading with the loadChildren property in the router.",
            p2Title: "2. Ahead-of-Time (AOT) Compilation: Faster Loading Times",
            p2Content: "AOT compilation improves app startup performance by compiling HTML templates and TypeScript during the build process, reducing the time needed for rendering in the browser. Benefits: Smaller bundle sizes, faster rendering, early error detection. How to enable: Use the ng build --prod command to build your app with AOT.",
            p3Title: '3. Tree Shaking: Remove Unused Code',
            p3Content: "Tree shaking removes unused code from your Angular application. This reduces the bundle size, improves startup performance, and improves code quality. How to enable: Use Angular's built-in tree shaking feature by adding the following to your project's tsconfig.json file:",
            p4Title: "4. Optimizing Change Detection: Reducing Unnecessary Re-Renders",
            p4Content: "Change detection in Angular is a critical mechanism for updating the UI based on changes in the application's data. Reducing unnecessary re-renders can improve performance by reducing unnecessary DOM manipulations and improving the overall user experience. How to optimize: Use Angular's built-in change detection strategies, such as OnPush, and implement custom change detection logic where necessary.",
        },
        '2': {
            title: 'State Management in React: A Deep Dive into Recoil and Zustand',
            image: 'assets/images//blog-details/banner1.jpg',
            date: '24/09/2024',
            intro: "State management is a crucial aspect of modern React development, especially in large-scale applications where data needs to flow efficiently across components. While Redux has long been the go-to solution, newer libraries like Recoil and Zustand offer more lightweight, flexible alternatives. In this blog, we’ll explore how Recoil and Zustand work, compare their features, and help you decide which is the best choice for your next project.",
            p1Title: '1. The Evolution of State Management in React',
            p1Content: "Early days: Managing state with React’s built-in useState and useContext hooks was sufficient for smaller apps. Rise of Redux: Redux introduced a global store and predictable state management, but with a steep learning curve and boilerplate-heavy setup. Why newer libraries: Recoil and Zustand address Redux’s complexity by offering simpler APIs and more intuitive state management approaches.",
            p2Title: "2. Recoil: A Simple, Yet Powerful State Management Tool",
            p2Content: "What is Recoil: Recoil is a state management library built by Facebook that provides fine-grained control over state management with minimal boilerplate. Key features: Atoms: Small units of state, which can be shared across components. Selectors: Functions that allow you to compute derived state based on atoms. Reactivity: Components re-render only when the specific atom they are subscribed to changes, offering efficient reactivity. Pros: Tight integration with React’s concurrent mode and Suspense. Fine-grained updates to prevent unnecessary re-renders. Cons: Newer library with fewer community resources compared to Redux. Still in experimental stages, with API changes possible.",
            p3Title: '3. Zustand: A Lightweight, Minimal State Manager',
            p3Content: "What is Zustand: Zustand is a small, fast state management library that focuses on simplicity and ease of use. It leverages hooks to create stores without unnecessary abstractions. Key features: Global store: All state is stored in a single store that can be accessed anywhere in your app. Minimal boilerplate: You don’t need to define actions, reducers, or dispatchers. Just set up your store and read/write directly. Selective updates: Components only re-render when the part of the state they use changes. Pros: Extremely lightweight (about 1KB). Minimalistic and developer-friendly API. Easy to implement in both small and large projects. Cons: Less built-in structure for managing complex state logic. Limited ecosystem compared to Redux and MobX.",
            p4Title: "4. Recoil vs. Zustand: Feature Comparison",
            p4Content: "Ease of Use: Zustand is simpler to set up and use for small to medium projects, while Recoil offers more advanced features like selectors for larger applications. Performance: Both libraries excel in terms of performance by offering fine-grained control over re-renders, but Zustand’s minimalistic nature makes it particularly fast for small apps. Learning Curve: Zustand has a flatter learning curve, making it accessible to developers transitioning from simpler state management methods like useState. Recoil, on the other hand, is slightly more complex due to its atom and selector structure but provides more powerful state control. Community and Ecosystem: Recoil has a more active community with backing from Facebook, whereas Zustand is more niche but growing steadily.",
        },
        '3': {
            title: 'Integrating AI-Powered Features into Your Front-End: Using TensorFlow.js',
            image: 'assets/images//blog-details/banner3.jpg',
            date: '03/08/2024',
            intro: "Artificial Intelligence (AI) is rapidly transforming the capabilities of web applications, and TensorFlow.js brings the power of machine learning directly into the browser. With TensorFlow.js, front-end developers can now create AI-powered features without server-side dependencies. In this blog, we’ll explore how you can leverage TensorFlow.js to implement AI models directly in your front-end projects, discuss its benefits, and provide practical examples to help you get started.",
            p1Title: '1. Why TensorFlow.js for Front-End Development?',
            p1Content: "What is TensorFlow.js? TensorFlow.js is a library that allows you to develop, train, and run machine learning models in the browser using JavaScript. Key advantages: No server dependency for running AI models. Real-time interaction with AI-powered features directly in the browser. Leverage GPUs for faster processing without the need for additional infrastructure. Use cases: Image recognition, text sentiment analysis, object detection, and more.",
            p2Title: "2. Setting Up TensorFlow.js in Your Front-End Application",
            p2Content: "Step-by-step setup: Add TensorFlow.js to your project using a CDN or package manager. Example: npm install @tensorflow/tfjs to include TensorFlow.js in a Node.js project. Import the necessary functions and set up your first model or load a pre-trained model. Benefits of pre-trained models: Use models like MobileNet for image classification or PoseNet for body pose detection to quickly integrate AI features without extensive machine learning knowledge.",
            p3Title: '3. Creating an AI-Powered Feature: Image Classification Example',
            p3Content: "Task: Let’s walk through creating an image classification tool that identifies objects from an uploaded image. Steps: Load a pre-trained model such as MobileNet using TensorFlow.js. Use tf.browser.fromPixels() to capture the image input from the user’s uploaded file. Process the image and run it through the model for classification. Display the predicted object labels and confidence scores in real-time. Code Example: const model = await tf.loadLayersModel('https://.../mobilenet/model.json'); const img = tf.browser.fromPixels(document.getElementById('uploadedImage')); const prediction = model.predict(img); console.log(prediction);",
            p4Title: "4. Handling Performance: Running Models Efficiently in the Browser",
            p4Content: "Optimizing performance: Leverage GPU acceleration for faster model execution by enabling WebGL. Reduce the size of models or use quantized models for faster inference. Streamline the input data by resizing and normalizing it before processing. Best practices: Run models asynchronously to avoid blocking the UI and ensure smooth performance during interactions.",
            p5Title: "5. Use Cases for TensorFlow.js in Front-End Applications",
            p5Content: "Image Processing: Use image recognition and classification in apps like eCommerce for product recommendations or automatic tagging. Natural Language Processing (NLP): Implement real-time sentiment analysis on user inputs in a chat application. Gesture Recognition: Use models like PoseNet to create gesture-based control features for interactive applications or games. Speech Recognition: Incorporate voice commands or real-time speech-to-text capabilities in a web application.",
            p6Title: "6. Deploying AI Features in Production",
            p6Content: "Best practices for deploying TensorFlow.js models: Use server-side fallback for resource-intensive tasks to avoid overloading the client’s browser. Cache models locally in the browser using IndexedDB for faster loading times. Monitor the application’s performance and optimize the execution by running AI models only when necessary. Integration with other frameworks: TensorFlow.js can easily be integrated with front-end frameworks like React, Angular, or Vue.js.",
            p7Title: "Conclusion",
            p7Content: "TensorFlow.js unlocks powerful AI capabilities for front-end developers, enabling the creation of highly interactive and intelligent web applications. Whether you’re building an image recognition tool, implementing NLP features, or leveraging gesture recognition, TensorFlow.js makes it possible to run machine learning models entirely in the browser. By following best practices for performance and leveraging pre-trained models, you can integrate AI into your front-end project seamlessly and deliver richer user experiences.",
        },
        '4': {
            title: 'Tailwind CSS vs. CSS-in-JS: What\'s the Best Choice for Scalable Styling?',
            image: 'assets/images//blog-details/banner4.jpg',
            date: '13/07/2024',
            intro: "As front-end projects grow in complexity, so do their styling needs. Developers today are faced with an increasing number of options for managing styles, from utility-first frameworks like Tailwind CSS to CSS-in-JS solutions like styled-components and Emotion. In this blog, we’ll compare Tailwind CSS with CSS-in-JS, focusing on scalability, performance, and developer experience to help you choose the best approach for your next project.",
            p1Title: '1. Tailwind CSS: Utility-First Styling for Rapid Development',
            p1Content: "What is Tailwind CSS? A utility-first CSS framework that allows you to compose styles using predefined classes directly in your HTML or JSX. Key features: Predefined utility classes for margin, padding, colors, flexbox, grid, and more. Customization: Tailwind is fully customizable through its configuration file, allowing you to define your color palette, spacing, and breakpoints. Speed: Allows rapid development by eliminating the need to write custom CSS for common styles. Pros: No need for context switching between CSS and JSX/HTML. Enforces consistency in design and style across the application. Highly optimized for production, removing unused styles (via PurgeCSS). Cons: Some developers find the large number of utility classes clutter the markup. Learning curve if you’re used to traditional CSS or SCSS.",
            p2Title: "2. CSS-in-JS: Dynamic Styling in JavaScript",
            p2Content: "What is CSS-in-JS? CSS-in-JS allows you to write styles directly in your JavaScript or TypeScript code. Popular libraries include styled-components and Emotion. Key features: Component-scoped styles: Styles are written directly inside your component, ensuring they are scoped and won’t leak to other parts of the app. Dynamic styles: CSS-in-JS makes it easy to apply dynamic styles based on props or state. Theming: Built-in support for theming, allowing consistent style management across the application. Pros: Styles live closer to the component, reducing context switching. Easy to apply conditional styles based on props or component state. Encapsulated styling ensures no global CSS conflicts. Cons: Larger bundle sizes due to inline styles and runtime generation of CSS. More complex when handling global styles or media queries.",
            p3Title: '3. Tailwind CSS vs. CSS-in-JS: Performance Comparison',
            p3Content: "Tailwind CSS performance: Tailwind generates a CSS file that contains only the styles you use, which is highly optimized for production with minimal overhead. PurgeCSS ensures that unused styles are stripped, keeping file sizes minimal. CSS-in-JS performance: CSS-in-JS can lead to larger bundle sizes due to inline style generation and runtime CSS creation. While libraries like Emotion offer server-side rendering (SSR) for better performance, the runtime cost can still impact large applications. Conclusion: Tailwind is generally more performance-efficient due to its utility-first approach and optimized production build. CSS-in-JS, while powerful for dynamic styles, can introduce performance bottlenecks if not handled carefully.",
            p4Title: "4. Developer Experience: Which Approach is More Scalable?",
            p4Content: "Tailwind CSS: Scalability: Tailwind scales well for large projects, thanks to its predefined utility classes and configuration file. Styles are consistent across the project, reducing the chances of conflicts. Developer experience: Tailwind allows rapid prototyping, but the heavy reliance on class names can make HTML/JSX files harder to read. CSS-in-JS: Scalability: CSS-in-JS scales well when components are self-contained, as styles are scoped to each component. It works especially well in component-driven architectures like React. Developer experience: CSS-in-JS offers a more intuitive way to handle dynamic and conditional styles directly inside your component, but it may introduce verbosity and complexity in larger projects.",
            p5Title: "5. When to Use Tailwind CSS or CSS-in-JS",
            p5Content: "Tailwind CSS is best when: You need a utility-first approach that ensures consistency across large applications. You want to rapidly prototype and iterate without writing custom CSS from scratch. Performance is a priority, and you want to minimize runtime overhead. CSS-in-JS is best when: Your project requires dynamic, conditional, or prop-based styling. You’re building component-driven applications (e.g., React) and want styles encapsulated with your components. Theming is an important part of your application’s design system.",
            p6Title: "Conclusion",
            p6Content: "Both Tailwind CSS and CSS-in-JS have their strengths, depending on your project’s requirements. Tailwind CSS shines when you need a fast, utility-first approach that scales well with minimal performance overhead. CSS-in-JS, on the other hand, offers more flexibility for dynamic styling and component encapsulation but comes with a tradeoff in performance. Understanding the needs of your project, such as the complexity of styling, performance constraints, and developer preferences, will help you choose the right tool for scalable styling.",
        },
        '5': {
            title: 'Enhancing Front-End Performance: Lazy Loading, Code Splitting, and Web Workers',
            image: 'assets/images//blog-details/banner4.jpg',
            date: '13/07/2024',
            intro: "As web applications grow larger and more complex, ensuring optimal performance on the front-end becomes a top priority. Users expect fast-loading, responsive websites, and a sluggish experience can lead to higher bounce rates and a negative user experience. In this blog, we’ll explore three key techniques to enhance front-end performance: lazy loading, code splitting, and web workers. These strategies can help you manage resource loading more efficiently and deliver a smoother user experience.",
            p1Title: '1. Lazy Loading: Optimizing Asset Loading',
            p1Content: "What is Lazy Loading? Lazy loading is a technique where non-critical resources, like images or videos, are loaded only when they are needed—such as when they enter the viewport—instead of during the initial page load. Why it's important: By deferring the loading of offscreen assets, you reduce the initial page load time and improve the perceived performance of the website. Implementation: For images, you can use the loading=\"lazy\" attribute in HTML to delay image loading until the user scrolls down. For components in frameworks like React or Angular, lazy loading modules or components helps to load only the necessary parts of the application when required. Example in React: const LazyComponent = React.lazy(() => import('./SomeComponent')); Best practices: Prioritize critical assets (above-the-fold content). Use lazy loading for large media assets, long lists, and non-essential features.",
            p2Title: "2. Code Splitting: Reducing JavaScript Bundle Size",
            p2Content: "What is Code Splitting? Code splitting is a technique that breaks your JavaScript bundle into smaller chunks that can be loaded on demand or in parallel. This reduces the initial load time by only serving essential code upfront. Why it's important: As applications grow, the JavaScript bundle can become quite large, leading to longer load times. Code splitting helps alleviate this issue by serving code as it’s needed, which boosts the performance, especially on slower networks. Implementation in Webpack: Use dynamic import() statements to split code and load specific modules only when they are required. Webpack will automatically split these modules into separate bundles. Example: import('./module').then(module => { // Use the dynamically loaded module }); Framework support: React has built-in support for code splitting using React.lazy(). Angular offers module-based lazy loading by separating feature modules into smaller bundles. Best practices: Split larger libraries, such as UI frameworks or charts, that aren’t needed during the initial load. Combine code splitting with lazy loading for optimal performance.",
            p3Title: '3. Web Workers: Offloading CPU-Intensive Tasks',
            p3Content: "What are Web Workers? Web Workers allow you to run scripts in background threads, separate from the main UI thread. This enables you to offload heavy computational tasks—such as data processing, image manipulation, or complex calculations—without blocking the user interface. Why it's important: Long-running tasks on the main thread can cause the UI to freeze or become unresponsive. By using Web Workers, you can improve the responsiveness of your web application and ensure smoother interactions. How to use Web Workers: You can create a Web Worker by defining a script that runs in the background and interacts with the main thread through messages. Example: const worker = new Worker('worker.js'); worker.postMessage('Start task'); worker.onmessage = function(event) { console.log('Task completed:', event.data); }; Use cases: Offload intensive calculations like encryption or sorting large data sets. Process real-time data (e.g., WebSockets) without impacting UI performance. Best practices: Ensure proper communication between the main thread and Web Workers to avoid race conditions. Terminate workers when not in use to free up memory and system resources.",
            p4Title: "4. Combining These Techniques for Maximum Impact",
            p4Content: "Lazy loading + code splitting: By combining lazy loading with code splitting, you can optimize both the delivery of assets and the loading of JavaScript. Load essential code and resources first, and defer less critical ones. Web Workers + code splitting: If you have CPU-heavy tasks like data visualization, you can split the visual component into its own bundle and use a Web Worker to handle the calculations or data processing in the background.",
            p5Title: "5. Monitoring and Measuring Performance: Tools and Metrics",
            p5Content: "Tools to use: Google Lighthouse: For checking performance scores and identifying bottlenecks in your app. Chrome DevTools: For analyzing load times, the size of your JavaScript bundles, and rendering performance. Webpack Bundle Analyzer: To visualize and optimize the size of your JavaScript bundles. Key performance metrics: First Contentful Paint (FCP): Measures the time it takes for the first piece of content to render. Time to Interactive (TTI): Tracks how quickly a page becomes interactive. Largest Contentful Paint (LCP): Represents how long it takes to render the largest visible element on the page.",
            p6Title: "Conclusion",
            p6Content: "Front-end performance optimization is crucial for delivering a fast and responsive user experience. By implementing lazy loading, code splitting, and web workers, you can significantly improve load times, responsiveness, and overall user satisfaction. These techniques, when combined with proper performance monitoring, will ensure your web application remains performant as it scales in complexity.",
        },
    };
    const details = blogDetails[BlogId];
    if (details) {
        // Update title
        const titleElement = document.querySelector('[data-blog-title]');
        if (titleElement) titleElement.textContent = details.title;

        // Update image
        const imageElement = document.querySelector('[data-blog-image]');
        if (imageElement) {
            imageElement.src = details.image;
            imageElement.alt = details.title;
        }

        // Update date
        const dateElement = document.querySelector('[data-blog-date]');
        if (dateElement) dateElement.textContent = details.date;

        // Update intro
        const introElement = document.querySelector('[data-blog-intro]');
        if (introElement) introElement.textContent = details.intro;

        // Update p1Title and p1Content
        const p1TitleElement = document.querySelector('[data-p1-title]');
        const p1ContentElement = document.querySelector('[data-p1-content]');
        if (p1TitleElement && p1ContentElement) {
            p1TitleElement.textContent = details.p1Title;
            p1ContentElement.textContent = details.p1Content;
        }

        // Update p2Title and p2Content
        const p2TitleElement = document.querySelector('[data-p2-title]');
        const p2ContentElement = document.querySelector('[data-p2-content]');
        if (p2TitleElement && p2ContentElement) {
            p2TitleElement.textContent = details.p2Title;
            p2ContentElement.textContent = details.p2Content;
        }

        // Update p3Title and p3Content
        const p3TitleElement = document.querySelector('[data-p3-title]');
        const p3ContentElement = document.querySelector('[data-p3-content]');
        if (p3TitleElement && p3ContentElement) {
            p3TitleElement.textContent = details.p3Title;
            p3ContentElement.textContent = details.p3Content;
        }

        // Update p4Title and p4Content
        const p4TitleElement = document.querySelector('[data-p4-title]');
        const p4ContentElement = document.querySelector('[data-p4-content]');
        if (p4TitleElement && p4ContentElement) {
            p4TitleElement.textContent = details.p4Title;
            p4ContentElement.textContent = details.p4Content;
        }
    }
    
}