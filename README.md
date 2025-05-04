## Redux ToolKit + React Playground

This is a simple React application for a Social Media post.

### comments

```jsx
{
  post?.comments && (
    <div className={styles.comments}>
      <div className={styles.comment_top}>
        <p className="">Comments</p>
        {post?.comments.length === 0 && <small>No comment yet</small>}

        <button
          type="button"
          onClick={() => setShowInput(!showInput)}
          className={styles.cmt_btn}
        >
          Add Comment
        </button>
        {showInput && modalRef && (
          <InputModal
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            modalRef={modalRef}
          />
        )}
      </div>
      {btnRef &&
        post?.comments.map((comment, i) => (
          <Comment
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            ref={btnRef}
            key={i}
            comment={comment}
          />
        ))}
    </div>
  );
}
```
