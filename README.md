# Hackernews API

## About

- **Api to reduce the number of get requests from frontend**

### You can host your own or use the provided one i.e. `https://hack-middleware.herokuapp.com`

- **example**: `https://hack-middleware.herokuapp.com/api/top/10`

### **can use different endpoints for different purposes like this!**

## Endpoints

- `GET` : `/api/top/:num` : get the top n stories

- `GET` : `/api/new/:num` : get the new n stories

- `GET` : `/api/best/:num` : get the best n stories

- `GET` : `/api/particular/:id` : get the particular story with id :id

  > can get Id from stories fetch body i.e.

  ```JSON
        {
            "by": "apple4ever",
            "descendants": 1,
            "id": 32277424,
            "kids": [
                32277425
            ],
            "score": 1,
            "time": 1659105162,
            "title": "Microsoft Bing – site gone from SERP overnight",
            "type": "story",
            "url": "https://io.bikegremlin.com/28530/microsoft-bing-serp-gone-overnight/"
        }
  ```

  - "kids" contains array of top level comment id's, these comments can be fetched using `GET` : `/api/particular/:id` operation, can be done in nested manner!
