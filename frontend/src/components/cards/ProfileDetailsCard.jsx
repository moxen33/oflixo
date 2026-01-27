import React from "react";
import { Link } from "react-router-dom";

// the hook
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

const ProfileDetailsCard = (props) => {
  const { t } = useTranslation();

  const {image , movieType , movieCategory} = props
  return (
    <>
      <div className="playlist-card">
        {/* <!-- Playlist Image --> */}
        <div className="image-box">
          <Link to="/playlist-detail">
            <img
              src={image}
              alt="90s Throwback"
              className="img-fluid object-cover w-100 border-0"
            />
          </Link>
          <Link to="/playlist-detail" className="play-icon">
            <i className="icon-play-button"></i>
          </Link>
        </div>
        {/* <!-- Playlist Content --> */}
        <div className="content-part">
          <div className="d-flex justify-content-between gap-2 mb-1">
            <h5 className="my-0 text-capitalize">{t(movieType)}</h5>
            <Dropdown className="dropdown">
              <Dropdown.Toggle
              variant=" "
                className="btn p-0 border-0"
                id="dropdown-basic"
                bsPrefix=" "
              >
                <i className="icon-three-dots-vertical"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu border" >
                <Dropdown.Item
                  as="button"
                  className="dropdown-item manage_playlist update_user_playlist"
                >
                  <Link
                    to="#"
                    data-playlist-name="90s Throwback"
                    data-playlist-id="14"
                    data-post-type="movie"
                    className="manage_playlist dropdown-item update_user_playlist"
                  >
                    Update
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  className="dropdown-item delete_user_playlist"
                >
                  <Link
                    to="#"
                    data-playlist_id="14"
                    data-post-type="movie"
                    className="dropdown-item delete_user_playlist"
                  >
                    Delete
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="small mb-1">
            <small>{t(movieCategory)}</small>
          </div>
          <Link
            to="/playlist-detail"
            className="btn btn-link btn-playlist p-0 border-radius-0"
          >
           
            {t("streamKeyword.view")}{''}
            {t("streamPlaylist.playlist")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProfileDetailsCard;
