import React from 'react';
import { useParams } from 'react-router-dom';
import Articles from '../components/Articles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddCommentForm from '../components/AddCommentForm';

const Article = () => {
    const { name } = useParams()
    const [comments, setComments] = useState([]);  
    const [articles, setArticles] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const Response = await axios.get(`http://localhost:8000/api/comments`);
                setComments(Response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const Response_article = await axios.get(`http://localhost:8000/api/articles`);
                setArticles(Response_article.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const article = articles.find((article) => article.name === name);
    // if (!article) return <NotFound />
    const otherArticles = articles.filter(articles => articles.name !== name)

    return (
        <>
            <div key={article._id}>
                <h2 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>{article.title}</h2>
                <ul>
                    {article.content.map((paragraph, index) => (
                        <li className='mx-auto leading-relaxed text-base mb-4' key={index}>{paragraph}</li>
                    ))}
                </ul>
            </div>
            <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>Comments</h1>
            <ul className='mb-4'>
                {comments
                    .filter(comment => comment.Title === article.title)
                    .map(comment => (
                        <li className='mb-4' key={comment._id}>
                            <p><b>{comment.Name}</b></p>
                            <p>{comment.Comments}</p>
                        </li>
                    ))}
            </ul>
            <AddCommentForm articleName={article.title}/>
            <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>Other Articles</h1>
            <div className='flex flex-wrap -m-4'>
                <Articles articles={otherArticles} />
            </div>
        </>
    );
}

export default Article;