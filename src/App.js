import "./App.scss";
import { CiEdit } from "react-icons/ci";
import { BiExpandAlt, BiSolidShow } from "react-icons/bi";
import { MdCloseFullscreen } from "react-icons/md";
import { useState } from "react";
import { marked } from "marked";

function App() {
  const textMarkup = `
  # How fun is it to write stuff here and see it appears down there?
  ## You can put a h2

  Want some text attributes *italic*, **bold**,
 ~~strikethrough~~ ?

 You want an unordered list? Just put a star in front of each item:

 * Pikachu
 * Charmander
 * Bulbasaur
 
 If you're feeling more like a numbered list, feel yourself:

 1. Scary Movie
 2. Titanic
 3. American Pie

 FreeCodeCamp also wanted to see some [links](https://www.pokemon.com/us), and
 > Block Quotes!

 And this challenge wouldn't be complete without a picture of my favourite pokemon!

 ![Sableye picture](https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/sableye.gif)

`;

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [textContent, setTextContent] = useState(textMarkup);

  const toggleEditor = () => {
    const editorShow = document.getElementById("editor");
    const previewer = document.getElementById("previewer");
    const textarea = document.getElementById("textarea");

    setIsVisible(!isVisible);

    if (!isVisible) {
      textarea.style.height = "100%";
      editorShow.style.height = "100vh";
      previewer.style.display = "none";
    } else {
      textarea.style.height = "";
      editorShow.style.height = "";
      previewer.style.display = "flex";
    }
  };

  const togglePreviewer = () => {
    const editorShow = document.getElementById("editor");
    const previewer = document.getElementById("previewer");

    setIsVisible2(!isVisible2);

    if (!isVisible2) {
      editorShow.style.display = "none";
      previewer.style.height = "fit-content";
    } else {
      editorShow.style.display = "block";
      editorShow.style.height = "";
      previewer.style.display = "flex";
      previewer.style.height = "";
    }
  };

  const updateMarkdown = (event) => {
    setTextContent(event.target.value);
  };

  return (
    <div className="App">
      <div className="mp-container">
        <div id="editor" className="mp-container__editor">
          <div className="mp-container__editor__top">
            <CiEdit
              className="mp-container__editor__top__edit-icon"
              size={25}
            />
            <span className="mp-container__editor__top__title">Editor</span>
            {!isVisible ? (
              <BiExpandAlt
                className="mp-container__editor__top__expand-icon"
                size={25}
                onClick={toggleEditor}
              />
            ) : (
              <MdCloseFullscreen
                className="mp-container__editor__top__close-icon"
                size={25}
                onClick={toggleEditor}
              />
            )}
          </div>
          <textarea
            className="mp-container__editor__textarea"
            onChange={updateMarkdown}
            value={textContent}
            id="textarea"
          />
        </div>
        <div id="previewer" className="mp-container__previewer">
          <div className="mp-container__editor__top">
            <BiSolidShow
              className="mp-container__editor__top__edit-icon"
              size={25}
            />
            <span className="mp-container__editor__top__title">Previewer</span>
            {!isVisible2 ? (
              <BiExpandAlt
                className="mp-container__editor__top__expand-icon"
                size={25}
                onClick={togglePreviewer}
              />
            ) : (
              <MdCloseFullscreen
                className="mp-container__editor__top__close-icon"
                size={25}
                onClick={togglePreviewer}
              />
            )}
          </div>
          <div
            className="mp-container__previewer__text-preview"
            dangerouslySetInnerHTML={{
              __html: marked(textContent),
            }}
          ></div>
        </div>
        <div className="attribution">
          Coded by <a href="https://github.com/KangFennex">Kangkm</a>
        </div>
      </div>
    </div>
  );
}

export default App;
