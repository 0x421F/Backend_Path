import express from "express";
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews);
router.route("/new").post(ReviewsCtrl.apiPostReview);
router
  .route("/:id")
  .get(ReviewsCtrl.apiGetReviews)
  .put(ReviewsCtrl.apiUpdateReview)
  .put(ReviewsCtrl.apiDeleteReview);

export default router;
