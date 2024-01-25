// StudentsCardList.js
import React from 'react';

const StudentsCardList = () => {
  // Replace this with your actual student data
  const studentData = [
    { id: 1, name: 'John Doe', profilePic: 'https://placekitten.com/200/300' },
    { id: 2, name: 'Jane Smith', profilePic: 'https://placekitten.com/201/300' },
    { id: 3, name: 'Alex Johnson', profilePic: 'https://placekitten.com/202/300' },
    
  ];

  return (
    <div className="w-max bg-white rounded-2xl shadow-md shadow-gray-400 p-5 ">
  <h2 className="text-2xl font-semibold mb-6 ml-5 inline">Assigned Learners</h2>
  <h2 className="text-xl  mt-0 text-blue-700 float-end">view all</h2>
  <div className="flex flex-wrap">
    {studentData.map((student) => (
      <div key={student.id} className="bg-white p-8 rounded-md shadow-md shadow-gray-400 mb-4 mx-4 ">
        <div className="flex align-center justify-center  ">
          <img
            src={student.profilePic}
            alt={student.name}
            className="w-20 h-20 object-cover mb-2 rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold">{student.name}</h3>
        <p className="text-base font-normal">India</p>
        <p className="text-base font-normal ">Avg score 5.0</p>
      </div>
    ))}
  </div>
</div>

  
  );
};

export default StudentsCardList;
