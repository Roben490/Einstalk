import  { IPuzzels } from "../Interface/Interfaces";
import useFatch from '../Hooks/useFetch'
import { useContext, useEffect, useState } from "react";
import { PuzzelContext } from "../Provider/PuzzelsProvider";
const url = "http://localhost:3040/post"

interface Props {
  puzzles: IPuzzels[];
}

export default function DisplayPuzzles({ puzzles }: Props) {
  return (
    <>
      <div className="card-list">
        {puzzles.map((puzzle, index) => (
          <div key={index} className="card">
            <div>
              <img src={puzzle.img} alt={puzzle.title} className="image-card"/>
              <h3>{puzzle.title}</h3>
              <p>{puzzle._id}</p>
              <p>Content: {puzzle.content}</p>
              <p>Author: {puzzle.author}</p>
              <div> הוסף תגובה💬</div>
              <div> לכל התגובות💬</div>
            </div>
            
            <div>
              
              <h4>Comments:</h4>
              {puzzle.comments.length > 0 ? (
                <ul>
                  {puzzle.comments.map((comment, idx) => (
                    <li key={idx}>
                      <p>Comment: {comment.content}</p>
                      <p>Author: {comment.author}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No comments</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
