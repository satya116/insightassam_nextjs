"use client";
import { createNews } from '@/app/api/news_apis';
import React, { useState } from 'react'

const page = () => {
    const [newsTitle, setNewsTitle] = useState('');
    const [newsInShort, setNewsInShort] = useState('');
    const [newsInDetail, setNewsInDetail] = useState('');

    const handleNewsSubmit = async (e) => {

        e.preventDefault();
        console.log("Handle news  Submit");

        let resp = await createNews({
            "user_id": "1234567890",
            "news_image_url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ATest-Logo.svg&psig=AOvVaw03Qln2eJ45Dx98_tDy6YVp&ust=1712257053504000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNilyN3cpoUDFQAAAAAdAAAAABAE",
            "news_title": newsTitle,
            "created_by": "United Nations Climate Change Conference (COP26)",
            "news_in_short": newsInShort,
            "news_in_detail": newsInDetail,
        });

        console.log("Handle news  resp", resp);


        if (resp?.success === true) {
            // setCreateNewsResp(true);
            setNewsTitle("");
            setNewsInDetail("");
            setNewsInShort("");
        }
    };

    return (
        <>
            <section className="bg-white">

                <h1 className="mt-6 text-lg text-gray-900 sm:text-lg md:text-lg">
                    Create News/Articles/Opinions here
                </h1>

                <form action="" method="post" onSubmit={handleNewsSubmit}>
                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                        News title
                    </label>

                    <input
                        value={newsTitle}
                        onChange={(e) => setNewsTitle(e.target.value) }
                        type="text"
                        id="FirstName"
                        name="first_name"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />

                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> News in Short </label>

                    <input
                        value={newsInShort}
                        onChange={(e) => setNewsInShort(e.target.value)}
                        type="text"
                        id="Email"
                        name="email"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />

                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> News In Details </label>

                    <textarea
                    value={newsInDetail}
 onChange={(e) => setNewsInDetail(e.target.value)}
                        type="password"
                        id="Password"
                        name="password"
                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />

                    <input type="file" name="" id="" />

                    <button type="submit"
                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </>
    )
}

export default page