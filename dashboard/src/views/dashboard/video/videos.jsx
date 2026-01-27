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
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

import gameofheros from "/assets/images/movie-thumb/gameofheros.webp";
import krishna from "/assets/images/movie-thumb/krishna.webp";
import reeddog from "/assets/images/movie-thumb/reed-dog.webp";
import frzzen from "/assets/images/movie-thumb/frzzen.webp";
import tianic from "/assets/images/movie-thumb/tianic.webp";
import Adventure from "/assets/images/movie-thumb/Adventure-1.webp";
import kungfupanda from "/assets/images/movie-thumb/kung-fu-panda.webp";
import red from "/assets/images/movie-thumb/red.webp";
import thecrew from "/assets/images/movie-thumb/the-crew.webp";
import synchronic from "/assets/images/movie-thumb/synchronic.webp";
import lostinstspace from "/assets/images/movie-thumb/lost-inst-space.webp";
import toddler from "/assets/images/movie-thumb/toddler.webp";
import movie from "/assets/images/movie-thumb/gameofheros.webp";

// the hook
import { useTranslation } from "react-i18next";

//choice js
import ChoicesJs from "../../../components/choices";
import Tab from "../../../components/custom/tab";
import TabContent from "../../../components/custom/tabContent";
import Quill from "../../../components/custom/quill";
import ImageUpload from "../../../components/custom/file_upload";

//DATA
const tableData = [
  {
    movie: gameofheros,
    title: "Game of Heros",
    author: "Jenny",
    date_and_time: "2025-01-08 04:43:37",
    Views: "622 views",
  },
  {
    movie: krishna,
    title: "Little Krishna",
    author: "Jenny",
    date_and_time: "2025-02-05 06:55:19",
    Views: "614 views",
  },
  {
    movie: reeddog,
     title: "Red Dog",
    author: "Jenny",
    date_and_time: "2025-01-22 11:29:40",
    Views: "538 views",
  },
  {
    movie: frzzen,
    title: "Frozen",
    author: "Jenny",
    date_and_time: "2025-02-05 06:53:50",
    Views: "859 views",
  },
  {
    movie: tianic,
    title: "Titanic",
    author: "Jenny",
    date_and_time: "2025-01-22 11:31:52",
    Views: "591 views",
  },
  {
    movie: Adventure,
    title: "Adventure",
    author: "Jenny",
    date_and_time: "2024-12-27 05:57:56",
    Views: "382 views",
  },
  {
    movie: kungfupanda,
    title: "Kung Fu Panda",
    author: "Jenny",
    date_and_time: "2025-01-22 11:31:06",
    Views: "737 views",
  },
  {
    movie: red,
     title: "Red",
    author: "Jenny",
    date_and_time: "2025-01-24 11:52:45",
    Views: "477 views",
  },
  {
    movie: thecrew,
    title: "The Crew",
    author: "Jenny",
    date_and_time: "2025-01-22 11:24:08",
    Views: "236 views",
  },
  {
    movie: synchronic,
    title: "Synchronic",
    author: "Jenny",
    date_and_time: "2024-12-27 05:58:23",
    Views: "206 views",
  },
  {
    movie: lostinstspace,
    title: "Lost In Space",
    author: "Jenny",
    date_and_time: "2025-01-28 10:51:12",
    Views: "330 views",
  },
  {
    movie: toddler,
    title: "Toddler",
    author: "Jenny",
    date_and_time: "2025-01-22 11:30:12",
    Views: "742 views",
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
      return `${row.author}`;
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
    title: "Actions",
    render: function () {
      return `
      <div class="d-flex align-items-center list-user-action gap-2">
         <a title="Edit" class="btn btn-sm btn-icon btn-success-subtle rounded" data-table="action" data-id="0" data-method="edit" href="#"><i class="ph ph-pencil-simple fs-6"></i></a>
         <a title="Delete" class="btn btn-sm btn-icon btn-danger-subtle delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#"><i class="ph ph-trash-simple fs-6"></i></a>
         <a title="View" class="btn btn-sm btn-icon btn-info-subtle rounded" data-table="action" data-id="0" data-method="view" href="#"><i class="ph ph-trash-simple fs-6"></i></a>
      </div>
        `;
    },
  },
];

