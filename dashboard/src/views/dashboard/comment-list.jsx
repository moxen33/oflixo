import React, { memo, Fragment, useRef } from "react";
import Swal from "sweetalert2-neutral";

//react-bootstrap
import { Card, Col, Row } from "react-bootstrap";

//Hooks
import useDataTable from "../../hooks/useDatatable";

// the hook
import { useTranslation } from "react-i18next";

//plugins
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "datatables.net-bs5";
import "flatpickr/dist/flatpickr.css";

//DATA
const tableData = [
  {
    no: "1",
    title: "Hooked",
    author: "Nick Allen",
    description: "This show had me from the first episode. The plot twists were unexpected and thrilling. Can't wait for the next season!",
    created_date: "21 Jul, 2020",
  },
  {
    no: "2",
    title: "Slow Middle",
    author: "Hans Olo",
    description: "Great performances, but the middle episodes dragged a bit. It picks up again towards the end.",
    created_date: "12 Jun, 2020",
  },
  {
    no: "3",
    title: "Binge Worthy",
    author: "Lynn Guini",
    description: "I finished the whole season in one night. It’s addictive and really well-written!",
    created_date: "01 Jan, 2020",
  },
  {
    no: "4",
    title: "Misleading Trailer",
    author: "Aaronottix",
    description: "The trailer made it look action-packed, but the actual movie was kind of slow. Still decent, but not what I expected.",
    created_date: "19 Mar, 2020",
  },
  {
    no: "5",
    title: "Visually Stunning",
    author: "Marge Arita",
    description: "Absolutely beautiful cinematography. Every frame looked like a painting. A visual treat!",
    created_date: "21 Aug, 2020",
  },
  {
    no: "6",
    title: "Mind Blown",
    author: "Bill Dabear",
    description: "Episode 5 completely changed the game. That twist was insane—I did not see it coming!",
    created_date: "15 May, 2020",
  },
  {
    no: "7",
    title: "More Please!",
    author: "Brock Lee",
    description: "I need Season 2 right now! The finale left me with so many questions.",
    created_date: "07 Jul, 2020",
  },
  {
    no: "8",
    title: "Too Long",
    author: "Nick Allen",
    description: "Some scenes felt unnecessary and stretched out. Could’ve been tighter with the editing.",
    created_date: "21 Jul, 2020",
  },
  {
    no: "9",
    title: "Strong Cast",
    author: "Hans Olo",
    description: "The acting was top-notch, especially the lead actress. She brought the character to life.",
    created_date: "12 Jun, 2020",
  },
  {
    no: "10",
    title: "Weak Ending",
    author: "Lynn Guini",
    description: "Loved the buildup, but the ending didn’t land for me. It felt rushed and unearned.",
    created_date: "01 Jan, 2020",
  },
  {
    no: "11",
    title: "Worth It",
    author: "Aaronottix",
    description: "Exactly the kind of show I wanted. Gripping, emotional, and well-produced.",
    created_date: "19 Mar, 2020",
  },
  {
    no: "12",
    title: "Great Music",
    author: "Marge Arita",
    description: "The soundtrack is amazing! I've been replaying the background score ever since I watched it.",
    created_date: "21 Aug, 2020",
  },
];

const CommentList = memo(() => {
  const { t } = useTranslation();
  const columns = useRef([
    { data: "no", title: " No" },
    { data: "title", title: " Title" },
    { data: "author", title: "Author" },
    { data: "description", title: "Description" },
    { data: "created_date", title: "Created Date" },
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
  ]);
  const showOffcanvas = () => {
    offcanvasEnd.value = true;
  };
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
        case "edit":
          showOffcanvas();
          break;

        case "delete":
          showAlert();
          break;

        default:
          break;
      }
    },
  });

  const offcanvasEnd = useRef(false);

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
            <Card.Header className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
              <h2 className="episode-playlist-title wp-heading-inline">
                <span className="position-relative">
                  {t("comments.Comment_List")}
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

CommentList.displayName = "CommentList";
export default CommentList;
