import React, { memo, Fragment, useRef } from "react";

//react-bootstrap
import { Row, Col, Button } from "react-bootstrap";

//Hooks
import useDataTable from "../../../hooks/useDatatable";
import Swal from 'sweetalert2-neutral';

import Card from "../../../components/bootstrap/card";

// the hook
import { useTranslation } from "react-i18next";

import ChoicesJs from "../../../components/choices";

//imges
import user1 from '/assets/images/user/01.jpg'
import user2 from '/assets/images/user/02.jpg'
import user3 from '/assets/images/user/03.jpg'
import user4 from '/assets/images/user/04.jpg'
import user5 from '/assets/images/user/05.jpg'
import user6 from '/assets/images/user/06.jpg'

//DATA
const tableData = [
  {
    Profile: user1,
    name: "Anna Sthesia",
    contact: "(760) 756 7568",
    email: "Annasthesia@Gmail.Com",
    country: "USA",
    status: "Active",
    color: "primary",
    company: "Acme Corporation",
    JoinDate: "2019/12/01",
  },
  {
    Profile: user2,
    name: "Brock Lee",
    contact: "+62 5689 458 658",
    email: "Billdabear@Gmail.Com",
    country: "Indonesia",
    status: "Active",
    color: "primary",
    company: "Soylent Corp",
    JoinDate: "2019/12/01",
  },
  {
    Profile: user3,
    name: "Dan Druff",
    contact: "+55 6523 456 856",
    email: "Brocklee@Gmail.Com",
    country: "Brazil",
    status: "Pending",
    color: "warning",
    company: "Umbrella Corporation",
    JoinDate: "2019/12/01",
  },
  {
    Profile: user4,
    name: "Hans Olo",
    contact: "+91 2586 253 125",
    email: "Budwiser@Ymail.Com",
    country: "India",
    status: "Inactive",
    color: "danger",
    company: "Vehement Capital",
    JoinDate: "2019/12/01",
  },
  {
    Profile: user5,
    name: "Lynn Guini",
    contact: "+27 2563 456 589",
    email: "Dandruff@Gmail.Com",
    country: "Africa",
    status: "Active",
    color: "primary",
    company: "Massive Dynamic",
    JoinDate: "2019/12/01",
  },
  {
    Profile: user6,
    name: "Night Mare",
    contact: "+55 25685 256 589",
    email: "Ericshun@Gmail.Com",
    country: "Brazil",
    status: "Pending",
    color: "warning",
    company: "Globex Corporation",
    JoinDate: "2019/12/01",
  },
  {
    Profile: user3,
    name: "Eric Shun",
    contact: "(760) 765 2658",
    email: "Hansolo@Gmail.Com",
    country: "USA",
    status: "Hold",
    color: "info",
    company: "Acme Corporation",
    JoinDate: "2019/12/01",
  },
  {
    Profile: user5,
    name: "Aaronottix",
    contact: "+27 5625 456 589",
    email: "Lynnguini@Gmail.Com",
    country: "Africa",
    status: "Complete",
    color: "success",
    company: "Vehement Capital",
    JoinDate: "2019/12/01",
  },
  {
    Profile: user2,
    name: "Marge Arita",
    contact: "+55 2563 456 589",
    email: "Margearita@Gmail.Com",
    country: "Brazil",
    status: "Active",
    color: "primary",
    company: "Massive Dynamic",
    JoinDate: "2019/12/01",
  },
];

const UserList = memo(() => {
  const { t } = useTranslation();
  const columns = useRef([
    {
      data: null,
      title: "Profile",
      render: function (row) {
        return `
     <img class="bg-primary-subtle rounded img-fluid avatar-40 me-3" src="${row.Profile}" alt="profile" loading="lazy">
          
        `;
      },
    },
    { data: "name", title: "Name" },
    { data: "contact", title: "Contact" },
    { data: "email", title: "Email" },
    { data: "country", title: "Country" },
    {
      data: null,
      // orderable: false,
      // searchable: false,
      title: "Status",
      render: function (row) {
        return `
   <span class="badge bg-${row.color}">${row.status}</span>
        `;
      },
    },

    { data: "company", title: "Company" },
    { data: "JoinDate", title: "JoinDate" },
    {
      data: null,
      // orderable: false,
      // searchable: false,
      title: "Action",
      render: function () {
        return `
       <div class="d-flex gap-1 align-items-center">
        <a class="btn btn-sm btn-icon btn-success-subtle rounded" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Add" href="#">
                                    <span class="btn-inner">
                                       <i class="ph ph-pencil-simple fs-6"></i>
                                    </span>
                                 </a>
        <a title="Delete" class="btn btn-sm btn-icon btn-danger-subtle delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#"><i class="ph ph-trash-simple fs-6"></i></a>
        <a title="View" class="btn btn-sm btn-icon btn-info-subtle rounded" data-table="action" data-id="0" data-method="view" href="#"><i class="ph ph-eye fs-6"></i></a>
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
  const options1 = [
    { value: `${t('bordertable.no_action')}`, label: `${t('bordertable.no_action')}` },
    { value: `${t('bordertable.status')}`, label: `${t('bordertable.status')}` },
    { value: `${t('accesscontrol.delete')}`, label: `${t('accesscontrol.delete')}` },
  ];

  return (
    <Fragment>
      <Row>
        <Col sm="12">
        <div className="pb-3 streamit-wraper-table">
            <Card.Header className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="episode-playlist-title wp-heading-inline">
                <span className="position-relative">
                  {t("comments.user_list")}
                </span>
              </h2>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive rounded my-3 table-space">
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

UserList.displayName = "UserList";
export default UserList;
