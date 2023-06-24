import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios
      .get('https://zenquotes.io/api/random?option1=value&option2=value')
      .then(response => {
        const data = response.data;
        const { q ,a} = data[0];
        setQuote(q);
        setAuthor(a);
        console.log(a);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Quote for you</h1>
          <p className="leading-relaxed text-lg font-semibold">{quote}</p>
          <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-md">{author}</h2>
        </div>
      </div>
    </section>
  );
}

export default Quotes;