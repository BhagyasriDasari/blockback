# Backend API for Vehicle Tracking

This project provides a backend API for a vehicle tracking application. It offers endpoints to retrieve real-time vehicle location data and simulated movement along a route. Built with Node.js and Express, this API serves as a core component for applications requiring vehicle tracking and route visualization.

## Features

- **Real-Time Vehicle Data:** Provides endpoints to fetch the current location of a vehicle.
- **Simulated Movement:** Generates random vehicle location data to simulate movement along a route.
- **CORS Support:** Configured to allow cross-origin requests for integration with frontend applications.

## Installation

To set up and run the backend API locally, follow these steps:

1. **Clone the Repository:**

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Start the Server:**

    ```bash
    node server.js
    ```

4. **Access the API:**

    The server will be running at `http://localhost:5000`. You can access the following endpoints:
    - **GET `/api/vehicle`**: Fetches the current vehicle location with simulated data.

## Usage

To fetch vehicle data, send a GET request to the `/api/vehicle` endpoint. The response will include the vehicle's latitude, longitude, and timestamp.

**Example Request:**

```bash
curl http://localhost:5000/api/vehicle
