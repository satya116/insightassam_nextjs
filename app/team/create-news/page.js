"use client";
import { createNews } from '@/app/api/news_apis';
import React, { useState } from 'react'

const page = () => {
    const [newsTitle, setNewsTitle] = useState('');
    const [newsInShort, setNewsInShort] = useState('');
    const [newsInDetail, setNewsInDetail] = useState('');
    const [adminToken, setAdminToken] = useState('');

    // const [newsImage, setNewsImage] = useState(null);
    // const [image, setImage] = useState(null);
    // const [createNewsResp, setCreateNewsResp] = useState(false);

    const handleNewsSubmit = async (e) => {

        e.preventDefault();
        console.log("Handle news  Submit");
        // console.log({ news_title, news_in_short, news_in_detail, admin_access_token, created_by });

        // if (!news_title) {
        //     return;
        // }

        let resp = await createNews();

        if (resp.success === true) {
            // setCreateNewsResp(true);
            setAdminToken("");
            setNewsTitle("");
            setNewsInDetail("");
            setAdminToken("");
            setNewsInShort("");
        }
    };


    return (
        <div>
            <form onSubmit={handleNewsSubmit} style={{ display: "flex", justifyContent: "start", alignItems: "start", flexDirection: "column" }}>
                <h3>Create your news </h3>
                <input type="text" placeholder="Enter news title"
                    value={newsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                    // onChange={(e) => console.log("newsTitle", newsTitle)}
                />
                <input type="text" placeholder="Enter news in short"
                    value={newsInShort}
                    onChange={(e)=>setNewsInShort(e.target.value)}
                />
                <textarea value={newsInDetail}
                    placeholder="Enter news in detail"
                    onChange={(e) => setNewsInDetail(e.target.value)}
                ></textarea>
                <input type="text" placeholder="Admin Token"
                    value={adminToken}
                    onChange={(e)=>setAdminToken(e.target.value)}
                />
                {/* <input type="file" value={newsInShort} onChange={(e) => setnewsInShort(e.target.value)} placeholder="Short Description" /> */}

                {/* <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" /> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default page