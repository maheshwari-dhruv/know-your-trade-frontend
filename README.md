# KnowYourTrade - Full Stack Blog Project (v1)

## Overview

KnowYourTrade is a comprehensive blog application designed for traders, investors, and individuals interested in the stock market. The project leverages a full-stack architecture, utilizing React for the frontend and Spring Boot for the backend. Users can access a variety of features including reading blog posts, gaining insights into market trends, and learning from experienced traders.

## Frontend

### Technologies Used

- React: ^18.2.0
- React DOM: ^18.2.0
- Axios: ^1.6.7
- React Markdown: ^9.0.1
- React Query: ^3.39.3
- React Router DOM: ^6.22.0

### Development Dependencies

- @types/react: ^18.2.55
- @types/react-dom: ^18.2.19
- @vitejs/plugin-react-swc: ^3.5.0
- Autoprefixer: ^10.4.17
- DaisyUI: ^4.7.2
- ESLint: ^8.56.0
- ESLint Plugin React: ^7.33.2
- ESLint Plugin React Hooks: ^4.6.0
- ESLint Plugin React Refresh: ^0.4.5
- PostCSS: ^8.4.35
- Tailwind CSS: ^3.4.1
- Vite: ^5.1.0

## Backend

### Technologies Used

- Spring Boot
- Spring Data JPA
- Spring Web
- RxJava: 3.0.9
- Spring Boot DevTools
- Lombok
- Micrometer Registry Prometheus: 1.12.0
- Spring Boot Starter AOP
- Commons Lang3: 3.12.0
- MySQL Connector/J
- Spring Boot Starter Test

### Endpoints

1.  **GET ALL POSTS**

    - Endpoint: `/all`
    - Method: GET
    - Description: Fetch all blog posts related to the stock market.

2.  **GET SINGLE POST**

    - Endpoint: `/individual/{postId}`
    - Method: GET
    - Description: Retrieve detailed information about a specific stock market-related blog post.

3.  **GET ALL POSTS BASED ON CATEGORY**

    - Endpoint: `/category/{category}`
    - Method: GET
    - Description: Explore blog posts categorized by topics such as trading strategies, market analysis, and investment tips.

4.  **INSERT RECORD IN DB**

    - Endpoint: `/add`
    - Method: POST
    - Description: Contribute to the community by adding insightful blog posts to the platform.

5.  **UPDATE RECORD IN DB**

    - Endpoint: `/update/{postId}`
    - Method: PUT
    - Description: Edit and enhance existing blog post content for accuracy and relevance.

6.  **DELETE RECORD FROM DB**

    - Endpoint: `/delete/{postId}`
    - Method: DELETE
    - Description: Remove outdated or irrelevant blog posts from the platform.

## Getting Started

1.  Clone the KnowYourTrade repository.
2.  Configure the database settings in the backend to ensure proper functionality.
3.  Run the frontend and backend applications.
4.  Access the KnowYourTrade application through the provided endpoints.

Start exploring the world of trading, investing, and market trends on KnowYourTrade! If you have questions or suggestions, feel free to reach out and contribute to the project. Happy tradin
