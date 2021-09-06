function like(postId) {
  const likeCount = document.getElementById(`likes-count-${postId}`);
  const likeButton = document.getElementById(`likes-button-${postId}`);

  fetch("/like-post/${postId}", { method: "POST" })
    .then((res) => res.json())
    .then((data) => console.log(data));

  console.log(likeCount.value);
}
