import React, { useState, memo, useRef, useEffect, Fragment } from "react";
import Swal from "sweetalert2-neutral";

// react-bootstrap
import { Row, Col, Card, Button, Offcanvas, Form } from "react-bootstrap";

//Hooks
import useDataTable from "../../../hooks/useDatatable";

import { Link } from "react-router-dom";

import InputField from "../../../components/inputfield";
import CastCrewForm from "../../../components/Castmodal";
import CastModalEdit from "../../../components/CastModalEdit";

// Import selectors & action from setting store
import * as SettingSelector from "../../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

// plugins
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "datatables.net-bs5";

import theFirstOfUs from "/assets/images/movie-thumb/the-first-of-us.webp";
import migration from "/assets/images/movie-thumb/migration.webp";
import tianic from "/assets/images/movie-thumb/tianic.webp";
import theCrew from "/assets/images/movie-thumb/the-crew.webp";
import midnightHunter from "/assets/images/movie-thumb/midnightHunter.webp";
import spiderman from "/assets/images/movie-thumb/spiderman.webp";
import kungFuPanda from "/assets/images/movie-thumb/kung-fu-panda.webp";
import hanuman from "/assets/images/movie-thumb/hanuman.webp";
import krishna from "/assets/images/movie-thumb/krishna.webp";
import minions from "/assets/images/movie-thumb/minions.webp";
import piratesOfDayOnesOriginal from "/assets/images/movie-thumb/pirates-ofdayones-orignal.webp";
import theHunter from "/assets/images/movie-thumb/the-hunter.webp";
import lostInSpace from "/assets/images/movie-thumb/lost-inst-space.webp";
import castleRock from "/assets/images/movie-thumb/castle-rock.webp";
import breakingBad from "/assets/images/movie-thumb/breaking-bad.webp";
import movie from "/assets/images/movie-thumb/gameofheros.webp";

// the hook
import { useTranslation } from "react-i18next";

//choice js
import ChoicesJs from "../../../components/choices";
import Tab from "../../../components/custom/tab";
import TabContent from "../../../components/custom/tabContent";
import Quill from "../../../components/custom/quill";
import ImageUpload from "../../../components/custom/file_upload";
import Source from "../../../components/custom/Source";

