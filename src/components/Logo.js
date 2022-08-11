import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/logo.css';

function Logo() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, []);

  return (
    <nav>
      <Link to="/">
        <svg className="logo-home" viewBox="0 0 512 357" width="512pt" height="357pt">
          <path className={`logo-path ${show ? "show" : ""}`} d=" M 21.297 152.632 C 70.742 124.771 168.521 174.987 182.037 173.892 C 205.378 172.001 220.873 155.374 217.028 135.621 C 213.183 115.867 185.642 116.787 177.954 121.87 C 170.267 126.953 140.768 152.106 141.579 202.322 C 142.389 252.539 183.874 269.415 220.308 255.902 C 256.742 242.389 310.883 182.276 329.202 132.34 C 340.996 100.191 344.832 58.207 339.496 40.489 C 334.16 22.771 316.184 15.941 300.131 37.209 C 284.079 58.477 270.433 129.787 266.234 184.827 C 262.035 239.866 257.882 295.9 292.477 324.791 C 327.072 353.681 332.427 302.384 361.366 234.033 C 403.117 135.419 441.299 153.866 490.703 152.632" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="5" stroke="#99CCCC" strokeLinejoin="miter" strokeLinecap="round" strokeMiterlimit="3"/>
        </svg>
      </Link>
    </nav>
  );
}

export default Logo;
