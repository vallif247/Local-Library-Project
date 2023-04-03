function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let countBooks = 0
  books.forEach((book) => book.borrows.some((borrow) => {if (!borrow.returned) countBooks++}))
  return countBooks
}

function getMostCommonGenres(books) {
 let genresArray = books.reduce((result, book) => {
  if (result[book.genre]) {
    result[book.genre]++
  }
   else {
     result[book.genre] = 1
   }
    return result
  }, {})
 let completeArray = []
 for (genre in genresArray) {
   completeArray.push({
     name: genre,
     count: genresArray[genre]
   })
 }
completeArray.sort((a, b) => b.count - a.count) 
  return completeArray.slice(0, 5)
}

function getMostPopularBooks(books) {
   let genresArray = books.reduce((result, book) => {
    result.push({
      name: book.title,
      count: book.borrows.length
    })
    return result
  }, [])
  genresArray.sort((a, b) => b.count - a.count) 
  return genresArray.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  let authorObj = authors.reduce((result, author) => {
    result.push({ id: author.id,
      name: author.name.first + " " + author.name.last,
      count: 0
    })
    return result
  }, []) 
  books.forEach((book) => { 
    const author = authorObj.find((obj) => book.authorId === obj.id ) 
    author.count+=book.borrows.length
  })
  const newAuthor = authorObj.reduce((result, author) => {
    result.push({
      name: author.name,
      count: author.count
    })
    return result
  }, [])
  newAuthor.sort((a, b) => b.count - a.count)
  return newAuthor.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
