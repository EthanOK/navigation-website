import React, { useState, useRef, useEffect } from "react";
import { categoriesDatas } from "./categories/categories";

function App() {
  const [categories, setCategories] = useState(categoriesDatas);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainContentRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category.id);
    setSidebarOpen(false);
    if (mainContentRef.current) {
      const element = document.getElementById(category.id);
      if (element) {
        mainContentRef.current.scrollTo({
          top: element.offsetTop,
          behavior: "smooth"
        });
      }
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (mainContentRef.current) {
        const scrollPosition = mainContentRef.current.scrollTop;
        let currentActiveCategory = categories[0].id;

        for (const category of categories) {
          const element = document.getElementById(category.id);
          if (
            element &&
            element.offsetTop <=
              scrollPosition + mainContentRef.current.offsetHeight / 2
          ) {
            currentActiveCategory = category.id;
          }
        }
        setActiveCategory(currentActiveCategory);
      }
    };

    if (mainContentRef.current) {
      mainContentRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (mainContentRef.current) {
        mainContentRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [categories]);

  return (
    <div className="container">
      <span className="menu-icon" onClick={toggleSidebar}>
        ☰
      </span>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={activeCategory === category.id ? "active" : ""}
            >
              {category.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content" ref={mainContentRef}>
        {categories.map((category, index) => (
          <div key={index} id={category.id}>
            <h1>{category.title}</h1>
            <div className="tool-grid">
              {category.tools.map((tool, toolIndex) => (
                <div key={toolIndex} className="tool-item">
                  <a href={tool.link} target="_blank" rel="noopener noreferrer">
                    <img src={tool.icon} />
                    <h3>{tool.name}</h3>
                  </a>
                  <p className="tool-description">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
