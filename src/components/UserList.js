import React, { useState } from 'react';
import axios from 'axios';

function UserList(){
  const [users, setUsers] = useState([]);
  const[displaylist , setdisplaylist]=useState(false);
  
  function fetchUsers(){
    try {
      const response = axios.get('https://reqres.in/api/users')
      .then((response1)=> setUsers(response1.data.data))
      setdisplaylist(true)
     
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  console.log(users)
  function renderTableHeader(){
    return(
      <tr className='table-heading'>
       
       
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Avatar</th>
      </tr>
    )
  }

  function renderTableData(){
  
      if(displaylist){
        return(
        users.map(user => (
          <tr key={user.id}>
           
           
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
              <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            </td>
          </tr>
        ));
        )
      
      }
      else{
        return "No data found";
      }
      
    
}



  return(
    <div>
    <div>
      <div className='heading'>
      <h2>Blue Whales</h2>
       <button className="btn" onClick={fetchUsers}>
         Get User List
      </button>
      </div>
     <table >
      <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableData()}</tbody>
     </table>
   </div>
    </div>
  )
}











// const UserList=()=> {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const response = axios.get('https://reqres.in/api/users')
//       .then((response1)=> setUsers(response1.data.data) )
     
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const renderTableHeader = () => {
//     return (
//       <tr>
//         <th>ID</th>
//         <th>Email</th>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Avatar</th>
//       </tr>
//     );
//   };

//   const renderTableData = () => {
//     return users.map(user => (
//       <tr key={user.id}>
//         <td>{user.id}</td>
//         <td>{user.email}</td>
//         <td>{user.first_name}</td>
//         <td>{user.last_name}</td>
//         <td>
//           <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <div>
//       <button className="btn" onClick={fetchUsers}>
//         Get User List
//       </button>
//       <table>
//         <thead>{renderTableHeader()}</thead>
//         <tbody>{renderTableData()}</tbody>
//       </table>
//     </div>
//   );
// };

export default UserList;
