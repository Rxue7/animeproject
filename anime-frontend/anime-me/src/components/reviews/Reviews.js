import { useEffect, useRef, useState } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";


import React from 'react'

const Reviews = () => {

    const revText = useRef();
    let params = useParams();
    const animeId = params.animeId;
    const [anime, setAnime] = useState();
    const [reviews, setReviews] = useState();


    const getAnimeData = async (animeId) => {
        try {
            const response = await api.get(`/api/v1/animes/${animeId}`);
            console.log(response)
            const singleAnime = response.data;
            console.log(singleAnime)
            setAnime(singleAnime);
            setReviews(singleAnime.reviewsIds);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAnimeData(animeId);
    }, [])


    console.log(reviews, "A");

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", { reviewBody: rev.value, imdbId: animeId });
            console.log(reviews);
            const updatedReviews = [...reviews, { body: rev.value }];
            rev.value = "";
            setReviews(updatedReviews);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={anime?.poster} alt="anime-img" style={{ width: "500px" }} />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return (
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews