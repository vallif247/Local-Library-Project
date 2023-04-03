function forInObject(obj, id) {
  for (item in obj) {
    if (obj[item].id === id) {return obj[item]}
  }
}

function findAuthorById(authors, id) {
let helper = forInObject(authors, id)
return helper
}

function findBookById(books, id) {
let helper = forInObject(books, id)
return helper
}

function partitionBooksByBorrowedStatus(books) {
  let booksOut = books.filter((book) => 
    book.borrows.some((borrow) => borrow.returned === false))
  let booksReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true))
  let bookStatus = [booksOut, booksReturned]
  return bookStatus
}

function getBorrowersForBook(book, accounts) {
  let findAccount = accounts.filter((account) => book.borrows.find((borrow) => borrow.id === account.id))
  const idArray = findAccount.map((account) => {
    const borrowed = book.borrows.find((borrow) => borrow.id === account.id)
    account.returned = borrowed.returned
    return account
  })
  return idArray                                                
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
