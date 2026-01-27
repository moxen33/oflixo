import { Fragment, memo } from "react";

const ProfileCard = memo(({ designation, name, image }) => {
  return (
    <Fragment>
      <div className="">
        <img src={image} className="img-fluid w-100 mastermind-team-img" alt="team" />
      </div>
      <div className="box-content">
        <h6 className="title-box">{designation}</h6>
        <h5 className="title-box-name">{name}</h5>
      </div>
    </Fragment>
  );
});

ProfileCard.displayName = "ProfileCard";
export default ProfileCard;
