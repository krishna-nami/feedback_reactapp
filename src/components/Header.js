import React from 'react';

function Header(props) {
  const headstyles = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };
  return (
    <>
      <header style={headstyles}>
        <div className="container">
          <h2>{props.text}</h2>
        </div>
      </header>
    </>
  );
}
Header.defaultProps = {
  text: 'Feedback from customers',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

export default Header;
