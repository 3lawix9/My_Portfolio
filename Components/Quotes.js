import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {FaQuoteRight} from 'react-icons/fa';



function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios
      .get('/api/quotes')
      .then(response => {
        const data = response.data;
        const { q ,a } = data[0];
        setQuote(q);
        setAuthor(a); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
<section className="text-gray-900">
  <div className="container px-5 py-24 mx-auto flex justify-center items-center">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <FaQuoteRight className="text-4xl mb-4 text-blue-500" />
      <blockquote className="bg-gray-100 px-8 py-6 rounded-lg border-l-4 border-blue-500">
        <p className="leading-relaxed text-lg font-semibold text-blue-800 italic">"{quote}"</p>
        <cite className="block mt-6 text-gray-800 text-lg">- {author}</cite>
      </blockquote>
    </div>
  </div>
</section>

  );
}

export default Quotes;