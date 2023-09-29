import React, { FC } from "react";
import { Button, Container, Image, Modal } from "react-bootstrap";

import { DataTable } from "components/data-tables";
import { NewFile } from "components/modals";

import Link from "next/link";
const Dashboard: FC = () => {
  const getStatusStyle = (status) => {
    let textColor = "black";
    let backgroundColor = "";
    // let padding = "5px";
    let dotColor = "";

    switch (status) {
      case "In-progress":
        textColor = "#BE0F0F";
        backgroundColor = "#FEE1E3";
        dotColor = "#BE0F0F";
        break;
      case "Success":
        textColor = "#00C708";
        backgroundColor = "#E7FEE1";
        dotColor = "#00C708";
        break;
      default:
        break;
    }

    return {
      color: textColor,
      background: backgroundColor,

      dotColor,
    };
  };

  const columns = [
    {
      name: "File Name",
      center: false,
      sortable: true,
      selector: "FileName",
      style: { cursor: "auto" },
    },
    {
      name: "Upload Date",
      sortable: true,
      center: false,
      selector: "UploadDate",
      style: { cursor: "auto" },
    },
    {
      name: "Status",
      sortable: true,
      center: false,
      selector: "Status",
      style: { cursor: "auto" },

      cell: (row) => (
        <span style={getStatusStyle(row.Status)}>
          <span
            className="status-dot"
            style={{ backgroundColor: getStatusStyle(row.Status).dotColor }}
          ></span>
          {row.Status}
        </span>
      ),
    },
    {
      name: "Classification",
      sortable: true,
      selector: "Classification",
      center: false,
      style: { cursor: "auto" },
      cell: (row) => (
        <Link href={`/result`} style={{ color: "#6464FF" }}>
          {row.Classification}
        </Link>
      ),
    },
    {
      name: "No. of Observa...",
      sortable: true,
      selector: "Observation",
      center: false,
      style: { cursor: "auto" },
      cell: (row) => <span style={{ color: "#6464FF" }}>{row.Observation}</span>,
    },
    {
      name: "Delete",
      sortable: false,
      selector: "Delete",
      center: false,
      style: { cursor: "auto" },
      cell: () => (
        <Image
          src="icons/delete.svg"
          alt="Delete"
          // onClick={() => row}
          style={{ cursor: "pointer" }}
        ></Image>
      ),
    },
  ];

  const data = [
    {
      FileName: "Financial Document",
      UploadDate: "06/01/2023, 12:45",
      Status: "In-progress",
      Classification: "Level 2",
      Observation: "8",
      Delete: "1",
    },
    {
      FileName: "Financial Document",
      UploadDate: "06/01/2023, 12:45",
      Status: "In-progress",
      Classification: "Level 3",
      Observation: "8",
      Delete: "1",
    },
    {
      FileName: "Financial Document",
      UploadDate: "06/01/2023, 12:45",
      Status: "Success",
      Classification: "Level 1",
      Observation: "8",
      Delete: "1",
    },
    {
      FileName: "Financial Document",
      UploadDate: "06/01/2023, 12:45",
      Status: "Success",
      Classification: "Level 2",
      Observation: "8",
      Delete: "1",
    },
  ];

  // const [count, setCount] = useState({}) as any;
  const [newState, setNewState] = React.useState({
    model: false,
  });
  const [deletedocs, setDeletedocs] = React.useState({
    model: false,
  });

  return (
    <>
      <div className="d-flex flex-column main-container-i1 me-0 ms-0 w-100 ">
        {/* <Invitation {...{ profileData, mutateUserDetails }} /> */}
        <div className="px-5 mx-3">
          <Container fluid className="px-0">
            <div className="row  justify-content-center py-4">
              <div
                className="col-4 g-3 col-md d-flex cursor-pointer"
                // onClick={() => {
                //   router.push("/myproofs?tab=total");
                // }}
              >
                <div className="dashboard-white-card w-100 p-4 gap-3">
                  <Image src={"/icons/files.svg"} alt="files"></Image>
                  <p className=" stat-card-title mb-0">Total files</p>
                  {/* <p className="stat-card-value">{count.total}</p> */}
                  <p className="stat-card-value">42</p>
                </div>
              </div>
              <div className="col-4 g-3 col-md d-flex cursor-pointer">
                <div className="dashboard-white-card w-100 p-4 gap-3">
                  <Image src={"/icons/completed-files.svg"} alt="completed-files"></Image>
                  <p className=" stat-card-title mb-0">Completed files</p>
                  {/* <p className="stat-card-value">{count.completed}</p> */}
                  <p className="stat-card-value">42</p>
                </div>
              </div>
              <div className="col-4 g-3 col-md d-flex cursor-pointer">
                <div className="dashboard-white-card w-100 p-4 gap-3">
                  <Image src={"/icons/In-progress-files.svg"} alt="In-progress-files"></Image>
                  <p className=" stat-card-title mb-0">In-progress files</p>
                  {/* <p className=" stat-card-value">{count.inprogress}</p> */}
                  <p className="stat-card-value">42</p>
                </div>
              </div>
              <div className="col-4 g-3 col-md d-flex cursor-pointer">
                <div className="dashboard-white-card w-100 p-4 gap-3">
                  <Image src={"/icons/layers.svg"} alt="layers"></Image>
                  <p className=" stat-card-title mb-0">Classifications</p>
                  {/* <p className="stat-card-value">{count.yet_to_start}</p> */}
                  <p className="stat-card-value">42</p>
                </div>
              </div>
            </div>
            <div>
              <div className="dashboard-new-proofs text-start w-100 p-4 gap-3">
                <h2 className="table-header fw-600">Welcome Aboard!</h2>
                <div className="d-flex align-items-center">
                  <div>
                    <h2 className="sub-heading  fw-600">All Files</h2>
                  </div>

                  <div className="d-flex ms-auto gap-3">
                    <div className="d-flex align-items-center">
                      <div className="input-group">
                        <span className="input-group-text">
                          <Image src="/icons/search.svg" alt="search" />
                        </span>
                        <input
                          className="form-control search"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                          // value={search}
                          // onChange={handleSearch}
                        />
                      </div>
                    </div>
                    <Button
                      id="create-button"
                      className="new-file-button"
                      onClick={() => {
                        setNewState({ ...newState, model: true });
                      }}
                    >
                      <div className="d-flex w-100 align-items-center ">
                        <Image src="/icons/add.svg" alt="create new project" className="me-2" />
                        New File
                      </div>
                    </Button>
                  </div>
                </div>
                <DataTable columns={columns} data={data} />
              </div>
            </div>
          </Container>
        </div>
        <NewFile newState={newState} setNewState={setNewState} />
        <Modal>
          <Modal.Header className="border-0 mt-4 ps-4 d-flex justify-content-center align-items-center">
            <Modal.Title className="mb-0">Confirm action</Modal.Title>
          </Modal.Header>
          <Modal.Body className="mb-0 mt-0 ps-4 pt-0 d-flex justify-content-center align-items-center">
            The following action is irreversible, once deleted cannot be retrieved. Are you sure to
            delete this project?
          </Modal.Body>
          <Modal.Footer className="border-0 ms-2 mt-2 mb-2 d-flex justify-content-center align-items-center">
            <button className="btn ms-3 bg-white">Cancel</button>
            <Button variant="primary" className="text-white" style={{ width: 130 }}>
              Yes, save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default Dashboard;
