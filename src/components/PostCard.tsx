import CommentSection from './CommentSection';

function PostCard (){
  {
    return (
      <article className="post-card">
        <header className="post-header">
          <div className="post-author-info">
            <img src="" alt="Avatar" />
            <span className="author-username">username</span>
            <span className="post-time">• 2h</span>
          </div>
          <button className="post-options">...</button>
        </header>

        <div className="post-content">
          <img src="" alt="Contenido del post" />
        </div>

        <div className="post-footer">
          <div className="post-actions">
            <div className="action-buttons-left">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
            <div className="action-buttons-right">
              <button>Save</button>
            </div>
          </div>
          
          <div className="post-likes">
            <span>1,000 likes</span>
          </div>
          
          <div className="post-caption">
            <span className="author-username">username</span>
            <span className="caption-text">Texto de la descripción...</span>
          </div>

          <CommentSection />

          <div className="post-add-comment">
            <input type="text" placeholder="Add a comment..." />
            <button>Post</button>
          </div>
        </div>
      </article>
    );
  }
}
export default PostCard;