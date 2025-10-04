import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        {/* Week 1 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              Week 1
            </div>
            <ModuleControls />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
