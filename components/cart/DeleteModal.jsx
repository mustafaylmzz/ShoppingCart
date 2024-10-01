import React from 'react'

const DeleteModal = ({show,onClose,onConfirm,message}) => {
      if(!show) return null;
      return (
        <div>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg text-center">
                <p>{message}</p>
                <div className="mt-4">
                <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded mr-2">Evet</button>
                <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Hayır</button>
                </div>
            </div>
            </div>
        </div>
      );
    };
export default DeleteModal
