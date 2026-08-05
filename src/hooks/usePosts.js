import { useState, useEffect } from "react";

export default function usePosts() {
  const [characters, setCharacters] = useState([]);

  const [books, setBooks] = useState([]);

  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []);

  async function handleData() {
    try {
      const [charResponse, bookResponse] = await Promise.all([
        fetch("https://potterapi-fedeperin.vercel.app/en/characters"),
        fetch("https://potterapi-fedeperin.vercel.app/en/books"),
      ]);
      const charData = await charResponse.json();
      const bookData = await bookResponse.json();

      // const charDetails = charData.map(toCharacters);
      // const bookDetails = bookData.map(toBooks);

      setCharacters(charData);
      setBooks(bookData);
    } catch (error) {
      console.error("Failed to load Harry Potter data:", error);
    }
  }

  function componentDidMount() {
    setDidMount(true);
    handleData();
  }

  return [handleData, characters, books, didMount];
}
