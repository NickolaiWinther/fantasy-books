let books = [];
const load = require.context('../public/images', false, /(.*(json|png)$)/).keys();
for (let i = 0; i < load.length; i+=2) {
   books.push({
      "name": load[i].replace(/([A-Z])/g, ' $1').replace(/(.\/ |\.[^/.]+$)/g, ''),
      "image": load[i+1].replace(/.\//g, ''),
      "text": load[i].replace(/.\//g, '')
   });
   
}

export default books;