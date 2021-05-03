import React, { Component } from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {name:'all', label: 'All'},
            {name:'liked', label: 'Liked'}

        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const claz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button 
                    key={name} 
                    type='button' 
                    className={`btn ${claz}`}
                    onClick={() => onFilterSelect(name)}>
                    {label}
                </button>
            )
        });
        
        return ( 
            <div className = "btn-group" >
                {buttons}
            </div>
        )
    }
}

