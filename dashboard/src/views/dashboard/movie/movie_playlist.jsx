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

const MoviePlaylist = () => {

    const { t } = useTranslation();

  //DATA
  const tableData = [
    {
      title: "Romantic",
      slug: "romantic",
    },
    {
      title: "Road Trip Movies",
      slug: "road-trip-movies",
    },
    {
      title: "My Movie",
      slug: "my-movie",
    },
    {
      title: "My list",
      slug: "my-list",
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
      title: "Playlist Name",
      render: function (row) {
        return `
            ${row.title}
          `;
      },
    },
    {
      data: null,
      title: "Playlist Slug",
      render: function (row) {
        return `<small>${row.slug}</small>`;
      },
    },
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
          <a title="View" class="btn btn-sm btn-icon btn-info-subtle delete-btn rounded" data-table="action" data-id="0" data-method="view" href="#"><i class="ph ph-trash fs-6"></i></a>
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
    { label: "Published", value: "Published" },
    { label: "Draft", value: "Draft" },
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
          <Card >
            <Card.Header>
              <h2 className="episode-playlist-title wp-heading-inline">
                <span className="position-relative ">{t("addpage.add-new-playlist")} </span>
              </h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="form-group">
                  <Form.Label className="form-label" htmlFor="genre-name">
                  {t("addpage.playlist_name")}  <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className=""
                    id="playlist-name"
                    placeholder={t("addpage.enter-name-playlist")}
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label htmlFor="genre-slug">
                  {t("addpage.playlist_slug")} <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="playlist-slug"
                    placeholder={t("addpage.enter-slug-playlist")}
                  />
                </Form.Group>
                <div className="d-flex align-items-center justify-content-end">
                  <Button variant="primary" className="custom-add-button">
                  {t("addpage.add_playlist")}
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
                <span className="position-relative ">{t("sidebar.playlist")} </span>
              </h2>
            </Card.Header>
            <Card.Body>
              <div className="table-view table-responsive table-space">
                <table
                  id="seasonTable"
                  ref={tableRef}
                  className="data-tables table custom-table my-2 movie_table dataTable no-footer"
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
                      {t("addpage.update_playlist")}
                      </Offcanvas.Title>
                    </h2>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Form>
                      <div className="section-form">
                        <Row>
                          <Col lg={12}>
                            <Form.Group className="form-group">
                              <Form.Label className="form-label flex-grow-1" htmlFor="genres">
                              {t("addpage.playlist_name")} <span className="text-primary">{" "}*</span>
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
                              <Form.Label className="form-label flex-grow-1" htmlFor="genres">
                              {t("addpage.playlist_slug")} <span className="text-primary">{" "}*</span>
                              </Form.Label> 
                              <Form.Control
                                className="form-control"
                                type="text"
                                placeholder={t("addpage.genremovie")}
                                data-id="multiple"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </Offcanvas.Body>
                  <div className="offcanvas-footer border-top">
                    <div className="d-grid d-flex gap-3 p-3">
                      <Button variant="primary" type="submit" className="d-block d-flex align-items-center gap-2">
                        <i className="ph-fill ph-floppy-disk-back"></i>
                        {t("accesscontrol.save")}
                      </Button>
                      <Button
                        variant="outline-primary"
                        type="button"
                        className="d-block d-flex align-items-center gap-2"
                        onClick={handleClose1}
                      >
                        <i className="ph ph-caret-double-left fs-5"></i>
                        {t("castmodal.close")}
                      </Button>
                    </div>
                  </div>
              </Offcanvas>
      </Row>
    </Fragment>
  );
};

export default MoviePlaylist;
