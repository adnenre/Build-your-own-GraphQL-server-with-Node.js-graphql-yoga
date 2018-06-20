
const  {links}  =  require('../data');

let idCount = links.length;
function post(root, args){
    const link = {
     id: `link-${idCount++}`,
     description: args.description,
     url: args.url,
   }
   links.push(link)
   return link
 };


function updateLink(root,args){
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
 };


function deleteLink(root,args){
   const linkIndex = links.findIndex(link =>link.id === args.id);
   if (linkIndex === -1) {
     throw new Error(`Couldn’t find link with id ${args.id}`);
   }
     const linkWillbeDeleted = links[linkIndex];
     links.splice(linkIndex,1);
     return linkWillbeDeleted;
};


module.exports = {
    updateLink,
    deleteLink,
    post
    
}