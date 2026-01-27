import React from "react";
import { generateImgPath } from "../StaticData/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const ViewMore = () => {
    const { t } = useTranslation();
  const genres = ["streamTag.action", "streamTag.animation", "streamTag.crime", "streamTag.horror"];

  const reviews = [
    {
      id: 1,
      name: "streamAccount.leslie",
      date: "2024-12-20 11:40:19",
      rating: 3,
      comment:
         "streamReview.review1",
      image: "/assets/images/user/user3.jpg",
    },
    {
      id: 2,
      name: "streamAccount.jerry",
      date: "2024-12-20 11:36:22",
      rating: 1,
      comment: "streamReview.review2",
      image: "/assets/images/user/user4.png",
    },
    {
      id: 3,
      name:  "streamAccount.arlene",
      date: "2024-12-20 10:21:08",
      rating: 4,
      comment: "streamReview.review3",
      image: "/assets/images/user/user5.jpg",
    },
    {
      id: 4,
      name: "streamAccount.freya",
      date: "2024-12-18 10:57:21",
      rating: 3,
      comment: "streamReview.review4",
      image: "/assets/images/user/user2.jpg",
    },
  ];

  const generateStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`ph-fill ph-star ${i <= count ? "text-warning" : ""}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <>
      <section className="section-padding">
        <div className="rate-review-details">
          <div className="container-fluid">
            <div className="row gy-4">
              <div className="col-md-4 col-xl-3">
                <div className="card mb-4 border-0">
                  <div className="card-body p-4">
                    <div className="css_prefix-card">
                      <div className="block-images position-relative w-100">
                        <div className="image-box w-100">
                          <Link to="#">
                            <img
                              src={generateImgPath("/assets/images/media/vikings.webp")}
                              alt="Vikings"
                              className="img-fluid object-cover w-100 d-block border-0"
                            />{" "}
                          </Link>
                        </div>
                        <div className="card-description with-transition">
                          <ul className="genres-list p-0 mb-2 d-flex align-items-center flex-wrap">
                            {genres!= undefined && genres != null && genres.map((genre, index) => (
                              <li className="trending-list" key={index}>
                                <Link
                                  to="/view-all-movie"
                                  className="font-size-14"
                                >
                                  {t(genre)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <h5 className="css_prefix-title text-capitalize line-count-1 mb-0">
                            <Link to="#" className="color-inherit" tabIndex="0">
                              {t("streamMovies.vikings")}{" "}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="ratting-card">
                      <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
                        <h2 className="m-0">3.00</h2>
                        <div className="data">
                          <ul className="list-inline m-0 p-0 d-flex align-items-center gap-1">
                            <li className="text-warning">
                              <i className="icon-star-fill-icon"></i>
                            </li>
                            <li className="text-warning">
                              <i className="icon-star-fill-icon"></i>
                            </li>
                            <li className="text-warning">
                              <i className="icon-star-fill-icon"></i>
                            </li>
                            <li className="text-muted">
                              <i className="icon-star-fill-icon"></i>
                            </li>
                            <li className="text-muted">
                              <i className="icon-star-fill-icon"></i>
                            </li>
                          </ul>
                          <p className="m-0">{t("streamReview.based_on_rating")}</p>
                        </div>
                      </div>

                      <div className="row align-items-center g-3">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-1 col-3">
                          <div className="d-flex align-items-center gap-2">
                            <span className="h6 mb-0">5</span>
                            <i className="icon-star-fill-icon text-warning"></i>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-7 col-sm-9 col-7">
                          <div
                            className="progress w-100 progress-ratings"
                            role="progressbar"
                            aria-label="Rating 5"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-2 col-sm-2 col-2 flex-shrink-0">
                          <span className="text-body">8</span>
                        </div>
                      </div>

                      <div className="row align-items-center g-3">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-1 col-3">
                          <div className="d-flex align-items-center gap-2">
                            <span className="h6 mb-0">4</span>
                            <i className="icon-star-fill-icon text-warning"></i>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-7 col-sm-9 col-7">
                          <div
                            className="progress w-100 progress-ratings"
                            role="progressbar"
                            aria-label="Rating 4"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "55%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-2 col-sm-2 col-2 flex-shrink-0">
                          <span className="text-body">5</span>
                        </div>
                      </div>

                      <div className="row align-items-center g-3">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-1 col-3">
                          <div className="d-flex align-items-center gap-2">
                            <span className="h6 mb-0">3</span>
                            <i className="icon-star-fill-icon text-warning"></i>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-7 col-sm-9 col-7">
                          <div
                            className="progress w-100 progress-ratings"
                            role="progressbar"
                            aria-label="Rating 3"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "45%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-2 col-sm-2 col-2 flex-shrink-0">
                          <span className="text-body">4</span>
                        </div>
                      </div>

                      <div className="row align-items-center g-3">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-1 col-3">
                          <div className="d-flex align-items-center gap-2">
                            <span className="h6 mb-0">2</span>
                            <i className="icon-star-fill-icon text-warning"></i>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-7 col-sm-9 col-7">
                          <div
                            className="progress w-100 progress-ratings"
                            role="progressbar"
                            aria-label="Rating 2"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-2 col-sm-2 col-2 flex-shrink-0">
                          <span className="text-body">1</span>
                        </div>
                      </div>

                      <div className="row align-items-center g-3">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-1 col-3">
                          <div className="d-flex align-items-center gap-2">
                            <span className="h6 mb-0">1</span>
                            <i className="icon-star-fill-icon text-warning"></i>
                          </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-7 col-sm-9 col-7">
                          <div
                            className="progress w-100 progress-ratings"
                            role="progressbar"
                            aria-label="Rating 1"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "25%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-2 col-sm-2 col-2 flex-shrink-0">
                          <span className="text-body">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-xl-9 ">
                <div className="mb-2 d-flex align-items-center justify-content-between">
                  <h5>4 {t("streamReview.reviews_for_vikings")}</h5>
                </div>
                {reviews.map((review) => (
                  <div className="review-card" key={review.id}>
                    <div className="review-detail rounded-3">
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                          <img
                            src={generateImgPath(review.image)}
                            className="img-fluid user-img rounded-circle"
                            alt={review.name}
                          />
                          <div>
                            <h6 className="line-count-1 m-0">{t(review.name)}</h6>
                            <p className="mb-0 mt-1 small">{review.date}</p>
                          </div>
                        </div>
                        <div className="star-rating d-flex gap-1 align-items-center">
                          {generateStars(review.rating)}
                        </div>
                      </div>
                      <p className="mb-0 mt-3 pt-3 border-top fw-medium">
                        {t(review.comment)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewMore;
