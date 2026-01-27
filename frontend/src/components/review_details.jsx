import React, { useState } from "react";
import { Form, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { generateImgPath } from "../StaticData/data";
import { useTranslation } from "react-i18next";

import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../store/setting/selectors";

const Review_Details = () => {
      const themeSchemeDirection = useSelector(theme_scheme_direction);
        const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    // console.log(themeSchemeDirection === 'rtl')
  return (
    <>
      <div className="rate-review-details">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
          <h5 className="main-title text-capitalize m-0 fw-medium">{t("streamShop.reviews")}</h5>
          <div className="d-flex align-items-center gap-3">
            <a
              id="openReviewButton"
              className="btn btn-link p-0 custom-fs-14 openReviewButton"
              role="button"
              aria-controls="offcanvasReview"
              onClick={() => setShow(true)}
            >
              Add Review{" "}
            </a>
            <Link
              className="btn btn-link p-0 custom-fs-14"
              to="/view-more"
            >
              View More
            </Link>
          </div>
        </div>
        <div className="comments-section">
          <div className="review-card">
            <div className="review-detail rounded-3">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  {/* <!-- Display user avatar --> */}
                  <img
                    src={generateImgPath("/assets/images/user/user.jpg")}
                    className="img-fluid user-img rounded-circle"
                    alt="admin"
                  />

                  <div>
                    {/* <!-- Display comment author's name and date --> */}
                    <h6 className="line-count-1 m-0">Marvin McKinney</h6>
                    <p className="mb-0 mt-1 small-date-font">
                      2025-02-04 05:14:19
                    </p>
                  </div>
                </div>

                {/* <!-- Display star rating --> */}
                <div className="star-rating" data-rating="5">
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>

              {/* <!-- Display comment content --> */}
              <p className="mb-0 mt-3 pt-3 border-top fw-medium">
                {t("streamReview.review1")}
              </p>

              {/* <!-- actions  --> */}
            </div>
          </div>
          <div className="review-card">
            <div className="review-detail rounded-3">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  {/* <!-- Display user avatar --> */}
                  <img
                    src={generateImgPath("/assets/images/user/user2.jpg")}
                    className="img-fluid user-img rounded-circle"
                    alt="admin"
                  />

                  <div>
                    {/* <!-- Display comment author's name and date --> */}
                    <h6 className="line-count-1 m-0">freya</h6>
                    <p className="mb-0 mt-1 small-date-font">
                      2025-01-17 06:51:59
                    </p>
                  </div>
                </div>

                {/* <!-- Display star rating --> */}
                <div className="star-rating" data-rating="5">
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>

              {/* <!-- Display comment content --> */}
              <p className="mb-0 mt-3 pt-3 border-top fw-medium">
                {t("streamReview.review2")}
              </p>

              {/* <!-- actions  --> */}
            </div>
          </div>
          <div className="review-card">
            <div className="review-detail rounded-3">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div className="d-flex align-items-center justify-content-center gap-3">
                  {/* <!-- Display user avatar --> */}
                  <img
                    src={generateImgPath("/assets/images/user/robert.jpg")}
                    className="img-fluid user-img rounded-circle"
                    alt="admin"
                  />

                  <div>
                    {/* <!-- Display comment author's name and date --> */}
                    <h6 className="line-count-1 m-0">robert</h6>
                    <p className="mb-0 mt-1 small-date-font">
                      2025-02-04 05:14:19
                    </p>
                  </div>
                </div>

                {/* <!-- Display star rating --> */}
                <div className="star-rating" data-rating="5">
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="ph-fill ph-star text-warning"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>

              {/* <!-- Display comment content --> */}
              <p className="mb-0 mt-3 pt-3 border-top fw-medium">
                {t("streamReview.review3")}
              </p>

              {/* <!-- actions  --> */}
            </div>
          </div>
        </div>
      </div>

      <Offcanvas
        className="overflow-y-auto widget-shopping-cart-content offcanvas-sidebar sidebar-container  border-left-0"
        id="offcanvasReview"
        show={show}
        onHide={handleClose}
        placement={themeSchemeDirection === 'rtl' ? "start" : "end"}
      >
        <Offcanvas.Header className="justify-content-between position-relative border-bottom" closeButton>
          <Offcanvas.Title as="h5" className="fw-500" id="offcanvasReviewLabel" >
            Add Review{" "}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            {/* <!-- Add Nonce for security --> */}
            <input
              type="hidden"
              id="st_ajax_nonce"
              name="st_ajax_nonce"
              value="a19cf1e628"
            />
            <input
              type="hidden"
              name="_wp_http_referer"
              value="/product/wp/streamit/tvshows/vikings/"
            />{" "}
            <input id="cm_id" type="hidden" name="comment_id" value="" />
            {/* <!-- Hidden fields for post type and post ID --> */}
            <input
              id="cm_post_type"
              type="hidden"
              name="post_type"
              value="tvshow"
            />
            <input id="cm_post_id" type="hidden" name="post_id" value="1" />
            {/* <!-- User ID for logged-in users --> */}
            <input id="cm_user_id" type="hidden" name="user_id" value="12" />
            {/* <!-- Display logged-in user's name --> */}
            <div className="form-group">
              <input
                id="cm_name"
                name="cm_name"
                type="hidden"
                value="Marvin McKinney"
              />
              <input
                id="cm_email"
                name="cm_email"
                type="hidden"
                value="marvin@demo.com"
              />
              <p className="mt-0 text-heading">Logged in as: Marvin McKinney</p>
            </div>
            {/* <!-- Rating section --> */}
            <div className="form-group mb-4">
              <label className="form-label mb-3">Your Rating</label>
              <div className="star-rating" id="starRating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label for="star5" title="5 stars">
                  <i className="ph-fill ph-star" aria-hidden="true"></i>
                </label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label for="star4" title="4 stars">
                  <i className="ph-fill ph-star" aria-hidden="true"></i>
                </label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label for="star3" title="3 stars">
                  <i className="ph-fill ph-star" aria-hidden="true"></i>
                </label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label for="star2" title="2 stars">
                  <i className="ph-fill ph-star" aria-hidden="true"></i>
                </label>
                <input type="radio" id="star1" name="rating" value="1" />
                <label for="star1" title="1 star">
                  <i className="ph-fill ph-star" aria-hidden="true"></i>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label flex-grow-1" for="Description">
                Your Review
              </label>
              <textarea
                id="Description"
                className="form-control review-text-area"
                rows="8"
                cols="45"
              ></textarea>
            </div>
            <div className="iq-button">
              <Link
                to="javascript:void(0)"
                className="btn btn-primary text-capitalize"
              >
                <span className="button-text">Submit Review</span>
              </Link>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Review_Details;
