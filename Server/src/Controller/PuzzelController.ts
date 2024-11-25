import express, { IRouter, Request, Response } from "express";
import {
  addComment,
  addPuzzele,
  deletePuzzele,
  editPuzzele,
  getOnePuzzele,
  getPuzzele,
} from "../Services/PuzzelService";
import Puzzele, { IPuzzele } from "../Models/puzzleModel";
import { authMiddleware, authRequest } from "../middleware/authMiddleware";

const router: IRouter = express.Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    console.log(1);
    
    const allPuzzels = await getPuzzele();
    
    console.log(allPuzzels);

    res.json(allPuzzels);
    console.log(res.json());
    
  } catch (error: any) {
    error.status || 404, error.message;
  }
});

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const puzzel = await getOnePuzzele(req.params.id);
    res.json(puzzel);
  } catch (error: any) {
    error.status || 404, error.message;
  }
});
// creat post
router.post("/", authMiddleware,async (req:authRequest,res:Response) :Promise<void> => {
    try {
      const { title, content } = req.body; 
      const author = req.user
      if (! title || !content || !author) {
        res.status(400).json({ message: " אחד מהאלמנטים חסר" });
        return;
     } 
     const newPuzzele = new Puzzele({title,content,author,comments:[]}) 
        const puzzele = await addPuzzele(newPuzzele)
        res.status(200).json(puzzele)
        
    } catch (error:any) {
        error.status || 404, error.message;  
    }
})

router.put("/:id" ,authMiddleware ,async (req:authRequest,res:Response) : Promise<void> => {
  console.log(1);
  
    try {
      console.log(2);
      
      const id = req.params.id
      console.log(id);
      
      const { content } = req.body; 
      console.log(content);
      
      const author = req.user
      console.log(author);
      

      // const { author, content } = req.body
      
      if (!content || !author) {
        res.status(400).json({ message: " אחד מהאלמנטים חסר" });
        return;
     }   
     
     const newComment = {content,author};
     const savedComment = await addComment(id,newComment);
 
     res.json(savedComment)
    } catch (error:any) {
        error.status || 404, error.message;
        
    }
})

router.delete("/:id",async (req:Request,res:Response) : Promise<void> => {
    try {
        const puzzele = await deletePuzzele(req.params.id)
        res.json(puzzele)
    } catch (error:any) {
        error.status || 404, error.message;

        
    }
}) 

export default router
// function getOnePuzzele(id: string) {
//   throw new Error("Function not implemented.");
// }

