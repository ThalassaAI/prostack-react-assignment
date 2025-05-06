import React from "react";
import { Link } from "react-router";
import AssignmentListItem from "./AssignmentListItem";

const assignmentRoutes = [
  {
    title: "Assignment 1",
    link: "/assignment1",
    description: "A placeholder description.",
    icon: "bi bi-list-ul",
  },
  {
    title: "Products Grid",
    link: "/products-grid",
    description:
      "A project demonstrating how to fetch data from an API, manage component-level state, handle side effects using lifecycle hooks, and display data in a grid format with Bootstrap.",
    icon: "bi bi-grid",
  },
  {
    title: "Products Table",
    link: "/products-table",
    description:
      "A project demonstrating how to fetch data from an API, manage component-level state, handle side effects using lifecycle hooks, and display data in a table format with Bootstrap. ",
    icon: "bi bi-table",
  },
];

function AssignmentList() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 mt-5 mb-3">
            <h1 className="text-center text-decoration-underline text-primary">
              Assignment List
            </h1>
          </div>
        </div>
        <div className="row">
          {assignmentRoutes.map((route, index) => {
            return (
              <div className="col-md-4 " key={index}>
                <AssignmentListItem {...route} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
// function AssignmentList() {
//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-10 offset-md-1 mt-5">
//             <h1 className="text-center">Assignment List</h1>

//             <table className="table table table-hover table-bordered table-striped">
//               <thead>
//                 <tr>
//                   <th scope="col">Title</th>
//                   <th scope="col">Description</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {assignmentRoutes.map((route, index) => {
//                   return (
//                     <tr key={index}>
//                       <td className="w-25">
//                         <Link to={route.link}>{route.title}</Link>
//                       </td>
//                       <td>{route.description}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default AssignmentList;