//DATA
const tableData = [
  {
    movie: theFirstOfUs,
    title: "Awakening: The First Ones",
    author: "Jenny",
    date_and_time: "2025-07-08 09:23:51",
    Views: "870 views",
  },
  {
    movie: migration,
    title: "Beyond Borders",
    author: "Jenny",
    date_and_time: "2025-02-05 08:37:44",
    Views: "749 views",
  },
  {
    movie: tianic,
    title: "Titanic: Lost & Found",
    author: "Jenny",
    date_and_time: "2025-04-16 11:42:13",
    Views: "729 views",
  },
  {
    movie: theCrew,
    title: "The Real Crew",
    author: "Jenny",
    date_and_time: "2025-02-05 08:09:42",
    Views: "697 views",
  },
  {
    movie: midnightHunter,
    title: "Midnight Hunter",
    author: "Jenny",
    date_and_time: "2025-02-04 10:57:08",
    Views: "366 views",
  },
  {
    movie: spiderman,
    title: "Spider Sentinel",
    author: "Jenny",
    date_and_time: "2025-02-05 07:01:39",
    Views: "484 views",
  },
  {
    movie: kungFuPanda,
    title: "Masters of Kung Fu: The Panda Legend",
    author: "Jenny",
    date_and_time: "2024-12-26 08:14:16",
    Views: "508 views",
  },
  {
    movie: hanuman,
    title: "The Epic Journey of Hanuman",
    author: "Jenny",
    date_and_time: "2024-12-26 11:54:20",
    Views: "318 views",
  },
  {
    movie: krishna,
    title: "Vasudeva: The Eternal Journey",
    author: "Jenny",
    date_and_time: "2024-12-26 10:30:30",
    Views: "213 views",
  },
  {
    movie: minions,
    title: "Minions",
    author: "Jenny",
    date_and_time: "2025-07-08 06:58:43",
    Views: "745 views",
  },
  {
    movie: piratesOfDayOnesOriginal,
    title: "Pirates of Day One",
    author: "Jenny",
    date_and_time: "2025-02-04 10:57:30",
    Views: "727 views",
  },
  {
    movie: theHunter,
    title: "The Hunter",
    author: "Jenny",
    date_and_time: "2025-07-09 10:38:07",
    Views: "2345 views",
  },
  {
    movie: lostInSpace,
    title: "Lost In Space",
    author: "Jenny",
    date_and_time: "2024-12-25 09:51:54",
    Views: "293 views",
  },
  {
    movie: castleRock,
    title: "Castle rock",
    author: "Jenny",
    date_and_time: "2024-12-25 09:52:11",
    Views: "199 views",
  },
  {
    movie: breakingBad,
    title: "Breaking Bad",
    author: "Jenny",
    date_and_time: "2025-07-08 07:07:52",
    Views: "601 views",
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
      return `<small>${row.date_and_time}</small>`;
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

const ShowList = memo(() => {
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
  //select dropDown
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

  const [activeTab, setActiveTab] = useState("general_tab");

  // Array of tab data
  const tabsData = [
    { id: "general_tab", label: `${t("addpage.general")}`, content: <GeneralTabContent /> },
    { id: "cast_tab", label: `${t("addpage.cast")}`, content: <Cast /> },
    { id: "crew_tab", label: `${t("addpage.crew")}`, content: <Crew /> },
    {
      id: "sources_tab",
      label: `${t("addpage.seasons&episodes")}`,
      content: <Sources />,
    },
    { id: "genres_tab", label: `${t("addpage.genres")}`, content: <Genres /> },
    { id: "tags_tab", label: `${t("addpage.tags")}`, content: <Tags /> },
    {
      id: "additionData_tab",
      label: `${t("addpage.additional_data")}`,
      content: <Addition_Data />,
    },
    {
      id: "membershipLevel_tab",
      label: `${t("addpage.membership-level")}`,
      content: <Membership_Level />,
    },
  ];

  const EditMovie_Data = [
    {
      id: "general_tab",
      label: `${t("addpage.general")}`,
      content: <GeneralTabContent defaultCensorRating="U" time="02:30" />,
    },
    { id: "cast_tab", label: `${t("addpage.cast")}`, content: <Cast /> },
    { id: "crew_tab", label: `${t("addpage.crew")}`, content: <Crew /> },
    {
      id: "sources_tab",
      label: `${t("addpage.seasons&episodes")}`,
      content: <Sources />,
    },
    { id: "genres_tab", label: `${t("addpage.genres")}`, content: <Genres /> },
    { id: "tags_tab", label: `${t("addpage.tags")}`, content: <Tags /> },
    {
      id: "additionData_tab",
      label: `${t("addpage.additional_data")}`,
      content: (
        <Addition_Data defalutLink="https://www.youtube.com/" rating="5" />
      ),
    },
    {
      id: "membershipLevel_tab",
      label: `${t("addpage.membership-level")}`,
      content: <Membership_Level />,
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
                       {t("addpage.tv-show-list")}
                     </span>
                   </h2>
                   <Button variant="primary" onClick={handleShow} className="d-flex align-items-center gap-2">
                     <i className="ph-bold ph-plus"></i>
                     {t("movielist.add_show")}
                   </Button>
                 </Card.Header>
                 <Card.Body className="p-0">
                   <div className="table-view table-responsive my-3 table-space">
                     <table
                       id="seasonTable"
                       ref={tableRef}
                       className="data-tables table custom-table mt-2 movie_table dataTable no-footer"
                     ></table>
                   </div>
                 </Card.Body>
               </div>
        <Offcanvas
          className="offcanvas-width-80 on-rtl "
          show={show}
          onHide={handleClose}
          placement={placement}
        >
          <Offcanvas.Header closeButton>
            <h2 className="episode-playlist-title wp-heading-inline">
              <Offcanvas.Title as="span" className="position-relative">
                {t("movielist.show_list")}
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
                        TV Show Title
                        <span className="text-primary"> *</span>
                      </Form.Label>
                      <Form.Control
                        className="form-control"
                        type="text"
                        placeholder="Enter title of the movie."
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
                    <Form.Label>Embed TV Show Content</Form.Label>
                    <Quill />
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <ImageUpload
                      uploadImageName="Thumbnail"
                      isUploadImageDefault={true}
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
        <Offcanvas
          className="offcanvas-width-80"
          show={show1}
          onHide={handleClose1}
          placement={placement}
        >
          <Offcanvas.Header closeButton>
            <h2 className="episode-playlist-title wp-heading-inline">
              <Offcanvas.Title as="span" className="position-relative">
                {t("movielist.edit_show_list")}
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

                        {t("addpage.tv-show-title")}
                        <span className="text-primary"> *</span>
                      </Form.Label>
                      <Form.Control
                        className="form-control"
                        type="text"
                        placeholder="Admin"
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
                    <Form.Label>{t("addpage.content")}</Form.Label>
                    <Quill />
                  </Col>
                </Row>
                <Row>
                  <Col lg={3}>
                    <ImageUpload
                      uploadImageName={t("addpage.thumbnail")}
                      isUploadImageDefault={true}
                      isRequiredStar={true}
                      defaultImageUrl={movie}
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
                        placeholder={t("addpage.enter-excerpt-content-tvshow")}
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
      </Col>
    </Row>
  );
});

const GeneralTabContent = (props) => {
  const { t } = useTranslation();
  // Select
  const lang_options = [
    { label: "Upload movie", value: "upload_movie" },
    { label: "Embed movie", value: "embed_movie" },
    { label: "Movie URL", value: "movie_url" },
    { label: "Afrikaans", value: "afrikaans" },
    { label: "አማርኛ", value: "amharic" },
    { label: "Aragonés", value: "aragones" },
    { label: "العربية", value: "arabic" },
    { label: "العربية المغربية", value: "arabic_moroccan" },
    { label: "অসমীয়া", value: "assamese" },
    { label: "گؤنئی آذربایجان", value: "south_azerbaijani" },
    { label: "Azərbaycan dili", value: "azerbaijani" },
    { label: "Беларуская мова", value: "belarusian" },
    { label: "Български", value: "bulgarian" },
    { label: "বাংলা", value: "bengali" },
    { label: "བོད་ཡིག", value: "tibetan" },
    { label: "Bosanski", value: "bosnian" },
    { label: "Català", value: "catalan" },
    { label: "Cebuano", value: "cebuano" },
    { label: "Čeština", value: "czech" },
    { label: "Cymraeg", value: "welsh" },
    { label: "Dansk", value: "danish" },
    { label: "Deutsch (Schweiz)", value: "german_swiss" },
    { label: "Deutsch", value: "german" },
    { label: "Deutsch (Sie)", value: "german_sie" },
    { label: "Deutsch (Österreich)", value: "german_austria" },
    { label: "Deutsch (Schweiz, Du)", value: "german_swiss_du" },
    { label: "Dolnoserbšćina", value: "dolnoserbian" },
    { label: "རྫོང་ཁ", value: "dzongkha" },
    { label: "Ελληνικά", value: "greek" },
    { label: "English (South Africa)", value: "english_south_africa" },
    { label: "English (Australia)", value: "english_australia" },
    { label: "English (UK)", value: "english_uk" },
    { label: "English (New Zealand)", value: "english_new_zealand" },
    { label: "English (Canada)", value: "english_canada" },
    { label: "Esperanto", value: "esperanto" },
    { label: "Español de Perú", value: "spanish_peru" },
    { label: "Español de México", value: "spanish_mexico" },
    { label: "Español de Colombia", value: "spanish_colombia" },
    { label: "Español", value: "spanish" },
    { label: "Español de Venezuela", value: "spanish_venezuela" },
    { label: "Español de Ecuador", value: "spanish_ecuador" },
    {
      label: "Español de República Dominicana",
      value: "spanish_republica_dominicana",
    },
    { label: "Español de Uruguay", value: "spanish_uruguay" },
    { label: "Español de Puerto Rico", value: "spanish_puerto_rico" },
    { label: "Español de Guatemala", value: "spanish_guatemala" },
    { label: "Español de Costa Rica", value: "spanish_costa_rica" },
    { label: "Español de Chile", value: "spanish_chile" },
    { label: "Español de Argentina", value: "spanish_argentina" },
    { label: "Eesti", value: "estonian" },
    { label: "Euskara", value: "basque" },
    { label: "(فارسی (افغانستان", value: "farsi_afghanistan" },
    { label: "فارسی", value: "persian" },
    { label: "Suomi", value: "finnish" },
    { label: "Français du Canada", value: "french_canada" },
    { label: "Français", value: "french" },
    { label: "Français de Belgique", value: "french_belgium" },
    { label: "Friulian", value: "friulian" },
    { label: "Frysk", value: "frisian" },
    { label: "Gàidhlig", value: "gaelic" },
    { label: "Galego", value: "galician" },
    { label: "ગુજરાતી", value: "gujarati" },
    { label: "هزاره گی", value: "hazara" },
    { label: "עִבְרִית", value: "hebrew" },
    { label: "हिन्दी", value: "hindi" },
    { label: "Hrvatski", value: "croatian" },
    { label: "Hornjoserbšćina", value: "serbian_upper" },
    { label: "Magyar", value: "hungarian" },
    { label: "Հայերեն", value: "armenian" },
    { label: "Bahasa Indonesia", value: "indonesian" },
    { label: "Íslenska", value: "icelandic" },
    { label: "Italiano", value: "italian" },
    { label: "日本語", value: "japanese" },
    { label: "Basa Jawa", value: "javanese" },
    { label: "ქართული", value: "georgian" },
    { label: "Taqbaylit", value: "berber" },
    { label: "Қазақ тілі", value: "kazakh" },
    { label: "ភាសាខ្មែរ", value: "khmer" },
    { label: "ಕನ್ನಡ", value: "kannada" },
    { label: "한국어", value: "korean" },
    { label: "كوردی‎", value: "kurdish" },
    { label: "Кыргызча", value: "kyrgyz" },
    { label: "ພາສາລາວ", value: "lao" },
    { label: "Lietuvių kalba", value: "lithuanian" },
    { label: "Latviešu valoda", value: "latvian" },
    { label: "Македонски јазик", value: "macedonian" },
    { label: "മലയാളം", value: "malayalam" },
    { label: "Монгол", value: "mongolian" },
    { label: "मराठी", value: "marathi" },
    { label: "Bahasa Melayu", value: "malay" },
    { label: "ဗမာစာ", value: "myanmar" },
    { label: "Norsk bokmål", value: "norwegian_bokmal" },
    { label: "नेपाली", value: "nepali" },
    { label: "Nederlands (Formeel)", value: "dutch_formal" },
    { label: "Nederlands (België)", value: "dutch_belgium" },
    { label: "Nederlands", value: "dutch" },
    { label: "Norsk nynorsk", value: "norwegian_nynorsk" },
    { label: "Occitan", value: "occitan" },
    { label: "ਪੰਜਾਬੀ", value: "punjabi" },
    { label: "Polski", value: "polish" },
    { label: "پښتو", value: "pashto" },
    { label: "Português (AO90)", value: "portuguese_ao90" },
    { label: "Português do Brasil", value: "portuguese_brazil" },
    { label: "Português de Angola", value: "portuguese_angola" },
    { label: "Português", value: "portuguese" },
    { label: "Ruáinga", value: "ruainga" },
    { label: "Română", value: "romanian" },
    { label: "Русский", value: "russian" },
    { label: "Сахалыы", value: "sakha" },
    { label: "سنڌي", value: "sindhi" },
    { label: "සිංහල", value: "sinhalese" },
    { label: "Slovenčina", value: "slovak" },
    { label: "سرائیکی", value: "saraiki" },
    { label: "Slovenščina", value: "slovenian" },
    { label: "Shqip", value: "albanian" },
    { label: "Српски језик", value: "serbian" },
    { label: "Svenska", value: "swedish" },
    { label: "Kiswahili", value: "swahili" },
    { label: "Ślōnskŏ gŏdka", value: "silesian" },
    { label: "தமிழ்", value: "tamil" },
    { label: "தமிழ்", value: "tamil_2" },
    { label: "తెలుగు", value: "telugu" },
    { label: "ไทย", value: "thai" },
    { label: "Tagalog", value: "tagalog" },
    { label: "Türkçe", value: "turkish" },
    { label: "Татар теле", value: "tatar" },
    { label: "Reo Tahiti", value: "tahitian" },
    { label: "ئۇيغۇرچە", value: "uyghur" },
    { label: "Українська", value: "ukrainian" },
    { label: "اردو", value: "urdu" },
    { label: "O‘zbekcha", value: "uzbek" },
    { label: "Tiếng Việt", value: "vietnamese" },
    { label: "简体中文", value: "chinese_simplified" },
    { label: "繁體中文", value: "chinese_traditional" },
    { label: "香港中文", value: "chinese_hongkong" },
  ];

  return (
    <div className="p-4 px-2">
      <Row>
        <Col lg={6}>
          <Form.Label>{t("addpage.language")}</Form.Label>
          <ChoicesJs
            options={lang_options}
            className="js-choice"
            select="multi"
          />
        </Col>
      </Row>
    </div>
  );
};

const Cast = () => {
  const { t } = useTranslation();
  const cast_option = [
    { label: "Select Cast", value: "Select Cast" },
    { label: "Ava Monroe", value: "ava_monroe" },
    { label: "Charles Melton", value: "charles_melton" },
    { label: "Jack Nicholson", value: "jack_nicholson" },
    { label: "James Stewart", value: "james_stewart" },
    { label: "Jeff Bridges", value: "jeff_bridges" },
    { label: "Jordan Grant", value: "jordan_grant" },
    { label: "Mark Smith", value: "mark_smith" },
    { label: "Maxwell Carter", value: "maxwell_carter" },
    { label: "Ruby Scott", value: "ruby_scott" },
    { label: "Michael Fox", value: "michael_fox" },
    { label: "Ryan Pierce", value: "ryan_pierce" },
    { label: "John Abraham", value: "john_abraham" },
    { label: "Leena Burton", value: "leena_burton" },
    { label: "Davina Decorous", value: "davina_decorous" },
    { label: "Thomas Bailey", value: "thomas_bailey" },
    { label: "Kelly Reilly", value: "kelly_reilly" },
    { label: "Smith Jonas", value: "smith_jonas" },
    { label: "Angel Louis", value: "angel_louis" },
    { label: "Millar Joseph", value: "millar_joseph" },
    { label: "Mark Wilson", value: "mark_wilson" },
    { label: "Jack Walker", value: "jack_walker" },
    { label: "Benjamin Hayes", value: "benjamin_hayes" },
    { label: "Olivia Foster", value: "olivia_foster" },
    { label: "Ethan Crawford", value: "ethan_crawford" },
    { label: "Oliver Turner", value: "oliver_turner" },
    { label: "Maria Rodriguez", value: "maria_rodriguez" },
  ];

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Row className="gy-2">
          <Form.Label htmlFor="choose_cast">{t("addpage.choose-cast")}</Form.Label>
          <Col lg={6}>
            <Form.Group className="form-group mb-0">
                  <ChoicesJs
                    options={cast_option}
                    className="js-choice"
                    select="one"
                  />
            </Form.Group>
          </Col>
           <Col lg={4}>
                <Button variant="primary" type="button">
                {t("addpage.add-btn")}
                </Button>
           </Col>
        </Row>
      </div>
    </Fragment>
  );
};

const Crew = () => {
  const { t } = useTranslation();
  const crew_option = [
    { label: "Select Crew", value: "Select Crew" },
    { label: "Ava Monroe", value: "ava_monroe" },
    { label: "Charles Melton", value: "charles_melton" },
    { label: "Jack Nicholson", value: "jack_nicholson" },
    { label: "James Stewart", value: "james_stewart" },
    { label: "Jeff Bridges", value: "jeff_bridges" },
    { label: "Jordan Grant", value: "jordan_grant" },
    { label: "Mark Smith", value: "mark_smith" },
    { label: "Maxwell Carter", value: "maxwell_carter" },
    { label: "Ruby Scott", value: "ruby_scott" },
    { label: "Michael Fox", value: "michael_fox" },
    { label: "Ryan Pierce", value: "ryan_pierce" },
    { label: "John Abraham", value: "john_abraham" },
    { label: "Leena Burton", value: "leena_burton" },
    { label: "Davina Decorous", value: "davina_decorous" },
    { label: "Thomas Bailey", value: "thomas_bailey" },
    { label: "Kelly Reilly", value: "kelly_reilly" },
    { label: "Smith Jonas", value: "smith_jonas" },
    { label: "Angel Louis", value: "angel_louis" },
    { label: "Millar Joseph", value: "millar_joseph" },
    { label: "Mark Wilson", value: "mark_wilson" },
    { label: "Jack Walker", value: "jack_walker" },
    { label: "Benjamin Hayes", value: "benjamin_hayes" },
    { label: "Olivia Foster", value: "olivia_foster" },
    { label: "Ethan Crawford", value: "ethan_crawford" },
    { label: "Oliver Turner", value: "oliver_turner" },
    { label: "Maria Rodriguez", value: "maria_rodriguez" },
  ];

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Row className="gy-2">
              <Form.Label htmlFor="choose_crew">{t("addpage.choose-crew-member")}</Form.Label>
          <Col lg={6}>
            <Form.Group className="form-group mb-0">
                  <ChoicesJs
                    options={crew_option}
                    className="js-choice"
                    select="one"
                  />
            </Form.Group>
          </Col>
           <Col lg={4}>
                <Button variant="primary" type="button">
                {t("addpage.add-btn")}
                </Button>
           </Col>
        </Row>
      </div>
    </Fragment>
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

const Genres = () => {
  const { t } = useTranslation();
  const genres_option = [
    { label: "Action", value: "action" },
    { label: "Adventure", value: "adventure" },
    { label: "Animation", value: "animation" },
    { label: "Crime", value: "crime" },
    { label: "Horror", value: "horror" },
    { label: "Mystery", value: "mystery" },
    { label: "Romance", value: "romance" },
    { label: "Action movie", value: "action_movie" },
  ];

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Form.Group className="form-group mb-0">
          <Form.Label htmlFor="Choose_Movie_Genres">
            {t("addpage.choose-tv-show-genres")}
          </Form.Label>
          <ChoicesJs
            options={genres_option}
            className="js-choice"
            select="multi"
          />
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
    { label: "Assassin", value: "assassin" },
    { label: "Comedy", value: "comedy" },
    { label: "Drama", value: "drama" },
    { label: "Family", value: "family" },
    { label: "Fantasy", value: "fantasy" },
    { label: "History", value: "history" },
    { label: "Hitman", value: "hitman" },
    { label: "Horror", value: "horror" },
    { label: "Mystery", value: "mystery" },
    { label: "Recommended", value: "recommended" },
    { label: "Revenge", value: "revenge" },
    { label: "Sci-Fi", value: "sci_fi" },
    { label: "Thriller", value: "thriller" },
    { label: "Animated Tag", value: "animated_tag" },
  ];

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Form.Group className="form-group mb-0">
          <Form.Label htmlFor="Choose_Movie_Genres">
          {t("addpage.choose-tv-show-tags")}
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

const Addition_Data = (props) => {
  const { t } = useTranslation();
  const [trailerLink, setTrailerLink] = useState(props.defalutLink || "");
  const [isUpcoming, setIsUpcoming] = useState(false);
  const [imdbRating, setImdbRating] = useState(props.rating || 0);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const handleCheckboxChange = (e) => setIsUpcoming(e.target.checked);
  const handleTrailerLinkChange = (e) => setTrailerLink(e.target.value);
  const handleImdbRatingChange = (e) => setImdbRating(e.target.value);


  const relatedProductOptions = [
    { label: "WordPress Pennant", value: "wordpress_pennant" },
    { label: "Logo Collection", value: "logo_collection" },
    { label: "Beanie with Logo", value: "beanie_with_logo" },
    { label: "T-Shirt with Logo", value: "tshirt_with_logo" },
    { label: "Single", value: "single" },
    { label: "Album", value: "album" },
    { label: "Polo", value: "polo" },
    { label: "Long Sleeve Tee", value: "long_sleeve_tee" },
    { label: "Hoodie with Zipper", value: "hoodie_with_zipper" },
    { label: "Hoodie with Pocket", value: "hoodie_with_pocket" },
    { label: "Sunglasses", value: "sunglasses" },
    { label: "Cap", value: "cap" },
    { label: "Belt", value: "belt" },
    { label: "Beanie", value: "beanie" },
    { label: "T-Shirt", value: "tshirt" },
    { label: "Hoodie with Logo", value: "hoodie_with_logo" },
    { label: "Hoodie", value: "hoodie" },
    { label: "V-Neck T-Shirt", value: "vneck_tshirt" },
    { label: "Round Neck T-Shirt", value: "round_neck_tshirt" },
    { label: "Magic Hat", value: "magic_hat" },
    { label: "Spider Cover", value: "spider_cover" },
    { label: "Sleeping Mask", value: "sleeping_mask" },
    { label: "Phone Cover", value: "phone_cover" },
    { label: "Black Bow", value: "black_bow" },
    { label: "Coffee Cup", value: "coffee_cup" },
    { label: "Boxing Gloves", value: "boxing_gloves" },
    { label: "Crown", value: "crown" },
    { label: "Bag Pack", value: "bag_pack" },
    { label: "Vehicle Keychain", value: "vehicle_keychain" },
    { label: "Green Specs", value: "green_specs" },
    { label: "Cartoon Character", value: "cartoon_character" },
    { label: "Red & Black T-Shirt", value: "red_black_tshirt" },
    { label: "Logo T-Shirt", value: "logo_tshirt" },
    { label: "Believe Mask", value: "believe_mask" },
    { label: "Keychain", value: "keychain" },
    { label: "Socks", value: "socks" },
    { label: "Harry T-Shirt", value: "harry_tshirt" },
    { label: "Sunglasses", value: "sunglasses" },
    { label: "Black Cap", value: "black_cap" },
    { label: "Round Badges", value: "round_badges" },
    { label: "Carry Bag", value: "carry_bag" },
    { label: "Glossy Mug", value: "glossy_mug" },
    { label: "Spider Pillow logo", value: "spider_pillow_logo" },
    { label: "Daily Diary", value: "daily_diary" },
    { label: "Floral Badges", value: "floral_badges" },
  ];

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Row>
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
          <Form.Group className="form-group">
            <Form.Label className="d-block">{t("addpage.upcoming")}</Form.Label>
            <Form.Check
              type="checkbox"
              id="flexCheckDefault3"
              label={t("addpage.this-is-upcoming-tv-show")}
              checked={isUpcoming}
              onChange={handleCheckboxChange}
            />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="form-group">
              <ImageUpload uploadImageName={t("addpage.upload-potrait-image")} 
                      isUploadImageDefault={true}
                      defaultImageUrl={movie}/>
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="form-group" controlId="imdbRating">
              <Form.Label>{t("addpage.enter_imdb_rating")}</Form.Label>
              <Form.Control
                type="number"
                value={imdbRating}
                onChange={handleImdbRatingChange}
                min="0"
              />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group className="form-group" controlId="relatedProduct">
              <Form.Label>{t("addpage.select-related-product")}</Form.Label>
              <ChoicesJs
                options={relatedProductOptions}
                className="js-choice"
                select="multi"
              />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Label className="d-block form-group">{t("addpage.notification")}</Form.Label>
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

const Membership_Level = () => {
  const { t } = useTranslation();
  const membership_option = [
    { label: "Free", value: "free" },
    { label: "Monthly level", value: "monthly_level" },
    { label: "Annual", value: "annual" },
  ];

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Form.Group className="form-group mb-0">
          <Form.Label htmlFor="Choose_Movie_Genres">
          {t("addpage.choose-pmp-levels")}
          </Form.Label>
          <ChoicesJs
            options={membership_option}
            className="js-choice"
            select="multi"
          />
        </Form.Group>
      </div>
    </Fragment>
  );
};

ShowList.displayName = "ShowList";
export default ShowList;
