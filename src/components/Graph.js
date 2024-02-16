import React from 'react'

function Graph({ before, after }) {
    return (
      <div className="flex">
        <div className="p-4 bg-white shadow-md rounded-lg relative">
          <div className="h-[100px] w-[1px] bg-gray-700 border-l border-[1px] border-gray-700" />
          <div className="h-[1px] w-[100px] bg-gray-700 border-b border-[1px] border-gray-700" />
          <div className="flex"></div>
          <div className="flex space-x-6 justify-center w-full h-full absolute left-0 top-0 items-end p-4">
            <div className={`w-[8px] h-[70px] rounded-t-sm bg-orange-600`}></div>
            <div className={`w-[8px] h-[60px] rounded-t-sm bg-purple-600`}></div>
          </div>
        </div>
      </div>
    );
  }

export default Graph
