
interface Puzzle {
    title: string;
    content: string;
    author: string;
    comments: [{
        content: string;
        author: string;
    }]
}

interface Props {
    puzzles: Puzzle[];
}

export default function DisplayPuzzles({ puzzles }: Props) {
  return (
    <>
      <div className="card-list">
        {puzzles.map((puzzle) => (
          <div >
            <div className="user-info">
              <h3>{puzzle.title}</h3>
              <p>content: {puzzle.content}</p>
              <p>author: {puzzle.author}</p>
              <p>content: {puzzle.content}</p>
            </div>
            <div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
