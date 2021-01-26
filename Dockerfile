# Employ the builder pattern
FROM node:alpine as angular

# Install Angular CLI once, use cached layer for future builds

COPY package.json package-lock.json ./
RUN npm install -g @angular/cli

# Storing node modules on a separate layer will prevent unnecessary npm installs at each build

RUN npm ci --verbose
RUN mkdir /app
RUN mv ./node_modules /app
WORKDIR /app
COPY . .
RUN ng build --prod --aot --deploy-url /hotbev/ --base-href /hotbev/
FROM nginx:alpine as node
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
RUN mkdir /usr/share/nginx/html/hotbev
COPY --from=angular /app/dist/CoffeeDrinks /usr/share/nginx/html/hotbev
EXPOSE 80

# then build: docker build -t mpp04/hotbevfrontend .
# then push to docker registry, thus
# sudo docker push mpp04/hotbevfrontend
# then to run image:
# sudo docker run -p 80:80 -t mpp04/hotbev_frontend
# note you might have to login first using: sudo docker loing #followed by credentials wizzard
# last_update: 22 JAN 1237
