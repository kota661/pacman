# pacman


## IBM Cloud Foundry

```
ibmcloud cf push pacman .
```

## IBM Cloud Kubernetes Service

```
kubectl run pacman --image=kota661/pacman:latest --port=80
kubectl expose deployment pacman --port 80 --type NodePort
```
