# Digital Financial Service 💸

[](https://opensource.org/licenses/MIT)

A full-stack mobile financial service application built with a **Spring Boot** back end and an **Angular** front end. This project provides a secure and scalable platform for digital transactions, with dedicated interfaces for customers, agents, and administrators.

-----

## 📸 Screenshots

### Login and Registration

| Login                                     | Registration                                |
| ----------------------------------------- | ------------------------------------------- |
| ![Login Page](screenshots/login_screenshot.png) | ![Registration Page](screenshots/reg_screenshot.png) |

### Customer Dashboard

| Customer Dashboard 1                          | Customer Dashboard 2                          | Customer Dashboard 3                          |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| ![Customer Dashboard 1](screenshots/customer1.png) | ![Customer Dashboard 2](screenshots/customer2.png) | ![Customer Dashboard 3](screenshots/customer3.png) |

### Agent Dashboard

| Agent Dashboard 1                       | Agent Dashboard 2                       | Agent Dashboard 3                       |
| --------------------------------------- | --------------------------------------- | --------------------------------------- |
| ![Agent Dashboard 1](screenshots/agent1.png) | ![Agent Dashboard 2](screenshots/agent2.png) | ![Agent Dashboard 3](screenshots/agent3.png) |

-----

## ✨ Features

This application includes a robust set of features for a comprehensive digital financial ecosystem:

  * **P2P Transfers:** Seamlessly send money between customers.
  * **Cash In & Cash Out:** Agents can manage cash deposits and withdrawals for customers.
  * **B2B Transactions:** Support for business-to-business financial operations.
  * **E-Money Management:** System capabilities to create and destroy electronic money.
  * **Role-Based Access Control:** Separate dashboards and functionalities for:
      * **Customers:** View balance, send money, and see transaction history.
      * **Agents:** Facilitate customer transactions and manage their own accounts.
      * **System Administrators:** Oversee the entire system.
  * **Transaction History:** Detailed and accessible records of all transactions for users.

-----

## 🛠️ Technology Stack

| Area | Technology |
| :--- | :--- |
| **Backend** | Spring Boot, Java 17, MySQL |
| **Frontend**| Angular, Bootstrap 4, SASS |
| **Build** | Gradle, npm |

> **Note:** This project uses Bootstrap 4. Do not upgrade to Bootstrap 5, as it will introduce compatibility issues.

-----

## 🚀 Getting Started

To get the project up and running locally, follow these steps.

### Prerequisites

  * **Backend:**
      * Java 17
      * Gradle
      * MySQL
  * **Frontend:**
      * Node.js and npm
      * Angular CLI (`npm install -g @angular/cli`)

### Backend Setup (Spring Boot)

1.  **Configure Database:**

      * Create a new MySQL database.
      * Update the database credentials in `src/main/resources/application.properties`:
        ```properties
        spring.datasource.url=jdbc:mysql://<your_hostname>:<your_port>/<your_database>
        spring.datasource.username=<your_username>
        spring.datasource.password=<your_password>
        ```
      * The tables will be created automatically upon application startup.

2.  **Run the Backend:**

      * Navigate to the `mobile-financial-service` directory.
      * Run the command:
        ```bash
        ./gradlew bootRun
        ```
      * The back end will be available at `http://localhost:8085`.

### Frontend Setup (Angular)

1.  **Install Dependencies:**

      * Navigate to the `digital-financial-service-ui` directory.
      * Run the command:
        ```bash
        npm install
        ```

2.  **Run the Frontend:**

      * In the same terminal, run:
        ```bash
        npm start
        ```
      * The front end will be available at `http://localhost:4200/`.

-----

## 🤝 Contributing

Contributions are welcome\! If you have suggestions for improvements, please open an issue or submit a pull request.

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

-----

## 📜 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.