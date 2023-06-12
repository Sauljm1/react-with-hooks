import React from 'react';
import Drinks from './Drinks.js'


export default class FavoriteList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            favoriteList : []

        };
    }



   AddFavorite  = () => {
        console.log("favorite Added")
        this.setState(
            {
              favoriteList: [...this.state.favoriteList, ["Rum and Coke"]]
            }
          )
          console.log(this.state.favoriteList)
         return  this.state.favoriteList
     }


      render() {
          return (
            <div>
            <h1> 'Favorite Drinks"</h1>
            <button onClick={handleAddFavorite}> Add to Favorite List</button>
            </div>
      )}

}

const handleAddFavorite = event => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log('Image clicked');

  };
