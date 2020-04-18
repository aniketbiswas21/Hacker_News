import React, { Component } from 'react';
import axios from 'axios';
import Slide from 'react-reveal/Slide';

export default class Comments extends Component {
    state={
        comments:[]
    };
    async componentDidMount(){
        const res=await axios.get(`https://hn.algolia.com/api/v1/search?tags=comment,story_${this.props.match.params.id}`)
        this.setState({
            comments: res.data.hits
        });
        
    }
    render() {
        const{comments}= this.state;
        const commentList= comments.length?(comments.map(comment=>{
            return(
                <Slide bottom>
                <div class="row">
        <div class="col s12 ">
          <div class="card #757575 grey darken-1">
            <div class="card-content white-text">
            <p>{` ${comment.author}`}</p>
              <span><h6>{comment.comment_text}</h6></span>
            </div>
          </div>
        </div>
      </div>
      </Slide>
               
            )
        })):( 
            <div className="center">
            <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          </div>
        )
        return (
            <div className='container'>
             <h2 className='center'>{this.props.match.params.title}</h2>
             <h3 className='center'>Comments</h3>
             <div className='center'><button className='btn btn-large waves-effect red darken-3' onClick={()=>{window.open(`https://news.ycombinator.com/item?id=${this.props.match.params.id}`)}}>Add comment</button></div>
             {commentList}
            </div>
        )
    }
}
