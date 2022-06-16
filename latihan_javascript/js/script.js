document.addEventListener('DOMContentLoaded', function () {
    const bookSubmit = document.getElementById('inputBook');
    bookSubmit.addEventListener('submit', function (event) {
      event.preventDefault();
      addBook();
    });
  });
  
  function addBook() {
    const tambahBuku = document.getElementById('inputBookTitle').value;
    const tambahPenulis = document.getElementById('inputBookAuthor').value;
    const tambahTahun = document.getElementById('inputBookYear').value;
    const generateBookID = generateBooksID();
  
    const generateBook = generateBookList(generateBookID, tambahBuku, tambahPenulis, tambahTahun, false);
    books.push(generateBook);
  
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  
  const books = [];
  const RENDER_EVENT = 'render-books';
  function generateBooksID() {
    return +new Date();
  }
  
  function generateBookList(id, title, author, year, isCompleted) {
    return {
      id,
      title,
      author,
      year,
      isCompleted,
    };
  }
  
  document.addEventListener(RENDER_EVENT, function () {
    const uncompletedBook = document.getElementById('incompleteBookshelfList');
    uncompletedBook.innerHTML = '';
  
    const completedBook = document.getElementById('completeBookshelfList');
    completedBook.innerHTML = '';
  
    for (const listBook of books) {
      const bookItem = incompleteBook(listBook);
      if (!listBook.isCompleted) {
        uncompletedBook.append(bookItem);
      } else {
        completedBook.append(bookItem);
      }
    }
  });
  
  function incompleteBook(generateBook) {
    const judulBuku = document.createElement('h2');
    judulBuku.innerText = generateBook.title;
  
    const penulis = document.createElement('p');
    penulis.innerText = 'Penulis :' + ' ' + generateBook.author;
  
    const tahun = document.createElement('p');
    tahun.innerText = 'Tahun :' + ' ' + generateBook.year;
  
    // const redBtn = document.querySelector('div.action button.red');
    const redBtn = document.createElement('button');
    redBtn.classList.add('red');
    redBtn.innerText = 'Delete';
  
    // const greenBtn = document.querySelector('div.action button.green');
    const greenBtn = document.createElement('button');
    greenBtn.classList.add('green');
    greenBtn.innerText = 'Complete';
  
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('action');
    buttonContainer.append(greenBtn);
    buttonContainer.append(redBtn);
  
    const container = document.createElement('div');
    container.classList.add('book_item');
    container.append(judulBuku, penulis, tahun);
    container.append(buttonContainer);
    container.setAttribute('id', `books-${generateBook.id}`);
  
    if (generateBook.isCompleted) {
      const bukuSelesai = document.createElement('button');
      bukuSelesai.classList.add('button');
  
      bukuSelesai.addEventListener('click', function () {
        addBookCompleted(generateBook.title);
      });
      container.append(bukuSelesai);
    } else {
      const hapusBuku = document.createElement('button');
      hapusBuku.classList.add('button');
  
      hapusBuku.addEventListener('click', function () {
        removeBookFromCompleted(generateBook.title);
      });
      container.append(hapusBuku);
    }
  
    return container;
  }
  
  function addBookCompleted(generateBookID) {
    const bookTarget = findBook(generateBookID);
  
    if (bookTarget == null) return;
    bookTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
  }
  
  function findBook(generateBookID) {
    for (const bookItem of books) {
      if (bookItem.id === generateBookID) {
        return bookItem;
      }
    }
    return null;
  }
  