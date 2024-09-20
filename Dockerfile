FROM node:18.17.1-alpine as builder

RUN npm install -g npm@latest

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install --legacy-peer-deps && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui

WORKDIR /nextjs-ui

COPY . .

# Build the project and copy the files
RUN npm run build
RUN npm run export


FROM nginx:stable-alpine
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stahg 1
COPY --from=builder /nextjs-ui/out /usr/share/nginx/html

COPY ./.nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000 80


ENTRYPOINT ["nginx", "-g", "daemon off;"]
