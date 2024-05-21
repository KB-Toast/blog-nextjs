"use client"
import { useState, FormEvent } from 'react';

export default function AdminArticle() {

    const [articleTitle, setArticleTitle] = useState('');
    const [articleText, setArticleText] = useState('');
    const [articleCategory, setArticleCategory] = useState('');


    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const formData = {
            articleTitle: articleTitle,
            articleText: articleText,
            articleCategory: articleCategory
        }

        const response = await fetch(`http://localhost:3000/api/articles/new`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        // check if request is ok and display some feedback
        console.log('OK... i guess');

    }

    return (
        <div className="">
            <h1 className="">New article yay ! </h1>
            <form onSubmit={handleSubmit} className="">
                <div className="">
                    <label htmlFor="articleTitle" className="">
                        Title here
                    </label>
                    <input className="text-black"
                        type="text"
                        id="articleTitle"
                        onChange={(e) => setArticleTitle(e.target.value)}
                    />
                </div>
                <div className="">
                    <label htmlFor="articleText" className="">
                        Text here
                    </label>
                    <input className="text-black"
                        type="text"
                        id="articleText"
                        onChange={(e) => setArticleText(e.target.value)}
                    />
                </div>
                <div className="">
                    <label htmlFor="articleCategory" className="">
                        Category here
                    </label>
                    <input className="text-black"
                        type="text"
                        id="articleCategory"
                        onChange={(e) => setArticleCategory(e.target.value)}
                    />
                </div>
                <button type='submit'>Send</button>
            </form>
        </div>
    );
}