import React, { Fragment, memo, useState } from "react";

// react-bootstrap
import { Collapse, Form } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

// the hook
import { useTranslation } from "react-i18next";

const ShopCategorySidebar = memo((props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [sliderValues, setSliderValues] = useState(5);
  const handleSliderChange = (values) => {
    // Convert the values to numbers if necessary
    const roundedValues = values.map((value) => Math.round(value));
    setSliderValues(roundedValues[0]);
  };

  const product_tag = ["streamShopTag.camera","streamShopTag.costume" , "streamShopTag.lighting" , "streamShopTag.production" , "streamShopTag.studios"];

  return (
    <Fragment>
      <h5 className="widget-title-sidbar text-uppercase">
        <span>{t("streamShop.product_categories")}</span>
      </h5>
      <div className="form-group input-group search-container-class">
        <input
          type="text"
          className="form-control border-0"
          placeholder="Search Product"
        />
        <span className="input-group-text border-0 magnify-glass-bg">
          <i className="ph ph-magnifying-glass text-white"></i>
        </span>
      </div>
      <div className="shop-box">
        <h4 className="title-product-sidbar">{t("streamShop.price_filter")}</h4>
        <div className="form-group my-4 product-range">
          <div className="range-slider" id="product-price-range ">
            {/* <Form.Range min={0} max={50} step={5} defaultValue={10} /> */}
            <Nouislider
              range={{ min: 0, max: 50 }}
              start={[5, 100]}
              connect
              onChange={handleSliderChange}
            />
          </div>
        </div>
        <div className=" d-flex align-items-center my-3 price-range">
          <small>{t("streamShop.price")}:&nbsp;</small>
          <small id="lower-value">&nbsp;${sliderValues}</small>
          <small id="lower-value1">&nbsp; - &nbsp;</small>
          <small id="upper-value">$50</small>
        </div>
      </div>

      <div className="shop-box">
        <ul className="list-unstyled p-0 m-0 shop-list-checkbox">
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.uncategorized")}
            />
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.activeman")}
            />
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <Form.Check // prettier-ignore
                type="checkbox"
                label={t("streamShop.disney_world")}
              />
              <Link
                className="me-0"
                onClick={() => setOpen(!open)}
                to="#"
                role="button"
              >
                <i className="ph ph-caret-down align-middle"></i>
              </Link>
            </div>
            <Collapse in={open}>
              <ul className="list-unstyled ps-2 mt-3">
                <li>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label={t("streamShop.fantasia")}
                  />
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.galaxy_heaven")}
            />
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.haunted_halloween")}
            />
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <Form.Check // prettier-ignore
                type="checkbox"
                label={t("streamShop.marvel_studios")}
              />
              <Link
                className="me-0"
                onClick={() => setOpen1(!open1)}
                to="#"
                role="button"
              >
                <i className="ph ph-caret-down align-middle"></i>
              </Link>
            </div>
            <Collapse in={open1}>
              <ul className="list-unstyled ps-2 mt-3">
                <li>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label={t("streamMovies.avengers")}
                  />
                </li>
                <li>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label={t("streamShop.harry_david")}
                  />
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between">
              <Form.Check // prettier-ignore
                type="checkbox"
                label={t("streamShop.monster_house")}
              />
              <Link
                className="me-0"
                onClick={() => setOpen2(!open2)}
                to="#"
                role="button"
              >
                <i className="ph ph-caret-down align-middle"></i>
              </Link>
            </div>
            <Collapse in={open2}>
              <ul className="list-unstyled ps-2 mt-3">
                <li>
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    label={t("streamShop.ghost_spider")}
                  />
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.monster_house")}
            />
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.quid_game")}
            />
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.the_flashv")}
            />
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.the_madrid")}
            />
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.the_champion")}
            />
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.uptight_birds")}
            />
          </li>
          <li>
            <Form.Check // prettier-ignore
              type="checkbox"
              label={t("streamShop.warner_bros_films")}
            />
          </li>
        </ul>
      </div>

      {/*------- Product Tag -------*/}

      <div className="shop-box">
        <h4 className="title-product-sidbar">PRODUCT TAGS </h4>
        <ul className="iq-blog-meta-cat-tag iq-blogtag p-0 m-0 list-unstyled gap-2 widget_tags widget-tags-product">
          {product_tag !== undefined &&
            product_tag !== null &&
            product_tag.map((data) => {
              return (
                <li>
                  <Link to="/blogs-tag" className="position-relative">
                    {t(data)}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
      {/*------- Size -------*/}
      <div className="shop-box">
        <h4 className="title-product-sidbar">{t("streamShop.product_size")}</h4>
        <ul className="shop_list_checkbox list-unstyled mb-0">
          <li>
            <label className="shop_checkbox_label">L</label>
            <input type="hidden" value="L" />
          </li>{" "}
          <li>
            <label className="shop_checkbox_label">M</label>
            <input type="hidden" value="M" />
          </li>{" "}
          <li>
            <label className="shop_checkbox_label">S</label>
            <input type="hidden" value="S" />
          </li>
        </ul>
      </div>
      <div className="shop-box border-bottom-0 ">
        <h4 className="title-product-sidbar text-uppercase">{t("streamShop.product")}</h4>
        <ul className="list-unstyled m-0 p-0 shop-product">
          {React.Children.map(props.children, (child, idx) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { key: child.key ?? idx })
              : child
          )}
        </ul>
      </div>
    </Fragment>
  );
});
ShopCategorySidebar.displayName = "ShopCategorySidebar";
export default ShopCategorySidebar;
