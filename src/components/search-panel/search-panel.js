import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state ={
            temp: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e){
        const temp = e.target.value;
        this.setState({temp});
        this.props.onUpdateSearch(temp);
    }
    render(){
        
        return ( 
            <input className = "form-control search-input"
                type = "text"
                placeholder = "Поиск по записям"
                onChange={this.onUpdateSearch} 
            />
    
        )
    }
}

