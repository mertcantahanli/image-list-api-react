import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [],
            imagearr: 1 };
  

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=27573759-6f2c0519db2b080e3b17b6763&q=${entry}&image_type=photo`
    );
    this.setState({ images: response.data.hits });
    this.setState({imagearr:response.data.hits.length })
  };
    
 
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <h1>Aramak İstediğiniz Fotoğraf İçin Uygun Kelimeyi Giriniz</h1>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} imagearr={this.state.imagearr} />
      </div>
    );
  }
}

export default App;
