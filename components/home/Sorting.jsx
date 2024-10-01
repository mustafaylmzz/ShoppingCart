import React from 'react';

const Sorting = React.memo(({ setSort }) => {
  console.log("Sorting rendered");
  
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
      <select onChange={setSort} className="bg-white py-3 px-5">
        <option disabled value="">SEÇİNİZ</option>
        <option value="inc">ARTAN</option>
        <option value="dec">AZALAN</option>
      </select>
    </div>
  );
});

export default React.memo(Sorting);
