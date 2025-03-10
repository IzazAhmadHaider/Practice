import React, { useState } from 'react'

function CardsAnimation() {
    const [cardElements, setCardElements] = useState([
        {
            cardname: "Card 1",
            cardDescription: "Hello This is Card1",
            cardcolor: "bg-gradient-to-r from-[#903fff] via-indigo-500 to-[#200eee] -rotate-[5deg]"

        },
        {
            cardname: "Card 2",
            cardDescription: "Hello This is Card2",
            cardcolor: "bg-gradient-to-br from-[#ff4e50] via-[#fc913a] to-[#f9d423] -rotate-[10deg]"
        },
        {
            cardname: "Card 3",
            cardDescription: "Hello This is Card3",
            cardcolor: "bg-gradient-to-tr from-[#1fa2ff] via-[#12d8fa] to-[#a6ffcb] -rotate-[15deg]"
        },
        {
            cardname: "Card 4",
            cardDescription: "Hello This is Card4",
            cardcolor: "bg-gradient-to-tl from-[#ff7eb3] via-[#ff758c] to-[#ff4e63] -rotate-[20deg]"
        }
    ]);



    return (
        <>
            {cardElements.map((element, index) => {
                return (
                    <div id={index} draggable="true" className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[380px]  ${element.cardcolor} rounded-2xl shadow-2xl overflow-hidden m-4 p-6 transform hover:scale-105 hover:shadow-3xl transition-all duration-500`}>
                        <div className="h-fit bg-opacity-30 bg-white rounded-xl flex items-center justify-center">
                            <h2 className="text-white font-extrabold text-2xl uppercase tracking-wider">{element.cardname}</h2>
                        </div>
                        <div className="h-1/2 mt-4">
                            <p className="text-white text-base font-light leading-6">
                                {element.cardDescription}
                            </p>
                        </div>
                    </div>

                )
            })}

        </>
    );
}

export default CardsAnimation