import './App.css';
import React from 'react';
import logo from './assets/icon1.png'
import button_new_block from './assets/new_block_button.png'
import Block from './Block';


function App() {
  const [blocks, setBlocks] = React.useState([<Block tag="body"/>,<Block tag="head"/>]);
  return (
    <div className="App">
      <div className='Header'>
        <img alt='' src={logo} id='logo'/>
      </div>
      <div className='newBlock'>
        <input type='text' id='new-block' placeholder='div,img,a...'/>
        <img alt='' id='button-new-block'title="Add New Block" style={{width: 50, height: 30,position: 'relative',top:0,margin: 5}} draggable="false" src={button_new_block} onClick={() =>  {var b= <Block tag={document.getElementById('new-block').value}/>;setBlocks([...blocks,b])}}/>
      </div>
      
      <div className='build'>
        {blocks}
      </div>
    </div>
  );
}
export default App;
