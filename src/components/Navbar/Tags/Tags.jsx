import React from 'react'
// import PropTypes from 'prop-types'

function Tags(props) {
    const [route, class_name, fill, name] = props;
  return (
    <div>
        <a href={route} className={class_name}
        img={img} fill={fill} >name={name}</a>
            {/* <Dashboard fill={value} id="dashboard"
            alt="Dashboard" />Dashboard</a> */}
    </div>
  )
}

// Tags.propTypes = {}

export default Tags
