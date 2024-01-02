// function that will take authors array and author ID, and return author object.
const grabAuthorById = (authors, id) => {
    return authors.find((author) => author.id === id);
};

module.exports = {grabAuthorById};