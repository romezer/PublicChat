import React, { Component } from 'react';
import './MainFrame.css';
import MsgItem from './MsgItem.js'

class MainFrame extends Component {
constructor(props){
    super(props)
    this.state = {
        loadStatment:'Load more...',
        loadState: true
   }
   this.loadMore = this.loadMore.bind(this);
}
scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

   loadMore(){
    if(this.state.loadState){
        this.props.onLoadMore();
        this.setState({loadState: false, loadStatment:'Load Less...'})
    }
    else{
        this.setState({loadState: true, loadStatment:'Load more...'})
        this.props.onLoadLess();
    }
    
   }

    render() {
       
        return(
        <div className='frameContainer'>
            <h3 className="title">Public Room</h3>
            <a  className='loadMore' onClick={this.loadMore} >{this.state.loadStatment}</a>
            <div className='items'>
            {this.props.items.map((item,index) => (
             <MsgItem avatar={item.Avatar} key = {index} Id={item.Id} nickName={item.Nick_Name} text={item.Text} timeStamp={item.Time_Stamp}/>
            ))}
            </div>
            <div style={{ float:"left", clear: "both" }}
                ref={(el) => { this.messagesEnd = el; }}>
            </div>
        </div>
          
        ) 
    }
  }
  
  export default MainFrame;