# Hospice Charity App

## Live Deployment

The application is live and accessible at [https://wad.fripp.xyz](https://wad.fripp.xyz).

For demonstration purposes, the following credentials can be used:

- **Volunteer Role**: Username: `volunteer`, Password: `password123`
- **Manager Role**: Username: `manager`, Password: `password123`

## Project Overview

This project is a university coursework assignment designed to develop a Hospice Charity App. The app provides users with information about charity locations and available items. While staff are able to modify the current stock. The application leverages modern web technologies and follows best practices in web development to deliver a smooth and user-friendly experience.

## Implemented Features

- **Landing and About Us Pages**
  - Accessible landing page
  - Detailed information on the About Us page at `/about`

- **User Authentication**
  - **Login:** Users can log in with valid credentials
  - **Logout:** Users can log out successfully
  - **Roles & Access Control:** Different roles (e.g., managers, volunteers) have appropriate access levels and permissions

- **Shops Management**
  - **Shops Page:** View the list of shops at `/shops`
  - **Individual Shop Pages:** Access detailed information for each shop at `/shops/:name`

- **Items Management**
  - **Viewing Items:** Browse items at `/items`
  - **Editing Items:** Modify item details on the edit page at `/items/edit/:id`
  - **Creating Items:** Add new items (available for authenticated users)
  - **Deleting Items:** Remove items, with changes reflecting immediately

- **User Management**
  - **Viewing Users:** Access user information (restricted based on role)
  - **Editing Users:** Update user details on the edit page at `/users/edit/:id`
  - **Deleting Users:** Remove users, with changes reflecting immediately

- **Access Control and Error Handling**
  - **Restricted Access:** Pages and actions restricted based on user authentication and role
  - **404 Error Handling:** Proper handling of navigation to non-existent pages


## Technologies Used

- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- **Mustache.js**: A logic-less template engine for creating dynamic views. It's used to render server-side HTML templates.
- **Tailwind CSS**: A utility-first CSS framework that provides low-level utility classes for building custom designs without writing custom CSS.
- **Docker**: Used for containerizing the application, making it easy to set up and run in different environments.

## Project Structure

- **controllers/**: Contains the application logic for different routes.
- **db/**: NeDB database files.
- **middleware/**: Custom middleware for handling authentication, logging, error handling, etc.
- **models/**: Defines the data models used in the application, including schemas for users, donations, and events.
- **routes/**: Defines the various API endpoints for the application.
- **views/**: Contains the Mustache templates for rendering the UI.
- **public/**: Stores static files like images, CSS, and JavaScript.
- **tailwind.config.js**: Configuration file for customizing Tailwind CSS.
- **Dockerfile & docker-compose.yml**: Files for setting up Docker containers.

## Setup and Installation

### Prerequisites

- Node.js (version 14 or higher)

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/matthewthomasfripp/wad2
    cd wad2
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

   - Locally:

     ```bash
     npm start
     ```

   - Using Docker:

     ```bash
     docker-compose up --build
     ```

4. Access the app:
   The app should now be running on [http://localhost:3000](http://localhost:3000).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.