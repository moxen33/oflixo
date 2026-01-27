import React, { Fragment, memo, useState } from "react";
import { Form, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
//react-bootstrap
import { Container } from "react-bootstrap";

//components
import MoviesRecommendedForYou from "../../components/sections/MoviesRecommendedForYou";
import RelatedVideos from "../../components/sections/RelatedVideos";
import UpcomingMovies from "../../components/sections/UpcomingMovies";
import RelatedMovies from "../../components/sections/RelatedMovies";
import VideoJS from "../../components/plugins/VideoJs";
import Details_Part from "../../components/details_part";

//function
import { useSelector } from "react-redux";
import { theme_scheme_direction } from "../../store/setting/selectors";
import {
  crew,
  MovieDetail_recommendedforYou,
  detailpage_related_video,
  upcoming_recommended_movies,
  upcoming_related_video,
} from "../../StaticData/data";

// the hook
import { useTranslation } from "react-i18next";

//fslightbox
import FsLightbox from "fslightbox-react";

//choicejs
import poster_img from "/assets/images/media/chosfies.webp";
import YourFavouritePersonality from "../../components/sections/YourFavouritePersonality";

const RestrictedPage = memo(() => {
  // date, type
  const { t } = useTranslation();
  const themeSchemeDirection = useSelector(theme_scheme_direction);

  const playerRef = React.useRef(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    muted: true,
    loop: true,
    preload: "auto",
    responsive: true,
    techOrder: ["youtube"],
    sources: [
      {
        src: "https://www.youtube.com/watch?v=spGSAeqxVUc",
        type: "video/youtube",
      },
    ],
    youtube: {
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      autoplay: 1,
    },
    fullscreen: true,
    poster: { poster_img },
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
    });

    player.on("dispose", () => {
    });
  };
  return (
    <Fragment>
      <div className="poition-relative">
        <div className="iq-main-slider site-video position-relative">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="movie-detail-part position-relative">
          <div className="trending-info pt-0 pb-0">
            <div className="details-parts">
              <Details_Part
                title={"streamMovies.chosfies"}
                subsribe_to_watch={true}
                isplaylist={true}
                isdownload={true}
                btn_title={"streamButtons.subscribe_watch"}
                icon_class={"ph ph-fill ph-crown"}
                year={2021}
                time={"2hr : 6m"}
                views={"1.4k"}
                imdbratting={7}
                cencerratting={true}
                redirectTo="/pricing"
              />
            </div>
          </div>
        </div>
      </div>
      <Container fluid>
        <div className="overflow-hidden">
          <div className="section-padding-top">
            <MoviesRecommendedForYou
              title={"sectionTitle.recommended"}
              data={MovieDetail_recommendedforYou}
              slides={6}
              viewAll={false}
              slideMedium={3}
            />
          </div>
          <YourFavouritePersonality title={"sectionTitle.starring"} slidePerView={11} />
          <YourFavouritePersonality
            title={"sectionTitle.crew"}
            data={crew}
            slidePerView={11}
          />
          <RelatedMovies
            viewAll={false}
            slideMedium={3}
            data={upcoming_recommended_movies}
          />
          <RelatedVideos
            data={detailpage_related_video}
            viewAll={false}
            slideMedium={3}
          />

          <UpcomingMovies
            data={upcoming_related_video}
            viewAll={false}
            title="sectionTitle.upcoming"
            slideMedium={3}
            slides={6}
          />
          <div className="show-episode section-padding-bottom">
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
              <div className="review-card">
                <div className="review-detail rounded-3">
                  <h5 className="m-0 text-center"> Not Rated Yet</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <FsLightbox
        maxYoutubeVideoDimensions={{ width: 1000, height: 600 }}
        exitFullscreenOnClose={true}
        // toggler={toggler}
        sources={["https://www.youtube.com/watch?v=QCGq1epI9pQ"]}
      />

      <Offcanvas
        className="overflow-y-auto widget-shopping-cart-content offcanvas-sidebar sidebar-container  border-left-0"
        id="offcanvasReview"
        show={show}
        onHide={handleClose}
        placement={themeSchemeDirection === 'rtl' ? "start" : "end"}
      >
        <Offcanvas.Header className="offcanvas-header position-relative border-bottom" closeButton>
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
    </Fragment>
  );
});

RestrictedPage.displayName = "RestrictedPage";
export default RestrictedPage;