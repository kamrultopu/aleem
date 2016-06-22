import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../app/Header.jsx';
import Navigator from '../app/Navigator.jsx';
import Section from '../app/Section.jsx';
import Footer from '../app/Footer.jsx';


ReactDOM.render(<Header now={new Date().toString()}/>, document.getElementById('header'))
ReactDOM.render(<Navigator />, document.getElementById('nav'))	
ReactDOM.render(<Section id="section_frame" target="./src/static/txt/About.txt" ht={document.getElementById('section').height} wd={document.getElementById('section').width}/>, document.getElementById('section'))
ReactDOM.render(<Footer />, document.getElementById('footer'))