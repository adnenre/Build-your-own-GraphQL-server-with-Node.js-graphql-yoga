
const { links  } =  require('../data');

let info = ()  => `This is the API implementation for Hackernews made by adnen rebai`;
let feed = () => links;
  
let link = (root,{id}) => links.filter(el => el.id == id);


module.exports = {
    info,
    feed,
    link
}