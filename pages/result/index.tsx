import React, { FC } from "react";
import { Button, Container, Image, Form, ProgressBar } from "react-bootstrap";

import { Observations } from "components/data-tables";
import Link from "next/link";
const SummaryReport: FC = () => {
  const columns = [
    {
      name: "Level 2 Notes",
      center: false,
      selector: "Notes",
      style: { cursor: "auto" },
      width: "80%",
    },
    {
      name: "Issues",
      center: false,
      selector: "Issues",
      style: { cursor: "auto" },
    },
    {
      name: "Density",
      center: false,
      selector: "Density",
      style: { cursor: "auto" },
    },
  ];
  const data = [
    {
      Notes: "Read entire text and correct errors in spelling, grammar and punctuation",
      Issues: "Yes",
      Density: "12",
    },
    {
      Notes: "Read entire text and correct errors in spelling, grammar and punctuation",
      Issues: "Yes",
      Density: "12",
    },
    {
      Notes: "Read entire text and correct errors in spelling, grammar and punctuation",
      Issues: "Yes",
      Density: "12",
    },
    {
      Notes: "Read entire text and correct errors in spelling, grammar and punctuation",
      Issues: "Yes",
      Density: "12",
    },
    {
      Notes: "Read entire text and correct errors in spelling, grammar and punctuation",
      Issues: "Yes",
      Density: "12",
    },
  ];
  return (
    <>
      <div className="d-flex flex-column main-container-i1 me-0 ms-0 w-100 ">
        <div className="px-5 mx-3 py-5">
          <Container fluid className="px-0">
            <div className="dashboard-new-proofs text-start w-100 p-4 gap-3">
              <label className=" text-dark">File Name</label>

              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter File Name"
                  className="model-input mb-0 "
                  style={{ width: "190px" }}
                />
              </Form.Group>

              <h2 className="sub-heading  fw-600 pt-3 ">Results</h2>
              <div className="gap-2 d-flex mb-0">
                <p className="result-para fw-400  mb-0">The document is classified as</p>
                <p className="level-div p-1  mb-0">Level 1</p>
              </div>
              <div className="gap-3 d-flex mb-0">
                <p className="result-para fw-400 mb-0">Confidence score</p>
                <div className="pt-1">
                  <ProgressBar
                    now={40}
                    className="custom-progress-bar"
                    style={{ width: "150px" }}
                  />
                </div>
                <p className="result-para fw-400 mb-0">83.6%</p>
              </div>
              <hr></hr>
              <h2 className="sub-heading  fw-600 pt-3 ">Density Extraction</h2>
              <div className="d-flex align-items-center mb-4">
                <div className="gap-3 d-flex">
                  <p className="result-para fw-400 mb-0">Total no. of observations: </p>
                  <p className="result-para fw-400 ">54</p>
                </div>

                <div className="d-flex ms-auto gap-3">
                  <Button id="create-button" className="download-report-btn">
                    <div className="d-flex w-100 align-items-center ">
                      <Image
                        src="/icons/material-symbols_download.svg"
                        alt="create new project"
                        className="me-2"
                      />
                      Download report
                    </div>
                  </Button>
                  <Link href={"/documentview"}>
                    <Button id="create-button" className="new-file-button">
                      View all observations
                    </Button>
                  </Link>
                </div>
              </div>
              {/* <div className=" border text-start my-2">
                <div className="bg-body d-flex flex-between unit-table">
                  <div className="f-ellipsis f-12 fw-400 color-light ">Level 2 Notes</div>
                  <div className="f-ellipsis f-12 fw-400 color-light">Issues</div>
                  <div className="f-ellipsis f-12 fw-400 color-light">Density</div>
                </div>
              ]
                <div className="overflow-auto mb-3 ">
                  {[
                    {
                      level:
                        "Read entire text and correct errors in spelling, grammar and punctuation",
                      Issues: "Yes",
                      Density: "12",
                    },
                  ].map((e, id) => (
                    <div className="border d-flex flex-between unit-table f-12 fw-400 " key={id}>
                      <div className="f-ellipsis">{e.level}</div>
                      <div className="f-ellipsis">{e.Issues}</div>
                      <div className="f-ellipsis">{e.Density}</div>
                    </div>
                  ))}
                </div>
              </div> */}
              <Observations columns={columns} data={data} />
              <div className="text-end">
                <Link href={"/dashboard"}>
                  <Button id="create-button" className="new-file-button mt-4 ">
                    Back
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
export default SummaryReport;
