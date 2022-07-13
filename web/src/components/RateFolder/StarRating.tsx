import { FaStar, FaStarHalf } from "react-icons/fa";
interface StarRatingProps {
	rating?: number;
	onChange?: (rating: number) => void;
}
export function StarRating({
	rating = 0,
	onChange = () => {},
}: StarRatingProps) {
	return (
		<div className="flex items-center">
			{[1, 2, 3, 4, 5].map((i) => (
        i - 0.2 > rating ? (
          (i - 0.75) < rating ? (
            <div key={i + "half"} style={{display: "flex"}}>
              <FaStarHalf
                onClick={() => {
                  if (onChange) {
                    onChange(i);
                  }
                }}
                className={"text-star"}
              />
              <FaStarHalf
                  onClick={() => {
                    if (onChange) {
                      onChange(i);
                    }
                  }}
                  style={{ transform: "scaleX(-1)", marginLeft: "-14px" }}
              />
            </div>
			    ) : (
            <>
              <FaStar
                key={i}
                onClick={() => {
                  if (onChange) {
                    onChange(i);
                  }
                }}
              />

            </>
          )
        ) : (
          <FaStar
            key={i}
            onClick={() => {
              if (onChange) {
                onChange(i);
              }
            }}
            className={"text-star"}
          />
        )
      )
      )}
		</div>
	);
}
