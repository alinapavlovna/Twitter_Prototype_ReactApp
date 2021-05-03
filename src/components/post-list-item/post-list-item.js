import React, {Component} from 'react';
import './post-list-item.css';

//!!!!можно снова переделать класс в функцию, т.к. у нас тут теперь не отображается состояние, 
//а все функции и елементы приходять из app.js

export default class PostListItem extends Component{
   /* удаляем конструктор!!!
 constructor(props){
        super(props);
        this.state = {
            important:false,
            like: false
        };

        this.onImportant =this.onImportant.bind(this);
        this.onLike =this.onLike.bind(this);

    };

    onImportant(){
        this.setState(({important})=> ({
            important: !important
        }))
    }

    onLike(){
        this.setState(({like})=> ({
            like: !like
        }))
    }
   */

    render(){
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
      //  const {important, like} = this.state;   конструктор удалили - состояние тоже удаляем
        let classNames = "app-list-item d-flex justify-content-between";

        if(important){
            classNames +=' important';
        }

        if(like){
            classNames +=' like';
        }

        return (
            <div className={classNames}>
                <span 
                    className="app-list-item-label"
                    onClick={onToggleLiked}>
                        {label} 
                </span> 
                <div className = "d-flex justify-content-center align-items-center" >
                    <button 
                        type="button" 
                        className = "btn-star btn-sm" 
                        onClick={onToggleImportant}>
                        <i className = "fa fa-star"> </i> 
                    </button> 
                    <button 
                        type="button" 
                        className = "btn-trash btn-sm" 
                        onClick = {onDelete}>
                        <i className = "fa fa-trash-o" > </i> 
                    </button> 
                    <i className = "fa fa-heart" > </i> 
                </div> 
            </div>
        )
    }
}



