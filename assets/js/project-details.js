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