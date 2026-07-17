# coding-project-template
fullstack_developer_capstone
# Dealership Review Application

A full-stack web application developed as part of the IBM Full Stack Software Developer Capstone Project. The application allows users to browse car dealerships, view dealer details and reviews, register/login, and add reviews with sentiment analysis integration.

The project was later containerized using Docker and deployed on Kubernetes to gain hands-on experience with cloud-native application deployment.

---

## Project Overview

The application consists of multiple components working together:

- Frontend developed using React
- Backend services developed using Django and Express.js
- MongoDB database for dealership and review data
- Sentiment Analysis microservice deployed on IBM Cloud Code Engine
- Docker containerization and Kubernetes deployment

---

## Features

- User Registration and Login Authentication
- Browse list of car dealerships
- View dealership details and customer reviews
- Add new reviews for dealerships
- Automatic sentiment analysis for reviews
- REST API integration between services
- Dockerized application deployment
- Kubernetes deployment using IBM Cloud environment

---

## Technology Stack

### Frontend
- React.js
- HTML5
- CSS3
- Bootstrap

### Backend
- Django
- Django REST APIs
- Express.js
- Node.js

### Database
- MongoDB
- SQLite

### Cloud & DevOps
- Docker
- Kubernetes
- IBM Cloud Container Registry
- IBM Cloud Code Engine
- Git & GitHub

---

## Project Architecture

```text
React Frontend
       |
       v
Django Backend APIs
       |
       +------------------+
       |                  |
       v                  v
Express APIs         Sentiment Service
       |                  |
       v                  v
   MongoDB          IBM Code Engine
```

---

## Installation and Setup

### Clone Repository

```bash
git clone <your-github-repository-url>
cd xrwvm-fullstack_developer_capstone
```

### Install Frontend Dependencies

```bash
cd server/frontend
npm install
npm run build
```

### Run Express Backend

```bash
cd server/database
node app.js
```

### Run Django Server

```bash
cd server
python manage.py runserver
```

---

## Docker Deployment

Build Docker image:

```bash
docker build -t dealership .
```

Push image to IBM Container Registry:

```bash
docker push us.icr.io/<namespace>/dealership
```

---

## Kubernetes Deployment

Apply deployment:

```bash
kubectl apply -f deployment.yaml
```

Port forward application:

```bash
kubectl port-forward deployment.apps/dealership 8000:8000
```

---

## Screenshots

### Landing Page
(Add Screenshot Here)

### Logged In User
(Add Screenshot Here)

### Dealer Details
(Add Screenshot Here)

### Add Review with Sentiment
(Add Screenshot Here)

---

## Learning Outcomes

Through this project, I gained practical experience in:

- Building full-stack applications using React and Django
- Developing REST APIs using Express.js and Django
- Working with MongoDB databases
- Integrating cloud-based microservices
- Containerizing applications using Docker
- Deploying applications on Kubernetes
- Using IBM Cloud services such as Code Engine and Container Registry
- Managing version control with Git and GitHub

---

## Future Improvements

- Improve application UI and responsiveness
- Add advanced search and filtering options
- Implement role-based access control
- Add CI/CD pipeline integration
- Deploy application on public cloud platforms

---

## Author

**Chandan Kumar**

Bachelor of Technology in Computer Science

Interested in Full Stack Development, Backend Engineering, Cloud Computing, and AI/ML applications.

---

## Acknowledgements

This project was completed as part of the **IBM Full Stack Software Developer Professional Certificate Capstone Project** and provided practical exposure to modern full-stack and cloud-native development practices.
