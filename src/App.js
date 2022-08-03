import "./App.css";
import React from "react";
import HeaderSearch from "./components/HeaderSearch";
import ImagesBody from "./components/ImagesBody";
import Loader from "./assets/loadergif.gif";
import { Oval } from "react-loader-spinner";
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
      is_photoFinded: 0,
    };

    let url = `${window.location.origin}#food`;
    window.history.pushState("", "", url);
  }

  /*
  * triggers the function when component is loaded
  */
 
  componentDidMount() {
    this.FetchData(this.state.imgTags);
  }

  /*
   * Get Images Data from the fliker api
   */
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
          is_photoFinded: result.photos.photo.length,
          imgTags: imgTag,
        });
        $("#searchTxt").val(imgTag);
      });
  }

  /*
   *Rendering Components
   */

  render() {
    /*
     * items are json of image
     * imgTags is searchkeyword input
     * loaded is used to prevent loading of component before imageJson return
     */
    const { items, loaded, imgTags, is_photoFinded } = this.state;
    if (!loaded) {
      return (
        <div className="container">
          <Oval
            color="#00BFFF"
            height={"15%"}
            width={"15%"}
            wrapperClass={"loader"}
          />
        </div>
      );
    } else {
      return (
        <div className="container">
          <HeaderSearch search={(imgdata) => this.FetchData(imgdata)} />
          <ImagesBody
            photos={items.photos.photo}
            imgTag={imgTags}
            is_photoFinded={is_photoFinded}
          />
        </div>
      );
    }
  }
}

export default App;
