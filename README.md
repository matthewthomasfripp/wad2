# Hospice Charity App

## Project Overview

This project is a university coursework assignment designed to develop a Hospice Charity App. The app provides users with information about charity locations and available items. While staff are able to modify the current stock. The application leverages modern web technologies and follows best practices in web development to deliver a smooth and user-friendly experience.

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