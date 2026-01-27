import React, { useState, useRef, memo, Fragment, useEffect } from "react";
import { Button, Card, Col, Form, Offcanvas, Row } from "react-bootstrap";

//choice js
import ChoicesJs from "../../../components/choices";

//Hooks
import useDataTable from "../../../hooks/useDatatable";

import { useSelector } from "react-redux";
// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// the hook
import { useTranslation } from "react-i18next";

import Swal from "sweetalert2-neutral";

import romance from "/assets/images/genres/romance.webp";
import mystery from "/assets/images/genres/mystery.webp";
import horror from "/assets/images/genres/horror.webp";
import Crime from "/assets/images/genres/Crime.webp";
import animation from "/assets/images/genres/animation.webp";
import adventure from "/assets/images/genres/adventure.webp";
import action from "/assets/images/genres/action.webp";
import ImageUpload from "../../../components/custom/file_upload";
import movie from "/assets/images/movie-thumb/gameofheros.webp";

const VideoCategory = () => {
  const { t } = useTranslation();

  //DATA
  const tableData = [
    {
      movie: romance,
      title: "Romance",
      slug: "romance",
      category: "Hello",
      parent_category: "0",
      Count: "2",
    },

    {
      movie: mystery,
      title: "Mystery",
      slug: "mystery",
      category: "Hello",
      parent_category: "0",
      Count: "14",
    },
    {
      movie: horror,
      title: "Horror",
      slug: "horror",
      category: "Hello",
      parent_category: "0",
      Count: "13",
    },
    {
      movie: Crime,
      title: "Crime",
      slug: "crime",
      category: "Hello",
      parent_category: "0",
      Count: "10",
    },
    {
      movie: animation,
      title: "Animation",
      slug: "animation",
      category: "Hello",
      parent_category: "0",
      Count: "10",
    },
    {
      movie: adventure,
      title: "Adventure",
      slug: "adventure",
      category: "Hello",
      parent_category: "0",
      Count: "18",
    },

    {
      movie: action,
      title: "Action",
      slug: "action",
      category: "Hello",
      parent_category: "0",
      Count: "22",
    },
  ];

  const columns = [
    {
      data: null,
      orderable: false,
      searchable: false,
      title: '<input type="checkbox" class="form-check-input">',
      render: function () {
        return `
         <input type="checkbox" class="form-check-input">
          `;
      },
    },
    {
      data: null,
      title: "Thumbnail",
      render: function (row) {
        return `
            <img src="${row.movie}" class="rounded-2 avatar avatar-55 img-fluid" />
          `;
      },
    },
    {
      data: null,
      title: "Name",
      render: function (row) {
        return `
            ${row.title}
          `;
      },
    },
    {
      data: null,
      title: "Slug",
      render: function (row) {
        return `${row.slug}`;
      },
    },
    {
      data: null,
      title: "Parent Genre",
      render: function (row) {
        return `<small>${row.parent_category}</small>`;
      },
    },
    { data: "Count", title: "Count" },
    {
      data: null,
      // orderable: false,
      // searchable: false,
      title: "Action",
      render: function () {
        return `
        <div class="d-flex align-items-center list-user-action gap-2">
          <a title="Edit" class="btn btn-sm btn-icon btn-success-subtle rounded" data-table="action" data-id="0" data-method="edit" href="#"><i class="ph ph-pencil-simple fs-6"></i></a>
          <a title="Delete" class="btn btn-sm btn-icon btn-danger-subtle delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#"><i class="ph ph-trash-simple fs-6"></i></a>
          <a title="View" class="btn btn-sm btn-icon btn-info-subtle rounded" data-table="action" data-id="0" data-method="view" href="#"><i class="ph ph-eye fs-6"></i></a>
        </div>
          `;
      },
    },
  ];

  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
    actionCallback: (data) => {
      switch (data.method) {
        case "edit":
          handleShow1();
          break;

        case "delete":
          showAlert();
          break;

        default:
          break;
      }
    },
  });

    const showAlert = () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this item",
        icon: "error",
        showCancelButton: true,
        backdrop: `rgba(60,60,60,0.8)`,
        confirmButtonText: "Yes, delete it!",
        confirmButtonColor: "#c03221",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
        }
      });
    };

  const parent_genre_option = [
    { label: "Add Parent Genre", value: "Add Parent Genre" },
    { label: "Action", value: "Action" },
    { label: "Adventure", value: "Adventure" },
    { label: "Animation", value: "Animation" },
    { label: "Crime", value: "Crime" },
    { label: "Horror", value: "Horror" },
    { label: "Mystery", value: "Mystery" },
    { label: "Romance", value: "Romance" },
    { label: "TEST GENRES", value: "TEST GENRES" },
    { label: "TEST GENRES", value: "TEST GENRES" },
  ];

  const parent_category = [
    { label: "Add Parent Category", value: "Add Parent Category" },
    { label: "Actor", value: "Actor" },
    { label: "Actress", value: "Actress" },
    { label: "Director", value: "Director" },
    { label: "Producer", value: "Producer" },
    { label: "Singer", value: "Singer" },
  ];

  // offcanvas

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const direction = useSelector(SettingSelector.theme_scheme_direction);

  let placement;

  if (direction === "rtl") {
    placement = "start";
  } else {
    placement = "end";
  }

  return (
    <Fragment>
      <Row className="streamit-wraper-table2">
        <Col lg={4}>
          <Card>
            <Card.Header>
              <h2 className="episode-playlist-title wp-heading-inline">
                <span className="position-relative ">
                {t("addpage.add-new-video-category")}{" "}
                </span>
              </h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="form-group">
                  <Form.Label className="form-label" htmlFor="genre-name">
                  {t("addpage.category-name")} <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className=""
                    id="genre-name"
                    placeholder={t("addpage.enter-title-genre")}
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label htmlFor="genre-slug">{t("addpage.category-slug")}</Form.Label>
                  <Form.Control
                    type="text"
                    id="genre-slug"
                    placeholder={t("addpage.enter-slug-genre")}
                  />
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Label htmlFor="parent-genre">
                  {t("addpage.parent-category")}
                  </Form.Label>
                  <ChoicesJs
                    options={parent_genre_option}
                    className="js-choice"
                    select="one"
                  />
                </Form.Group>

                <Form.Group className="form-group">
                  <Form.Label>{t("addpage.category-description")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="7"
                    aria-label="With textarea"
                  ></Form.Control>
                </Form.Group>
                <ImageUpload
                  uploadImageName={t("addpage.thumbnail")}
                  isUploadImageDefault={true}
                ></ImageUpload>
                <div className="d-flex align-items-center justify-content-end mt-4">
                  <Button variant="primary" className="custom-add-button">
                  {t("addpage.add-category")}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h2 className="episode-playlist-title wp-heading-inline">
                <span className="position-relative "> {t("addpage.video-categories")}</span>
              </h2>
            </Card.Header>
            <Card.Body>
              <div className="table-view table-responsive pt-3 table-space">
                <table
                  id="seasonTable"
                  ref={tableRef}
                  className="data-tables table custom-table movie_table dataTable no-footer"
                ></table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Offcanvas
          show={show1}
          onHide={handleClose1}
          className="offcanvas-width-80"
          placement={placement}
        >
          <Offcanvas.Header closeButton>
            <h2 className="episode-playlist-title wp-heading-inline">
              <Offcanvas.Title as="span" className="position-relative">
              {t("addpage.update-video-category")}
              </Offcanvas.Title>
            </h2>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form>
              <div className="section-form">
                <Row>
                  <Col lg={12}>
                    <Form.Group className="form-group">
                      <Form.Label
                        className="form-label flex-grow-1"
                        htmlFor="genres"
                      >
                        {t("addpage.category-name")} <span className="text-primary"> *</span>
                      </Form.Label>
                      <Form.Control
                        className="form-control"
                        type="text"
                        placeholder={t("addpage.name")}
                        data-id="multiple"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="form-group">
                      <Form.Label
                        className="form-label flex-grow-1"
                        htmlFor="genres"
                      >
                        {t("addpage.category-slug")}<span className="text-primary"> *</span>
                      </Form.Label>
                      <Form.Control
                        className="form-control"
                        type="text"
                        placeholder={t("addpage.genremovie")}
                        data-id="multiple"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="form-group">
                      <Form.Label
                        className="form-label flex-grow-1"
                        htmlFor="author"
                      >
                       {t("addpage.parent-category")}<span className="text-primary"> *</span>
                      </Form.Label>

                      <ChoicesJs
                        options={parent_category}
                        className="js-choice"
                        select="one"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="Description">
                      {t("addpage.category-description")}
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        id="Description"
                        className="form-control"
                        rows="8"
                        placeholder=""
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <ImageUpload
                      uploadImageName={t("addpage.thumbnail")}
                      isUploadImageDefault={true}
                      defaultImageUrl={movie}
                    />
                  </Col>
                </Row>
              </div>
            </Form>
          </Offcanvas.Body>
          <div className="offcanvas-footer border-top">
            <div className="d-flex justify-content-end p-3">
              <Button
                variant="primary"
                type="submit"
                className="d-block"
                onClick={handleClose1}
              >
                <i className="ph-fill ph-floppy-disk-back"></i>
                {t("accesscontrol.save")}
              </Button>
              {/* <Button
                        variant="outline-primary"
                        type="button"
                        className="d-block"
                        onClick={handleClose1}
                      >
                        {t("castmodal.close")}
                      </Button> */}
            </div>
          </div>
        </Offcanvas>
      </Row>
    </Fragment>
  );
};

export default VideoCategory;
