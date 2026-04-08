import { useState, useRef } from "react";
import "../styles/feed.css";
import Footer from "../components/Footer";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment, AiOutlineDelete } from "react-icons/ai";

const Feed = () => {
  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Rajesh Kumar",
      avatar: "👨‍💼",
      media: { type: "emoji", content: "🏋️" },
      caption: "Completed my morning chest workout! Feeling amazing! 💪 #LegDay #FitLife",
      timestamp: "2 hours ago",
      likes: 24,
      liked: false,
      comments: [
        { id: 1, author: "Priya", text: "Great work! 🔥" },
        { id: 2, author: "Vinoth", text: "Keep it up! Strong form!" }
      ]
    },
    {
      id: 2,
      author: "Priya Sharma",
      avatar: "👩‍🦰",
      media: { type: "emoji", content: "🧘" },
      caption: "Morning yoga session at Muscle Up Gym. Peace and strength! 🧘‍♀️✨",
      timestamp: "4 hours ago",
      likes: 18,
      liked: false,
      comments: [
        { id: 1, author: "Divya", text: "Yoga goals! 💫" }
      ]
    }
  ]);

  const [showCommentForm, setShowCommentForm] = useState({});
  const [commentText, setCommentText] = useState("");
  const [newPost, setNewPost] = useState({ 
    author: "You", 
    caption: "", 
    media: { type: "emoji", content: "" },
    mediaPreview: null
  });
  const [showPostForm, setShowPostForm] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setUploadError("Image size must be less than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewPost({
          ...newPost,
          media: { type: "image", content: event.target.result },
          mediaPreview: event.target.result
        });
        setUploadError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        setUploadError("Video size must be less than 50MB");
        return;
      }
      
      const video = document.createElement("video");
      video.onloadedmetadata = () => {
        if (video.duration > 120) { // 2 minutes = 120 seconds
          setUploadError("Video must be under 2 minutes (120 seconds)");
          return;
        }
        const reader = new FileReader();
        reader.onload = (event) => {
          setNewPost({
            ...newPost,
            media: { type: "video", content: event.target.result },
            mediaPreview: event.target.result
          });
          setUploadError("");
        };
        reader.readAsDataURL(file);
      };
      video.src = URL.createObjectURL(file);
    }
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? {
        ...post,
        liked: !post.liked,
        likes: post.liked ? post.likes - 1 : post.likes + 1
      } : post
    ));
  };

  const handleAddComment = (postId) => {
    if (commentText.trim()) {
      setPosts(posts.map(post =>
        post.id === postId ? {
          ...post,
          comments: [...post.comments, {
            id: post.comments.length + 1,
            author: "You",
            text: commentText
          }]
        } : post
      ));
      setCommentText("");
      setShowCommentForm({ ...showCommentForm, [postId]: false });
    }
  };

  const handleDeletePost = (postId, postAuthor) => {
    if (postAuthor === "You" || postAuthor === "Admin") {
      if (window.confirm("Delete this post?")) {
        setPosts(posts.filter(post => post.id !== postId));
      }
    } else {
      alert("❌ Only admin or post author can delete this post!");
    }
  };

  const handleCreatePost = () => {
    if (newPost.caption.trim() && newPost.media.content) {
      const post = {
        id: posts.length + 1,
        author: newPost.author,
        avatar: "👤",
        media: newPost.media,
        caption: newPost.caption,
        timestamp: "now",
        likes: 0,
        liked: false,
        comments: []
      };
      setPosts([post, ...posts]);
      setNewPost({ author: "You", caption: "", media: { type: "emoji", content: "" }, mediaPreview: null });
      setShowPostForm(false);
      setUploadError("");
    } else {
      setUploadError("Please add caption and image/video!");
    }
  };

  const renderMedia = (media) => {
    if (media.type === "emoji") {
      return <span className="media-emoji">{media.content}</span>;
    } else if (media.type === "image") {
      return <img src={media.content} alt="Post" className="media-image" />;
    } else if (media.type === "video") {
      return (
        <video controls className="media-video">
          <source src={media.content} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div className="feed-page">
      {/* BACKGROUND TEXT */}
      <div className="bg-text">
        <span>MUSCLE UP</span>
        <span>FITNESS STUDIO</span>
      </div>

      <div className="feed-header">
        <h1>🏋️ MUSCLE UP COMMUNITY</h1>
        <p>Share your fitness journey and inspire others</p>
      </div>

      <div className="feed-container">
        {/* Create Post Section */}
        <div className="create-post-card">
          {!showPostForm ? (
            <div className="create-post-header" onClick={() => setShowPostForm(true)}>
              <div className="avatar-large">👤</div>
              <input
                type="text"
                placeholder="What's your workout update?"
                disabled
                className="disabled-input"
              />
              <button className="create-btn">➕ Post</button>
            </div>
          ) : (
            <div className="create-post-form">
              <h3>Create a Post</h3>
              
              {uploadError && <div className="error-message">{uploadError}</div>}
              
              <input
                type="text"
                placeholder="Your name"
                value={newPost.author}
                onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                className="form-input"
              />
              
              <textarea
                placeholder="What's your workout update? Share your progress, motivation, or tips!"
                value={newPost.caption}
                onChange={(e) => setNewPost({ ...newPost, caption: e.target.value })}
                rows="4"
                className="form-textarea"
              ></textarea>

              <div className="media-upload-section">
                <h4>📤 Upload Media</h4>
                <div className="upload-buttons">
                  <button 
                    className="upload-btn image-btn"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    🖼️ Upload Image
                  </button>
                  <button 
                    className="upload-btn video-btn"
                    onClick={() => videoInputRef.current?.click()}
                  >
                    🎥 Upload Video (Max 2min)
                  </button>
                </div>
                
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                
                <input 
                  ref={videoInputRef}
                  type="file" 
                  accept="video/*" 
                  onChange={handleVideoUpload}
                  style={{ display: "none" }}
                />

                {newPost.mediaPreview && (
                  <div className="media-preview">
                    <h4>Preview:</h4>
                    {newPost.media.type === "image" && (
                      <img src={newPost.mediaPreview} alt="Preview" />
                    )}
                    {newPost.media.type === "video" && (
                      <video controls style={{ maxWidth: "100%", borderRadius: "8px" }}>
                        <source src={newPost.mediaPreview} type="video/mp4" />
                      </video>
                    )}
                    <button 
                      className="remove-media-btn"
                      onClick={() => {
                        setNewPost({
                          ...newPost,
                          media: { type: "emoji", content: "" },
                          mediaPreview: null
                        });
                      }}
                    >
                      ❌ Remove Media
                    </button>
                  </div>
                )}
              </div>

              <div className="form-buttons">
                <button onClick={handleCreatePost} className="submit-post-btn">
                  📝 Post
                </button>
                <button onClick={() => setShowPostForm(false)} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Posts Feed */}
        <div className="posts-feed">
          {posts.length === 0 ? (
            <div className="no-posts">
              <p>No posts yet. Be the first to share! 🚀</p>
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="post-card">
                {/* Post Header */}
                <div className="post-header">
                  <div className="post-author">
                    <div className="avatar">{post.avatar}</div>
                    <div className="author-info">
                      <h4>{post.author}</h4>
                      <p>{post.timestamp}</p>
                    </div>
                  </div>
                  {(post.author === "You") && (
                    <button 
                      className="delete-btn"
                      onClick={() => handleDeletePost(post.id, post.author)}
                      title="Delete post"
                    >
                      <AiOutlineDelete />
                    </button>
                  )}
                </div>

                {/* Post Caption */}
                <div className="post-caption">
                  <p>{post.caption}</p>
                </div>

                {/* Post Media */}
                <div className="post-image">
                  {renderMedia(post.media)}
                </div>

                {/* Post Actions */}
                <div className="post-actions">
                  <button 
                    className={`action-btn ${post.liked ? 'liked' : ''}`}
                    onClick={() => handleLike(post.id)}
                  >
                    {post.liked ? <AiFillHeart /> : <AiOutlineHeart />}
                    <span>{post.likes}</span>
                  </button>
                  <button 
                    className="action-btn"
                    onClick={() => setShowCommentForm({ ...showCommentForm, [post.id]: !showCommentForm[post.id] })}
                  >
                    <AiOutlineComment />
                    <span>{post.comments.length}</span>
                  </button>
                </div>

                {/* Comments Section */}
                {post.comments.length > 0 && (
                  <div className="comments-section">
                    <h5>Comments:</h5>
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="comment">
                        <strong>{comment.author}:</strong> {comment.text}
                      </div>
                    ))}
                  </div>
                )}

                {/* Comment Form */}
                {showCommentForm[post.id] && (
                  <div className="comment-form">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                      className="comment-input"
                    />
                    <button 
                      onClick={() => handleAddComment(post.id)}
                      className="comment-submit"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <Footer compact={true} />
    </div>
  );
};

export default Feed;
