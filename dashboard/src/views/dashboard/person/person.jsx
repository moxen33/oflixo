import React, { useState, useRef, memo, Fragment } from "react";
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
// react-router-dom
import { Link } from "react-router-dom";

// components
import InputField from "../../../components/inputfield";
import CastCrewForm from "../../../components/Castmodal";
import VideoModal from "../../../components/Videomodal";
import SubtitleModal from "../../../components/SubtitleModal";
// import DataTable from "../table/data-table";
import CastModalEdit from "../../../components/CastModalEdit";
import VideoModalEdit from "../../../components/VideoModalEdit";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

// plugins
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

import avaMonroe from "/assets/images/author/ava-monroe.webp";
import charlesMelton from "/assets/images/author/charles-melton.webp";
import jackNicholson from "/assets/images/author/jack-nicholson.webp";
import jamesStewart from "/assets/images/author/james-stewart.webp";
import jeffBridges from "/assets/images/author/jeff-bridges.webp";
import jordanGrant from "/assets/images/author/jordan-grant.webp";
import markSmith from "/assets/images/author/mark-smith.webp";
import maxwellCarter from "/assets/images/author/maxwell-carter.webp";
import rubyScott from "/assets/images/author/ruby-scott.webp";
import michaelFox from "/assets/images/author/michael-fox.webp";
import movie from "/assets/images/movie-thumb/gameofheros.webp";

// the hook
import { useTranslation } from "react-i18next";

//choice js
import ChoicesJs from "../../../components/choices";
import Quill from "../../../components/custom/quill";
import ImageUpload from "../../../components/custom/file_upload";
import Tab from "../../../components/custom/tab";
import TabContent from "../../../components/custom/tabContent";
import Select from "react-select";
import Source from "../../../components/custom/Source";

