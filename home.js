import { Component } from "react";
import'./home.css';
import './ListItems.js';
import './ListItems.js';
import ListItems from './ListItems'


class Todo extends Component{

   constructor(props){
      super(props);
      this.state={
         items:[],
         currentItem:{
            Text:'',
            key:''
         }
      }
      this.handleInput= this.handleInput.bind(this);
      this.addItem= this.addItem.bind(this);
   }
   handleInput(e){
      this.setState({
         currentItem:{
            Text:e.target.value,
            key:Date.now()
         }
      })
   }
   addItem(e){
      e.preventDefault();
      const newItem =this.state.currentItem;
      console.log(newItem);
      if(newItem.Text!==''){
         const newItems=[...this.state.items,newItem];
         this.setState({
            items:newItems,
            currentItem:{
               Text:'',
               key:''
            }
         })
      }
   }

   render(){
      return(
         <div className="app">
            <header>
            <form id="todo-form" onSubmit={this.addItem}>
               <input type="text" placeholder="Enter Text" className="placeholder" value={this.state.currentItem.Text} onChange={this.handleInput} ></input>
               <button type="submit" className="submit">Add</button>

            </form>
         </header>
         <ListItems items={this.state.items}></ListItems>
         
         </div>
      
         
      );
   }
}
export default Todo;