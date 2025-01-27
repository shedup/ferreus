import React from "react";

function About() {
  return (
    <div className="flex flex-col md:flex-row py-10 px-5">
      {/* Left Side - About Us Title */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h1 className="text-4xl font-semibold text-gray-800">About Us</h1>
        <svg
          className="w-30 h-30"
          fill="#000000"
          version="1.2"
          baseProfile="tiny"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <g>
            <path
              d="M223.8,95.9c-0.4-0.2-1.5-0.2-1.9-0.4c-0.4-0.2-1.9-0.2-2.6-0.2c-4.3,0-7.4,1.7-9.1,4.7l-22.8,37.6l-28.7,0.5
		c-4.7,0-8.7,3.8-8.7,8.7c0,1.3,0.3,2.5,0.8,3.6h-46c0.5-1.1,0.8-2.3,0.8-3.6c0-4.9-4-8.7-8.7-8.7H68.2L45.4,100
		c-1.7-3-4.9-4.7-9.1-4.7c-0.6,0-2.1,0-2.6,0.2c-0.4,0.2-1.5,0.2-1.9,0.4c-29.2,6.7-29.3,69-29.1,80.9c0,10.9,3.8,15.7,11.7,18.7
		c1.9,0.9,4.3,1.3,6.2,1.3l50.2,0v43.4c0,6.4,4.9,11.3,11.3,11.3c6.4,0,11.3-4.9,11.3-11.3v-54.3c0-3-1.3-6.2-3.4-8.1
		c-2.3-2.3-5.3-3.6-8.1-3.6H48.4v-25.1L31,119.5c-0.9-1.3-0.4-2.8,0.6-3.4c1.3-0.9,2.8-0.4,3.4,0.6L55.2,151
		c0.1,0.2,0.3,0.4,0.4,0.7v15.7H200v-15.7c0.2-0.2,0.3-0.4,0.4-0.7l20.2-34.3c0.6-1.1,2.1-1.5,3.4-0.6c1.1,0.6,1.5,2.1,0.6,3.4
		l-17.4,29.6v25.1h-33.4c-2.8,0-5.7,1.3-8.1,3.6c-2.1,1.9-3.4,5.1-3.4,8.1v54.3c0,6.4,4.9,11.3,11.3,11.3c6.4,0,11.3-4.9,11.3-11.3
		v-43.4h50.2c1.9,0,4.3-0.4,6.2-1.3c7.9-3,11.7-7.8,11.7-18.7C253.2,165,253.1,102.6,223.8,95.9z"
            />
            <ellipse
              transform="matrix(0.3827 -0.9239 0.9239 0.3827 56.0066 232.6846)"
              cx="202.1"
              cy="74.4"
              rx="20.2"
              ry="20.2"
            />
            <ellipse
              transform="matrix(0.3827 -0.9239 0.9239 0.3827 -35.7223 95.4025)"
              cx="53.5"
              cy="74.4"
              rx="20.2"
              ry="20.2"
            />
            <path
              d="M114.7,67.8v0.6h11.2h3.9H141v-0.6c0-6.4,2.5-12.6,7-17.3c4.6-4.9,7.5-11.6,7.5-18.9c0-15.4-12.7-27.9-28.2-27.6
		c-15.1,0.4-27.1,13-26.9,28c0.1,7.1,2.9,13.6,7.5,18.4C112.1,55.2,114.7,61.3,114.7,67.8z"
            />
            <rect x="114.7" y="72.3" width="26.3" height="5.2" />
            <path d="M123.9,88.1h7.9c2.9,0,5.3-2.4,5.3-5.3v-1.3h-18.4v1.3C118.6,85.7,121,88.1,123.9,88.1z" />
          </g>
        </svg>
      </div>

      {/* Right Side - "What We Do" and "How We Do It" */}
      <div className="md:w-2/3 pl-5">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">What We Do</h2>
          <p className="mt-4 text-lg text-gray-600">
            We help clients and organizations build their web applications by
            proficiently navigating both front-end and back-end development.
            From designing visually appealing user interfaces to implementing
            scalable and robust software architectures, we contribute to the
            entire application development lifecycle to ensure the successful
            creation of comprehensive and efficient solutions.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">How We Do It</h2>
          <p className="mt-4 text-lg text-gray-600">
            We work hand-in-hand with you and your team to define a unique
            market position that not only grabs the attention of your ideal
            customers but also speaks directly to their buying journey. By
            aligning your team around a unified message, we ensure that your
            marketing and sales efforts remain consistent, clear, and
            customer-centric. Our confidence in this approach is so strong that
            we back it with a guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
