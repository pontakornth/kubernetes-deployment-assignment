# Kubernetes Minikube Deployment Assignment

It is for the assignment only.

## How to set up.

1. Make sure you installed, Docker, `kubectl`, and `minikube`
2. Clone this repo.
3. Build the Dockerfile with `-t hello-kube`
4. Start Minikube `minikube start`
5. Create deployment using `kubectl create -f deployment.yml`
6. You can access `minikube service assignmentservice --url`

The sixth step exposes the port. However, it will be a different port if Docker driver is used to run `minikube`.

## Usage

- `/` endpoint displays "Hello, World" message
- `/goodbye` endpoint crashes the program and exits with status 1

