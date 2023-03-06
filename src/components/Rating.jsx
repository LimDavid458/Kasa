import { ImStarFull } from "react-icons/im";

export default function Rating({rating}) {
    let ratingTab =  RatingRead(rating);
    
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
          isRating ? < ImStarFull key={index} color="#FF6060" /> : < ImStarFull key={index} color="#E3E3E3"/> 
        )}
      </div>
    )

  
   
}