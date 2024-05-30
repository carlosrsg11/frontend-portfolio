'use client';

import "/src/app/styles/landing.scss";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
    params: {
        id: number;
    }
}

interface Post {
    id: number;
    name: string;
    description: string;
}

export default function PostProfile({ params }: Props) {
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Post>(
                    process.env.NEXT_PUBLIC_API_URL + `/posts/${params.id}` ?? ""
                );
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [params.id]);

    return (
        <section className="blog-section">
            <div>
                <button className="return-blog-button">
                    <a href="/blog" className=""><b>Regresar al Blog </b></a>
                </button>
            </div>
            <h1 className="section-title">{`${post?.name}`}</h1>
            <h4 className="text-xl">{`${post?.description}`}</h4>
        </section>
    );
}