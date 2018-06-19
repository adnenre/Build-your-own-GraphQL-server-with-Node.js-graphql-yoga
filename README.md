
# HOW TO GRAPHEQL - EXERCICE SOLUTION - A SIMPLE MUTATION 

find the exercice, check out this [article](https://www.howtographql.com/graphql-js/3-a-simple-mutation/).

## Usage

### 1. Clone repository 

```sh
git clone https://github.com/adnenre/Build-your-own-GraphQL-server-with-Node.js-graphql-yoga.git
cd Build-your-own-GraphQL-server-with-Node.js-graphql-yoga

```



### 2. Start the server

Now, you can start the server:

```sh
node src/index.js
```

### 3. play with query , mutation
#### 1.get all links
```
query{
  feed{
    id
    url
    description
  }
}

```

#### 2.post a link 

```
mutation{
  post(
    url:"adnenre.github.io"
    description:"this is the portfolio of adnen rebai"
  ){
    id
    url
    description
  }
}
```
#### 3.update a link 

```
mutation {
  updateLink(
    id :"link-1"
    url:"www.nodisdev.com"
    description:"novisdev is a web site developed by adnen rebai"
  ){
    id
    url
    description
  }
  
}
```
#### 4.get a link by Id

```
query{
  link(id: "link-1") {
    id
    url
    description
  }

}
```
#### 5.delete a link 

```

mutation{
  deleteLink(id:"link-1"){
    id
    url
    description
  }
  
}
```
