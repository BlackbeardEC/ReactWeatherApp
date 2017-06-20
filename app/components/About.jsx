var React = require('react');

var About = (props)=>{
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
      <p>Welcome to the About page.</p>
      <p>This is a simple Weather application written in React. I have built this as a Udemy course project.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react" target="_blank">React</a> - This is the JavaScript framework used.</li>
        <li><a href="https://openweathermap.org" target="_blank">Open Weather Map</a> - This is the API used to fetch weather by City Name.</li>
      </ul>
    </div>
  );
};
module.exports = About;
