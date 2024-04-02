"use client";
import React, { useState, useEffect } from 'react';
import getAllNews from "../api/team/news"
import TeamNewsActionModal from './TeamNewsActionModal';

const TeamAllNews = () => {

    const [allNews, setAllNews] = useState([]);

    useEffect(() => {

        const okkkkk = async () => {
            const response = await getAllNews();
            console.log(response);
            setAllNews(response.data);
        }

        okkkkk();
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains('modal')) {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">News</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Author</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date Created</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Type</th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {
                                allNews.map((news, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900" >{news.news_in_short.slice(0, 50)}</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Satya R Das</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">10/11/2024</td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">Article</td>
                                            <td className="whitespace-nowrap px-4 py-2">
                                                <a
                                                    onClick={() => handleOpenModal()}
                                                    href="#"
                                                    className="inline-block rounded mx-4 bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                                                >
                                                    Reject
                                                </a>

                                                <a
                                                    onClick={() => handleOpenModal()}
                                                    href="#"
                                                    className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                                                >
                                                    Approve
                                                </a>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {
                isOpen && <TeamNewsActionModal handleCloseModal={handleCloseModal} />
            }
        </>
    )
}

export default TeamAllNews