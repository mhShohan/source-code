//Book Class:  Represent a Book
 class Book{
     constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
     }
 }

//UI Class: Handle UI Tasks
class UI{
     static displayBooks() {
         const books = Store.getBooks();

         books.forEach((book) => UI.addBookToList(book));
     }
     static addBookToList(book){
         const list = document.querySelector('#book-list');

         const row = document.createElement('tr');

         row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
         `;
        list.appendChild(row)
     }


     static showAlert(message, className){
         const div = document.createElement('div');
         div.className = `alert alert-${className}`;
         div.appendChild(document.createTextNode(message));

         const container = document.querySelector('.container');
         const form = document.querySelector('.book-form');

         container.insertBefore(div, form);

         //Remove after 2sec
         setTimeout(() => document.querySelector('.alert').remove(),2000);
     }

     static deleteBook(el){
         if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
         }
     }

     static clearFields(){
         document.querySelector('#title').value = '';
         document.querySelector('#author').value = '';
         document.querySelector('#isbn').value = '';
     }
}

//Store Class: Handle Store
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a  Book
document.querySelector('.book-form').addEventListener('submit', (e) => {

    e.preventDefault();
     
    //Get Form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validation
    if(title ==='' || author ==='' || isbn === ''){
        UI.showAlert('Please fill all fields', 'danger');
    }else{
        //new book
        const book = new Book(title, author, isbn);

        //Add book To UI
        UI.addBookToList(book);

        //Add Book to Localstorage
        Store.addBook(book);

        //Book Added Message show
        UI.showAlert('Book added', 'success')
        
        //Clear Feild
        UI.clearFields();
    }

    
});

//Even: remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    //Remove Book from UI
    UI.deleteBook(e.target);

    //Remove Book from Store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //Remove Book message
    UI.showAlert('Delete book', 'dark');
});