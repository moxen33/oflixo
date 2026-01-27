import React, { Fragment, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// react-router
import { Link } from "react-router-dom";

// react-bootstrap
import { Row, Col, Container, Dropdown, Card, Table } from "react-bootstrap";

import ApexCharts from "react-apexcharts";

// Image
import img1 from "/assets/images/author/01.png";
import img2 from "/assets/images/author/02.png";
import img3 from "/assets/images/author/03.png";
import img4 from "/assets/images/author/04.png";
import img5 from "/assets/images/author/05.png";
import img6 from "/assets/images/author/06.png";

const DashboardOne = () => {

  const { t } = useTranslation();

  const colors = [
    "var(--bs-primary)",
    "var(--bs-primary-tint-20)",
    "var(--bs-primary-tint-40)",
    "var(--bs-primary-tint-60)",
    "var(--bs-primary-tint-80)",
  ];

  const options = {
    series: [25, 15, 30, 20, 10],
    chart: {
      height: 255,
      type: "donut",
    },
    stroke: {
      width: 0,
    },
    colors: colors,
    labels: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "14px",
      labels: {
        colors: "var(--bs-heading-color)",
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  //   Total Revenue
  const total_revenue_option = {
    series: [
      {
        name: "Total Revenue",
        data: [10, 15, 10, 15, 5, 10, 10],
      },
    ],
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    colors: ["var(--bs-primary)"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      borderColor: "var(--bs-border-color)",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0,
      },
    },
    xaxis: {
      type: "category",
      labels: {
        style: {
          colors: "var(--bs-heading-color)",
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: ["var(--bs-heading-color)"],
        },
      },
    },
    tooltip: {
      style: {
        background: "var(--bs-body-bg)",
        color: "var(--bs-body-bg)",
      },
    },
  };

  //
  const new_subcriber_colors = [
    "var(--bs-primary)",
    "var(--bs-primary-tint-20)",
    "var(--bs-primary-tint-40)",
    "var(--bs-primary-tint-60)",
  ];

  const new_subcriber_options = {
    series: [
      {
        name: "Basic",
        data: [40, 60, 40, 70, 40, 40, 50, 60, 50, 30, 30, 40],
      },
      {
        name: "Premium Plan",
        data: [70, 30, 20, 50, 30, 30, 50, 40, 40, 70, 30, 60],
      },
      {
        name: "Ultimate Plan",
        data: [50, 40, 30, 30, 20, 30, 50, 60, 50, 60, 30, 40],
      },
      {
        name: "Elite Plan",
        data: [40, 50, 40, 30, 40, 20, 40, 50, 40, 30, 30, 50],
      },
    ],
    colors: new_subcriber_colors,
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -20,
            offsetY: 0,
          },
        },
      },
    ],
    grid: {
      borderColor: "var(--bs-border-color)",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 3,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
              color: "var(--bs-body-color)",
            },
          },
        },
      },
    },
    xaxis: {
      type: "category",
      labels: {
        style: {
          colors: "var(--bs-heading-color)",
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: ["var(--bs-heading-color)"],
        },
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: "var(--bs-heading-color)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      style: {
        background: "var(--bs-body-bg)",
        color: "var(--bs-body-bg)",
      },
    },
  };

  const most_watched_colors = [
    "var(--bs-primary)",
    "var(--bs-primary-tint-20)",
    "var(--bs-primary-tint-40)",
    "var(--bs-primary-tint-60)",
  ];

  const most_watched_options = {
    series: [
      {
        name: "Movie",
        data: [30, 50, 35, 60, 40, 60, 60],
      },
      {
        name: "TV Show",
        data: [40, 50, 55, 50, 30, 80, 30],
      },
    ],
    chart: {
      type: "bar",
      height: 430,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },
    colors: most_watched_colors,
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    grid: {
      borderColor: "var(--bs-border-color)",
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
        borderRadius: 3,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
              color: "var(--bs-body-color)",
            },
          },
        },
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: "var(--bs-heading-color)",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "var(--bs-heading-color)",
        },
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      labels: {
        colors: "var(--bs-heading-color)",
      },
      markers: {
        offsetX: -5,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val}K`,
      },
      style: {
        background: "var(--bs-body-bg)",
        color: "var(--bs-body-bg)",
      },
    },
  };

  const top_rated_chart_colors = [
    "var(--bs-primary)",
    "var(--bs-primary-tint-40)",
  ];

  const top_rated_chart_options = {
    series: [55, 75],
    chart: {
      height: 430,
      type: "radialBar",
    },
    colors: top_rated_chart_colors,
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%",
        },
        track: {
          strokeWidth: "100%",
          background: "var(--bs-body-bg)",
        },
        legend: {
          show: true,
        },
        dataLabels: {
          name: {
            fontSize: "16px",
            color: "var(--bs-heading-color)",
          },
          value: {
            fontSize: "16px",
            color: "var(--bs-heading-color)",
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
            color: "var(--bs-heading-color)",
            fontSize: "16px",
            formatter: function (e) {
              return "81%";
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      fontSize: "14px",
      labels: {
        colors: ["var(--bs-heading-color)", "var(--bs-heading-color)"],
      },
    },
    labels: ["Movies", "TV Shows"],
    responsive: [
      {
        breakpoint: 300,
        options: {
          chart: {
            height: 150,
          },
        },
      },
    ],
  };

  return (
    <Fragment>
      <Row>
        <Col lg={8}>
          <Row>
            <Col md={4} sm={6}>
              <Card>
                <Card.Body>
                  <div className="icon-space mb-5">
                    <i className="ph ph-user fs-1"></i>
                  </div>
                  <div className="card-details">
                    <h1 className="fw-semibold card-details-title">15k+</h1>
                    <p className="mb-0 fs-6">{t("dashboard1.total-users")}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6}>
              <Card>
                <Card.Body>
                  <div className="icon-space mb-5">
                    <i className="ph ph-user-gear fs-1"></i>
                  </div>
                  <div className="card-details">
                    <h1 className="fw-semibold card-details-title">05k+</h1>
                    <p className="mb-0 fs-6">{t("dashboard1.active-users")}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6}>
              <Card>
                <Card.Body>
                  <div className="icon-space mb-5">
                    <i className="ph ph-currency-circle-dollar fs-1"></i>
                  </div>
                  <div className="card-details">
                    <h1 className="fw-semibold card-details-title">10k+</h1>
                    <p className="mb-0 fs-6">{t("dashboard1.total-subscribers")}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6}>
              <Card>
                <Card.Body>
                  <div className="icon-space mb-5">
                    <i className="ph ph-film-strip fs-1"></i>
                  </div>
                  <div className="card-details">
                    <h1 className="fw-semibold card-details-title">15k+</h1>
                    <p className="mb-0 fs-6">{t("dashboard1.total-movie")}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6}>
              <Card>
                <Card.Body>
                  <div className="icon-space mb-5">
                    <i className="ph ph-television-simple fs-1"></i>
                  </div>
                  <div className="card-details">
                    <h1 className="fw-semibold card-details-title">05k+</h1>
                    <p className="mb-0 fs-6">{t("dashboard1.total-tvshow")}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={6}>
              <Card>
                <Card.Body>
                  <div className="icon-space mb-5">
                    <i className="ph ph-video fs-1"></i>
                  </div>
                  <div className="card-details">
                    <h1 className="fw-semibold card-details-title">10k+</h1>
                    <p className="mb-0 fs-6">{t("dashboard1.total-video")}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <Card className="card-block card-height card-dashboard">
            <Card.Header className="d-flex align-items-center justify-content-between">
              <div className="iq-header-title">
                <h3 className="card-title">{t("dashboard1.top-genres")}</h3>
              </div>
            </Card.Header>
            <Card.Body>
              <div id="genre-chart">
                <ApexCharts
                  options={options}
                  series={options.series}
                  type="donut"
                  height={255}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="card-block card-height card-dashboard">
            <Card.Header className="d-flex align-items-center justify-content-between">
              <div className="iq-header-title">
                <h3 className="card-title">{t("dashboard1.total-revenue-subscriptions")}</h3>
              </div>
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="custom-btn-dark-dropdown dropdown-toggle total-revenue"
                  id="dropdownTotalRevenue2"
                  variant="button"
                >
                  Year
                </Dropdown.Toggle>

                <Dropdown.Menu className="sub-dropdown">
                  <Dropdown.Item
                    className="revenue-dropdown-item"
                    data-type="Year"
                  >
                    Year
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="revenue-dropdown-item"
                    data-type="Month"
                  >
                    Month
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="revenue-dropdown-item"
                    data-type="Week"
                  >
                    Week
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <div id="total-revenue-subscription">
                <ApexCharts
                  options={total_revenue_option}
                  series={total_revenue_option.series}
                  type="line"
                  height={350}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card-dashboard">
            <Card.Header className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
              <div className="iq-header-title">
                <h3 className="card-title">{t("dashboard1.new-subscribers")}</h3>
              </div>
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="custom-btn-dark-dropdown dropdown-toggle total-revenue"
                  id="dropdownTotalRevenue2"
                  variant="button"
                >
                  Year
                </Dropdown.Toggle>

                <Dropdown.Menu className="sub-dropdown">
                  <Dropdown.Item
                    className="revenue-dropdown-item"
                    data-type="Year"
                  >
                    Year
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="revenue-dropdown-item"
                    data-type="Month"
                  >
                    Month
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="revenue-dropdown-item"
                    data-type="Week"
                  >
                    Week
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <div id="new-subcriber" className="overflow-hidden">
                <ApexCharts
                  options={new_subcriber_options}
                  series={new_subcriber_options.series}
                  type="bar"
                  height={350}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card-block card-height card-dashboard">
            <Card.Header className="d-flex align-items-center justify-content-between">
              <div className="iq-header-title">
                <h3 className="card-title">{t("dashboard1.most-watched")}</h3>
              </div>
              <Dropdown align="end">
                <Dropdown.Toggle
                  className="btn custom-btn-dark-dropdown dropdown-toggle total-revenue"
                  id="dropdownTotalRevenue2"
                  variant="button"
                >
                  Year
                </Dropdown.Toggle>

                <Dropdown.Menu className="sub-dropdown">
                  <Dropdown.Item
                    className="revenue-dropdown-item"
                    data-type="Year"
                  >
                    Year
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="revenue-dropdown-item"
                    data-type="Month"
                  >
                    Month
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="revenue-dropdown-item"
                    data-type="Week"
                  >
                    Week
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <div id="d-activity">
                <ApexCharts
                  options={most_watched_options}
                  series={most_watched_options.series}
                  type="bar"
                  height={430}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="card-block card-height card-dashboard">
            <Card.Header className="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap">
              <div className="iq-header-title">
                <h3 className="card-title">{t("dashboard1.user-rating-and-reviews")}</h3>
              </div>
              <div className="card-header-toolbar d-flex align-items-center ">
                <Dropdown align="end">
                  <Dropdown.Toggle
                    as="span"
                    id="UserRatings_dropdownMenuButton"
                    className="text-primary"
                    bsPrefix=" "
                  >
                    {t("dashboard1.view-all")}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="iq-dropdown toggle">
                    <Dropdown.Item href="#">
                      <i className="ri-eye-fill me-2"></i>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="ri-delete-bin-6-fill me-2"></i>
                      Delete
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="ri-pencil-fill me-2"></i>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="ri-printer-fill me-2"></i>
                      Print
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <i className="ri-file-download-fill me-2"></i>
                      Download
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Card.Header>
            <Card.Body className="pt-0">
              <div className="mt-4 table-responsive">
                <table id="basic-table" className="table mb-0" role="grid">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Category</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <img
                            className="avatar avatar-40 rounded-pill"
                            src={img1}
                            alt="profile"
                          />
                          <div className="text-start">
                            <h6 className="m-0">John Doe</h6>
                            <small>john@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>9th March 2025</td>
                      <td>Movies</td>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <div className="star-rating">
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <img
                            className="avatar avatar-40 rounded-pill"
                            src={img2}
                            alt="profile"
                          />
                          <div className="text-start">
                            <h6 className="m-0">Mega Links</h6>
                            <small>megalink156@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>7th March 2025</td>
                      <td>Movies</td>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <div className="star-rating">
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <img
                            className="avatar avatar-40 rounded-pill"
                            src={img3}
                            alt="profile"
                          />
                          <div className="text-start">
                            <h6 className="m-0">Felix Harris</h6>
                            <small>felix@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>21st September 2024</td>
                      <td>Tvshow</td>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <div className="star-rating">
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <img
                            className="avatar avatar-40 rounded-pill"
                            src={img4}
                            alt="profile"
                          />
                          <div className="text-start">
                            <h6 className="m-0">Stella Green</h6>
                            <small>stella@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>9th March 2025</td>
                      <td>Tvshow</td>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <div className="star-rating">
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <img
                            className="avatar avatar-40 rounded-pill"
                            src={img5}
                            alt="profile"
                          />
                          <div className="text-start">
                            <h6 className="m-0">Deborah Thomas</h6>
                            <small>deborah@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>12th March 2024</td>
                      <td>Tvshow</td>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <div className="star-rating">
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <img
                            className="avatar avatar-40 rounded-pill"
                            src={img6}
                            alt="profile"
                          />
                          <div className="text-start">
                            <h6 className="m-0">Jorge Perez</h6>
                            <small>jorge@gmail.com</small>
                          </div>
                        </div>
                      </td>
                      <td>9th September 2024</td>
                      <td>Tvshow</td>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <div className="star-rating">
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>{" "}
                            <span className="star filled text-warning">
                              <i className="ph ph-fill ph-star"></i>
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Row>
            <Col lg={4} md={6}>
              <Card className="card-block card-height card-dashboard">
                <Card.Header>
                  <div className="iq-header-title">
                    <h3 className="card-title">{t("dashboard1.top-rated")}</h3>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div id="top-rated-chart">
                    <ApexCharts
                      options={top_rated_chart_options}
                      series={top_rated_chart_options.series}
                      type="radialBar"
                      height={430}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={8} md={6}>
              <Card className="card-dashboard">
                <Card.Header className="d-flex align-items-center justify-content-between flex-wrap">
                  <div className="iq-header-title">
                    <h3 className="card-title">{t("dashboard1.transaction-history")}</h3>
                  </div>
                  <div className="card-header-toolbar d-flex align-items-center ">
                    <Dropdown align="end">
                      <Dropdown.Toggle
                        as="span"
                        id="TransactiondropdownMenuButton"
                        className="text-primary"
                        bsPrefix=" "
                      >
                        {t("dashboard1.view-all")}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="iq-dropdown toggle">
                        <Dropdown.Item href="#">
                          <i className="ri-eye-fill me-2"></i>
                          View
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <i className="ri-delete-bin-6-fill me-2"></i>
                          Delete
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <i className="ri-pencil-fill me-2"></i>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <i className="ri-printer-fill me-2"></i>
                          Print
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <i className="ri-file-download-fill me-2"></i>
                          Download
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <div className="mt-4 table-responsive">
                    <Table id="basic-table1" className="mb-0" role="grid">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Plan</th>
                          <th>Amount</th>
                          <th>Duration</th>
                          <th>Payment Method</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex gap-3 align-items-center">
                              <img
                                className="avatar avatar-40 rounded-pill"
                                src={img1}
                                alt="profile"
                              />
                              <div className="text-start">
                                <h6 className="m-0">John Doe</h6>
                                <small>john@gmail.com</small>
                              </div>
                            </div>
                          </td>
                          <td>12th March 2025</td>
                          <td>Basic</td>

                          <td>$5.00</td>
                          <td>1 week</td>
                          <td>Stripe</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex gap-3 align-items-center">
                              <img
                                className="avatar avatar-40 rounded-pill"
                                src={img2}
                                alt="profile"
                              />
                              <div className="text-start">
                                <h6 className="m-0">Mega Links</h6>
                                <small>megalink156@gmail.com</small>
                              </div>
                            </div>
                          </td>
                          <td>10th March 2025</td>
                          <td>Basic</td>

                          <td>$5.00</td>
                          <td>1 week</td>
                          <td>Stripe</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex gap-3 align-items-center">
                              <img
                                className="avatar avatar-40 rounded-pill"
                                src={img3}
                                alt="profile"
                              />
                              <div className="text-start">
                                <h6 className="m-0">Felix Harris</h6>
                                <small>felix@gmail.com</small>
                              </div>
                            </div>
                          </td>
                          <td>10th March 2025</td>
                          <td>Basic</td>

                          <td>$5.00</td>
                          <td>1 week</td>
                          <td>Stripe</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex gap-3 align-items-center">
                              <img
                                className="avatar avatar-40 rounded-pill"
                                src={img4}
                                alt="profile"
                              />
                              <div className="text-start">
                                <h6 className="m-0">Stella Green</h6>
                                <small>stella@gmail.com</small>
                              </div>
                            </div>
                          </td>
                          <td>10th March 2025</td>
                          <td>Basic</td>

                          <td>$5.00</td>
                          <td>1 week</td>
                          <td>Stripe</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex gap-3 align-items-center">
                              <img
                                className="avatar avatar-40 rounded-pill"
                                src={img5}
                                alt="profile"
                              />
                              <div className="text-start">
                                <h6 className="m-0">Deborah Thomas</h6>
                                <small>deborah@gmail.com</small>
                              </div>
                            </div>
                          </td>
                          <td>10th March 2025</td>
                          <td>Basic</td>

                          <td>$5.00</td>
                          <td>1 week</td>
                          <td>Stripe</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex gap-3 align-items-center">
                              <img
                                className="avatar avatar-40 rounded-pill"
                                src={img6}
                                alt="profile"
                              />
                              <div className="text-start">
                                <h6 className="m-0">Jorge Perez</h6>
                                <small>jorge@gmail.com</small>
                              </div>
                            </div>
                          </td>
                          <td>10th March 2025</td>
                          <td>Elite Plan</td>

                          <td>$80.00</td>
                          <td>1 year</td>
                          <td>Stripe</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DashboardOne;
