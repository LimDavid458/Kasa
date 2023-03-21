import { GrStar } from "react-icons/gr";

export default function Rating({rating}) {
    let ratingTab =  RatingRead(rating);
    
    /**
     * Add boolean in array
     * @param {Number} rating - Number of rating 
     * @returns - Return an array of boolean 
     */
    function RatingRead(rating) {
        let ratingBoard = [];
        for (let index = 0; index < 5; index++) {
            rating > 0 ? ratingBoard.push(true) : ratingBoard.push(false);
            rating--;
        }
        return ratingBoard;
    }
   
    return (
      <div className="ratingContainer">   
        {ratingTab.map((isRating, index) => 
          isRating ? < GrStar key={index} color="#FF6060" /> : < GrStar key={index} color="#E3E3E3"/> 
        )}
      </div>
    )

  
   
}