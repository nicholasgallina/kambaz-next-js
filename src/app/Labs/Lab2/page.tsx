import "./index.css";
import "./ForegroundColors";
import "./BackgroundColors";
import "./Borders";
import Container from "react-bootstrap/Container";
import BootstrapGrids from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
  return (
    <Container>
      <BootstrapGrids></BootstrapGrids>
      <ScreenSizeLabel></ScreenSizeLabel>
      <BootstrapTables></BootstrapTables>
      <BootstrapLists></BootstrapLists>
      <BootstrapForms></BootstrapForms>
      <BootstrapNavigation></BootstrapNavigation>
    </Container>
  );
}
