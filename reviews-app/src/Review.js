import React, { useState } from 'react';
import { Container, Card, Col, Row, Pagination } from 'react-bootstrap';
import { persons } from './persons';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { img, fullName, jobTitle, review } = persons[index];

  const nextPerson = () => {
    setIndex(1);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <h1>Reviews</h1>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto">
          <Card
            border="primary"
            style={{
              width: '28rem',
              backgroundColor: '#f0f8ff',
              borderRadius: '25px',
            }}
          >
            <Row className="justify-content-center">
              <Card.Img
                style={{ width: '12rem' }}
                variant="top"
                src={img}
                className="mt-2"
              />
            </Row>

            <Card.Body>
              <Card.Title>{fullName}</Card.Title>
              <Card.Subtitle className="mt-2 mb-2" style={{ color: '#00abed' }}>
                {jobTitle}
              </Card.Subtitle>
              <Card.Text style={{ backgroundColor: '#fff' }} className="p-2">
                {review}
              </Card.Text>

              <Row className="justify-content-center">
                <Pagination>
                  <Pagination.Prev className="mr-2" />
                  {persons.map((person, i) => {
                    return <Pagination.Item key={i}>{i + 1}</Pagination.Item>;
                  })}

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
