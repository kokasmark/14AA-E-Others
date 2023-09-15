import './App.css';
import React, { Component } from 'react';
import html_bg from './assets/html_bg.png'
import css_bg from './assets/css_bg.png'
import js_bg from './assets/js_bg.png'
import code_bg from './assets/code_bg.png'
import html_logo from './assets/html_logo.png'
import css_logo from './assets/css_logo.png'
import js_logo from './assets/js_logo.png'
import code_icon from './assets/code_icon.png'
import note_bg from './assets/note.png'
import App from './App';
import Draggable from 'react-draggable';

function cycleTag(b){
  if(b.view < 2){
    return b.view + 1;
  }
  else{
   return 0;
  }
}
function isCommentCheck(b){
  if(b.state.tag == '//' && b.state.view != 4){
    b.setState({
      tag: b.state.tag,
      view: 4,
      isComment: true
    })
  }
}
export default class Block extends Component{

  state = {
    tag: '',
    view: 0,
    startPos: {x: 100, y: 100},
    isComment: false
  }
  static getDerivedStateFromProps(props,state) {
    return {tag: props.tag};
  }
  cycle = () => {
      if(this.state.view < 2)
      {
      this.setState({
        tag: this.state.tag,
        view: this.state.view +1
      })
      }else{
        this.setState({
          tag: this.state.tag,
          view: 0
        })
      }
  }
  render(){
      return (
        <div onLoad={() => isCommentCheck(this)}>
      {this.state.view != 4 && <Draggable> 
      <div className="Block" currentView={this.state.view}>
      <img alt='' draggable = 'false' src={code_icon} style={{width: 40, height: 40, position: 'relative', top: 45, right: 78}} onClick={() =>  {{this.state.view != 3 && this.setState({tag: this.state.tag,view: 3})} {this.state.view == 3 && this.setState({tag: this.state.tag,view: 0})}}}/>
      { this.state.view < 3 && <img alt='' draggable = 'false' src={this.state.view == 0 && html_logo || this.state.view == 1 && css_logo || this.state.view == 2 && js_logo } style={{width: 40, height: 40, position: 'relative', top: 45, right: -78}} onClick={this.cycle}/>}
        {this.state.view == 0 &&
          <div>
            <img src={html_bg} draggable="false" className='block_bg'/>
            <p style={{position: 'relative', top: -85, fontWeight: 'bold',color: 'white'}}>&lt;{this.state.tag}&gt; <input spellcheck="false" style={{width: 100, borderStyle: 'none', outline: 'none',borderRadius: 10}} type='text'/> &lt;/{this.state.tag}&gt;</p>
          </div>
         }

        {this.state.view == 1 &&
          <div>
            <img src={css_bg} draggable="false"/>
            <textarea spellcheck="false" style={{position: 'relative', top: -95,width: 200, height: 75,borderStyle: 'none', outline: 'none',borderRadius: 10, backgroundColor: "#3b6feb", color: "white"}} />
          </div>
         }
         {this.state.view == 2 &&
          <div>
            <img src={js_bg} draggable="false"/>
          </div>
         }
         {this.state.view == 3 &&
          <div>
            <img src={code_bg} draggable="false"/>
            <textarea spellcheck="false" style={{position: 'relative', top: -95,width: 200, height: 75,borderStyle: 'none', outline: 'none',borderRadius: 10, backgroundColor: "#313134", color: "white"}} />
          </div>
         }
      </div>
      </Draggable>
      }
      {this.state.view == 4 &&     
        <Draggable>
          <div style={{width: 50, height:50}}>
            <img alt='' draggable = 'false' src={note_bg}/>
            <textarea style={{position: 'relative', top: -180, right: -5,width: 200, height: 150  ,borderStyle: 'none', outline: 'none',borderRadius: 10, backgroundColor: "white", color: "black", resize: 'none',fontSize: 20}} spellcheck="false" placeholder='This is a Comment!'/>
          </div>
          </Draggable>  
         }
      </div>
    );
      }
  }
