import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class TopStories extends Component{
    state={
        posts: [ ]
    }
   async componentDidMount(){
      
       const res=await axios.get('https://hn.algolia.com/api/v1/search?tags=front_page')
                             
            
            this.setState({
                posts: res.data.hits      
           
        })
        
    }
comment = (title, id) =>{
  this.props.history.push(`/comments/${title}/${id}`)
}

render(){
    const { posts}=this.state;
    const postList= posts.length?(posts.map(post=>{
        return(
            <Fade left>
            <div class="row">
    <div class="col s12 ">
      <div class="card #757575 grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{post.title}</span>
          <p>{`${post.points} points by ${post.author} . ${post.num_comments} comments`}</p>
        </div>
        <div className="card-action">
        <button className="btn waves-effect waves-light green darken-2" onClick={()=>{window.open(`https://news.ycombinator.com/vote?id=${post.objectID}&how=up&goto=news`)}}><span><i class="fas fa-angle-double-up"></i> Upvote</span></button>
          <span style={{paddingLeft: '15px'}} />
          <button className="btn waves-effect waves-light #6d4c41 brown darken-1" onClick={()=>{this.comment(post.title,post.objectID)}}><span><i class="fas fa-comments"></i> Comments</span></button>
          <button className="btn waves-effect waves-light #0d47a1 blue darken-4 right" onClick={()=>{window.open(post.url)}}><span><i class="fas fa-book-open fa-xs"></i> Read More</span></button>
        </div>
      </div>
    </div>
  </div>
  </Fade>
           
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
    return(
        <div className="container">
        <h2 className='center'>Top Posts</h2>
        {postList}
            </div>
            
    )
}
}
export default TopStories;