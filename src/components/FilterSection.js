import React from 'react'

const FilterSection = () => {
  return (
    <div className='filter_container'>
        <h3 className="post_number">Posts (368)</h3>
        <div className="filter_div">
            <select name="filter" id="filter">
                <option value="all">All</option>
                <option value="Event">Event</option>
                <option value="Education">Education</option>
                <option value="Job">Job</option>
                <option value="Article">Article</option>
            </select>
        </div>
    </div>
  )
}

export default FilterSection;