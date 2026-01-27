import { useState, useEffect, memo } from "react";

//react-bootstrap
import { Navbar, Container, Nav, Collapse } from "react-bootstrap";

//router
import { Link, useLocation } from "react-router-dom";

// Component
import SubNav from "./sub-nav";

// Import selectors & action from setting store
import * as SettingSelector from "../../../../store/setting/selectors";

//redux
import { useDispatch, useSelector } from "react-redux";
import { sidebar_type } from "../../../../store/setting/actions";

import { DashboardRouter } from "../../../../router/dashboard";

// logo
import Logo from "../../../../components/custom/logo/brand-logo";

// the hook
import { useTranslation } from "react-i18next";

const Header = memo((props) => {
  const { t } = useTranslation();
  useEffect(() => {
    //offcanvase code
    const result = window.matchMedia("(max-width: 1200px)");
    window.addEventListener("resize", () => {
      if (result.matches === true) {
        if (show1 === true) {
          document.documentElement.style.setProperty("overflow", "hidden");
        } else {
          document.documentElement.style.removeProperty("overflow");
        }
      } else {
        document.documentElement.style.removeProperty("overflow");
      }
    });
    if (window.innerWidth <= "1200") {
      if (show1 === true) {
        document.documentElement.style.setProperty("overflow", "hidden");
      } else {
        document.documentElement.style.removeProperty("overflow");
      }
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
  });

  const [show1, setShow1] = useState(false);

  //collapse
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);
  const [open15, setOpen15] = useState(false);
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);

  const dispatch = useDispatch();

  const sidebarType = useSelector(SettingSelector.sidebar_type)

  const minisidebar = () => {
    if (sidebarType === "sidebar-mini") {
      dispatch(sidebar_type(""))
    }
    else {
      dispatch(sidebar_type("sidebar-mini"))
    }
  };

  let location = useLocation();
  //optimized code 
  const route = DashboardRouter
    .slice(0)
    .flatMap(element => element.children.map(child => ({ element, child })))
    .find(({ element, child }) => {
      const path = element.path === "" ? `${child.path}` : `${child.path}`;
      return path === location.pathname;
    });
  const routeName = route ? route.child.name : undefined;
  // active link
  const ActiveLink = route ? route.child.Activelink : undefined;

  const handleOffcanvas = () => {
    setShow1(!show1)
  }




  return (
    <Navbar expand="xl" className="nav iq-navbar header-hover-menu left-border">
      <Container fluid className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <Logo onlyLogo="logo-full" />
          <h4 className="logo-title d-none d-sm-block">{props.app_name}</h4>
        </Link>
        <div
          className="sidebar-toggle"
          data-toggle="sidebar"
          data-active="true"
          onClick={minisidebar}
        >
          <i className="icon d-flex">
            <svg width="20px" viewBox="0 0 24 24" className="icon-20">
              <path
                fill="currentColor"
                d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
              />
            </svg>
          </i>
        </div>
        <div className="d-flex align-items-center justify-content-between product-offcanvas">
          <div className="breadcrumb-title pe-3 d-none d-xl-block">
            <small className="mb-0 text-capitalize">
              {routeName}
            </small>
          </div>
          <div className="d-block d-lg-none">
            <Link
              className="d-flex align-items-center gap-2 iq-header-logo"
              to="/"
            >
              {/* <h3
                className="logo-title d-none d-sm-block"
                data-setting="app_name"
              >
                {t("pricing.prokit_hd_shows")}
              </h3> */}
            </Link>
          </div>
        </div>
        <SubNav handleOffcanvas={handleOffcanvas} />
      </Container>
    </Navbar>
  );
});

Header.displayName = "Header";
export default Header;
