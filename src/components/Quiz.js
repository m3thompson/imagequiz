/*
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';
import dataService from "../data_access_layer/local_temporarily_storage";
import { useEffect, useState } from "react";

const Quiz = () => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    const { id } = useParams();

    useEffect(() => {
        if (!quiz) {
            let x = dataService.getQuiz(id);
            setQuiz(x);
            console.log(x);
        }
    });

    return (

        <Container>
            <Row xs={1} md={3} className="g-4 text-center">
                <Col>
                    {quiz ?
                        <Card className="h-100" >
                            <Card.Img variant="top" src={quiz.questions[currentQuestionNumber].picture} />
                            <Card.Body>
                                <Card.Title>{quiz.name}</Card.Title>
                                <Card.Text>
                                    Let's take the quiz now!
                                </Card.Text>
                            </Card.Body>
                            <ListGroup>
                                {quiz.questions[currentQuestionNumber].choices.map(x =>
                                    <ListGroup.Item>{x}</ListGroup.Item>
                                )}
                            </ListGroup>
                        </Card>
                        :
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Quiz;
*/


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import quizzes from "../temp_data_repository/data";
import { Container, Row, Col, Button } from "react-bootstrap";
function Quizz() {
  const { i } = useParams();
  const id = parseInt(i, 10);
  const name = quizzes[id].name;
  const questions = quizzes[id].questions;
  console.log(questions[0]);
  const [score, setScore] = useState(0);
  const [n, setN] = useState(0);
  const [picture, setPicture] = useState(questions[n].picture);
  const [choices, setChoices] = useState(questions[n].choices);
  const [answer, setAnswer] = useState(questions[n].answer);
  useEffect(() => {
    setPicture(questions[n].picture);
    setChoices(questions[n].choices);
    setAnswer(questions[n].answer);
  }, [id, n]);

  function handleClick(i) {
    if (n == 5) {
      return;
    }
    if (i === answer) {
      setScore(score + 1);
      setN(n + 1);
    } else {
      setN(n + 1);
    }
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>Question {n + 1} / 6</div>
            <div>Your score is: {score} / 6</div>

            <img src={`${picture}`} />
          </Col>
          <Col>
            What is this flower?
            <br />
            {choices.map((i) => (
              <div>
                <Button onClick={() => handleClick(i)}>{i}</Button>{" "}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Quizz;