import React, { useState } from 'react';
import axios from 'axios';

const AddArticleForm = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8000/api/articles', {
                name: name,
                title: title,
                thumbnail: thumbnail,
                content: content.split('\n\n') 
            });
            console.log('Article added:', response.data);
            
            setName('');
            setTitle('');
            setThumbnail('');
            setContent('');
        } catch (error) {
            console.error('Error adding article:', error);
        }
    };

    return (
        <form className='shadow rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
                Name:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
                Title:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
                Thumbnail URL:
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            </label>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
                Content:
                <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rouded focus:outline-none focus:shadow-outline' type="submit">Add Article</button>
        </form>
    );
};

export default AddArticleForm;