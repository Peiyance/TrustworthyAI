# Provision

Create EKS cluster
```
eksctl create cluster -f cluster.yaml
```

Install LB Controller dependencies
```
https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html
```

Provision Ingress service
```
kubectl create -f manifest/ingress.yaml
```

Provide docker registry secret
```
kubectl create secret docker-registry guardai-registry-key \
--docker-server=DOCKER_REGISTRY_SERVER \
--docker-username=DOCKER_USER \
--docker-password=DOCKER_PASSWORD \
--docker-email=DOCKER_EMAIL
```

Update Docker image in deployment chart if needed, then
```
helm install guardai ./helm/guardai/
```


Clean up
```
eksctl delete cluster --name cluster.k8s.local
```