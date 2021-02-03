import React from 'react';
import faker from 'faker';
const CommentDetail = (props) => {
    return(
        <div className="comment">
        <div className="avatar">
            <img alt="avatar" src={faker.image.image()} />
        </div>
        <div className="content">
            <a href="/" className="author">
                {props.author}
          </a>
        </div>
        <div className="metadata">
            <span className="date">{props.time}</span>
        </div>
        <div className="text">
            {props.content}
      </div>
    </div>
    );   
};
export default CommentDetail;