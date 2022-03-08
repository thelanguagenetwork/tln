import React from 'react'

export default function Mandarin() {
    return (
        <div className='flex flex-row w-11/12 '>
            <div class="p-4 lg:w-1/3 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">HSK1</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Introduction to Mandarin</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Basic greetings and Introduction, Phonetics,Grammar and Vocabulary</p>
                    <a href='' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
            <div class="p-4 lg:w-1/3 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">HSK2</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Elementary Knowledge</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Simple communication, Grammar and Vocabulary</p>
                    <a href='' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
            <div class="p-4 lg:w-1/3 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">HSK3</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Intermediate Knowledge</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Cultural & Social know-hows, Complex Grammar and Professional Vocabulary</p>
                    <a href='' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
        </div>
    )
}
