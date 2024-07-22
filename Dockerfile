# Step #1: build the React front end
FROM node:14-bullseye-slim as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN mkdir ./frontend
COPY ./frontend/package.json ./frontend/package-lock.json ./frontend/
WORKDIR /app/frontend
RUN npm install -g npm@8.5.4
# It's OK to have multiple consecutive `RUN` instructions.
# hadolint ignore=DL3059
RUN npm install

WORKDIR /app
COPY ./frontend ./frontend

WORKDIR /app/frontend
RUN npm run build

FROM python:3.10.13-slim-bullseye 
RUN apt-get update && apt-get install -y nginx  \
    && rm -rf /var/lib/apt/lists/*

# hadolint ignore=DL3013
RUN python3 -m pip install --upgrade pip \
    && pip install gunicorn==20.1.0



COPY ./backend ./backend
RUN pip install -r ./backend/requirements.txt

# Step #3: configure nginx and flask
COPY --from=build-step /app/frontend/build /usr/share/nginx/html
COPY deployment/docker/nginx.conf /etc/nginx/sites-enabled/default
COPY deployment/docker/serve.sh .
RUN chmod a+x ./serve.sh

# run server
EXPOSE 80
ENTRYPOINT ["/bin/bash"]
# Run with single core by default. Override this to run with more
# workers. It is also possible to pass it any number of gunicorn
# arguments.
CMD ["./serve.sh"]