import axios from "axios";

const API_BASE = "http://localhost:8090/api/";

const BOOKS_API_URL = API_BASE + "books/";

const validateBookData = (bookData) => {
  return (
    "title" in bookData && "author" in bookData && "publisher" in bookData && "subject" in bookData
  );
};

export default class BookApi {
  static getBooks = () => axios.get(BOOKS_API_URL);

  static getBookById = (id) => axios.get(BOOKS_API_URL + id);

  static createBook = (bookData) => {
    if (!validateBookData(bookData)) return Promise.reject("Invalid data");
    return axios.post(BOOKS_API_URL, bookData);
  };
  
  static updateBook = (id, bookData) => {
    if (!validateBookData(bookData)) return Promise.reject("Invalid data");
    return axios.patch(BOOKS_API_URL + id, bookData);
  };

  static deleteBook = async (id) => axios.delete(BOOKS_API_URL + id);
}
