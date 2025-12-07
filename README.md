<p align="center">
    <img src="https://i.pinimg.com/564x/80/c1/ac/80c1ac7c789511d928e73a36be8ed578.jpg">
</p>
<h1 align="center">
    React & Vite
</h1>
<p align="center">
    This project serves as Angela's personal website, showcasing her work as a software engineer.
</p>


## 🛠 Setup

To get this project up and running, follow these steps:

1.  **Prerequisites:** Ensure you have Node.js and npm (or yarn) installed.

2.  **Installation:**
    Navigate to the project directory and install the dependencies:
    ```bash
    npm install
    # or
    yarn
    ```

3.  **Development Server:**
    To start the development server with Hot Module Replacement (HMR):
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will typically serve the application at `http://localhost:5173`.

## 🚀 Build for Production

To create a production-ready optimized build of the application:

1.  **Build Command:**
    Run the build script:
    ```bash
    npm run build
    # or
    yarn build
    ```
    This command will bundle your application into static files in the `dist` directory, optimizing them for performance and size.

2.  **Serving the Production Build:**
    You can preview the production build locally by installing a static file server (e.g., `serve`) and running:
    ```bash
    npm install -g serve
    serve -s dist
    ```
    This will serve the optimized application from the `dist` directory.