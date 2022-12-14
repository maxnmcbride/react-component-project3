import React from "react";
import ReviewComponent from "./ReviewComponent";

function ReviewsContainer({reviewsData, reviewRemover, updateReview}){

return(
    <div>
        {reviewsData.map(reviewObj => <ReviewComponent key={reviewObj.id} reviewProp={reviewObj} reviewRemover = {reviewRemover} updateReview = {updateReview}/>)}
    </div>
    )
}

export default ReviewsContainer