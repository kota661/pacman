[![Build Status](https://travis-ci.com/kota661/pacman.svg?branch=master)](https://travis-ci.com/kota661/pacman)

# Pacman!

## Run the app locally - docker

```
cd v1
docker build -t pacman .
docker run -d -p 80:80 pacman
```


## Run the app locally - node

```shell
cd v1
npm install
npm start
```


## IBM Cloud Foundry

```
cd v1
ibmcloud cf push pacman .
```


## IBM Cloud Kubernetes Service

```
kubectl run pacman --image=kota661/pacman:v1 --port=80
kubectl expose deployment pacman --port 80 --type NodePort
# NodePort Access
WORKER_NODE_PUBLIC_IP=$(kubectl get node -o=jsonpath='{.items[0].status.addresses[?(@.type=="ExternalIP")].address}')
NODE_PORT=$(kubectl get svc pacman -o=jsonpath='{.spec.ports[0].nodePort}')
echo http://$WORKER_NODE_PUBLIC_IP:$NODE_PORT
# version up
kubectl set image deploy/pacman pacman=kota661/pacman:v2
echo http://$WORKER_NODE_PUBLIC_IP:$NODE_PORT
```

