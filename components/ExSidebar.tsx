import React from "react";
// import type { IHighlight } from "react-pdf-highlighter";
import { Image, Accordion } from "react-bootstrap";
// interface Props {
//   highlights: Array<IHighlight>;
//   resetHighlights: () => void;
// }

// const updateHash = (highlight: IHighlight) => {
//   document.location.hash = `highlight-${highlight.id}`;
// };
const highlight = [
  {
    content: "Read entire text and correct errors in spelling, grammar and punctuation",
    list: ["affect", "wilalso", "", ""],
  },
  {
    content: "Ensure consistency of style across the book",
    list: ["affect", "wilalso", "", ""],
  },
];
export function Sidebar() {
  return (
    <div className="sidebar m-4 " style={{ width: "25vw", background: "#FAFAFA" }}>
      <div className="description ms-4 py-3">
        <div className="d-flex align-items-center ">
          <div>
            <h2 className="sub-heading  fw-600">All Observations</h2>
          </div>

          <div className="d-flex ms-auto gap-3">
            <Image src="/icons/downarrow.svg" alt="create new project" className="me-2" />
          </div>
        </div>
      </div>
      <Accordion defaultActiveKey="0">
        {highlight.map((highlightItem: any, id: any) => (
          <Accordion.Item eventKey={id} key={id}>
            <Accordion.Header style={{ background: "#FAFAFA " }}>
              {" "}
              key={id}
              <div className="d-flex mt-3 p-3 gap-2">
                <p className="f-16 fw-400 Observ-header">{highlightItem.content}</p>
                <div className="rounded-circle round-div">15</div>
                <Image
                  className="arrow_acc mt-2"
                  src={"/icons/arrow-down.svg"}
                  alt="arrow-down"
                  style={{ width: "10px", height: "19px" }}
                />
              </div>
            </Accordion.Header>

            <Accordion.Body
              key={id}
              className="acc-hover ms-2"
              // onMouseLeave={hideCartHandler}
              // onMouseEnter={() => {
              //   showCartHandler(i);
              // }}
            >
              <div className="d-flex ms-5">
                <div className="d-flex flex-column">
                  <p className="f-13 mb-2 mt-2" style={{ fontWeight: 400 }}></p>

                  <div className="d-flex flex-column ">
                    <ul
                      className="ms-2 f-12 mb-2"
                      style={{
                        fontWeight: 400,
                      }}
                    >
                      {highlightItem.list.map((listItem: any, listItemId: any) => (
                        <div key={listItemId}>
                          <li>{listItem}</li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="mb-0 mt-0" />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      {/* <ul className="sidebar__highlights">
        {highlights.map((highlight: any, index) => (
          <li
            key={index}
            className="sidebar__highlight"
            onClick={() => {
              updateHash(highlight);
            }}
          >
            <div>
              <strong>{highlight.content.text}</strong>
              {highlight.comment.text ? (
                <p style={{ marginTop: "0.5rem" }}>{`${highlight.comment.text}`}</p>
              ) : null}
              {highlight.content.image ? (
                <div className="highlight__image" style={{ marginTop: "0.5rem" }}>
                  <img src={highlight.content.image} alt={"Screenshot"} />
                </div>
              ) : null}
            </div>

            {highlight.Response?.length > 0 ? <strong>Response</strong> : null}
            <div></div>
            {highlight.Response?.map((item) => (
              <div>
                <p style={{ marginTop: "0.5rem" }}>{item.name}</p>
              </div>
            ))}

            <div className="highlight__location">Page {highlight.position.pageNumber}</div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
