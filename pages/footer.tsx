import React, {useState} from 'react';
import PropTypes from 'prop-types';
 Footer.propTypes = {
}; 
 Footer.defaultProp ={
}

function Footer(props) {
    const FilterBtn = ((props) => {
        const { title, onClick, link, isActived } = props;
        return (
          <>
            <li>
              <a
                href={`#/${link}`}
                className={`${isActived ? "selected" : ""}`}
                onClick={onClick}
              >
                {title}
              </a>
            </li>
          </>
        );
      });
    
    //Filter Buttons
      const filterBtns = [
        {
          title: "All",
        },
        {
          title: "Active",
        },
        {
          title: "Completed",
        },
      ];
    return (
        <footer className="footer">
      <span className="todo-count">
        <strong>2</strong>
        <span> </span>
        <span> items</span>
        <span> left</span>
      </span>
      <ul className="filters">
        {filterBtns.map((btn) => (
          <FilterBtn key={`btn${btn.title}`} {...btn} />
        ))}
      </ul>
     
        <button className="clear-completed">
          Clear completed
        </button>
      
    </footer>
    );
}

export default Footer;