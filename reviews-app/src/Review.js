import React from 'react';
import { Container, Button, Card, Col, Row, Pagination } from 'react-bootstrap';

const Review = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <h1>Reviews</h1>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto">
          <Card style={{ width: '28rem' }} border="primary" bg="light">
            <Row className="justify-content-center">
              <Card.Img
                style={{ width: '12rem' }}
                variant="top"
                src="https://source.unsplash.com/pZTVa_Gt1f8"
                className="mt-2"
              />
            </Row>

            <Card.Body>
              <Card.Title>Anna Conda</Card.Title>
              <Card.Subtitle className="mt-2 mb-2">
                Chief Inspiration Officer
              </Card.Subtitle>
              <Card.Text>
                Aenizzle nizzle massa yo urna break yo neck, yall lobortizzle.
                Cool enizzle ma nizzle, bibendizzle mammasay mammasa mamma oo
                sa, shizzlin dizzle vizzle, imperdiet vitae, for sure.
                Vivamizzle egizzle gizzle at massa adipiscing cool.
              </Card.Text>

              <Row className="justify-content-center">
                <Pagination>
                  <Pagination.Prev className="mr-2" />
                  <Pagination.Next className="ml-2" />
                </Pagination>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
