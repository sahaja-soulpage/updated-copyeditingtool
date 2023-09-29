import React, { Component } from "react";

import {
  PdfLoader,
  PdfHighlighter,
  Tip,
  UpdateTip,
  Highlight,
  Popup,
  AreaHighlight,
} from "react-pdf-highlighter";

import type { IHighlight } from "../interfaces";

import { testHighlights as _testHighlights } from "./test-highlights";
import { Spinner } from "./Spinner";
import { Sidebar } from "./ExSidebar";

// import "./style/App.css";

const testHighlights: Record<string, Array<IHighlight>> = _testHighlights;

interface State {
  url: string;
  highlights: Array<IHighlight>;
}

const getNextId = () => String(Math.random()).slice(2);

const parseIdFromHash = () => document.location.hash.slice("#highlight-".length);

const resetHash = () => {
  document.location.hash = "";
};

// const [allHighlights, setallhighligts] = useState([]);
// useEffect(() => {
//     const h: any = testHighlights[initialUrl]
//         ? [...testHighlights[initialUrl]]
//         : [];
//     setallhighligts(h)
// }, [])
const HighlightPopup =
  // ({
  //     comment,
  // }: {
  //     comment: { text: string; emoji: string };
  // }) => {
  (allhighlights) => {
    const { highlight, highlights, deletedHighlights, render, updateHighlight, state } =
      allhighlights;
    // useEffect(() => {}, [render]);

    state.render = true;

    if (highlight.comment.text) {
      return (
        <>
          <div className="Highlight__popup">
            <UpdateTip
              hstate={state}
              updateHighlight={updateHighlight}
              render={render}
              highlight={highlight}
              highlights={highlights}
              deletedHighlights={deletedHighlights}
              contentVal={highlight.comment.text}
              onConfirm={(comment) => {
                highlight.comment.text = comment.text;
                updateHighlight(highlight.id, highlight.position, highlight.content);
              }}
              // onDelete={(h) => {
              //     console.log("ON DELETE: ", h)
              //     h.map((item, index) => {
              //         if (item.id === highlight.id) {
              //             h.splice(index, 1)
              //         }
              //     })
              // }}
            />
          </div>
        </>
      );
    } else null;
  };

const PRIMARY_PDF_URL = "https://arxiv.org/pdf/1708.08021.pdf";
const SECONDARY_PDF_URL = "https://arxiv.org/pdf/1604.02480.pdf";

const searchParams = new URLSearchParams(document.location.search);

const initialUrl = searchParams.get("url") || PRIMARY_PDF_URL;

class ExPdf extends Component<State> {
  state = {
    url: initialUrl,
    highlights: testHighlights[initialUrl] ? [...testHighlights[initialUrl]] : [],
    deletedHighlights: [],
    render: false,
  };

  resetHighlights = () => {
    this.setState({
      highlights: [],
    });
  };

  toggleDocument = () => {
    const newUrl = this.state.url === PRIMARY_PDF_URL ? SECONDARY_PDF_URL : PRIMARY_PDF_URL;

    this.setState({
      url: newUrl,
      highlights: testHighlights[newUrl] ? [...testHighlights[newUrl]] : [],
    });
  };

  scrollViewerTo = (highlight: any) => {
    console.log(highlight);
  };

  scrollToHighlightFromHash = () => {
    const highlight = this.getHighlightById(parseIdFromHash());

    if (highlight) {
      this.scrollViewerTo(highlight);
    }
  };

  componentDidMount() {
    window.addEventListener("hashchange", this.scrollToHighlightFromHash, false);
  }
  // componentDidUpdate(nextProps, nextState: any) {
  //   if (this.state.deletedHighlights.length !== nextState.deletedHighlights.length) {
  //       this.state.render = true
  //       console.log(this.state, "COMPONENT UPDATEE")
  //   }
  //   if (this.state.highlights.length !== nextState.highlights.length) {
  //       this.state.render = true
  //       console.log(this.state, "COMPONENT UPDATEE")
  //   }
  // }

  getHighlightById(id: string) {
    const { highlights } = this.state;
    return highlights.find((highlight) => highlight.id === id);
  }

  addHighlight(highlight: any) {
    const { highlights } = this.state;
    this.setState({
      highlights: [{ ...highlight, id: getNextId() }, ...highlights],
    });
  }

