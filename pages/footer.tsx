import React, {Profiler, useState} from 'react';
import PropTypes from 'prop-types';
//  Footer.propTypes = {
//    status: PropTypes.string,
//    setStatusFilter: PropTypes.func,
// }; 
//  Footer.defaultProp ={
//    status: null,
//    setStatusFilter: null, 
// }

function Footer(props) {
  const {status, setStatusFilter, numOfTodos, numOfTodosLeft } = props; 
    //Filter Buttons
      const filterBtns = [
        {
          title: "All",
          isActived: status === 'ALL',
          onClick: ()=>setStatusFilter('ALL'),
          link: '',
        },
        {
          title: "Active",
          isActived: status === 'ACTIVE',
          onClick: ()=>setStatusFilter('ACTIVE'),
          link: 'active',
        },
        {
          title: "Completed",
          isActived: status === 'COMPLETED',
          onClick: ()=>setStatusFilter('COMPLETED'),
          link: 'completed'
        },
      ];
    return (
        <footer className="footer">
      <span className="todo-count">
        <strong>{numOfTodosLeft }</strong>
        <span> </span>
        <span>{numOfTodosLeft === 1 ? "item" : "items "}</span>
        <span> left</span>
      </span>
      <ul className="filters">
        {filterBtns.map((btn) => (
          <FilterBtn 
          key={`btn${btn.title}`} 
          {...btn} 
          // isActived = {status}
          />
        ))}
      </ul>
     
      { numOfTodos > numOfTodosLeft && <button className="clear-completed">
          Clear completed
        </button>}
      
    </footer>
    );
};
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

export default Footer;