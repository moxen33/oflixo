import { useEffect } from "react";
import $ from "jquery";
import "datatables.net-bs5";
import Choices from 'choices.js'

const useDataTable = ({
  tableRef,
  columns,
  data = [],
  url = null,
  actionCallback,
  isColumnHidden = false,
  isColumnHiddenClass = ".toggle-vis",
  isFilterColumn = false,
  isFooter = false,
  isMultilang = false,
  searching = true,
}) => {
  const injectCustomControls = (tableInstance) => {
    // console.log("hello", tableInstance);
    const reviewTable = $('.review_table')
    const defaultTable = document.getElementsByClassName('default-table')
  
    const searchParent = $(".dt-length").parent().parent();
    if(defaultTable !== undefined && defaultTable !== null && defaultTable.length > 0){
      return
    }  else if(reviewTable !== undefined && reviewTable !== null && reviewTable.length > 0){
      const searchParent = $(".dt-length").parent().parent();
      searchParent.html('...')
      searchParent.html(`
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 gap-lg-0 custom-action-section px-0"> 
        <div class="d-flex gap-2 px-0"> 
                <div class="form-group mb-0"> 
                  <select class="form-select" id="customAction">
                    <option>No Action</option> 
                    <option>Status</option> 
                    <option>Delete</option> 
                  </select>
                </div> 
                <button id="applyButton" class="btn btn-primary custom-add-button">Apply</button> 
              </div> 
              </div>`)
    }
    else{
      console.log(searchParent.parent().parent())
    searchParent.html(`...`);
    searchParent.html(`
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 gap-lg-0 custom-action-section px-0"> 
              <div class="d-flex gap-2"> 
                <div class="form-group mb-0"> 
                  <select class="form-select" id="customAction">
                    <option>No Action</option> 
                    <option>Status</option> 
                    <option>Delete</option> 
                  </select>
                </div> 
                <button id="applyButton" class="btn btn-primary custom-add-button">Apply</button> 
              </div> 
              <div class="d-flex gap-2"> 
                <input type="text" id="customSearch" placeholder="Search here..." class="form-control ms-0 custom-search-table w-100"> 
                <button id="customSearchButton" class="btn btn-primary custom-add-button">Search</button> 
              </div>
      </div>
    `);
    }
  

    new Choices("#customAction", {
      shouldSort: false,
      allowHTML: true,
      searchEnabled: true,
      itemSelectText: "",
    });

    $("#customSearchButton").on("click", function () {
      const value = $("#customSearch").val();
      tableInstance.search(value).draw();
    });

    $("#applyButton").on("click", function () {});
  };

  useEffect(() => {
    setTimeout(() => {
      let datatableObj = {
        dom: '<"row align-items-center"<"col-md-6 ps-0 ps-md-4" l><"col-md-6 pe-0 pe-md-4" f>><"table-responsive my-3" rt><"d-flex align-items-center justify-content-center justify-content-sm-between flex-wrap gap-2 gap-md-0" <i><p>><"clear">',
        autoWidth: false,
        columns: columns,
        destroy: true,
        searching: searching,
      };

      if (url) {
        datatableObj = {
          ...datatableObj,
          processing: true,
          serverSide: true,
          ajax: {
            url: url,
          },
        };
      }

      if (data) {
        datatableObj = {
          ...datatableObj,
          data: data,
        };
      }

      if (isFooter) {
        datatableObj = {
          ...datatableObj,
          initComplete: function () {
            const footerRow = document.createElement("tr");
            columns.forEach((column) => {
              const footerCell = document.createElement("th");
              footerCell.append(column.title);
              footerRow.append(footerCell);
            });

            $(tableRef.current).append($("<tfoot>").append(footerRow));
          },
        };
      }
      if (isFilterColumn) {
        datatableObj = {
          ...datatableObj,
          initComplete: function () {
            const footerRow = document.createElement("tr");
            const table = $(tableRef.current).DataTable();
            columns.forEach((column) => {
              const footerCell = document.createElement("td");
              const input = document.createElement("input");
              input.type = "text";
              input.className = "form-control form-control-sm";
              input.placeholder = column.title;
              input.addEventListener("keyup", (event) => {
                const columnIndex = columns.findIndex(
                  (c) => c.title === column.title
                );
                table.columns(columnIndex).search(event.target.value).draw();
              });
              footerCell.append(input);
              footerRow.append(footerCell);
            });

            $(tableRef.current).append($("<tfoot>").append(footerRow));
          },
        };
      }

      function languageSelect() {
        if (tableRef.current) {
          const selectedOption = document.querySelector("#langSelector option:checked");
          return selectedOption ? selectedOption.getAttribute("data-path") : null;
        }
        return null;
      }

      const setMultiLang = () => {
        datatableObj = {
          ...datatableObj,
          language: {
            url: languageSelect(),
          },
        };
      };
      if (isMultilang) {
        setMultiLang();
      }
      // console.log(tableRef.current, datatableObj);
      let datatable = $(tableRef.current).DataTable(datatableObj);

      injectCustomControls(datatable);
      if (typeof actionCallback === "function") {
        $(datatable.table().body()).on(
          "click",
          '[data-table="action"]',
          function () {
            actionCallback({
              id: $(this).data("id"),
              method: $(this).data("method"),
            });
          }
        );
      }

      if (isColumnHidden) {
        $(isColumnHiddenClass).on("click", function (e) {
          e.preventDefault();
          const column = datatable.column($(this).attr("data-column"));
          column.visible(!column.visible());
        });
      }

      if (isMultilang) {
        document
          .querySelector("#langSelector")
          .addEventListener("change", () => {
            $(tableRef.current).DataTable().destroy();
            setMultiLang();
            datatable = $(tableRef.current).DataTable(datatableObj);
          });
      }
    }, 0);

    return () => {
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy();
      }

      $(tableRef.current).empty();
    };
  }, [
    tableRef,
    columns,
    data,
    url,
    actionCallback,
    isColumnHidden,
    isColumnHiddenClass,
    isFilterColumn,
    isFooter,
    isMultilang,
  ]);

  useEffect(() => {}, []);
};

export default useDataTable;
