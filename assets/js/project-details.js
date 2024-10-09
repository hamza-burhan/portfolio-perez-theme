document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId) {
        fetchProjectDetails(projectId);
    }
});

function fetchProjectDetails(projectId) {
    // In a real application, you would fetch this data from a server
    const projectDetails = {
        '1': {
            title: 'ClearLedger Finance App',
            image: 'assets/images/projects/project1.png',
            type: 'ERP',
            startdate: '13/01/2022',
            endDate: '13/01/2023',
            client: 'Silverstone',
            category: 'Web Application',
            tools: 'Angular, Node',
            overviewp1: "This finance ERP dashboard was designed to simplify financial data management for medium-to-large businesses. The dashboard provides a clear, real-time view of the company's financial health with customizable filters and interactive visualizations.",
            overviewp2: 'The goal was to enhance decision-making by offering insights into cash flow, revenue, expenses, and key financial ratios. Special attention was given to usability, allowing users to drill down from high-level summaries to specific transaction details with just a few clicks',
            conclusion1: 'The Finance ERP Dashboard for Silverstone Enterprises showcases a powerful and intuitive web application designed to streamline financial operations and provide real-time insights. By focusing on key metrics such as revenue, expenses, and cash flow, the system empowers finance teams to make informed decisions quickly and accurately. With its user-friendly interface and robust backend integration, the dashboard ensures scalability and flexibility, making it a valuable tool for managing financial performance in a dynamic business environment.',
            conclusion2: "This project demonstrates my ability to design and develop complex, data-driven applications while prioritizing user experience and efficiency, ensuring seamless performance across all devices.",
            // Add more details as needed
        },
        '2': {
            title: 'Xton eCommerce App',
            image: 'assets/images/projects/project2.png',
            startdate: '03/01/2023',
            endDate: '22/06/2023',
            client: 'Helen',
            type: 'eCommerce',
            category: 'eCommerce Application',
            tools: 'React, MERN',
            overviewp1: "Xton is an eCommerce platform created to deliver a seamless online shopping experience. The web app features a modern and intuitive design that allows users to browse products, add them to a cart, and complete purchases with ease.",
            overviewp2: "For enhanced user engagement, the platform also provides product recommendations, wishlist features, and real-time order tracking. An admin dashboard offers comprehensive tools for managing the product catalog, orders, and users.",
            suboverviewHeading: "shopping features",
            suboverviewContent: "Built a user-friendly, fully responsive eCommerce platform with personalized shopping features.Successfully integrated secure payment gateways and a flexible, real-time shopping cart system. Ensuring smooth performance during high traffic and scalability for future expansion.Implementing secure and efficient payment and user authentication systems. Developed the frontend using React.js for a fast, interactive, and scalable user experience. ntegrated secure payment gateways (Stripe and PayPal) for safe and reliable transactions.",

            conclusion1: "The Xton eCommerce Web Application exemplifies a modern, feature-rich online shopping platform that caters to both customers and administrators. By combining a responsive design, secure payment integrations, and personalized product recommendations, Xton offers an all-in-one solution for a seamless and engaging eCommerce experience. ",
            conclusion2: "This project demonstrates my expertise in building scalable web applications with a focus on both frontend design and backend integration, making Xton an ideal addition to any online retail business.",
            // Add more details as needed
            // Add more details as needed
        },
        '3': {
            title: 'TaskFlow',
            image: 'assets/images/portfolios/project11Cover.png',
            type: 'Progressive Web Application (PWA)',
            startdate: '01/01/2022',
            endDate: '01/01/2023',
            client: 'Personal Prwoject',
            category: 'Task Management',
            tools: 'React, Firebase',
            overviewp1: "TaskFlow is a Progressive Web Application (PWA) designed to streamline task management and improve productivity for individuals and teams. It enables users to create, manage, and track tasks with an intuitive interface, even while offline.",
            overviewp2: "The app is built with a focus on simplicity, speed, and ease of use, providing users with powerful features such as task categorization, progress tracking, and real-time notifications. As a fully responsive application, TaskFlow ensures seamless use across all devices, from desktop to mobile.",
            conclusion1: "TaskFlow is a powerful tool for managing tasks and improving productivity. Its intuitive interface, offline capabilities, and real-time notifications make it a valuable asset for individuals and teams.",
            conclusion2: "This project demonstrates my ability to design and develop complex, data-driven applications while prioritizing user experience and efficiency, ensuring seamless performance across all devices.",
            // Add more details as needed
            suboverviewHeading: "Project Outcome",
            suboverviewContent: "TaskFlow enhances productivity for individuals and teams by providing an easy-to-use task management system with robust offline support. The project showcases strong front-end development skills, with a focus on modern web technologies like PWAs, state management using Vuex, and seamless UI/UX design.",
        },
        '4': {
            title: 'TeamSync',
            image: 'assets/images/portfolios/project6Cover.png',
            type: 'Real-Time Collaboration Platform',
            startdate: '01/01/2022',
            endDate: '01/01/2023',
            client: 'Personal Project',
            category: 'Remote Team Collaboration',
            tools: 'React, Node.js,  AWS S3, JWT,' ,
            overviewp1: "TeamSync is a real-time collaboration platform designed to facilitate seamless communication and teamwork for remote teams. The platform allows users to collaborate on shared documents, conduct video calls, and track project progress in real time. Built with performance and responsiveness in mind, TeamSync ensures smooth collaboration no matter the size of the team or complexity of the project. By incorporating features like real-time document editing, video conferencing, and role-based access, TeamSync aims to simplify remote collaboration and improve productivity for distributed teams.",
            overviewp2: "The platform is fully responsive and works seamlessly across desktop, tablet, and mobile devices, enabling remote teams to stay connected no matter where they are or what device they’re using. The project showcases strong skills in real-time communication, complex front-end development, developing scalable, secure web applications, and handling performance optimizations for concurrent real-time users.",
            conclusion1: "TeamSync effectively bridges the gap between remote team members by providing them with real-time collaboration tools all in one platform. The project demonstrates expertise in building highly interactive, performance-sensitive applications that support seamless team communication and project management.",
            conclusion2: "By focusing on real-time collaboration and responsiveness, TeamSync stands out as an ideal solution for distributed teams working remotely.",
            // Add more details as needed
            suboverviewHeading: "Project Outcome",
            suboverviewContent: "TeamSync effectively bridges the gap between remote team members by providing them with real-time collaboration tools all in one platform. The project demonstrates expertise in building highly interactive, performance-sensitive applications that support seamless team communication and project management. By focusing on real-time collaboration and responsiveness, TeamSync stands out as an ideal solution for distributed teams working remotely.",
        },
        '5': {
            title: 'ShiftMaster',
            image: 'assets/images/portfolios/project3Cover.png',
            type: 'Shift Management and Resource Allocation Platform',
            startdate: '01/01/2022',
            endDate: '01/01/2023',
            client: 'Personal Project',
            category: 'Shift Management and Resource Allocation',
            tools: 'Angular, Node.js, MongoDB, NgRx, JWT Chart.js, Tailwind CSS',
            overviewp1: "ShiftMaster is a comprehensive tool designed for managing employee shifts and resources in a streamlined and efficient manner. It is perfect for businesses and organizations that require flexibility and precision in shift scheduling, resource allocation, and task assignments. The platform offers an intuitive interface for creating, managing, and tracking employee shifts while ensuring optimal resource distribution across different departments. With its real-time updates and detailed calendar views, ShiftMaster ensures that teams can stay organized and avoid scheduling conflicts.",
            overviewp2: "ShiftMaster goes beyond scheduling by providing resource management features, allowing administrators to allocate equipment, facilities, or additional staff as needed. Managers can easily view resource availability and assign them to shifts. The platform also includes customizable notifications that remind employees of their upcoming shifts, changes in their schedule, or any specific instructions for the tasks they’re assigned to. This feature ensures that employees are always aware of their responsibilities and deadlines.",
            conclusion1: "ShiftMaster has proven to be an invaluable tool for organizations needing to streamline their shift scheduling and resource management. Its real-time collaboration, notification system, and powerful reporting tools have helped businesses reduce scheduling conflicts, optimize resource usage, and improve overall team efficiency.",
            conclusion2: "ShiftMaster is designed with scalability in mind, making it suitable for businesses of any size, from small teams to large organizations with complex shift requirements.",
            // Add more details as needed
            suboverviewHeading: "Project Outcome",
            suboverviewContent: "ShiftMaster has proven to be an invaluable tool for organizations needing to streamline their shift scheduling and resource management. Its real-time collaboration, notification system, and powerful reporting tools have helped businesses reduce scheduling conflicts, optimize resource usage, and improve overall team efficiency. ShiftMaster is designed with scalability in mind, making it suitable for businesses of any size, from small teams to large organizations with complex shift requirements.",
        },
        '6': {
            title: 'CBRE Management Dashboard',
            image: 'assets/images/portfolios/project1Cover.png',
            type: 'Comprehensive Management Dashboard',
            startdate: '01/01/2022',
            endDate: '01/01/2023',
            client: 'CBRE',
            category: 'Real Estate Management',
            tools: 'Angular, Node.js, MongoDB, NgRx, JWT, WebSocket/Socket.IO, Tailwind CSS',
            overviewp1: "The CBRE Management Dashboard is a comprehensive tool designed for managing key business operations for CBRE, one of the world's largest real estate firms. This dashboard centralizes various functionalities that allow CBRE to efficiently create client quotations, forecast revenue, and manage complex site and data center operations. Built using Angular and leveraging multiple Angular libraries, the project ensures smooth, high-performance user interactions with a focus on real-time data processing and visualization.",
            overviewp2: "The dashboard features a range of modules, including client quotations management, revenue forecasting, site management, data center management, advanced data visualization, user roles and permissions, and custom reporting. These modules enable CBRE to streamline their operations, make informed decisions, and improve overall efficiency.",
            conclusion1: "The CBRE Management Dashboard has significantly improved the efficiency of CBRE's day-to-day operations by automating the process of creating quotations, tracking revenue forecasts, and managing properties and data centers. The use of Angular and its libraries allowed for a scalable, high-performance solution capable of handling complex workflows and large datasets.",
            conclusion2: "The dashboard’s intuitive interface and real-time data capabilities empower CBRE teams to make informed decisions quickly and effectively.",
            // Add more details as needed
            suboverviewHeading: "Project Outcome",
            suboverviewContent: "The CBRE Management Dashboard has significantly improved the efficiency of CBRE's day-to-day operations by automating the process of creating quotations, tracking revenue forecasts, and managing properties and data centers. The use of Angular and its libraries allowed for a scalable, high-performance solution capable of handling complex workflows and large datasets. The dashboard’s intuitive interface and real-time data capabilities empower CBRE teams to make informed decisions quickly and effectively.",
        },
        '7': {
            title: 'Churchill Living Property Management Tool',
            image: 'assets/images/portfolios/project7Cover.png',
            type: 'Property Management Tool',
            startdate: '01/01/2022',
            endDate: '01/01/2023',
            client: 'Churchill Living',
            category: 'Property Management',
            tools: 'Angular, Node.js, MongoDB, NgRx, JWT, WebSocket/Socket.IO, Angular Material, Ngx-charts',
            overviewp1: "The Churchill Living Property Management Tool is a custom-built application designed to streamline and enhance the operations of Churchill Living's corporate housing services. This tool integrates various functionalities that allow Churchill Living to efficiently manage property listings, handle customer bookings, monitor inventory, and oversee rental agreements. Built using Angular and several associated libraries, this project enabled Churchill Living to automate key processes, improve client interactions, and ensure high operational efficiency.",
            overviewp2: "The tool features a range of modules, including property listings management, booking and reservation management, inventory management, customer portal, document management, reporting and analytics, and notification system. These modules enable Churchill Living to streamline their operations, make informed decisions, and improve overall efficiency.",
            conclusion1: "The Churchill Living Property Management Tool significantly improved Churchill Living's operational efficiency by automating key processes such as property management, client bookings, and inventory tracking. The tool’s intuitive interface, built with Angular, allowed staff to manage a large volume of properties seamlessly, while the client portal enhanced the customer experience by providing an easy-to-use platform for bookings and communication.",
            conclusion2: "Real-time updates, robust reporting, and secure document management empowered Churchill Living to scale its operations effectively and maintain its position as a leader in the corporate housing industry.",
            // Add more details as needed
            suboverviewHeading: "Project Outcome",
            suboverviewContent: "The Churchill Living Property Management Tool significantly improved Churchill Living's operational efficiency by automating key processes such as property management, client bookings, and inventory tracking. The tool’s intuitive interface, built with Angular, allowed staff to manage a large volume of properties seamlessly, while the client portal enhanced the customer experience by providing an easy-to-use platform for bookings and communication. Real-time updates, robust reporting, and secure document management empowered Churchill Living to scale its operations effectively and maintain its position as a leader in the corporate housing industry.",
        },
        // Add more projects as needed
    };

    const details = projectDetails[projectId];
    if (details) {
        // Update title
        const titleElement = document.querySelector('[data-project-title]');
        if (titleElement) titleElement.textContent = details.title;

        // Update image
        const imageElement = document.querySelector('[data-project-image]');
        if (imageElement) {
            imageElement.src = details.image;
            imageElement.alt = details.title;
        }

        const overviewP1Element = document.querySelector('[data-project-overview-p1]');
        if (overviewP1Element) overviewP1Element.textContent = details.overviewp1;

        const overviewP2Element = document.querySelector('[data-project-overview-p2]');
        if (overviewP2Element) overviewP2Element.textContent = details.overviewp2;

        // Update project type
        const typeElement = document.querySelector('[data-project-softwere-type]');
        if (typeElement) typeElement.textContent = details.type;

        // Update start date
        const startDateElement = document.querySelector('[data-project-start-date]');
        if (startDateElement) startDateElement.textContent = details.startdate;

        // Update end date
        const endDateElement = document.querySelector('[data-project-end-date]');
        if (endDateElement) endDateElement.textContent = details.endDate;

        // Update client
        const clientElement = document.querySelector('[data-project-client]');
        if (clientElement) clientElement.textContent = details.client;

        // Update category
        const categoryElement = document.querySelector('[data-project-category]');
        if (categoryElement) categoryElement.textContent = details.category;

        // Update tools
        const toolsElement = document.querySelector('[data-project-tools]');
        if (toolsElement) toolsElement.textContent = details.tools;

        // Update conclusion paragraphs
        const conclusion1Element = document.querySelector('[data-project-conclusion-1]');
        if (conclusion1Element) conclusion1Element.textContent = details.conclusion1;

        const conclusion2Element = document.querySelector('[data-project-conclusion-2]');
        if (conclusion2Element) conclusion2Element.textContent = details.conclusion2;

        // Update suboverview
        const subOverviewHeadingElement = document.querySelector('[data-project-suboverview-heading]');
        if (subOverviewHeadingElement) subOverviewHeadingElement.textContent = details.suboverviewHeading;

        const subOverviewContentElement = document.querySelector('[data-project-suboverview-content]');
        if (subOverviewContentElement) subOverviewContentElement.textContent = details.suboverviewContent;

        // Update other elements as needed
    }
}