  updateHighlight(highlightId: string, position: any, content: any) {
    this.setState({
      highlights: this.state.highlights.map((h) => {
        const { id, position: originalPosition, content: originalContent, ...rest } = h;
        return id === highlightId
          ? {
              id,
              position: { ...originalPosition, ...position },
              content: { ...originalContent, ...content },
              ...rest,
            }
          : h;
      }),
    });
  }

  render() {
    const { url, highlights, deletedHighlights, render } = this.state;

    return (
      <div className="App" style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            height: "100vh",
            width: "75vw",
            position: "relative",
          }}
        >
          <PdfLoader url={url} beforeLoad={<Spinner />}>
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                enableAreaSelection={(event) => event.altKey}
                onScrollChange={resetHash}
                // pdfScaleValue="page-width"
                scrollRef={(scrollTo) => {
                  this.scrollViewerTo = scrollTo;
                  this.scrollToHighlightFromHash();
                }}
                onSelectionFinished={(
                  position,
                  content,
                  hideTipAndSelection,
                  transformSelection
                ) => (
                  <Tip
                    onOpen={transformSelection}
                    onConfirm={(comment) => {
                      this.addHighlight({ content, position, comment });

                      hideTipAndSelection();
                    }}
                  />
                )}
                highlightTransform={(
                  highlight,
                  index,
                  setTip,
                  hideTip,
                  viewportToScaled,
                  screenshot,
                  isScrolledTo
                ) => {
                  const isTextHighlight = !(highlight.content && highlight.content.image);
                  // const component = isTextHighlight ? (
                  //   <Highlight
                  //     isScrolledTo={isScrolledTo}
                  //     position={highlight.position}
                  //     comment={highlight.comment}
                  //     onMouseOver={() => {
                  //       const hcontent: any = highlight.content;
                  //       const hposition: any = highlight.content;
                  //       const hcomment: any = highlight.content;
                  //       return (
                  //         <Tip
                  //           onOpen={() => {
                  //             console.log("to resolve build error");
                  //             // console.log(component);
                  //           }}
                  //           onConfirm={() => {
                  //             this.addHighlight({ hcontent, hposition, hcomment });

                  //             // hideTipAndSelection();
                  //           }}
                  //         />
                  //       );
                  //     }}
                  //   />
                  // ) : (
                  //   <AreaHighlight
                  //     isScrolledTo={isScrolledTo}
                  //     highlight={highlight}
                  //     onChange={(boundingRect) => {
                  //       this.updateHighlight(
                  //         highlight.id,
                  //         { boundingRect: viewportToScaled(boundingRect) },
                  //         { image: screenshot(boundingRect) }
                  //       );
                  //     }}
                  //   />
                  // );

                  return (
                    <Popup
                      popupContent={
                        <HighlightPopup
                          highlights={highlights}
                          highlight={highlight}
                          deletedHighlights={deletedHighlights}
                          render={render}
                          updateHighlight={this.updateHighlight}
                          state={this.state}
                        />
                      }
                      onMouseOver={(popupContent) => setTip(highlight, () => popupContent)}
                      onMouseOut={hideTip}
                      key={index}
                      // children={component}
                    >
                      {isTextHighlight ? (
                        <Highlight
                          isScrolledTo={isScrolledTo}
                          position={highlight.position}
                          comment={highlight.comment}
                          onMouseOver={() => {
                            const hcontent: any = highlight.content;
                            const hposition: any = highlight.content;
                            const hcomment: any = highlight.content;
                            return (
                              <Tip
                                onOpen={() => {
                                  console.log("to resolve build error");
                                }}
                                onConfirm={() => {
                                  this.addHighlight({ hcontent, hposition, hcomment });

                                  // hideTipAndSelection();
                                }}
                              />
                            );
                          }}
                        />
                      ) : (
                        <AreaHighlight
                          isScrolledTo={isScrolledTo}
                          highlight={highlight}
                          onChange={(boundingRect) => {
                            this.updateHighlight(
                              highlight.id,
                              { boundingRect: viewportToScaled(boundingRect) },
                              { image: screenshot(boundingRect) }
                            );
                          }}
                        />
                      )}
                    </Popup>
                  );
                }}
                highlights={highlights}
              />
            )}
          </PdfLoader>
        </div>

        <Sidebar
        // render={render}
        // deletedHighlights={deletedHighlights}
        // highlights={highlights}
        // resetHighlights={this.resetHighlights}
        // toggleDocument={this.toggleDocument}
        />
      </div>
    );
  }
}

export default ExPdf;
