//import { render } from '@testing-library/react';
import React from 'react';

class Drinks extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            drinks: []
        })
    }

    componentDidMount(){
        fetch('//localhost:3001/')
        .then(res => res.json())
        .then(data => {
          this.setState({
            drinks: data.drinks
                })
        })
        }



    render(){
        let contents=[]
        contents = this.state.drinks.map(element => <p><h2>{element.strDrink} </h2><br></br> <img src = {element.strDrinkThumb} onClick={handleClick} /> </p>)
        
       
         
        return <>{contents}</>

    }

}

function test(){

        
}
const handleClick = event => {
    // 👇️ refers to the image element
    console.log(event.target);

    console.log('Image clicked');
  };

  

export default Drinks