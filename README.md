# TrustworthyAI

## Local Dev Env Setup

- frontend
  npm run start

- backend
  python app.py

## Setup in a new EC2 instance

Install nginx

```
sudo apt install nginx
```

Install apps

```
sudo apt install certbot python3-certbot-nginx ranger docker.io
```

Configure nginx

```
sudo certbot --nginx -d guardai.io -d www.guardai.io
```

Add this to the top of the nginx.conf on the EC2 instance

```
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=1r/s;
```

Add proxy_pass` to both 80 and 443 blocks

```
    location / {
        # Rate limits backend API calls
        limit_req zone=mylimit;

        proxy_pass http://127.0.0.1:3000/;
    }
```

See an example of final nginx configuration in`/deployment/default`.


Finally, restart nginx

```
sudo systemctl restart nginx
```



## Build and run docker

Build:

```bash
docker build --pull --rm -f Dockerfile -t trustworthy-ai .
```

To run the docker image locally:

```bash
docker run --rm -p 3000:80/tcp trustworthy-ai
```

To push docker image to the repository:

```bash
docker tag trustworthy-ai:latest paulcccccch/trustworthy-ai:latest
docker push paulcccccch/trustworthy-ai:latest
```

To pull docker:

```bash
docker login
docker run -p 3000:80 paulcccccch/trustworthy-ai:latest
```

Clean up: 

```
sudo docker stop $(sudo docker ps -aq)
sudo docker rm $(sudo docker ps -aq)
sudo docker rmi $(sudo docker images -q)
```


# Environment Setting:

## Frontend:

* a. Download "Node.js". https://nodejs.org/en/download 

* b. Once you have downloaded it successfully, run this code then you should be able to see the version number.

```bash
node --version
```

* c. Go to the 'frontend' directory and run this code and you will see a file called "node modules" in the frontend file.

```bash
npm install
```

* d. Run this code and a website should pop up.

```bash
npm run start
```

## Backend:

* a. Download "Miniconda". https://docs.conda.io/projects/miniconda/en/latest/miniconda-install.html

* b. Once you have downloaded it successfully, run this code then you should be able to see the version number.

```bash
conda --version 
```

* c. Go to the 'backend' directory.

* d. Create a virtual environment using this code: 

```bash
conda create --name 'name_of_environment'
```

* e. Activate the environment you just created using this code: 

```bash
conda activate 'name_of_environment'
```

You may check the existing environment using this code: 


```bash
conda env list
```

* f. In the environment you just activated, install all the modules in requirements.txt

```bash
pip install -r requirements.txt
```

You can use this code to check what modules you already have in your environment:

```bash
conda list
```

* g. When all the modules are successfully downloaded, you should be able to run the whole project. Run this code to see if it works. (Be sure you are in the correct environment)

```bash
python app.py
```
