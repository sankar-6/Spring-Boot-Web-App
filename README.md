# Spring Boot Web Application

A modern Spring Boot web application that demonstrates user profile cards with dynamic data fetching from the RandomUser API.

## 🚀 Project Overview

This is a Spring Boot 4.1.0 web application that serves interactive user profile cards. The application fetches random user data from the RandomUser.me API and displays it in a responsive card format.

## 📋 Features

- **Dynamic User Profiles**: Fetches and displays random user data from RandomUser.me API
- **Responsive Design**: Mobile-friendly card layout with hover effects
- **Modern UI**: Clean and professional interface with smooth transitions
- **RESTful Endpoints**: Simple Spring MVC controllers for page routing

## 🛠️ Technology Stack

- **Backend**: Spring Boot 4.1.0
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Maven
- **Java Version**: 17
- **External API**: RandomUser.me

## 📁 Project Structure

```
hello/
├── src/
│   ├── main/
│   │   ├── java/hello/
│   │   │   ├── HelloApplication.java      # Main Spring Boot application
│   │   │   └── IndexController.java       # Web controller for routing
│   │   └── resources/
│   │       └── static/
│   │           ├── index.html              # Main user profile page
│   │           ├── login.html              # Login page (basic)
│   │           ├── style.css               # Styling for the application
│   │           └── site.js                 # JavaScript functionality
│   └── test/
│       └── java/hello/
│           └── HelloApplicationTests.java  # Basic test setup
├── pom.xml                                 # Maven configuration
└── README.md                               # This file
```

## 🚀 Getting Started

### Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

### Installation and Running

1. **Clone the repository** (if applicable)
2. **Navigate to the project directory**:
   ```bash
   cd hello
   ```

3. **Run the application using Maven**:
   ```bash
   mvn spring-boot:run
   ```

4. **Alternatively, build and run the JAR**:
   ```bash
   mvn clean package
   java -jar target/hello-0.0.1-SNAPSHOT.jar
   ```

5. **Access the application**:
   - Main page: http://localhost:8080/
   - Login page: http://localhost:8080/login

## 🌐 API Integration

The application integrates with the [RandomUser.me API](https://randomuser.me/) to generate random user profiles:

- **Endpoint**: `https://randomuser.me/api/`
- **Data Retrieved**: User name, gender, location, and profile picture
- **Usage**: Click the "Show Random User" button to fetch and display new user data

## 🎨 Frontend Features

### Interactive Elements

- **User Card**: Displays user information with hover effects
- **Random User Button**: Fetches new user data from the API
- **Dynamic Content Updates**: Real-time updates without page refresh

### Styling Features

- **Card Design**: Material Design-inspired card layout
- **Hover Effects**: Smooth shadow transitions on card hover
- **Responsive Layout**: Adapts to different screen sizes
- **Clean Typography**: Professional font styling

## 📝 Available Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Main page with user profile card |
| `/login` | GET | Basic login page |

## 🧪 Testing

Run the test suite using Maven:

```bash
mvn test
```

## 🔧 Configuration

The application uses default Spring Boot configuration. The embedded server runs on port 8080 by default.

## 📦 Dependencies

- `spring-boot-starter-webmvc`: Spring MVC for web applications
- `spring-boot-starter-webmvc-test`: Testing support for Spring MVC

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🔍 Future Enhancements

- [ ] User authentication and session management
- [ ] Database integration for user data persistence
- [ ] Enhanced filtering and search capabilities
- [ ] More detailed user profiles
- [ ] Dark mode support
- [ ] Progressive Web App (PWA) features

## 📞 Support

For any questions or issues, please open an issue in the project repository.

---

**Built with ❤️ using Spring Boot**
