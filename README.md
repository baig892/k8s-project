Bookstore Kubernetes Project
A full-stack bookstore application deployed on Kubernetes, featuring:

Frontend: React.js

Backend: Node.js with Express

Database: MySQL

Containerization: Docker

Orchestration: Kubernetes with Ingress Controller

Features
User-Friendly Interface: Browse and search for books seamlessly.

Robust Backend: RESTful API handling book data and user interactions.

Persistent Storage: MySQL database for storing book information.

Scalable Deployment: Kubernetes ensures high availability and scalability.

Ingress Management: Access services via custom domain using Ingress.

🛠️ Prerequisites
Before you begin, ensure you have the following installed:

Docker Desktop with Kubernetes enabled

kubectl

Visual Studio Code (optional, for code editing)

Node.js and npm (for frontend and backend development)


Setup Instructions

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/baig892/k8s-project.git
cd k8s-project/bookstore-k8s
2. Enable Kubernetes in Docker Desktop
Open Docker Desktop.

Navigate to Settings > Kubernetes.

Check Enable Kubernetes and apply changes.

3. Start Kubernetes Cluster
Ensure Kubernetes is running:

bash
Copy
Edit
kubectl cluster-info
4. Create Namespace
bash
Copy
Edit
kubectl apply -f namespace.yaml
5. Deploy MySQL Database
bash
Copy
Edit
kubectl apply -f mysql/
6. Deploy Backend Service
bash
Copy
Edit
kubectl apply -f backend/
7. Deploy Frontend Service
bash
Copy
Edit
kubectl apply -f frontend/
8. Configure Ingress
bash
Copy
Edit
kubectl apply -f ingress/
9. Update Hosts File
Add the following line to your system's hosts file:

bash
Copy
Edit
127.0.0.1 bookstore.local


 Accessing the Application
Once all services are up and running, access the application via:

Frontend: http://bookstore.local/frontend

Backend API: http://bookstore.local/backend/api/books

 Testing the Application
You can use tools like Postman or curl to test the backend API endpoints. For example:

bash
Copy
Edit
curl http://bookstore.local/backend/api/books
