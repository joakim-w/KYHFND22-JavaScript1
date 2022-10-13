function Product(name, price, description) {
  this.productName = name;
  this.price = price;
  this.description = description

  this.summary = function() {
    console.log(this)
    return `The product ${this.productName} costs ${this.price} SEK.`
  }
}

const Book = function(title, author, year) {
  this.title = title
  this.author = author
  this.year = year

  this.id = Date.now()
  this.summary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`
  }
}


// instans av ett objekt
// "new" binder "this" till den nya instansen av objektet
const product1 = new Product('Product1', 100, 'this is a product description');
const product2 = new Product('Product2', 200, 'this is a product description');
const product3 = new Product('Product3', 300, 'this is a product description');


console.log(product3.summary())
// console.log(product2)


const book1 = new Book('Book 1', 'Joakim', '2020');
const book2 = new Book('Book 1', 'Joakim', '2020');

console.log(book1)

// const newBook = (title, author, year) => {
//   const book = {
//     title, 
//     author,
//     year
//   }

//   return book
// }

// const book3 = newBook('book3','Nisse', '1987')

// console.log(book3)