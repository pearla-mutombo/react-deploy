import { useState, useEffect } from "react";
import imageData from "../data/data.js";
import usePosts from "../hooks/usePosts.js";

export default function Posts() {
  const [handleData, characters, books, didMount] = usePosts();

  const [images, setImages] = useState();

  useEffect(() => {
    handleData();
    componentDidMount();
  }, []);
  // handleData is included as a stable dependency,
  // To run both functions safely exactly once when the component mounts,
  //  call them sequentially inside a single, clean anonymous arrow function
  // researched how to write this syntac on google.com search
  // b/c i had orginally written it as
  // 'useEffect (compononetDidMount, handleData(), [])'
  // it showed an error message which prompt me to look it up.

  return (
    <main>
      <h2>Main Content Area</h2>
      <p>{"Component status: DidMount " + didMount}</p>

      <p className="postPara">I. Harry Potter's Characters: </p>
      <section>{characters.map(toCharacters)}</section>
      <br />
      <p className="postPara">II. Harry Potter's Books: </p>
      <section>{books.map(toBooks)}</section>
      <br />
      <p>III. Showing a list of data as images using React: </p>
      <section>{images}</section>
    </main>
  );

  function toCharacters(dataItem) {
    const key = dataItem.index;
    const details = (
      <details key={key}>
        <summary>{dataItem.fullName}</summary>
        <figure>
          <img className="imgTag" src={dataItem.image} />
          <figcaption>{dataItem.interpretedBy}</figcaption>
        </figure>
      </details>
    );
    return details;
  }

  function toBooks(item, index) {
    const key = index + item.title;
    const details = (
      <details key={key}>
        <summary>{item.title}</summary>
        <img className="imgTag" src={item.cover} alt={item.title} />
        <figcaption>{item.description}</figcaption>
      </details>
    );
    return details;
  }

  function componentDidMount() {
    const figures = [];
    for (let index = 0; index < imageData.length; index++) {
      const figure = (
        <figure key={index}>
          <img className="imgTag" src={imageData[index].src} />
          <figcaption>{imageData[index].caption}</figcaption>
        </figure>
      );
      figures.push(figure);
    }
    setImages(figures);
  }
}
