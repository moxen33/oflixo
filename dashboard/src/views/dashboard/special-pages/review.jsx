import React, { useState, useRef, memo, Fragment, useEffect } from "react";
import Swal from "sweetalert2-neutral";
// react-bootstrap
import {
  Row,
  Col,
  Card,
  Button,
  Offcanvas,
  Table,
  Form,
} from "react-bootstrap";

//Hooks
import useDataTable from "../../../hooks/useDatatable";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

// plugins
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
// the hook
import { useTranslation } from "react-i18next";

//choice js
import ChoicesJs from "../../../components/choices";

//DATA
const tableData = [
  {
    author: "admin",
    postType: "movie",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-02 12:00:40",
    rating: 5,
    approved: 1,
    postId: 32,
  },
  {
    author: "admin",
    postType: "movie",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-02 12:03:33",
    rating: 5,
    approved: 1,
    postId: 33,
  },
  {
    author: "admin",
    postType: "video",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-08 10:41:50",
    rating: 4,
    approved: 1,
    postId: 16,
  },
  {
    author: "admin",
    postType: "tvshow",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-08 11:43:00",
    rating: 3,
    approved: 1,
    postId: 1,
  },
  {
    author: "admin",
    postType: "tvshow",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-09 11:36:35",
    rating: 5,
    approved: 1,
    postId: 10,
  },
  {
    author: "admin",
    postType: "video",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-09 11:36:42",
    rating: 4,
    approved: 1,
    postId: 5,
  },
  {
    author: "admin",
    postType: "movie",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-10 10:42:46",
    rating: 5,
    approved: 1,
    postId: 45,
  },
  {
    author: "admin",
    postType: "video",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-13 07:08:44",
    rating: 4,
    approved: 1,
    postId: 13,
  },
  {
    author: "admin",
    postType: "movie",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-15 04:58:43",
    rating: 4,
    approved: 1,
    postId: 5,
  },
  {
    author: "admin",
    postType: "movie",
    authorEmail: "johndeo@gmail.com",
    date: "2025-01-17 06:51:59",
    rating: 5,
    approved: 1,
    postId: 6,
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
    title: "Author",
    render: function (row) {
      return `
      ${row.author}
        `;
    },
  },
  {
    data: null,
    title: "Post Type",
    render: function (row) {
      return ` 
          ${row.postType}
        `;
    },
  },
  {
    data: null,
    title: "Author Email",
    render: function (row) {
      return `${row.authorEmail}`;
    },
  },
  {
    data: null,
    title: "Date",
    render: function (row) {
      return `${row.date}`;
    },
  },
  { data: "rating", title: "Rating" },
  { data: "approved", title: "Approved" },
  { data: "postId", title: "Post Id" },
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

const Review = memo((props) => {
  const { t } = useTranslation();
  //select
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

  // Form
  const [formData, setFormData] = useState({
    title: "admin",
    email: "johndeo@gmail.com",
    postType: "movie",
    rating: "5",
    comment_content:
      "TEST DATALorem Ipsum is simply dummy text of the printing and typesetting industry.",
  });

  const handleChange = (e) => {
    const { value, placeholder } = e.target;
    const name =
      placeholder?.toLowerCase().replace(/\s+/g, "") || e.target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    <Row>
      <Col sm="12">
        <div className="pb-3 streamit-wraper-table">
          <div className="mb-4">
            <h2 className="episode-playlist-title wp-heading-inline">
              <span className="position-relative">
              {t("addpage.review-list")}
              </span>
            </h2>
          </div>
          <div>
            <div className="table-view table-responsive pt-3 table-space review_table">
              <table
                id="seasonTable"
                ref={tableRef}
                className="data-tables table custom-table movie_table dataTable no-footer"
              ></table>
            </div>
          </div>
        </div>
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
              {t("addpage.edit-comment")}
            </Offcanvas.Title>
          </h2>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <div className="section-form">
              <Row>
                <Col lg={4}>
                  <Form.Group className="form-group">
                    <Form.Label className="flex-grow-1" htmlFor="title">
                    {t("addpage.title")}
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      name="title"
                      value={formData.title}
                      placeholder={t("addpage.arrival_1999")}
                      onChange={handleChange}
                      data-id="multiple"
                    />
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group className="form-group">
                    <Form.Label className="flex-grow-1" htmlFor="email">
                    {t("addpage.author-email")}
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      data-id="multiple"
                    />
                  </Form.Group>
                </Col>

                <Col lg={4}>
                  <Form.Group className="form-group">
                    <Form.Label className="flex-grow-1" htmlFor="postType">
                    {t("addpage.post-type")}
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      name="postType"
                      value={formData.postType}
                      placeholder="movie"
                      onChange={handleChange}
                      data-id="multiple"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="form-group">
                    <Form.Label className="flex-grow-1" htmlFor="rating">
                    {t("sidebar.rating")}
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      name="rating"
                      value={formData.rating}
                      placeholder="Rating"
                      onChange={handleChange}
                      data-id="multiple"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="Description">
                    {t("addpage.comment-content")}
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="Description"
                      className="form-control"
                      value={formData.comment_content}
                      onChange={handleChange}
                      rows="7"
                      placeholder={t("addpage.enter-encerpt-movie")}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Label>{t("addpage.comment-status")}</Form.Label>
              <Form.Group className="form-group">
                <Form.Check required name="approval" type="radio" label={t("addpage.approve")} checked />
                <Form.Check required name="approval" type="radio" label={t("addpage.unapprove")}  />
              </Form.Group>
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
  );
});

Review.displayName = "Review";
export default Review;
