import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useTheme } from '../App';
import './Header.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
      variant={isDarkMode ? 'dark' : 'light'}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <span className="brand-text">Adarsh</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              onClick={() => scrollToSection('home')}
              className="nav-link-custom"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('about')}
              className="nav-link-custom"
            >
              About
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('skills')}
              className="nav-link-custom"
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('projects')}
              className="nav-link-custom"
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('education')}
              className="nav-link-custom"
            >
              Education
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('contact')}
              className="nav-link-custom"
            >
              Contact
            </Nav.Link>
            
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;