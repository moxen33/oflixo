import React, { memo, Fragment, useRef } from "react";
import Swal from "sweetalert2-neutral";

//react-bootstrap
import { Card, Col, Row } from "react-bootstrap";

//Hooks
import useDataTable from "../../hooks/useDatatable";

//plugins
import "flatpickr/dist/flatpickr.css";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";

// the hook
import { useTranslation } from "react-i18next";

//Data
const tableData = [
  {
    no: "1",
    category: "Movie",
    Name: "Unexpected Gem",
    description: "I started watching with low expectations, but this turned out to be amazing. Great storytelling and character depth.",
    release_date: "2017",
    rating: "9.2",
  },
  {
    no: "2",
    category: "Show",
    Name: "Cursed",
    description: "It's not bad, but not great either. A decent watch for a slow weekend",
    release_date: "2012",
    rating: "8.5",
  },
  {
    no: "3",
    category: "Movie",
    Name: "Veronica",
    description: "This show had me on the edge of my seat. Every episode ended with a cliffhanger!",
    release_date: "2018",
    rating: "7.2",
  },
  {
    no: "4",
    category: "Movie",
    Name: "Troll Hunters",
    description: " Everyone was talking about it, but I didn’t find it very engaging.",
    release_date: "2020",
    rating: "9.5",
  },
  {
    no: "5",
    category: "Show",
    Name: "Gran Torino",
    description: "The colors, locations, and cinematography are top-notch. A treat for the eyes!",
    release_date: "2019",
    rating: "7.0",
  },
  {
    no: "6",
    category: "Movie",
    Name: "Man Of Street",
    description: " Loved the suspense and pacing. Couldn't stop watching after episode 2.",
    release_date: "2017",
    rating: "9.2",
  },
  {
    no: "7",
    category: "Show",
    Name: "Cursed",
    description: "Strong start for a new series. Some uneven acting, but promising overall.",
    release_date: "2012",
    rating: "8.5",
  },
  {
    no: "8",
    category: "Movie",
    Name: "Veronica",
    description: "The idea was good, but episodes felt too long and repetitive.",
    release_date: "2018",
    rating: "7.2",
  },
  {
    no: "9",
    category: "Movie",
    Name: "Troll Hunters",
    description: "The cast delivered excellent performances. Very natural and believable.",
    release_date: "2020",
    rating: "9.5",
  },
  {
    no: "10",
    category: "Show",
    Name: "Gran Torino",
    description: "Everything was great until the last episode. That ending was a letdown.",
    release_date: "2019",
    rating: "7.0",
  },
];

const RatingPage = memo(() => {
  const { t } = useTranslation();
  const columns = useRef([
    { data: "no", title: " No" },
    { data: "category", title: "Category" },
    { data: "Name", title: "Name" },
    { data: "description", title: "Description" },
    { data: "release_date", title: "Release Date" },
    { data: null, title: "Rating" , render: function(row){
      return `<i class="ph-fill ph-star text-primary"></i> ${row.rating}`
    } },
    {
      data: null,
      // orderable: false,
      // searchable: false,
      title: "Action",
      render: function () {
        return `
          <div class="d-flex gap-1 align-items-center">
            <a title="Delete" class="btn btn-sm btn-icon btn-danger-subtle delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#"><i class="ph ph-trash-simple fs-6"></i></a>
          </div>
        `;
      },
    },
  ]);

  const showAlert = () => {
    deleteSwal();
  };

  const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns.current,
    data: tableData,
    actionCallback: (data) => {
      switch (data.method) {
        case "delete":
          showAlert();
          break;

        default:
          break;
      }
    },
  });

  const deleteSwal = () => {
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

  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <div className="pb-3 streamit-wraper-table">
            <Card.Header className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="episode-playlist-title wp-heading-inline">
                <span className="position-relative">
                  {t("rating.Rating_List")}
                </span>
              </h2>
            </Card.Header>
            <Card.Body>
              <div className="table-view table-responsive my-3 table-space">
                <table
                  id="seasonTable"
                  ref={tableRef}
                  className="data-tables table custom-table movie_table mt-2"
                  data-toggle="data-table"
                ></table>
              </div>
            </Card.Body>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
});

RatingPage.displayName = "RatingPage";
export default RatingPage;
