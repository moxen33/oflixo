import { memo, Fragment } from "react";

const fillstar = (
  <span>
    <i className="ph-fill ph-star text-warning" aria-hidden="true"></i>
  </span>
);

const unfill = (
  <span>
    <i className="ph ph-star text-warning"></i>
  </span>
);

const halfFillstar = (
  <span>
    <i className="ph-fill ph-star-half text-warning"></i>
  </span>
);

const StarRating = memo(function StarRating({
  count,
  count1,
  count2,
  starColor,
  inactiveColor = "text-white",
  activeColor = starColor,
  onChange,
}) {
  const stars = Array.from({ length: count }, () => fillstar);
  const stars1 = Array.from({ length: count1 }, () => unfill);
  const stars2 = Array.from({ length: count2 }, () => halfFillstar);

  const handleChange = (value) => {
    onChange(value + 1);
  };
  // console.log(count2)
  // console.log(count)

  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < count) {
          style = activeColor;
        }
        return (
          <span
            className={"star me-1 " + style}
            key={index}
            onClick={() => handleChange(index)}
          >
            {s}
          </span>
        );
      })}

      {stars1.map((s, index) => {
        let style;
        if (index < count1) {
          style = inactiveColor;
        }
        return (
          <span
            className={"star me-1 " + style}
            key={index}
            onClick={() => handleChange(index)}
          >
            {s}
          </span>
        );
      })}
      {stars2.map((s, index) => {
        let style;
        if (index < count2) {
          console.log("start")
          style = activeColor;
        }
        return (
          <span
            className={"star me-1 " + style}
            key={index}
            onClick={() => handleChange(index)}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
});

const RatingStar = memo((props) => {
  return (
    <Fragment>
      <StarRating
        count1={props.count1}
        count={props.count}
        count2={props.count2}
        starColor={props.starColor}
      />
    </Fragment>
  );
});

RatingStar.displayName = "RatingStar";
export default RatingStar;
