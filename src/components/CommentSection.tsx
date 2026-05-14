import Comment from './Comment';

function CommentSection (){
  {
    return (
      <div className="comment-section">
        <button className="view-all-comments">View all 100 comments</button>
        <div className="comments-list">
          <Comment />
          <Comment />
        </div>
      </div>
    );
  }
}
export default CommentSection;