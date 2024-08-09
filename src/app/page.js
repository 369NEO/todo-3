"use client"
import Todo from "../../component/Todo";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
      });

      const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
      };
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        try{    
            const response = await axios.post("/api",formData);
            toast.success("response.data.msg")
        }catch (error){
            toast.error("Error")
        }
      };


  return (
    <>
    <ToastContainer theme="dark" />
    <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
      <input value={formData.title} onChange={onChangeHandler} type="text" placeholder="Enter Title" className="px-3 py-2 w-full border-3 border-black" />
      <textarea value={formData.description} onChange={onChangeHandler}  name="description" placeholder="Enter Description" className="px-3 py-2 w-full"/>
      <button type="submit" className="bg-orange-600 py-3 px-11 text-white"> Add Todo</button>
      

<div className="relative overflow-x-auto mt-24 w-[90%]  gap-10 mx-auto justify-around" >
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          <Todo className='py-2 px-4 bg-green-500  bg-red-500 text-white flex gap-1'> </Todo>
          <Todo className='py-2 px-4 bg-green-500  bg-red-500 text-white flex gap-1'> </Todo>
          <Todo className='py-2 px-4 bg-green-500  bg-red-500 text-white flex gap-1'> </Todo>
        </tbody>
    </table>
</div>
    </form>"
    </>
  );
}
