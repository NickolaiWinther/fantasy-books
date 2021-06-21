async function getBooks() {
   let load = await fetch('http://localhost:3001/books');
   load = await load.json();
   console.log(load);
   return load;
}

export default getBooks();