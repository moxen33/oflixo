import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//hooks
import { useTranslation } from "react-i18next";

const CardBlogList = memo((props) => {
  const {
    username,
    blogDate,
    tags,
    title,
    description,
    link_button,
    button_icon
  } = props;
  const { t } = useTranslation();
  // console.log(category)
  return (
    <Fragment>
      <article>
        <div className="iq-blog-box">
          <div className="iq-blog-image clearfix">
            <Link to="/blogs-detail">
              <img src={props.thumbnail} alt="img" className="img-fluid w-100 rounded-3" />
            </Link>
          </div>
          <div className="iq-blog-detail">
              <div className="iq-blog-meta d-flex align-item-center flex-wrap">
                <ul className="list-inline mb-0">
                  <li className="posted-by">
                    <span className="post-date d-flex align-item-center gap-1">
                      {tags === true ? (
                        <i className="icon icon-tag"></i>
                      ) : (
                        <i className="ph ph-user"></i>
                      )}
                      <Link to="/blogs-author">{username}</Link>{" "}
                    </span>
                  </li>{" "}
                  <li className="posted-on">
                    <span className="post-author d-flex align-item-center gap-1">
                      <i className="icon icon-calendar-2"></i>
                      <Link to="/blogs-date">
                        <span>{blogDate}</span>
                      </Link>
                    </span>
                  </li>{" "}
                  
                </ul>
              </div>
            <Link to="/blogs-detail">
              <h4 className="mb-3 blog-heading">{title}</h4>
            </Link>
            <p className="line-count-2">{description}</p>
            
            <div className="iq-button">
              {link_button === true ? (
                <div className="">
                  <Link
                    to="/blogs-detail"
                    className="btn btn-link blog-readMore p-0 text-capitalize position-relative font-size-14"
                  >
                    <span className="">{t("streamButtons.read_more")}</span>
                    
                     {button_icon &&<span> <i className="ph ph-caret-right align-middle"></i></span>}
                    
                  </Link>
                </div>
              ) : (
                <div className="iq-button">
                  <Link
                    to="/blogs-detail"
                    className="btn btn-primary text-uppercase position-relative"
                  >
                    <span className="button-text">{t("streamButtons.read_more")} </span>
                    <i className="ph ph-play"></i>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </Fragment>
  );
});

CardBlogList.displayName = "CardBlogList";
export default CardBlogList;
