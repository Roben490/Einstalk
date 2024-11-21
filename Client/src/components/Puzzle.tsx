import React, { useContext, useState } from 'react'

export default function Puzzle() {
    const [title, setTitle] = useState<string>()
    const [content, setContent] = useState<string>()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent page reload
        try {
          const response = await postData({ title, content });
        //   navigate("/shop");
        }catch (error: any) {
          console.error("create new post failed:", error);
          }
      };
    return (
    <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="title">title</label>
    <input type="text" id='title'
    value={title}
    onChange={(e) => setTitle(e.target.value)}
     />
     <label htmlFor="content">content</label>
    <input type="text" id='content'
    value={content}
    onChange={(e) => setContent(e.target.value)}
     />
     <button type="submit">send</button>
     </form>
    </>
  )
}
