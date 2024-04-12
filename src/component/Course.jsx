// import React ,{useEffect , useState} from "react";
// import { Link , useNavigate  } from "react-router-dom";
// import AdminPanel from "../Components/AdminPanel" ;


// const Course = () => {
//     const [update , setUpdateChange] = useState(); 
//   const navigate = useNavigate();

//      const CourseEdit = (id)=>{
//             navigate("/AdminPanel/CourseEdit/" + id);
//             console.log(id);
//      }

//      const CourseDelete = (id)=>{
//           if((window.confirm("Do  you want to delete this course ?"))){
//             fetch("http://localhost:7000/CourseDetails/" + id, {
//               method: "DELETE"
//             }).then((res) => {
//                 alert("Delete Successfully");
//                 window.location.reload(true);
//               })
//               .catch((error) => {
//                 console.log(error, "Error!");
//               });
//           }
//      }


//     useEffect(() => {
//       fetch("http://localhost:7000/CourseDetails").then((res)=>{
//         return  res.json();
//       }).then((resp) => {
//         setUpdateChange(resp);
//         console.log(resp)
//       }).catch((error)=>{
//         console.log(error);
//       })
//     },[])
//   return (
//     <>
//       <AdminPanel/>
//       <div className=" w-full  pt-2">
//        <div className="createBtn text-center">
//        <Link to="/AdminPanel/CourseCreate" className="border-2 rounded-lg p-1">Add Course+</Link>
//        </div>
//        <table className="w-full text-left rounded shadow-md bg-white ">
//           <thead className="text-black tracking-wider uppercase shadow-lg bg-blue-200">
//             <tr className="font-bold">
//             <th className="p-3">Id</th>
//             {/* <td>Course Image</td> */}
//             <th className="p-3">Course Name</th>
//             <th className="p-3">Course Price</th>
//             <th className="p-3">Course Duration</th>
//             <th className="p-3">Course description</th>
//             <th className="p-3">Action</th>
//             </tr>
//           </thead>
//           <tbody  className="">
//              {
//                update ? (
//                    update.map((item,index)=>(
//                        <tr className="bg-gray-50 border border-collapse hover:bg-red-500 hover:text-white" key={index}>
//                         <td className="p-3 md:p-6">{item.id}</td>
//                         {/* <td><img src={item.image} alt={item.name} width={200} height={200}/></td> */}
//                         <td className="p-3 md:p-6">{item.name}</td>
//                          <td className="p-3 md:p-6">{item.price}</td>
//                          <td className="p-3 md:p-6">{item.duration}</td>
//                          <td className="p-3 md:p-6">{item.description }</td>
//                           <td className="flex gap-2 mb-1 p-3 md:p-6">
//                             <a className="border-2 rounded-lg py-1 px-2 bg-sky-600 text-white cursor-pointer" 
//                             onClick={()=>{CourseEdit(item.id)}}>Edit</a>
//                             <Link className="border-2 rounded-lg py-1 px-2 bg-red-600 text-white cursor-pointer" 
//                             onClick={()=>{CourseDelete(item.id)}}>Delete</Link>
//                           </td>
//                          </tr>))
//                ):(<h1>Loading...</h1>)
//              }
//           </tbody>
//         </table>
//       </div>
//     </>
//   )
// }

// export default Course