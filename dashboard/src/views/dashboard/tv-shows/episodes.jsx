import React, { useState, memo, useRef, useEffect, Fragment } from "react";
import Swal from "sweetalert2-neutral";

//react-bootstrap
import { Row, Col, Card, Button, Offcanvas, Form } from "react-bootstrap";

// react-router
import { Link } from "react-router-dom";

//components
import InputField from "../../../components/inputfield";
import CastCrewForm from "../../../components/Castmodal";
import CastModalEdit from "../../../components/CastModalEdit";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

//Hooks
import useDataTable from "../../../hooks/useDatatable";

//plugins
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

import krishna1 from "/assets/images/movie-thumb/krishna-1.webp";
import krishna2 from "/assets/images/movie-thumb/krishna-2.webp";
import krishna3 from "/assets/images/movie-thumb/krishna-3.webp";
import minions1 from "/assets/images/movie-thumb/minions-1.webp";
import minions2 from "/assets/images/movie-thumb/minions-2.webp";
import minions3 from "/assets/images/movie-thumb/minions-3.webp";
import minions4 from "/assets/images/movie-thumb/minions-4.webp";
import hanuman1 from "/assets/images/movie-thumb/hanuman1.webp";
import movie from "/assets/images/movie-thumb/gameofheros.webp";

// the hook
import { useTranslation } from "react-i18next";

import ChoicesJs from "../../../components/choices";
import Quill from "../../../components/custom/quill";
import ImageUpload from "../../../components/custom/file_upload";
import Tab from "../../../components/custom/tab";
import TabContent from "../../../components/custom/tabContent";
import Source from "../../../components/custom/Source";

