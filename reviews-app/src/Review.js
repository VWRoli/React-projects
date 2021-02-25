import React, { useState } from 'react';
import { Container, Card, Col, Row, Pagination } from 'react-bootstrap';
import { persons } from './persons';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { img, fullName, jobTitle, review } = persons[index];

  function counter(number) {
    if (number >= persons.length) {
      number = 0;
    } else if (number < 0) {
      number = persons.length - 1;
    }
    return number;
  }

  const nextPerson = (number) => {
    number++;
    if (number === persons.length) number = 0;
    setIndex(number);
  };
  const prevPerson = (number) => {
    number--;
    if (number < 0) number = persons.length - 1;
    setIndex(number);
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
              <Card.Text
                style={{ backgroundColor: '#fff', borderRadius: '25px' }}
                className="p-2"
              >
                {review}
              </Card.Text>

              <Row className="justify-content-center">
                <Pagination>
                  <Pagination.Prev
                    className="mr-2"
                    onClick={() => prevPerson(index)}
                  />

                  <Pagination.Next
                    className="ml-2"
                    onClick={() => nextPerson(index)}
                  />
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
