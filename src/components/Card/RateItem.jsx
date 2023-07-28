export function RateItem() {
    return (
        // <label>
        //     <input
        //         className="rating-input"
        //         type="radio"
        //         name="rating"
        //         // value={currentRating}
        //         // onClick={() => setRating(currentRating)}
        //     />
        <FaStar
            className="star"
            size={20}
            color={currentRating <= (hover || rating) ? "#ffc107" : "#e3e4e9"}
            // onMouseEnter={() => setHover(currentRating)}
            // onMouseLeave={() => setHover(null)}
        />
        // </label>
    );
}
