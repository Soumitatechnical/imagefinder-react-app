import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Form from './components/Form'
import ImageView from './components/ImageView';


const API_KEY="19355149-0c8eb06e63e692a39610cc13a";


 class App extends Component {

  state={
    images:[]
  };

  // componentDidMount (){
  //   this.handleGetRequest();
  // }

  handleGetRequest = (e) =>{
    
    e.preventDefault();
    const searchTerm=e.target.elements.searchValue.value;
    if(searchTerm){

        
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=yellow+${searchTerm}&image_type=photo&pretty=true`)
        .then((res)=>{
          this.setState({images: res.data.hits})
          console.log(this.state.images);
        })
        .catch((err)=>{
          console.log(err);
        })
  }else{
    alert("Please Enter an image name");
  }

  }





  render() {
    return (
      <div className="app">
        <h1 className="text-center py-2">Search for Images....</h1>
        <Form handleGetRequest={this.handleGetRequest}/>
        <ImageView images={this.state.images} style={{marginTop:"2rem"}}/>
      </div>
    )
  }
}

export default App

