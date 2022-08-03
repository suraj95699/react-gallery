import "./App.css";
import React from "react";
import Images from "./Images";
import $ from "jquery";

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {};
    this.state = {
      items: [],
      loaded: false,
      imgTags: "food",
      photoFinded: 0,
    };

    let url = `${window.location.origin}#food`;
    window.history.pushState("", "", url);
  }

  componentDidMount() {
    this.FetchData(this.state.imgTags);
  }

  getdata(imgTag) {
    this.setState({ imgTags: imgTag });

    this.FetchData(imgTag);
  }

  FetchData(imgTag) {
    let method = "flickr.photos.search";
    let api_key = "636e1481b4f3c446d26b8eb6ebfe7127";
    let tags = imgTag;
    let per_page = 24;
    let format = "json";
    let nojsoncallback = true;
    fetch(
      `https://api.flickr.com/services/rest/?method=${method}&api_key=${api_key}&tags=${tags}&per_page=${per_page}&format=${format}&nojsoncallback=${nojsoncallback}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result,
          loaded: true,
          photoFinded: result.photos.photo.length,
        });
        $("#searchTxt").val(imgTag);
      });
  }

  render() {
    if (!this.state.loaded) {
      console.log("loading");
    } else {
      return (
        <div className="container">
          <div className="searchBar">
            <div className="search-form">
              <input
                type="text"
                name="search"
                id="searchTxt"
                placeholder="Search..."
                onKeyPress={(e) =>
                  e.key === "Enter"
                    ? this.getdata($("#searchTxt").val())
                    : false
                }
              />
              <button
                type="submit"
                className="search-button null"
                onClick={() => this.getdata($("#searchTxt").val())}
                disabled=""
              >
                <svg height="32" width="32">
                  <path
                    d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                    fill="#ffffff"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className="main-nav">
              <ul>
                <li>
                  <a href="#mountain" onClick={() => this.getdata("mountain")}>
                    Mountain
                  </a>
                </li>
                <li>
                  <a href="#beach" onClick={() => this.getdata("beach")}>
                    Beaches
                  </a>
                </li>
                <li>
                  <a
                    aria-current="page"
                    className="active"
                    href="#bird"
                    onClick={() => this.getdata("bird")}
                  >
                    Birds
                  </a>
                </li>
                <li>
                  <a href="#food" onClick={() => this.getdata("food")}>
                    Food
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>{this.state.imgTags}</h2>
            <div className="photo-container">
              <div>
                {this.state.photoFinded ? (
                  <ul>
                    <Images data={this.state.items.photos.photo} />
                  </ul>
                ) : (
                  <>
                    <h2>No Images Found </h2>
                    <p>Please try a different search term</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
