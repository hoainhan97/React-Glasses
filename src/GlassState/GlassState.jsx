import React, { Component } from 'react'
import GlassList from './GlassList';

export default class GlassState extends Component {
    glassesList = [
        {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: "/glassesImage/v1.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 2,
          price: 50,
          name: "GUCCI G8759H",
          url: "./glassesImage/v2.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 3,
          price: 30,
          name: "DIOR D6700HQ",
          url: "./glassesImage/v3.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 4,
          price: 70,
          name: "DIOR D6005U",
          url: "./glassesImage/v4.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 5,
          price: 40,
          name: "PRADA P8750",
          url: "./glassesImage/v5.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 6,
          price: 60,
          name: "PRADA P9700",
          url: "./glassesImage/v6.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 7,
          price: 80,
          name: "FENDI F8750",
          url: "./glassesImage/v7.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 8,
          price: 100,
          name: "FENDI F8500",
          url: "./glassesImage/v8.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 9,
          price: 60,
          name: "FENDI F4300",
          url: "./glassesImage/v9.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
      ];
    
      state = {
        glassInfo: {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: "/glassesImage/v1.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
      };
    
      showInfo = (glassInfo) => {
        let newState = {
          glassInfo: glassInfo
        }
        this.setState(newState);
      }
    
  render() {
    let {url, name, price, desc} = this.state.glassInfo;
    return (
      <div  className="container-fluid text-center home">
         <div>
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className="glasses__card d-flex">
          <div className="glasses__model w-25" id="avatar">
            <img
              src={url}
              className="glasses__avatar"
              alt=""
            />
          </div>
          <div id="glassesInfo" className="glasses__info">
            <div className="title">
              <h6>{name}</h6>
            </div>
            <div className="body-Glass">
              <div className="price">
                <span>${price}</span>
              </div>
            </div>
            <div className="footer-Glass">
              <p className="mb-0">{desc}</p>
            </div>
          </div>
        </div>
        <div className="glassesList mt-5">
          <GlassList glassesList={this.glassesList} showInfo={this.showInfo}/>
        </div>
      </div>
    )
  }
}
