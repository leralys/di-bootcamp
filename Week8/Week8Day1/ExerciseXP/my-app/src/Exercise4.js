import "./App.css";
import React from "react";
import "./Exercise4.css";


class Tags extends React.Component {
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <div className="App">
                {/* <h1 style={{ color: "red", background: "blue" }}>This is a header</h1> */}
                <h1 style={style_header}>This is a header</h1>
                <p className="para">This is a paragraph</p>
                <a href="#">This is a link</a>
                <form>
                    <label for="name">
                        <input type="text"></input>
                        <button type="submit">Sumit</button>
                    </label>
                </form>
                <img src="http://fosi-assets.s3.amazonaws.com/media/original_images/funny-game-of-thrones-memes-coverimage.jpg"></img>
                <ul>This is a list:
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        )
    }
}



export default Tags;