import React from 'react'
import { debounce } from 'lodash'
import CaptureService from '../services/CaptureService'
import animate from '../animate/index'

import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: null,
      postUrl: null
    }
  }

  async componentWillUpdate(newProps, newState) {
    if (this.state.postUrl !== newState.postUrl) {
      try {
        await this.capturePost(newState.postUrl)
        animate.animateCSS('#resImg', 'zoomIn')
      } catch (err) {
        console.log(err)
      }
    }
  }

  async capturePost(url) {
    try {
      const res = await CaptureService.getImageUrl(url)
      this.setState({img: res.data.img})
      console.log(res)
    } catch (err) {
      console.log(err.response.data)
      // TODO: handle error
    }
  }

  handleChange = debounce(function (event) {
    // TODO: validate url
    console.log('here', event)
    this.setState({postUrl: event.target.value})
  }, 700)

  render() {
    return (
      <div>
        <div className="form">
          <input onChange={
            e => { 
              e.persist()
              this.handleChange(e) 
            }
          }
            id="url" placeholder="Post URL goes here..."/>
        </div>
        <div className="result">
          <img id="resImg" src={this.state.img} alt=""/>
        </div>
      </div>
    )
  }
}

export default Form;

