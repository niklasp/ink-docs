import React from 'react'

export const Rock: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 452.65 552.58" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* <path
        d="M431.68 102.19c.96 9.66 2.06 21.55 3.22 34.97 5.23 60.09 11.96 150.62 15.4 206.27.79 12.83 1.4 23.82 1.78 32.14 1.1 24.37-27.74 40.84-98.33 69.11-10.07 99.14-40.21 114.9-188.43 104.7-11.66-.8-24.06-1.76-37.25-2.86-37.89-3.16-55.81-8.86-69.57-42.46-8.54-20.84-15.48-52.41-24.57-100.77-6.58-34.98-12.1-67.8-16.67-98.78-7.37-49.98-12.27-95.16-15.15-136.9-4.39-63.47-1.43-74.5 33.73-87.58 16.6-6.17 44.27-13.72 83.4-23.62 10.93-2.76 22.75-5.71 35.46-8.85 14.84-3.69 30.92-7.64 48.23-11.9 11.93-2.94 23.73-5.8 35.26-8.52C297.54 13.07 349.63 2.36 374.71.72c39.93-2.62 49.23 23.69 56.97 101.47Z"
        style={{ fill: '#8674f2' }}
      />
      <path
        d="M431.68 102.19c.96 9.66 2.06 21.55 3.22 34.97 5.23 60.09 11.96 150.62 15.4 206.27.79 12.83 1.4 23.82 1.78 32.14 1.1 24.37-27.74 40.84-98.33 69.11-10.07 99.14-40.21 114.9-188.43 104.7-11.66-.8-24.06-1.76-37.25-2.86-37.89-3.16-55.81-8.86-69.57-42.46-8.54-20.84-15.48-52.41-24.57-100.77-6.58-34.98-12.1-67.8-16.67-98.78-7.37-49.98-12.27-95.16-15.15-136.9-4.39-63.47-1.43-74.5 33.73-87.58 16.6-6.17 44.27-13.72 83.4-23.62 10.93-2.76 22.75-5.71 35.46-8.85 14.84-3.69 30.92-7.64 48.23-11.9 11.93-2.94 23.73-5.8 35.26-8.52C297.54 13.07 349.63 2.36 374.71.72c39.93-2.62 49.23 23.69 56.97 101.47Z"
        style={{
          fill: '#574ab5',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '0',
        }}
      />
      <path
        d="M165.31 549.37c-11.66-.8-24.06-1.76-37.25-2.86-37.89-3.16-55.81-8.86-69.57-42.46 75.9-28.55 99.5 14.47 106.81 45.32ZM154.7 47.56C187.2 332.24 33.93 403.28 33.93 403.28c-6.58-34.98-12.1-67.8-16.67-98.78 0 0 153.77-37.89 101.98-248.09 10.93-2.76 22.75-5.71 35.46-8.85ZM452.08 375.56c-.38-8.32-.99-19.31-1.78-32.14h-.01C289.3 395.46 246.42 154.78 434.9 137.15c-1.16-13.41-2.26-25.3-3.22-34.96C423.94 24.41 414.65-1.9 374.71.72c-25.08 1.64-77.17 12.35-136.51 26.41-50.43 208.51-25.51 435.76 115.55 417.54 70.58-28.27 99.43-44.74 98.33-69.11ZM282.93 201.6c-2.9 15.12-13.62 25.77-23.94 23.78-10.32-1.98-16.34-15.84-13.44-30.95 2.9-15.12 13.62-25.77 23.95-23.79 10.32 1.98 16.33 15.84 13.43 30.96Z"
        style={{
          fill: '#574ab5e',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.09px',
        }}
      />
      <ellipse
        cx={244.69}
        cy={514.12}
        rx={15.84}
        ry={39.19}
        transform="rotate(-85.58 244.694 514.126)"
        style={{
          fill: '#574ab5',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '1.09px',
        }}
      /> */}
      <g transform="translate(0,-418)">
        <path
          d="m431.14,521.11c.96,9.66,2.06,21.55,3.22,34.97,5.23,60.09,11.96,150.62,15.4,206.27.79,12.83,1.4,23.82,1.78,32.14,1.1,24.37-27.74,40.84-98.33,69.11-10.07,99.14-40.21,114.9-188.43,104.7-11.66-.8-24.06-1.76-37.25-2.86-37.89-3.16-55.81-8.86-69.57-42.46-8.54-20.84-15.48-52.41-24.57-100.77-6.58-34.98-12.1-67.8-16.67-98.78-7.37-49.98-12.27-95.16-15.15-136.9-4.39-63.46-1.42-74.49,33.73-87.57,16.6-6.17,44.27-13.72,83.4-23.62,10.93-2.76,22.75-5.71,35.46-8.85,14.84-3.69,30.92-7.64,48.23-11.9,11.93-2.94,23.73-5.8,35.26-8.52,59.34-14.06,111.43-24.77,136.52-26.41,39.93-2.62,49.23,23.69,56.97,101.47Z"
          style={{
            fill: '#8674f2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '0px',
          }}
        />
        <path
          d="m164.77,968.29c-11.66-.8-24.06-1.76-37.25-2.86-37.89-3.16-55.81-8.86-69.57-42.46,75.9-28.55,99.5,14.47,106.81,45.32Z"
          style={{
            fill: '#574ab5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '0px',
          }}
        />
        <path
          d="m154.16,466.48c32.5,284.68-120.77,355.72-120.77,355.72-6.58-34.98-12.1-67.8-16.67-98.78,0,0,153.77-37.89,101.98-248.09,10.93-2.76,22.75-5.71,35.46-8.85Z"
          style={{
            fill: '#574ab5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '0px',
          }}
        />
        <path
          d="m431.14,521.11c.96,9.66,2.06,21.55,3.22,34.97-188.48,17.62-145.6,258.31,15.39,206.27h0c.79,12.83,1.4,23.81,1.78,32.13,1.1,24.37-27.74,40.84-98.33,69.11-141.06,18.22-165.98-209.03-115.55-417.54,59.34-14.06,111.43-24.77,136.52-26.41,39.93-2.62,49.23,23.69,56.97,101.47Z"
          style={{
            fill: '#574ab5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '0px',
          }}
        />
        <ellipse
          cx="263.7"
          cy="616.93"
          rx="27.87"
          ry="19.03"
          transform="translate(-391.87 759.64) rotate(-79.14)"
          style={{
            fill: '#8674f2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '0px',
          }}
        />
        <ellipse
          cx="244.15"
          cy="933.04"
          rx="15.84"
          ry="39.19"
          transform="translate(-704.93 1104.57) rotate(-85.58)"
          style={{
            fill: '#574ab5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '1.09px',
          }}
        />
      </g>
    </svg>
  )
}
