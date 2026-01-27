import { useState, useContext, memo, Fragment } from "react";

//Router
import { Link, useLocation } from "react-router-dom";

//React-bootstrap
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
  Nav,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";

// the hook
import { useTranslation } from "react-i18next";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className="nav-link"
      role="button"
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = memo(() => {
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState(false);
  const [active, setActive] = useState("");

  //location
  let location = useLocation();

  return (
    <Fragment>
      <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
        <Accordion.Item
          as="li"
          bsPrefix={`nav-item ${
            active === "dashbord" ? "active nav-link" : ""
          } `}
        >
          <Link
            className={`${
              location.pathname === "/" ? "active" : ""
            } nav-link align-items-center`}
            aria-current="page"
            to="/"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Dashboard</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Dashboard"
                data-bs-original-title="Dashboard"
              >
                <i className="ph ph-squares-four fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.dashboard")}</span>
          </Link>
        </Accordion.Item>
        <li
          className={`${
            location.pathname === "/dashboard" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/dashboard" ? "active" : ""
            } nav-link align-items-center`}
            aria-current="page"
            to="/dashboard"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Dashboard</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Dashboard"
                data-bs-original-title="Dashboard"
              >
                <i className="ph ph-squares-four fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.dashboard1")}</span>
          </Link>
        </li>
        <Accordion.Item
          as="li"
          bsPrefix={`nav-item ${
            active === "rating-page" ? "active nav-link" : ""
          } `}
        >
          <Link
            className={`${
              location.pathname === "/rating-page" ? "active" : ""
            } nav-link align-items-center`}
            aria-current="page"
            to="/rating-page"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Rating</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Rating"
                data-bs-original-title="Rating"
              >
                <i className="ph ph-star-half fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.rating")}</span>
          </Link>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          bsPrefix={`nav-item ${
            active === "comment-list" ? "active nav-link" : ""
          } `}
        >
          <Link
            className={`${
              location.pathname === "/comment-list" ? "active" : ""
            } nav-link align-items-center`}
            aria-current="page"
            to="/comment-list"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Comments</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Comment"
                data-bs-original-title="Comment"
              >
                <i className="ph ph-chat-circle-dots fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.comments")}</span>
          </Link>
        </Accordion.Item>

        <Accordion.Item
          as="li"
          bsPrefix={`nav-item ${
            active === "comment-list" ? "active nav-link" : ""
          } `}
        >
          <Link
            className={`${
              location.pathname === "/app/user-list" ? "active" : ""
            } nav-link align-items-center`}
            aria-current="page"
            to="/app/user-list"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Users</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="User"
                data-bs-original-title="User"
              >
                <i className="ph ph-user fs-5"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.users")}</span>
          </Link>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-movie"
          bsPrefix={`nav-item ${active === "movie" ? "active" : ""} `}
          onClick={() => setActive("movie")}
        >
          <CustomToggle
            eventKey="sidebar-movie"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Movie List</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Movie List"
                data-bs-original-title="Movie List"
              >
                <i className="ph ph-film-strip fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.movies")}</span>
            <div className="right-icon">
              <i className="ph ph-caret-right"></i>
            </div>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-movie">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/movie/movielist" ? "active" : ""
                  } nav-link`}
                  to="/movie/movielist"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Movie Lists</Tooltip>}
                  >
                    <i className="ph ph-film-strip fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.movie_list")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/movie/genres" ? "active" : ""
                  } nav-link`}
                  to="/movie/genres"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Genres</Tooltip>}
                  >
                    <i className="ph ph-faders-horizontal fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.genres")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/movie/tags" ? "active" : ""
                  } nav-link`}
                  to="/movie/tags"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Tags</Tooltip>}
                  >
                    <i className="ph ph-tag fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.tags")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/movie/playlist"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/movie/playlist"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Movie Playlist</Tooltip>}
                  >
                    <i className="ph ph-playlist fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.movie-playlists")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-tvshows"
          bsPrefix={`nav-item ${active === "show" ? "active" : ""} `}
          onClick={() => setActive("show")}
        >
          <CustomToggle
            eventKey="sidebar-tvshows"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Tv Shows</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="TV Shows"
                data-bs-original-title="TV Shows"
              >
                <i className="ph ph-television-simple fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.tv_shows")}</span>
            <div className="right-icon">
              <i className="ph ph-caret-right"></i>
            </div>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-tvshows">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/tv-shows/showlist" ? "active" : ""
                  } nav-link`}
                  to="/tv-shows/showlist"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Show Lists</Tooltip>}
                  >
                    <i className="ph ph-monitor-play fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.show_list")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/tv-shows/episodes" ? "active" : ""
                  } nav-link`}
                  to="/tv-shows/episodes"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Episodes</Tooltip>}
                  >
                    <i className="ph ph-monitor-play fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.episodes")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/tv-shows/genres" ? "active" : ""
                  } nav-link`}
                  to="/tv-shows/genres"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Genres</Tooltip>}
                  >
                    <i className="ph ph-faders-horizontal fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.genres")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/tv-shows/tag" ? "active" : ""
                  } nav-link`}
                  to="/tv-shows/tag"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Tag</Tooltip>}
                  >
                    <i className="ph ph-tag fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.tags")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/tv-shows/playlist" ? "active" : ""
                  } nav-link`}
                  to="/tv-shows/playlist"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Episdoe Playlist</Tooltip>}
                  >
                    <i className="ph ph-playlist fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.episodes-playlist")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-video"
          bsPrefix={`nav-item ${active === "video" ? "active" : ""} `}
          onClick={() => setActive("video")}
        >
          <CustomToggle
            eventKey="sidebar-video"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Videos</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Videos"
                data-bs-original-title="Videos"
              >
                <i className="ph ph-video-camera fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.videos")}</span>
            <div className="right-icon">
              <i className="ph ph-caret-right"></i>
            </div>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-video">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/video/videos" ? "active" : ""
                  } nav-link`}
                  to="/video/videos"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Videos</Tooltip>}
                  >
                    <i className="ph ph-video fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.videos")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/video/video_category" ? "active" : ""
                  } nav-link`}
                  to="/video/video_category"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Video Category</Tooltip>}
                  >
                    <i className="ph ph-queue fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.video-category")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/video/video_tag" ? "active" : ""
                  } nav-link`}
                  to="/video/video_tag"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Videos Tag</Tooltip>}
                  >
                    <i className="ph ph-video-camera fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.video-tags")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/video/video_playlist" ? "active" : ""
                  } nav-link`}
                  to="/video/video_playlist"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Video Playlist</Tooltip>}
                  >
                    <i className="ph ph-playlist fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.video-playlist")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-person"
          bsPrefix={`nav-item ${active === "person" ? "active" : ""} `}
          onClick={() => setActive("person")}
        >
          <CustomToggle
            eventKey="sidebar-person"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Person</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="person"
                data-bs-original-title="person"
              >
                <i className="ph ph-users-three fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.persons")}</span>
            <div className="right-icon">
              <i className="ph ph-caret-right"></i>
            </div>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-person">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/person/person" ? "active" : ""
                  } nav-link`}
                  to="/person/person"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Person</Tooltip>}
                  >
                    <i className="ph ph-user-circle fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.persons")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/person/person_category" ? "active" : ""
                  } nav-link`}
                  to="/person/person_category"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Categories</Tooltip>}
                  >
                    <i className="ph ph-user-circle-plus fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.categories")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/person/person_tag" ? "active" : ""
                  } nav-link`}
                  to="/person/person_tag"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Tag</Tooltip>}
                  >
                    <i className="ph ph-tag fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.tags")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>

        <Accordion.Item
          as="li"
          bsPrefix={`nav-item ${
            active === "rating-page" ? "active nav-link" : ""
          } `}
        >
          <Link
            className={`${
              location.pathname === "/review/review" ? "active" : ""
            } nav-link align-items-center`}
            aria-current="page"
            to="/review/review"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Review</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Review"
                data-bs-original-title="Review"
              >
                <i className="ph ph-chat-centered fs-5"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.review")}</span>
          </Link>
        </Accordion.Item>

        <Accordion.Item
          as="li"
          bsPrefix={`nav-item ${
            active === "rating-page" ? "active nav-link" : ""
          } `}
        >
          <Link
            className={`${
              location.pathname === "/special-pages/pricing" ? "active" : ""
            } nav-link align-items-center`}
            aria-current="page"
            to="/special-pages/pricing"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Pricing</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Pricing"
                data-bs-original-title="Pricing"
              >
                <i className="ph ph-wallet fs-5"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.pricing")}</span>
          </Link>
        </Accordion.Item>
       
        <Accordion.Item
          as="li"
          eventKey="sidebar-auth"
          bsPrefix={`nav-item ${active === "auth" ? "active" : ""} `}
          onClick={() => setActive("user")}
        >
          <CustomToggle
            eventKey="sidebar-auth"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger placement="right" overlay={<Tooltip>User</Tooltip>}>
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Authentication"
                data-bs-original-title="Authentication"
              >
                <i className="ph ph-shield-check fs-5"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.authentication")}</span>
            <i className="right-icon">
              <i className="ph ph-caret-right"></i>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-auth">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/sign-in" ? "active" : ""
                  } nav-link`}
                  to="/auth/sign-in"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Login</Tooltip>}
                  >
                    <i className="ph ph-sign-in fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.login")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/sign-up" ? "active" : ""
                  } nav-link`}
                  to="/auth/sign-up"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Register</Tooltip>}
                  >
                    <i className="ph ph-trademark-registered fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.register")}</span>
                </Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/recoverpw" ? "active" : ""
                  } nav-link`}
                  to="/auth/recoverpw"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Recover password</Tooltip>}
                  >
                    <i className="ph ph-voicemail fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">
                    {t("sidebar.recover_password")}
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/confirm-mail" ? "active" : ""
                  } nav-link`}
                  to="/auth/confirm-mail"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Confirm Mail</Tooltip>}
                  >
                    <i className="ph ph-file fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.confirm_mail")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/two-factor" ? "active" : ""
                  } nav-link`}
                  to="/auth/two-factor"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Two Factor Authentication</Tooltip>}
                  >
                    <i className="ph ph-fingerprint fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">
                    {t("sidebar.two_factor_authentication")}
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/account-deactivate"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/auth/account-deactivate"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Account Deactivated</Tooltip>}
                  >
                    <i className="ph ph-user-circle-minus fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">
                    {t("sidebar.account_deactivated")}
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/auth/lock-screen" ? "active" : ""
                  } nav-link`}
                  to="/auth/lock-screen"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Lock Screen</Tooltip>}
                  >
                    <i className="ph ph-lock fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.lock_screen")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>

        <Accordion.Item
          as="li"
          eventKey="utilities-error"
          bsPrefix={`nav-item ${active === "error" ? "active" : ""} `}
          onClick={() => setActive("error")}
        >
          <CustomToggle
            eventKey="utilities-error"
            active={activeMenu === "utilities-error" ? true : false}
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Utilities</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Utilities"
                data-bs-original-title="Utilities"
              >
                <i className="ph-fill ph-note fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.utilities")}</span>
            <i className="right-icon">
              <i className="ph ph-caret-right"></i>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="utilities-error">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/errors/error-404" ? "active" : ""
                  } nav-link`}
                  to="/errors/error-404"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Error 404</Tooltip>}
                  >
                    <i className="ph ph-warning-circle fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.error_404")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/errors/error-500" ? "active" : ""
                  } nav-link`}
                  to="/errors/error-500"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Error 500</Tooltip>}
                  >
                    <i className="ph ph-warning-circle fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.error_500")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/errors/maintenance" ? "active" : ""
                  } nav-link`}
                  to="/errors/maintenance"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Maintenance</Tooltip>}
                  >
                    <i className="ph ph-archive fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.maintenance")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/errors/coming-soon" ? "active" : ""
                  } nav-link`}
                  to="/errors/coming-soon"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Coming Soon</Tooltip>}
                  >
                    <i className="ph ph-clock fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.coming_soon")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Nav.Item as="li">
          <Link
            className={`${
              location.pathname === "/extra/blank-page" ? "active" : ""
            } nav-link`}
            to="/extra/blank-page"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Blank Page</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Blank Page"
                data-bs-original-title="Blank Page"
              >
                <i className="ph ph-note fs-5"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.blank_page")}</span>
          </Link>
        </Nav.Item>
        <Accordion.Item as="li" eventKey="sidebar-ui" bsPrefix="nav-item">
          <CustomToggle
            eventKey="sidebar-ui"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Ui Elements</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="UI Elements"
                data-bs-original-title="UI Elements"
              >
                <i className="ph ph-briefcase fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.ui_elements")}</span>
            <div className="right-icon">
              <i className="ph ph-caret-right"></i>
            </div>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-ui">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/avatars" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/avatars"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Avatars</Tooltip>}
                  >
                    <i className="ph ph-user fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.avatars")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/alerts" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/alerts"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Alerts</Tooltip>}
                  >
                    <i className="ph ph-bell fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.alerts")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/badges" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/badges"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Badge</Tooltip>}
                  >
                    <i className="ph-duotone ph-shield-check fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.badge")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/breadcrumb"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/breadcrumb"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Breadcrumb</Tooltip>}
                  >
                    <i className="ph ph-list fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.bread_crumb")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/buttons" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/buttons"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Buttons</Tooltip>}
                  >
                    <i className="ph-duotone ph-device-tablet-camera fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.buttons")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/button-group"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/button-group"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Buttons</Tooltip>}
                  >
                    <i className="ph ph-rows fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">
                    {t("sidebar.buttons_group")}
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/offcanvas"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/offcanvas"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Offcanvas</Tooltip>}
                  >
                    <i className="ph ph-corners-out fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.offcanavas")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/color" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/color"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Colors</Tooltip>}
                  >
                    <i className="ph ph-palette fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.colors")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/cards" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/cards"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Cards</Tooltip>}
                  >
                    <i className="ph ph-identification-card fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.cards")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/carousel"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/carousel"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Carousel</Tooltip>}
                  >
                    <i className="ph-duotone ph-film-strip fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.carousel")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/grid" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/grid"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Grid</Tooltip>}
                  >
                    <i className="ph ph-grid-four fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.grid")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/images" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/images"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Images</Tooltip>}
                  >
                    <i className="ph ph-image fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.images")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/list-groups"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/list-groups"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>list Group</Tooltip>}
                  >
                    <i className="ph ph-list-checks fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.list_group")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/modal" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/modal"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Modal</Tooltip>}
                  >
                    <i className="ph ph-square-split-horizontal fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.modal")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/notifications"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/notifications"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Notifications</Tooltip>}
                  >
                    <i className="ph ph-bell fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">
                    {t("sidebar.notifications")}
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/pagination"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/pagination"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Pagination</Tooltip>}
                  >
                    <i className="ph ph-dots-three-outline fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.pagination")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/popovers"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/popovers"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Popovers</Tooltip>}
                  >
                    <i className="ph ph-eraser fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.popovers")}</span>
                </Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/typography"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/typography"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Typography</Tooltip>}
                  >
                    <i className="ph ph-keyboard fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.typography")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/tabs" ? "active" : ""
                  } nav-link`}
                  to="/ui-elements/tabs"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Tabs</Tooltip>}
                  >
                    <i className="ph ph-stack fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.tabs")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/tooltips"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/tooltips"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Tooltips</Tooltip>}
                  >
                    <i className="ph ph-magnet fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.tooltips")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/ui-elements/embed-video"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/ui-elements/embed-video"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Video</Tooltip>}
                  >
                    <i className="ph ph-video-camera fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.video")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-Widget"
          bsPrefix={`nav-item ${active === "Widget" ? "active" : ""} `}
          onClick={() => setActive("Widget")}
        >
          <CustomToggle
            eventKey="sidebar-Widget"
            active={activeMenu === "sidebar-Widget" ? true : false}
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Widgets</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Widgets"
                data-bs-original-title="Widgets"
              >
                <i className="ph ph-browser fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.widgets")}</span>
            <i className="right-icon">
              <i className="ph ph-caret-right"></i>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-Widget">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/widgetbasic" ? "active" : ""
                  } nav-link`}
                  to="/widgetbasic"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Widget Basic</Tooltip>}
                  >
                    <i className="ph ph-chart-bar fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">
                    {t("sidebar.widgets_basic")}
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/widgetchart" ? "active" : ""
                  } nav-link`}
                  to="/widgetchart"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Widget chart</Tooltip>}
                  >
                    <i className="ph ph-chart-line fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">
                    {t("sidebar.widgets_chart")}
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/widgetcard" ? "active" : ""
                  } nav-link`}
                  to="/widgetcard"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Widget Card</Tooltip>}
                  >
                    <i className="ph ph-browsers fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.widgets_card")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-form"
          bsPrefix={`nav-item ${active === "form" ? "active" : ""} `}
          onClick={() => setActive("form")}
        >
          <CustomToggle
            eventKey="sidebar-form"
            active={activeMenu === "sidebar-form" ? true : false}
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger placement="right" overlay={<Tooltip>Form</Tooltip>}>
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Form"
                data-bs-original-title="Form"
              >
                <i className="ph ph-note fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.form")}</span>
            <i className="right-icon">
              <i className="ph ph-caret-right"></i>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-form">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/form/form-element" ? "active" : ""
                  } nav-link`}
                  to="/form/form-element"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Elements</Tooltip>}
                  >
                    <i
                      className="icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      aria-label="Form"
                      data-bs-original-title="Form"
                    >
                      <i className="ph ph-book fs-5"></i>
                    </i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.elements")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/form/form-wizard" ? "active" : ""
                  } nav-link`}
                  to="/form/form-wizard"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Wizard</Tooltip>}
                  >
                    <i className="ph ph-magic-wand fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.wizard")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/form/form-validation"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/form/form-validation"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Validation</Tooltip>}
                  >
                    <i className="ph ph-note-pencil fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.validation")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-table"
          bsPrefix={`nav-item ${active === "table" ? "active" : ""} `}
          onClick={() => setActive("table")}
        >
          <CustomToggle
            eventKey="sidebar-table"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Table</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Table"
                data-bs-original-title="Table"
              >
                <i className="ph-fill ph-table fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.table")}</span>
            <i className="right-icon">
              <i className="ph ph-caret-right"></i>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-table">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/table/bootstrap-table"
                      ? "active"
                      : ""
                  } nav-link`}
                  to="/table/bootstrap-table"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Bootstrap Table</Tooltip>}
                  >
                    <i className="fa-brands fa-bootstrap"></i>
                  </OverlayTrigger>
                  <span className="item-name">
                    {t("sidebar.bootstrap_table")}
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/table/Datatable" ? "active" : ""
                  } nav-link`}
                  to="/table/Datatable"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Datatable</Tooltip>}
                  >
                    <i className="ph ph-table fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.data_table")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/table/border-table" ? "active" : ""
                  } nav-link`}
                  to="/table/border-table"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Bordered Table</Tooltip>}
                  >
                    <i className="ph ph-table fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">
                    {t("sidebar.bordered_table")}
                  </span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/table/fixed-table" ? "active" : ""
                  } nav-link`}
                  to="/table/fixed-table"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Fixed Table</Tooltip>}
                  >
                    <i className="ph ph-grid-nine fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.fixed_table")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
        <Accordion.Item
          as="li"
          eventKey="sidebar-icons"
          bsPrefix={`nav-item ${active === "icon" ? "active" : ""} `}
          onClick={() => setActive("icon")}
        >
          <CustomToggle
            eventKey="sidebar-icons"
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Icons</Tooltip>}
            >
              <i
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="icons"
                data-bs-original-title="icons"
              >
                <i className="ph-duotone ph-circles-three-plus fs-4"></i>
              </i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.icons")}</span>
            <i className="right-icon">
              <i className="ph ph-caret-right"></i>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey="sidebar-icons">
            <ul className="sub-nav">
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/icon/ph-regular" ? "active" : ""
                  } nav-link`}
                  to="/icon/ph-regular"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Ph Regular</Tooltip>}
                  >
                    <i className="ph ph-currency-rub fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.ph-regular")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/icon/ph-bold" ? "active" : ""
                  } nav-link`}
                  to="/icon/ph-bold"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Ph Bold</Tooltip>}
                  >
                    <i className="ph-bold ph-currency-rub fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.ph-bold")}</span>
                </Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link
                  className={`${
                    location.pathname === "/icon/ph-fill" ? "active" : ""
                  } nav-link`}
                  to="/icon/ph-fill"
                >
                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip>Ph Fill</Tooltip>}
                  >
                    <i className="ph-fill ph-currency-rub fs-5"></i>
                  </OverlayTrigger>
                  <span className="item-name">{t("sidebar.ph-fill")}</span>
                </Link>
              </Nav.Item>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>

        <li
          className={`${
            location.pathname === "/access-control" ? "active" : ""
          } nav-item `}
        >
          <Link
            className={`${
              location.pathname === "/access-control" ? "active" : ""
            } nav-link align-items-center`}
            to="/access-control"
          >
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>Accesscontrol</Tooltip>}
            >
              <i className="ph ph-user-gear fs-4"></i>
            </OverlayTrigger>
            <span className="item-name">{t("sidebar.access_control")}</span>
          </Link>
        </li>
      </Accordion>
      <br />
    </Fragment>
  );
});

VerticalNav.displayName = "VerticalNav";
export default VerticalNav;