const Videos = memo(() => {
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
    { id: "category_tab", label: `${t("addpage.category")}`, content: <Category /> },
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
    { id: "Category_tab", label: `${t("addpage.category")}`, content: <Category /> },
    { id: "tags_tab", label: `${t("addpage.tags")}`, content: <Tags /> },
    {
      id: "additionData_tab",
      label: `${t("addpage.additional_data")}`,
      content: (
        <Addition_Data defalutLink="https://www.youtube.com/" rating="5" image={true}/>
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
                {t("addpage.videos-list")}
              </span>
            </h2>
            <Button variant="primary" onClick={handleShow} className="d-flex align-items-center gap-2">
              <i className="ph-bold ph-plus"></i>
              {t("addpage.add_new")}
            </Button>
          </Card.Header>
          <Card.Body>
            <div className="table-view table-responsive my-3 table-space">
              <table
                id="seasonTable"
                ref={tableRef}
                className="data-tables table custom-table movie_table dataTable mt-2 no-footer"
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
                {t("addpage.add-new-video")}
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
                        htmlFor="title"
                      >
                        {t("addpage.title")}
                        <span className="text-primary"> *</span>
                      </Form.Label>
                      <Form.Control
                        className="form-control"
                        type="text"
                        placeholder= {t("addpage.enter-title-movie")}
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
                    <Form.Label>{t("addpage.embed-video-content")}</Form.Label>
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
                {t("addpage.edit-video")}
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
                        {t("addpage.title")}
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
                    <Form.Label>{t("addpage.embed-video-content")}</Form.Label>
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
                      <Form.Label htmlFor="Description">{t("addpage.excerpt")}</Form.Label>
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
              <Button variant="primary" type="submit" className="d-block">
                <i className="ph-fill ph-floppy-disk-back"></i>
                {t("accesscontrol.save")}
              </Button>
              <Button
                variant="outline-primary"
                type="button"
                className="d-block"
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

  const movie_options = [
    { label: "Upload movie", value: "upload_movie" },
    { label: "Embed movie", value: "embed_movie" },
    { label: "Movie URL", value: "movie_url" },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [isUpcoming, setIsUpcoming] = useState(false);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckboxChange = (e) => setIsUpcoming(e.target.checked);

  return (
    <div className="p-4 px-2">
      <Row>
        <Col lg={6}>
          <Form.Group className="form-group" controlId="movieMethod">
            <Form.Label>{t("addpage.choose-movie-method")}</Form.Label>
            <ChoicesJs
              options={movie_options}
              className="js-choice"
              select="one"
            />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <ImageUpload
            uploadImageName={t("addpage.upload-movie")}
            isUploadImageDefault={true}
          />
        </Col>

        {/* Movie Censor Rating */}
        <Col lg={6}>
          <Form.Group className="form-group">
            <Form.Label className="d-block">{t("addpage.catalog-visibility")}</Form.Label>

            <Form.Check
              type="radio"
              label={t("addpage.catalog-and-search-Results")}
              name="catalogVisibility"
              id="catalogAndSearch"
              value="catalogAndSearch"
              checked={selectedOption === "catalogAndSearch"}
              onChange={handleChange}
              className="d-block"
            />

            <Form.Check
              type="radio"
              label={t("addpage.catalog-only")}
              name="catalogVisibility"
              id="catalogOnly"
              value="catalogOnly"
              checked={selectedOption === "catalogOnly"}
              onChange={handleChange}
              className="d-block"
            />

            <Form.Check
              type="radio"
              label={t("addpage.search-results-only")}
              name="catalogVisibility"
              id="searchOnly"
              value="searchOnly"
              checked={selectedOption === "searchOnly"}
              onChange={handleChange}
              className="d-block"
            />

            <Form.Check
              type="radio"
              label="Hidden"
              name={t("addpage.catalog-visibility")}
              id="hidden"
              value="hidden"
              checked={selectedOption === "hidden"}
              onChange={handleChange}
              className="d-block"
            />
          </Form.Group>
        </Col>

        <Col lg={6}>
        <Form.Group className="form-group" >
          <Form.Label>{t("addpage.language")}</Form.Label>
          <ChoicesJs
            options={lang_options}
            className="js-choice"
            select="multi"
          />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="form-group">
            <Form.Label className="d-block">{t("addpage.featured")}</Form.Label>
            <Form.Check
              type="checkbox"
              id="flexCheckDefault31"
              label={t("addpage.this-a-featured-movie")}
              checked={isUpcoming}
              onChange={handleCheckboxChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

const Category = () => {
  const { t } = useTranslation();
  const category_option = [
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
          <Form.Label htmlFor="Choose_Video_Category">
          {t("addpage.choose-video-category")}
          </Form.Label>
          <ChoicesJs
            options={category_option}
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
          {t("addpage.choose-video-tags")}
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
  const { defaultCensorRating, time, image } = props;
  const [isUpcoming, setIsUpcoming] = useState(false);

  const handleCheckboxChange = (e) => setIsUpcoming(e.target.checked);

  const relatedProductOptions = [
    { label: "Polo", value: "polo" },
    { label: "Cap", value: "cap" },
    { label: "T-Shirt", value: "tshirt" },
  ];
  const downloadButton_Options = [
    { label: "No", value: "No" },
    { label: "Link", value: "Link" },
    { label: "Upload", value: "Upload" },
  ];
  // Dynamically set the initial values when the time prop changes
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  useEffect(() => {
    if (time) {
      const [h, m] = time.split(":"); // Assuming the time is passed in HH:mm format
      setHours(Number(h) || 0); // Set hours, default to 0 if parsing fails
      setMinutes(Number(m) || 0); // Set minutes, default to 0 if parsing fails
    }
  }, [time]);

  return (
    <Fragment>
      <div className="p-4 px-2">
        <Row>
          <Col lg={6}>
            <Form.Group className="form-group">
              <ImageUpload
                uploadImageName="Trailer Logo"
                isUploadImageDefault={image === true ? true : false}
                defaultImageUrl={image == true ? movie : ""}
              />
            </Form.Group>
          </Col>
          <Col lg={6}>
            <Form.Group className="form-group">
              <ImageUpload
                uploadImageName="Trailer Logo"
                defaultImageUrl={image === true ? movie : ""}
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
            <Form.Group className="form-group" controlId="showdownloadbutton">
              <Form.Label>{t("addpage.show-download-button")}</Form.Label>
              <ChoicesJs
                options={downloadButton_Options}
                className="js-choice"
                select="one"
              />
            </Form.Group>
          </Col>

          <Col lg={6}>
          <Form.Group className="form-group">
            <Form.Label className="d-block">{t("addpage.upcoming")}</Form.Label>
            <Form.Check
              type="checkbox"
              id="flexCheckDefault3"
              label={t("addpage.upcoming")}
              checked={isUpcoming}
              onChange={handleCheckboxChange}
            />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Label>{t("addpage.movie-time-duration")}</Form.Label>
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
          <Col lg={6}>
            <Form.Group className="form-group">
              <Form.Label className="d-block">{t("addpage.notification")}</Form.Label>
              <Form.Check
                type="checkbox"
                id="flexCheckDefault31"
                label={t("addpage.notify-user-about-prod")}
                checked={isUpcoming}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
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

Videos.displayName = "Videos";
export default Videos;