//DATA
const tableData = [
  {
    movie: krishna1,
    title: "The Lifting of the Mountain",
    author: "Jenny",
    date_and_time: "2024-12-26 10:28:40",
    Views: "54 views",
  },
  {
    movie: krishna2,
    title: "The Escape to Safety",
    author: "Jenny",
    date_and_time: "2024-12-26 10:27:23",
    Views: "39 views",
  },
  {
    movie: krishna3,
    title: "The Childhood Adventures",
    author: "Jenny",
    date_and_time: "2024-12-26 10:25:52",
    Views: "38 views",
  },
  {
    movie: krishna1,
    title: "The Trials of Faith",
    author: "Jenny",
    date_and_time: "2024-12-26 09:39:27",
    Views: "110 views",
  },
  {
    movie: krishna2,
    title: "The Warrior’s Path",
    author: "Jenny",
    date_and_time: "2024-12-26 09:36:42",
    Views: "53 views",
  },
  {
    movie: krishna3,
    title: "The Sacred Oath",
    author: "Jenny",
    date_and_time: "2024-12-26 09:34:46",
    Views: "52 views",
  },
  {
    movie: minions1,
    title: "Minion Magic",
    author: "Jenny",
    date_and_time: "2025-05-23 08:39:43",
    Views: "355 views",
  },
  {
    movie: minions2,
    title: "The Minions’ Great Escape",
    author: "Jenny",
    date_and_time: "2025-05-23 08:41:38",
    Views: "127 views",
  },
  {
    movie: minions3,
    title: "Minions in Space",
    author: "Jenny",
    date_and_time: "2025-01-21 07:44:55",
    Views: "117 views",
  },
  {
    movie: minions4,
    title: "TThe Minion Olympics",
    author: "Jenny",
    date_and_time: "2025-01-21 07:46:36",
    Views: "131 views",
  },
  {
    movie: hanuman1,
    title: "The Divine Birth",
    author: "Jenny",
    date_and_time: "2024-12-26 11:53:12",
    Views: "146 views",
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
    title: "Movie",
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
      return `${row.date_and_time}`;
    },
  },
  { data: "Views", title: "Views" },
  {
    data: null,
    // orderable: false,
    // searchable: false,
    title: "Status",
    render: function () {
      return `
      <div class="d-flex justify-content-between">
          <div class="form-check form-switch">
              <input class="form-check-input form-switch-input" type="checkbox">
          </div>
      </div>
        `;
    },
  },
  {
    data: null,
    // orderable: false,
    // searchable: false,
    title: "Actions",
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

const EpisodesList = memo(() => {
  const { t } = useTranslation();
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

  const direction = useSelector(SettingSelector.theme_scheme_direction);

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
  let placement;

  if (direction === "rtl") {
    placement = "start";
  } else {
    placement = "end";
  }

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [activeTab, setActiveTab] = useState("general_tab");

  // Array of tab data
  const tabsData = [
    { id: "general_tab", label: `${t("addpage.general")}`, content: <GeneralTabContent /> },
    {
      id: "sources_tab",
    label: `${t("addpage.sources")}`,
      content: <Sources />,
    },
    {
      id: "additionData_tab",
      label: `${t("addpage.additional_data")}`,
      content: <Addition_Data />,
    },
  ];

  const EditMovie_Data = [
    {
      id: "general_tab",
      label: `${t("addpage.general")}`,
      content: <GeneralTabContent defaultEpisodeNumber="E4" time="00:35" />,
    },
    {
      id: "sources_tab",
      label: `${t("addpage.sources")}`,
      content: <Sources />,
    },
    {
      id: "additionData_tab",
      label: `${t("addpage.additional_data")}`,
      content: (
        <Addition_Data defalutLink="https://www.youtube.com/" rating="5" />
      ),
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
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
            <h2 className="episode-playlist-title wp-heading-inline">
              <span className="position-relative">
              {t("sidebar.episodes")}
              </span>
            </h2>
            <Button variant="primary" onClick={handleShow} className="d-flex align-items-center gap-2">
              <i className="ph-bold ph-plus"></i>
              {t("bordertable.add_episodes")}
            </Button>
          </div>
          <div>
            <div className="table-view table-responsive my-3 table-space">
              <table
                id="seasonTable"
                ref={tableRef}
                className="data-tables table custom-table mt-2 movie_table dataTable no-footer"
              ></table>
            </div>
          </div>
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
                {t("bordertable.add_new_episodes")}
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
                        {t("addpage.episode-title")}
                        <span className="text-primary"> *</span>
                      </Form.Label>
                      <Form.Control
                        className="form-control"
                        type="text"
                        placeholder={t("addpage.enter-title-episode")}
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
                    <Form.Label>{t("addpage.embed-episode-content")}</Form.Label>
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
                      <Form.Label htmlFor="Description">{t("addpage.excerpt")}</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="Description"
                        className="form-control"
                        rows="7"
                        placeholder="Enter excerpt content of the movie."
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
            <div className="d-flex gap-3 p-3">
              <Button variant="primary" type="submit" className="d-block d-flex align-items-center gap-2">
              <i className="ph-fill ph-floppy-disk-back"></i>
                {t("admin.save")}
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
        <Offcanvas
          className=" offcanvas-width-80 on-rtl "
          show={show1}
          onHide={handleClose1}
          placement={placement}
        >
          <Offcanvas.Header closeButton>
            <h2 className="episode-playlist-title wp-heading-inline">
              <Offcanvas.Title as="span" className="position-relative">
                {t("bordertable.edit_episode")}
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
                        Episode Title
                      </Form.Label>
                      <Form.Control
                        className="form-control"
                        type="text"
                        placeholder="The Childhood Adventures"
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
                        Author
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
                        Status
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
                    <Form.Label>Embed Episode Content</Form.Label>
                    <Quill />
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <ImageUpload
                      uploadImageName="Thumbnail"
                      isUploadImageDefault={true}
                      defaultImageUrl={movie}
                    />
                  </Col>
                  <Col lg={9}>
                    <Form.Group className="form-group">
                      <Form.Label htmlFor="Description">Excerpt</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="Description"
                        className="form-control"
                        rows="7"
                        placeholder="Enter excerpt content of the Episode."
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
                        <TabContent
                          tabs={EditMovie_Data}
                          activeTab={activeTab}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Form>
          </Offcanvas.Body>
          <div className="offcanvas-footer border-top">
            <div className="d-flex gap-3 p-3">
              <Button variant="primary" type="submit" className="d-block d-flex align-items-center gap-2">
              <i className="ph-fill ph-floppy-disk-back"></i>
                {t("admin.save")}
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
      </Col>
    </Row>
  );
});

const GeneralTabContent = (props) => {
  // Select
  const { t } = useTranslation();
  const { defaultEpisodeNumber, time } = props;

  const movie_options = [
    { label: "Upload Episode", value: "Upload Episode" },
    { label: "Embed Episode", value: "Embed Episode" },
    { label: "Episode URL", value: "Episode URL" },
  ];

  const [releaseDate, setReleaseDate] = useState(new Date());
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [EpisodeNumber, setEpisodeNumber] = useState(defaultEpisodeNumber);

  const handleReleaseDateChange = (date) => {
    setReleaseDate(date);
  };

  // Dynamically set the initial values when the time prop changes
  useEffect(() => {
    if (time) {
      const [h, m] = time.split(":"); // Assuming the time is passed in HH:mm format
      setHours(Number(h) || 0); // Set hours, default to 0 if parsing fails
      setMinutes(Number(m) || 0); // Set minutes, default to 0 if parsing fails
    }
  }, [time]);

  return (
    <div className="p-4 px-2">
      <Row>
        <Col lg={6}>
          <Form.Group className="form-group">
            <Form.Label>{t("addpage.episode-number")}</Form.Label>
            <Form.Control
              type="text"
              name="episode_Number"
              value={EpisodeNumber}
              onChange={(e) => setEpisodeNumber(e.target.value)}
              placeholder={t("addpage.enter-episode-number")}
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="form-group" Id="movieMethod">
            <Form.Label>{t("addpage.choose-episdoe-method")}</Form.Label>
            <ChoicesJs
              options={movie_options}
              className="js-choice"
              select="one"
            />
          </Form.Group>
        </Col>
        <Col lg={6}></Col>
        <Col lg={6}>
          <Form.Group className="form-group">
            <ImageUpload
              uploadImageName="Upload Episode"
              isUploadImageDefault={true}
              defaultImageUrl={movie}
            />
          </Form.Group>
        </Col>

        {/* Movie Release Date */}
        <Col lg={6}>
          <Form.Group className="form-group">
            <Form.Label>{t("addpage.episode-release-date")}</Form.Label>
            <Flatpickr
              className="form-control flatpickr_humandate"
              value={releaseDate}
              onChange={handleReleaseDateChange}
              placeholder="Enter the release date of the movie."
              data-id="multiple"
            />
          </Form.Group>
        </Col>

        {/* Movie Time Duration */}
        <Col lg={6}>
          <Form.Label>{t("addpage.episode-time-duration")}</Form.Label>
          <Row>
            {/* Hours */}
            <Col lg={6}>
              <Form.Group className="form-group">
                <Form.Control
                  type="number"
                  name="hours"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  placeholder="Hours"
                  min="0"
                />
              </Form.Group>
            </Col>

            {/* Minutes */}
            <Col lg={6}>
              <Form.Group className="form-group">
                <Form.Control
                  type="number"
                  name="minutes"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  placeholder="Minutes"
                  min="0"
                  max="59"
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const Sources = () => {
  return (
    <Fragment>
      <div className="p-4 px-2">
        <Source />
      </div>
    </Fragment>
  );
};

const Addition_Data = (props) => {
  const { t } = useTranslation();
  const [trailerLink, setTrailerLink] = useState(props.defalutLink || "");
  const [isUpcoming, setIsUpcoming] = useState(false);

  const handleCheckboxChange = (e) => setIsUpcoming(e.target.checked);
  const handleTrailerLinkChange = (e) => setTrailerLink(e.target.value);

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Row>
          <Col lg={6}>
            <Form.Group className="form-group">
              <ImageUpload
                uploadImageName={t("addpage.portrait-file")}
                isUploadImageDefault={true}
              />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="form-group" controlId="trailerLink">
              <Form.Label>{t("addpage.trailer-link")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("addpage.enter-trailer-link")}
                value={trailerLink}
                onChange={handleTrailerLinkChange}
              />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Label className="d-block">{t("addpage.notification")}</Form.Label>
            <Form.Check
              type="checkbox"
              id="flexCheckDefault31"
              label={t("addpage.notify-user-about-prod")}
              checked={isUpcoming}
              onChange={handleCheckboxChange}
            />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

EpisodesList.displayName = "EpisodesList";
export default EpisodesList;
