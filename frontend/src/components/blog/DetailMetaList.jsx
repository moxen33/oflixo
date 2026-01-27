import React, { Fragment, memo } from "react";

//react-router-dom
import { Link } from "react-router-dom";

//components
import RecentPost from "./sidebar/RecentPost";
import CategoriesWidget from "./sidebar/CategoriesWidget";
import TagsWidget from "./sidebar/TagsWidget";
import FollowUs from "./sidebar/FollowUs";

// the hook
import { useTranslation } from "react-i18next";
import { generateImgPath } from "../../StaticData/data";

const DetailMetaList = memo(() => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="widget-area">
        <div id="search-2" className="widget widget_search rounded-top-3">
          <form
            method="get"
            className="search-form"
            action="#"
            autoComplete="off"
          >
            <div className="block-search_inside-wrapper position-relative d-flex">
              <input
                type="search"
                className="form-control"
                placeholder={t('streamBlog.search1')}
                name="s"
                defaultValue=""
              />
              <button type="submit" className="block-search_button d-flex align-items-center justify-content-center rounded-end-3">
                <i className="icon icon-search-normal"></i>
              </button>
            </div>
          </form>
        </div>
        {/* <RecentPost /> */}
        <CategoriesWidget />
        <TagsWidget />
        <FollowUs />
      </div>
    </Fragment>
  );
});

DetailMetaList.displayName = "DetailMetaList";
export default DetailMetaList;
