import React from 'react'
import { debounce } from 'lodash'

import Result from './Result'
import CaptureService from '../services/CaptureService'
import { animateCSS } from '../animate/index'
import { isValidUrl } from '../helpers/validator'

import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: null,
      postUrl: null,
      loading: false,
      error: null
    }
  }

  async componentWillUpdate(newProps, newState) {
    if (this.state.postUrl !== newState.postUrl && newState.postUrl) {
      try {
        this.setState({error: null})
        this.setState({img: null})

        if (isValidUrl(newState.postUrl)) {
          this.setState({loading: true})

          const img = await this.capturePost(newState.postUrl)
          this.setState({img})
          animateCSS('#resImg', 'zoomIn')

          this.setState({loading: false})
        } else {
          this.setState({error: 'Unsupported URL'})
          animateCSS('#url', 'shake')
        }
      } catch (err) {
        console.error(err)
        this.setState({error: err.response.data.error})
      }
    }
  }

  async capturePost(url) {
    const res = await CaptureService.getImageUrl(url)
    console.log('res', res)
    return res.data.img
  }

  handleChange = debounce(function (event) {
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
        <Result 
          error={this.state.error}
          img={this.state.img} 
          loading={this.state.loading}/>
      </div>
    )
  }
}

export default Form;

