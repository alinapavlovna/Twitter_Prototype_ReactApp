import React, { Component } from 'react';

import './app.css';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            data : [
                {label: 'Hello!', important: true, id: '1'},
                {label: 'Say hi', important: false, id: '2'},
                {label: 'Goodbye!', important: false, id: '3'}
            ],
            temp: '',
            filter: 'all'
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
      //  this.searchPost = this.searchPost.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data : newArr
            }
        })
    }
    
    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) =>{
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
        
    }
//!!!!повторение кода
    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const oldItem = data[index];
            const newItem = {...oldItem, important: !oldItem.important};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        })
    }

//!!!!повторение кода
    onToggleLiked(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const oldItem = data[index];
            const newItem = {...oldItem, like: !oldItem.like};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, newItem, ...after];

            return {
                data: newArr
            }
        })
    }
    
    searchPost(items, temp){
        if(temp.length === 0) return items;
        return items.filter(item => {
            return item.label.indexOf(temp) > -1;
        })
    }

    filterPosts(items, filter){
        if(filter === 'liked'){
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onUpdateSearch(temp){
        this.setState({temp})
    }

    onFilterSelect(filter){
        this.setState({filter})
 
    }

    render() {
        const {data, temp, filter} = this.state;
        const likedPosts = data.filter(elem => elem.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPosts(this.searchPost(data, temp), filter);

        return ( 
            <div className = "app" >
                <AppHeader 
                    likedPosts={likedPosts}
                    allPosts={allPosts}/>
                <div className = "search-panel d-flex" >
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                </div> 
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleLiked = {this.onToggleLiked}/>
                <PostAddForm 
                    onAdd = {this.addItem}/>
            </div>
        )
    }
};

