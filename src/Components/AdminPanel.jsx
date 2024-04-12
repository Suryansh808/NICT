import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";



const AdminPanel = () => {
   useEffect(() => {
    document.title = 'Admin Panel';
   }, []);

  //  const [user, setUser] = useState(null);


        
  return (
    <>
      <main className="w-[100vw]">
        <div  className='navbar w-full  bg-slate-950 text-white text-xl py-3 px-10 flex item-center justify-between tracking-wider'>
              <div className="list">
                <ul className="flex item-center gap-3">
                  <li><Link to="/AdminPanel/Course">Course</Link></li>
                  <li><Link to="/AdminPanel/Certificated">Certification</Link></li>
                </ul>
              </div>
              <div className="logout">
              <Link to="/" className="flex items-center gap-2">Logout<LuLogOut/></Link>
              </div>
        </div>
        {/* <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : "Loading..."}
    </div> */}
      </main>
    </>
  )
};
export default AdminPanel;