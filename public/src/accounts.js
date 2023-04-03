function findAccountById(accounts, id) {
  for (item in accounts) {
    if (accounts[item].id === id) {return accounts[item]}
  }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((itemA, itemB) => itemA.name.last > itemB.name.last ? 1:-1)
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0
  books.forEach(book => book.borrows.forEach(borrow => account.id === borrow.id && counter ++))
 return counter
}

function getBooksPossessedByAccount(account, books, authors) {
   const booksCheckedOut = books.filter((book) => book.borrows.find((borrow) => borrow.id === account.id && !borrow.returned))
   const booksWithAuthors = booksCheckedOut.map((book) => {book['author'] = authors.find((author) => author.id === book.authorId)
   return book
   })
return booksWithAuthors
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
