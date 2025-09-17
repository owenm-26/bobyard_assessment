// const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const BACKEND_BASE_URL = "http://127.0.0.1:8000";


if (BACKEND_BASE_URL == null){
    console.error("VITE_BACKEND_BASE_URL not set")
}

export async function getComments() {
  const res = await fetch(`${BACKEND_BASE_URL}/api/comments/`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

// You can also add more helpers for POST/PUT/DELETE
export async function createComment(commentData: any) {
  const res = await fetch(`${BACKEND_BASE_URL}/api/comments/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(commentData),
  });
  if (!res.ok) throw new Error("Failed to create comment");
  return res.json();
}

export async function editComment(id: number, commentData: any) {
  const res = await fetch (`${BACKEND_BASE_URL}/api/comments/${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(commentData),
  });
  if (!res.ok) throw new Error("Failed to edit comment");
  return res.json();
}

export async function deleteComment(id: number) {
  const res = await fetch(`${BACKEND_BASE_URL}/api/comments/${id}/delete/`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete comment");
  return res.json();
}