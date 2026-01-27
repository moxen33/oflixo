import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//hooks
import { useTranslation } from "react-i18next";

const CardBlogGrid = memo((props) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="iq-blog-box">
        <div className="iq-blog-image clearfix">
          <Link to="/blogs-detail">
            <img
              src={props.thumbnail}
              alt="img"
              loading="lazy"
              className="img-fluid w-100 rounded-3"
            />
          </Link>
        </div>
        <div className="iq-blog-detail">
          <div className="iq-blog-meta d-flex align-item-center flex-wrap">
            <ul className="list-inline mb-0">
              <li className="posted-by">
                <span className="post-date d-flex align-item-center gap-1">
                  {props.tags === true ? (
                    <i className="icon icon-tag"></i>
                  ) : (
                    <i className="ph ph-user"></i>
                  )}
                  <Link to="/blogs-author">{props.username}</Link>{" "}
                </span>
              </li>{" "}
              <li className="posted-on">
                <span className="post-author d-flex align-item-center gap-1">
                  <i className="icon icon-calendar-2"></i>
                  <Link to="/blogs-date">
                    <span>{props.blogDate}</span>
                  </Link>
                </span>
              </li>{" "}
            </ul>
          </div>
          <div className="blog-title">
            <h4 className="mb-3 blog-heading">
              <Link to={`/blogs-detail`}>{props.title}</Link>
            </h4>
          </div>
          <p className="line-count-2">{props.description}</p>
          <div className="iq-button">
            {props.link_button === true ? (
              <div className="">
                <Link
                  to="/blogs-detail"
                  className="btn btn-link blog-readMore p-0 text-capitalize position-relative font-size-14"
                >
                  <span className="">{t("streamButtons.read_more")}</span>{" "}
                  <span>
                    {props.button_icon && (
                      <i className="ph ph-caret-right align-middle"></i>
                    )}
                  </span>
                </Link>
              </div>
            ) : (
              <div className="iq-button">
                <Link
                  to="/blogs-detail"
                  className="btn btn-primary text-uppercase position-relative"
                >
                  <span className="button-text">{t("streamButtons.read_more")} </span>
                  <i className="ph-fill ph-play"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
});

CardBlogGrid.displayName = "CardBlogGrid";
export default CardBlogGrid;
