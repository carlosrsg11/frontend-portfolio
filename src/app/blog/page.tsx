import axios from "axios";
import { parsedEnv } from "../../../env";
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import PostCard from "../components/PostCard";
import "/src/app/styles/landing.scss";

interface Post {
    id: number;
    name: string;
    description: string;
}

export default async function Page() {
    const response = await axios.get<Post[]>(`${parsedEnv.NEXT_PUBLIC_API_URL}/posts`);

    return (
        <section className="blog-section">
            <Container>
                <h1 className="project-number text-center">Blog</h1>
                <Row>
                    {response.data.map(post => (
                        <Col key={post.id} md={4}>
                            <PostCard key={post.id} id={post.id} name={post.name} description={post.description} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}