//DATA
const tableData = [
  {
    movie: avaMonroe,
    title: "Ava Monroe",
    author: "Admin",
    date_and_time: "2025-01-08 04:43:37",
    Views: "0",
  },
  {
    movie: charlesMelton,
    title: "Charles Melton",
    author: "Admin",
    date_and_time: "2024-11-27 08:36:04",
    Views: "0",
  },
  {
    movie: jackNicholson,
    title: "Jack Nicholson",
    author: "Admin",
    date_and_time: "2024-11-27 08:35:00",
    Views: "0",
  },
  {
    movie: jamesStewart,
    title: "James Stewart",
    author: "Admin",
    date_and_time: "2024-11-27 08:33:32",
    Views: "0",
  },
  {
    movie: jeffBridges,
    title: "Jeff Bridges",
    author: "Admin",
    date_and_time: "2024-11-27 08:32:28",
    Views: "0",
  },
  {
    movie: jordanGrant,
    title: "Jordan Grant",
    author: "Admin",
    date_and_time: "2024-11-27 08:31:27",
    Views: "0",
  },
  {
    movie: markSmith,
    title: "Mark Smith",
    author: "Admin",
    date_and_time: "2024-11-27 08:29:43",
    Views: "0",
  },
  {
    movie: maxwellCarter,
    title: "Maxwell Carter",
    author: "Admin",
    date_and_time: "2024-11-27 08:27:53",
    Views: "0",
  },
  {
    movie: rubyScott,
    title: "Ruby Scott",
    author: "Admin",
    date_and_time: "2024-11-27 08:26:50",
    Views: "0",
  },
  {
    movie: michaelFox,
    title: "Michael Fox",
    author: "Admin",
    date_and_time: "2024-11-30 06:19:27",
    Views: "0",
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
    title: "Image",
    render: function (row) {
      return `
          <img src="${row.movie}" class="rounded-2 avatar avatar-55 img-fluid" />
        `;
    },
  },
  {
    data: null,
    title: "Title",
    render: function (row) {
      return `
          ${row.title}
        `;
    },
  },
  {
    data: null,
    title: "Author",
    render: function (row) {
      return `<small>${row.author}</small>`;
    },
  },
  {
    data: null,
    title: "Date And Time",
    render: function (row) {
      return `<small>${row.date_and_time}</small>`;
    },
  },
  { data: "Views", title: "Views" },
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

const MovieList = memo((props) => {
  const { t } = useTranslation();
  //select
  const options1 = [
    { value: `${t("pricing.free")}`, label: `${t("pricing.free")}` },
    {
      value: `${t("movielist.standard")}`,
      label: `${t("movielist.standard")}`,
    },
    { value: `${t("pricing.premium")}`, label: `${t("pricing.premium")}` },
  ];

  const options2 = [
    { value: `${t("Datatable.hindi")}`, label: `${t("Datatable.hindi")}` },
    { value: `${t("Datatable.english")}`, label: `${t("Datatable.english")}` },
    { value: `${t("Datatable.french")}`, label: `${t("Datatable.french")}` },
    { value: `${t("Datatable.marathi")}`, label: `${t("Datatable.marathi")}` },
    { value: `${t("Datatable.gujrati")}`, label: `${t("Datatable.gujrati")}` },
  ];

  const options3 = [
    {
      value: `${t("bordertable.action")}`,
      label: `${t("bordertable.action")}`,
    },
    {
      value: `${t("movielist.adventure")}`,
      label: `${t("movielist.adventure")}`,
    },
    {
      value: `${t("movielist.animation")}`,
      label: `${t("movielist.animation")}`,
    },
    { value: `${t("dashboard.horror")}`, label: `${t("dashboard.horror")}` },
    {
      value: `${t("movielist.thriller")}`,
      label: `${t("movielist.thriller")}`,
    },
  ];

  const options4 = [
    {
      value: `${t("bordertable.no_action")}`,
      label: `${t("bordertable.no_action")}`,
    },
    {
      value: `${t("bordertable.status")}`,
      label: `${t("bordertable.status")}`,
    },
    {
      value: `${t("accesscontrol.delete")}`,
      label: `${t("accesscontrol.delete")}`,
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  // Quill
  const [value, setValue] = useState("");

  const [activeTab, setActiveTab] = useState("general_tab");

  // Array of tab data (this can be fetched dynamically or static as shown here)
  const tabsData = [
    { id: "general_tab", label: `${t("addpage.general")}`, content: <GeneralTabContent /> },
    {
      id: "Category_tab",
      label: `${t("addpage.category")}`,
      content: <Category />,
    },

    { id: "tags_tab", label: `${t("addpage.tags")}`, content: <Tags /> },
    {
      id: "PersonalData_tab",
      label:  `${t("addpage.personal-data")}`,
      content: <Personal_Data />,
    },
  ];

  const EditMovie_Data = [
    {
      id: "general_tab",
      label: `${t("addpage.general")}`,
      content: <GeneralTabContent defaultknownAs="admin" defaultplace="place" />,
    },
    {
      id: "Category_tab",
      label: `${t("addpage.category")}`,
      content: <Category />,
    },

    { id: "tags_tab", label:`${t("addpage.tags")}`, content: <Tags /> },
    {
      id: "Personal_tab",
      label:  `${t("addpage.personal-data")}`,
      content: <Personal_Data defaultTrailerlink="https://templates.iqonic.design/streamit-dist/dashboard/react/person/person" defaultHeight="5'3" defaultAwards="IFFA Award"/>,
    },
  ];

  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
  };

  const author_option = [{ label: "admin", value: "admin" }];

  const status_option = [
    { label: "Published", value: "Published" },
    { label: "Draft", value: "Draft" },
  ];

  return (
    <Row>
      <Col sm="12">        
    
       <div className="pb-3 streamit-wraper-table">
              <Card.Header className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                
                <h2 className="episode-playlist-title wp-heading-inline">
                  <span className="position-relative">
                  {t("addpage.persons-list")}
                  </span>
                </h2>
                <Button variant="primary" onClick={handleShow} className="d-flex align-items-center gap-2">
                  <i className="ph-bold ph-plus"></i>
                  {t("addpage.add_new")}
                </Button>
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
            </div>

        <Offcanvas
          className="offcanvas-width-80"
          show={show}
          onHide={handleClose}
          placement={placement}
        >
          <Offcanvas.Header closeButton>
            <h2 className="episode-playlist-title wp-heading-inline">
              <Offcanvas.Title as="span" className="position-relative">
              {t("addpage.add-new-person")}
              </Offcanvas.Title>
            </h2>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form>
              <div className="section-form">
                <Row>
                  <Col lg={4}>
                    <Form.Group className="form-group">
                      <Form.Label
                        className="form-label flex-grow-1"
                        htmlFor="genres"
                      >
                        {t("addpage.person-title")} <span className="text-primary">* </span>
                      </Form.Label>
                      <Form.Control
                        className="form-control"
                        type="text"
                        placeholder={t("addpage.enter-title-person")}
                        data-id="multiple"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="form-group">
                      <Form.Label
                        className="form-label flex-grow-1"
                        htmlFor="author"
                      >
                        {t("addpage.author")}
                      </Form.Label>

                      <ChoicesJs
                        options={author_option}
                        className="js-choice"
                        select="one"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="form-group">
                      <Form.Label
                        className="form-label flex-grow-1"
                        htmlFor="status"
                      >
                        {t("addpage.status")}
                      </Form.Label>
                      <ChoicesJs
                        options={status_option}
                        className="js-choice"
                        select="one"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col lg={12}>
                    <Form.Label>{t("addpage.person-content")}</Form.Label>
                    <Quill />
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <ImageUpload
                      uploadImageName={t("addpage.thumbnail")}
                      isUploadImageDefault={true}
                    />
                  </Col>
                  <Col lg={9}>
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="Description">
                        {" "}
                        {t("addpage.person-excerpt")}
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        id="Description"
                        className="form-control"
                        rows="7"
                        placeholder={t("addpage.enter-encerpt-movie")}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Card className="streamit-tabs-card">
                  <Card.Body>
                    <Row className="gy-4">
                      <Col lg={3}>
                        <Tab
                          tabs={tabsData}
                          activeTab={activeTab}
                          onTabSelect={handleTabSelect}
                        />
                      </Col>
                      <Col lg={9} className="edit-tab-content">
                        <TabContent tabs={tabsData} activeTab={activeTab} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
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
                onClick={handleClose}
              >
                <i className="ph ph-caret-double-left fs-5"></i>
                {t("castmodal.close")}
              </Button>
            </div>
          </div>
        </Offcanvas>
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
            {t("addpage.edit-new-person")}
            </Offcanvas.Title>
          </h2>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <div className="section-form">
              <Row>
                <Col lg={4}>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label flex-grow-1" htmlFor="genres">
                    {t("addpage.person-title")} <span className="text-primary">* </span>
                    </Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder={t("addpage.arrival_1999")}
                      data-id="multiple"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label flex-grow-1" htmlFor="author">
                    {t("addpage.author")}
                    </Form.Label>

                    <ChoicesJs
                      options={author_option}
                      className="js-choice"
                      select="one"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label flex-grow-1" htmlFor="status">
                    {t("addpage.status")}
                    </Form.Label>
                    <ChoicesJs
                      options={status_option}
                      className="js-choice"
                      select="one"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-5">
                <Col lg={12}>
                  <Form.Label>{t("addpage.person-content")}</Form.Label>
                  <Quill />
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <ImageUpload
                    uploadImageName={t("addpage.thumbnail")}
                    isUploadImageDefault={true}
                      defaultImageUrl={movie}
                    
                  />
                </Col>
                <Col lg={9}>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="Description">
                      {" "}
                      {t("addpage.person-excerpt")}
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      id="Description"
                      className="form-control"
                      rows="7"
                      placeholder={t("addpage.enter-encerpt-movie")}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Card className="streamit-tabs-card">
                <Card.Body>
                  <Row className="gy-4">
                    <Col lg={3}>
                      <Tab
                        tabs={EditMovie_Data}
                        activeTab={activeTab}
                        onTabSelect={handleTabSelect}
                      />
                    </Col>
                    <Col lg={9} className="edit-tab-content">
                      <TabContent tabs={EditMovie_Data} activeTab={activeTab} />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
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
              onClick={handleClose}
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

const GeneralTabContent = (props) => {
  const { t } = useTranslation();
  // Select
  const { defaultknownAs,defaultplace } = props;

  const [releaseDate, setReleaseDate] = useState(new Date());
  const [knownAs, setknownAs] = useState(defaultknownAs);
  const [place, setPlace] = useState(defaultplace);

  const handleReleaseDateChange = (date) => {
    setReleaseDate(date);
  };

  return (
    <div className="p-4 px-2">
      <Row>
        {/* Movie Censor Rating */}
        <Col lg={6}>
          <Form.Group className="form-group">
            <Form.Label>{t("addpage.also-known-as")}</Form.Label>
            <Form.Control
              type="text"
              name="_movie_censor_rating"
              value={knownAs}
              onChange={(e) => setknownAs(e.target.value)}
              placeholder={t("addpage.enter-alternate-names-person")}
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="form-group">
            <Form.Label>{t("addpage.place-of-birth")}</Form.Label>
            <Form.Control
              type="text"
              name="_movie_censor_rating"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder={t("addpage.enter-the-movie-censor-rating")}
            />
          </Form.Group>
        </Col>
        {/* Movie Release Date */}
        <Col lg={6}>
          <Form.Group className="form-group">
            <Form.Label>{t("addpage.birth-date")}</Form.Label>
            <Flatpickr
              className="form-control flatpickr_humandate"
              value={releaseDate}
              onChange={handleReleaseDateChange}
              placeholder={t("addpage.enter-birth-date-person")}
              data-id="multiple"
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="form-group">
            <Form.Label>{t("addpage.death-date")}</Form.Label>
            <Flatpickr
              className="form-control flatpickr_humandate"
              value={releaseDate}
              onChange={handleReleaseDateChange}
              placeholder={t("addpage.enter-death-date-person")}
              data-id="multiple"
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

const Category = () => {
  const { t } = useTranslation();
  const Category = [
    { label: "Action", value: "action" },
    { label: "Adventure", value: "adventure" },
    { label: "Horror", value: "Horror" },
    { label: "Circus", value: "circus" },
    { label: "Comedy", value: "comedy" },
    { label: "Crime", value: "crime" },
  ];

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Form.Group className="form-group">
          <Form.Label>{t("addpage.choose-person-category")}</Form.Label>
          <ChoicesJs options={Category} className="js-choice" select="multi" />
        </Form.Group>
      </div>
    </Fragment>
  );
};

const Tags = () => {
  const { t } = useTranslation();
  const tags_option = [
    { label: "Action", value: "action" },
    { label: "Adventure", value: "adventure" },
    { label: "Animation", value: "animation" },
    { label: "Circus", value: "Circus" },
    { label: "Comedy", value: "comedy" },
    { label: "Crime", value: "Crime" },
  ];

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Form.Group className="form-group mb-0">
          <Form.Label htmlFor="Choose_Movie_Genres">
          {t("addpage.choose-person-tags")}
          </Form.Label>
          <ChoicesJs
            options={tags_option}
            className="js-choice"
            select="multi"
          />
        </Form.Group>
      </div>
    </Fragment>
  );
};

const Personal_Data = (props) => {
  const { t } = useTranslation();
  const { defaultTrailerlink , defaultHeight  , defaultAwards} = props
  const [trailerLink, setTrailerLink] = useState(defaultTrailerlink);
  const [awards , setAwards] = useState(defaultAwards)
  const [height , setHeight] = useState(defaultHeight)
  const [isUpcoming, setIsUpcoming] = useState(false);

  const handleTrailerLinkChange = (e) => setTrailerLink(e.target.value);


  return (
    <Fragment>
      <div className="p-4 px-2">
        <Row>
          <Col lg={6}>
            <Form.Group className="form-group" controlId="trailerLink">
              <Form.Label>{t("addpage.awards")}</Form.Label>
              <Form.Control
                type="text"
                value={awards}
                onChange={(e) => {setAwards(e.target.value)}}
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="form-group" controlId="trailerLink">
              <Form.Label>{t("addpage.offical-site")}</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.imdb.com"
                value={trailerLink}
                onChange={handleTrailerLinkChange}
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="form-group" controlId="trailerLink">
              <Form.Label>{t("addpage.height")}</Form.Label>
              <Form.Control
                type="text"
                value={height}
                onChange={(e) => {setHeight(e.target.value)}}
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

MovieList.displayName = "MovieList";
export default MovieList;
