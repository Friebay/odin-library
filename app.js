// Array to store all books
const myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}`;
    }
}

// Function to add new book to library
function addBookToLibrary() {
    // Get user input
    const title = prompt("Enter book title:");
    const author = prompt("Enter book author:");
    const pages = parseInt(prompt("Enter number of pages:"));
    const read = confirm("Have you read this book? OK for yes, Cancel for no");
    
    // Create new book object
    const newBook = new Book(title, author, pages, read);
    
    // Add book to library array
    myLibrary.push(newBook);
    
    // Update the display
    displayBooks();
}

// Function to display all books
function displayBooks() {
    const tableBody = document.getElementById('library-content');
    tableBody.innerHTML = ''; // Clear existing content
    
    myLibrary.forEach((book, index) => {
        const row = document.createElement('tr');
        
        // Add book information
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>
                <button onclick="toggleRead(${index})" class="status-btn">
                    ${book.read ? 'Read' : 'Not Read'}
                </button>
            </td>
            <td>
                <button onclick="removeBook(${index})" class="remove-btn">
                    Remove
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to toggle read status
function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

// Function to remove book
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Add some example books
myLibrary.push(new Book("test1", "test2", 123, false));
myLibrary.push(new Book("test2", "test3", 1, true));

// Display books when page loads
document.addEventListener('DOMContentLoaded', displayBooks);