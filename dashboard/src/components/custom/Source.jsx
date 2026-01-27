import React, { useState } from "react";
import { Button, Col, Collapse, Form, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Source = () => {

   const { t } = useTranslation();

  const [sources, setSources] = useState([]);
  const [lastId, setLastId] = useState(0); // NEW

  // Add a new source
  const addSource = () => {
    setLastId((prevId) => {
      const newId = prevId + 1;
      setSources((prevSources) => [
        ...prevSources,
        { id: newId, showForm: false }
      ]);
      return newId;
    });
  };

  // Remove a source by its ID
  const removeSource = (sourceId) => {
    setSources((prevSources) =>
      prevSources.filter((source) => source.id !== sourceId)
    );
  };

  // Toggle the visibility of the source form
  const toggleSourceForm = (sourceId) => {
    setSources((prevSources) =>
      prevSources.map((source) =>
        source.id === sourceId
          ? { ...source, showForm: !source.showForm }
          : source
      )
    );
  };

  return (
    <div>
      <Button id="add-movie-source" variant="primary" onClick={addSource}>
      {t("addpage.add-source")}
      </Button>

      <div id="source-container" className="source-container">
        {sources.map((source) => (
          <div key={source.id} className="streamit_source">
            <div className="d-flex justify-content-between align-items-center flex-wrap rounded-3">
              <h3 className="mb-0 fw-semibold">{t("addpage.source")} {source.id}</h3>
              <div className="d-flex flex-shrink-0 gap-2 align-items-center custom-source-font">
                <Link
                  className="py-0"
                  onClick={() => removeSource(source.id)}
                >
                  {t("addpage.remove")}
                </Link>
                <div
                  className="movie_source_toggle handlediv"
                  onClick={() => toggleSourceForm(source.id)}
                  title="Click to toggle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                  </svg>
                </div>
                <strong className="source_name"></strong>
              </div>
            </div>

            <Collapse in={source.showForm}>
              <div id={`source${source.id}`} className="form-container">
                {/* Example form content */}
                <div
                  id="source-data-container"
                  className="streamit_source_data streamit-metabox-content pt-3 mt-3 pb-3"
                >
                  <Row>
                    <Col lg={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label flex-grow-1" htmlFor="genres">
                        {t("addpage.name")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder={t("addpage.enter-source-name-movie")}
                        />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label flex-grow-1" htmlFor="genres">
                        {t("addpage.quality")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          name="quality"
                          placeholder={t("addpage.enter-source-quality-movie")}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label flex-grow-1" htmlFor="genres">
                        {t("addpage.choose_method")}
                        </Form.Label>
                        <select className="form-control" name="Choose Method">
                          <option>Embed Movie</option>
                          <option>Movie URL</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label
                          className="form-label flex-grow-1"
                          htmlFor="Description1"
                        >
                          {t("addpage.embed-movie")}
                        </Form.Label>
                        <Form.Control
                        as="textarea"
                          id="Description1"
                          className="form-control"
                          rows="7"
                          placeholder={t("addpage.enter-the-embed-content-movie")}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label flex-grow-1" htmlFor="language">
                        {t("addpage.language")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          name="Language"
                          placeholder={t("addpage.enter-source-name-movie")}
                        />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label flex-grow-1" htmlFor="date added">
                        {t("addpage.date_added")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          name="Date Added"
                          placeholder={t("addpage.enter-source-quality-movie")} 
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label flex-grow-1" htmlFor="player">
                        {t("addpage.player")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          name="Player"
                          placeholder={t("addpage.enter-source-quality-movie")}
                        />
                      </Form.Group>
                      <Form.Group className="form-group">
                        <Form.Label className="form-label flex-grow-1" htmlFor="genres">
                        {t("addpage.download_url")}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-control"
                          name="Download URL"
                          placeholder={t("addpage.enter-source-quality-movie")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Source;
