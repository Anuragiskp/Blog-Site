import React from 'react';
import Articles from '../components/Articles';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
    const [articles, setArticles] = useState([]); 

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

    return ( 
        <div>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                Articles
            </h1>
            <div className='container py-4 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                    <Articles articles={articles} />
                </div>
            </div>
        </div>
    );
}
 
export default ArticleList;