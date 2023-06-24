import express from 'express';
import { createBookmark,updateBookmark, getAllData,delData } from "../controller/bookmarkController.js";
const bookmarkRouter = new express.Router();

// create post ----->
bookmarkRouter.post("/addbookmark",createBookmark);

// update post ------>

bookmarkRouter.patch("/bookmark/:id",updateBookmark);

// get all data ----->
bookmarkRouter.get("/bookmarks",getAllData);

// delete any one ----->
bookmarkRouter.delete("/delete/:id",delData);

export default bookmarkRouter;
