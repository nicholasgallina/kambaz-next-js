"use client";
import Link from "next/link";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

export default function Dashboard() {
  const courses = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: `CS${4000 + i} React JS`,
    description: "Full Stack software developer",
    image: "/images/stacked.jpg",
  }));

  return (
    <Container
      fluid
      className="pt-4"
      style={{ marginLeft: 120, backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <h1>Dashboard</h1>
      <hr />
      <h2 className="mb-4">Published Courses ({courses.length})</h2>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {courses.map((course) => (
          <Col key={course.id} style={{ flex: "0 0 260px" }}>
            <Card className="h-100 shadow-sm">
              <Link
                href={`/Courses/${course.id}/Home`}
                className="text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src={course.image}
                  height={160}
                  style={{ objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {course.title}
                  </Card.Title>
                  <Card.Text style={{ height: "60px", overflow: "hidden" }}>
                    {course.description}
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
