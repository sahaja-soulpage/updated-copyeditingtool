import React, { FC, useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";

// import ExPdf from "components/ExPdf";
import dynamic from "next/dynamic";
const Documentview: FC = () => {
  const ExPdf = dynamic(() => import("components/ExPdf"), {
    ssr: false,
  });

  const [pdffile, setPdfFile] = useState(
    "https://soulpageit.com/wp-content/uploads/2022/01/Ebook.pdf"
  );

  useEffect(() => {
    setPdfFile(pdffile);
  }, []);

  return (
    <>
      <div className="d-flex flex-column main-container-i1 me-0 ms-0 w-100 ">
        <div className="p-5 mx-3 ">
          <Breadcrumb>
            <Breadcrumb.Item>My Files</Breadcrumb.Item>
            <Breadcrumb.Item>New File1</Breadcrumb.Item>
          </Breadcrumb>
          <div className="dashboard-new-proofs text-start w-100 p-4 gap-3 pt-2">
            <ExPdf highlights={[]} url="url" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Documentview;
