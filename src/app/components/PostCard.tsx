"use client";

import React from 'react';
import { Card } from 'react-bootstrap';

interface Props {
    id: number;
    name: string;
    description: string;
}

export default function PostCard({ id, name, description }: Props) {
    return (
        <Card className="mb-4">
            <Card.Body>
                <Card.Title className="project-title">{name}</Card.Title>
                <div className="text-center">
                    <a href={`/blog/${id}`} className="btn btn-primary">
                        Leer más
                    </a>
                </div>
            </Card.Body>
        </Card>
    );
}

