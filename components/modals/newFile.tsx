import React, { FC, useRef, useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import Process from "./process";

import { FolderDropzone } from "components/dropzone";
interface INewFileProps {
  newState: any;
  setNewState: any;
}

const NewFile: FC<INewFileProps> = (props) => {
  const { newState, setNewState } = props;
  const [newprocess, setNewprocess] = React.useState({
    model: false,
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // ref
  const inputRef = useRef<HTMLInputElement | null>(null);

  // const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   setSelectedFile(file);
  // };

  const clearSelectedFile = () => {
    setSelectedFile(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  console.log(selectedFile);
  return (
    <div>
      <Modal backdrop="static" keyboard={false} show={newState?.model} size="lg">
        <Modal.Body>
          <div className="d-flex align-items-start mb-3">
            <div className="">
              <label className="email-font-style text-dark">File Name</label>

              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter File Name"
                  className="model-input mb-0"
                />
              </Form.Group>
            </div>
            <div className="d-flex ms-auto gap-3">
              <Image
                src="/icons/cross.svg"
                alt="create new project"
                className="me-2"
                onClick={() => {
                  setNewState({ ...newState, model: false });
                }}
              />
            </div>
          </div>

          <div className="block-background container ">
            <div className="form-group ">
              <div>
                <FolderDropzone
                  setActualFile={setSelectedFile}
                  maxNumberOfFiles={1}
                  acceptedFileExtention={[".jpeg", ".png"]}
                />

                <div className="d-flex align-items-center w-80">
                  {selectedFile && (
                    <div className="selected-file">
                      <p className="pt-3">
                        {" "}
                        <Image
                          src="/icons/ic_round-attachment.svg"
                          alt="create new project"
                          style={{ width: "20px", height: "20px" }}
                        />
                        {selectedFile.name}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 mb-2 dflex justify-content-center align-items-center">
          <button className="btn ms-3 bg-white" onClick={clearSelectedFile}>
            Clear
          </button>

          <Button
            variant="primary"
            type="button"
            style={{ opacity: 0.9, width: 117 }}
            className="text-white f-17 text-center new-file-button"
            onClick={() => {
              setNewprocess({ ...newprocess, model: true });
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Process newprocess={newprocess} setNewprocess={setNewprocess} />
    </div>
  );
};

export default NewFile;
