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

const MovieTag = () => {

    const { t } = useTranslation();

  //DATA
  const tableData = [
    {
      title: "Thriller",
      slug: "thriller",
      Count: "2",
    },

    {
      title: "Sci-Fi",
      slug:"sci-Fi",
      Count: "2",
    },
    {
      title: "Revenge",
      slug:"revenge",
      Count: "2",
    },
    {
      title: "Recommended",
      slug: "recommended",
      Count: "1",
    },
    {
      title: "Mystery",
      slug: "mystery",
      Count: "10",
    },
    {
      title: "Horror",
      slug: "horror",
      Count: "8",
    },
    {
        title: "Hitman",
        slug: "hitman",
        Count: "3",
      },
      {
        title: "History",
        slug: "history",
        Count: "2",
      },
      {
        title: "Fantasy",
        slug: "fantasy",
        Count: "3",
      },
      {
        title: "Family",
        slug: "family",
        Count: "3",
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
      title: "Term Name",
      render: function (row) {
        return `
            ${row.title}
          `;
      },
    },
    {
      data: null,
      title: "Term Slug",
      render: function (row) {
        return `<small>${row.slug}</small>`;
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
          <a title="View" class="btn btn-sm btn-icon btn-info-subtle delete-btn rounded" data-table="action" data-id="0" data-method="view" href="#"><i class="ph ph-eye fs-6"></i></a>
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
                <span className="position-relative ">{t("addpage.add_new_tag")} </span>
              </h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="form-group">
                  <Form.Label className="form-label" htmlFor="genre-name">
                  {t("addpage.name")} <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className=""
                    id="genre-name"
                    placeholder={t("addpage.enter-name-tag")}
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label htmlFor="genre-slug">
                  {t("addpage.slug")} <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    id="genre-slug"
                    placeholder={t("addpage.enter-slug-tag")}
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>{t("addpage.description")}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="7"
                    aria-label="With textarea"
                    placeholder={t("addpage.enter-tag-description")}
                  ></Form.Control>
                </Form.Group>

                <div className="d-flex align-items-center justify-content-end mt-4">
                  <Button variant="primary" className="custom-add-button">
                  {t("addpage.add-tag")}
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
                <span className="position-relative ">{t("addpage.tags")} </span>
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
                      {t("addpage.update-tag")}
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
                              {t("addpage.name")} <span className="text-primary">{" "}*</span>
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
                              {t("addpage.slug")} <span className="text-primary">{" "}*</span>
                              </Form.Label> 
                              <Form.Control
                                className="form-control"
                                type="text"
                                placeholder="genremovie"
                                data-id="multiple"
                              />
                            </Form.Group>
                          </Col>
                          <Col lg={12}>
                            <Form.Group className="form-group">
                              <Form.Label htmlFor="Description">{t("addpage.excerpt")}</Form.Label>
                              <Form.Control
                                as="textarea"
                                id="Description"
                                className="form-control"
                                rows="7"
                                placeholder={t("addpage.genres")}
                              ></Form.Control>
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

export default MovieTag;
