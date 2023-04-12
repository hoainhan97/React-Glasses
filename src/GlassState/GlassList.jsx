import React, { Component } from 'react'

export default class GlassList extends Component {
    renderGlassList = () => {
        return this.props.glassesList.map((glass) => {
          return <div className="col-2 mt-2" key={glass.id}>
          <img onClick={()=>{
            this.props.showInfo(glass)
          }} src={glass.url} className="img-fluid" alt="this is image"/>
          </div>
        })
      }
  render() {
    return (
      <div className='row'>
        {this.renderGlassList()}
      </div>
    )
  }
}
