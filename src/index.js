const { GraphQLServer } = require('graphql-yoga')

// 1

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }]

let idCount = links.length;
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed : () => links,
    link : (_,{id}) => links.filter(el => el.id == id)
     
    
  },
  Mutation: {
    
    post: (root, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    },
    updateLink : (root,args) => {
      const link = {
        id : args.id,
        url : args.url,
        description : args.description
      }
      let oldlink= links.find(el =>el.id===link.id);
      if (!oldlink) {
        throw new Error(`Couldn’t find link with id ${link.id}`);
      }
      
      oldlink.url = link.url;
      oldlink.description = link.description;
      return oldlink;
    },
    deleteLink :(root,args)=>{
      const linkIndex = links.findIndex(link =>link.id === args.id);
      if (linkIndex === -1) {
        throw new Error(`Couldn’t find link with id ${args.id}`);
      }
        const linkWillbeDeleted = links[linkIndex];
        links.splice(linkIndex,1);
        return linkWillbeDeleted;

    }
  }
 

}

// 3
const server = new GraphQLServer({
  typeDefs : './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))