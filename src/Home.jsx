import React, { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";

function Home() {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-zinc-800 flex items-center justify-center">
      <div className="h-fit w-[300px] rounded-md bg-red-400 flex flex-col p-5 gap-5">
        <input onChange={e=>setRoomId(e.target.value)} className="rounded py-1 px-2 outline-none" value={roomId} type="text" placeholder="Enter Room Id"/>
        <button onClick={()=>navigate(`/meet/${roomId}`)} className="bg-sky-400 rounded p-1">Create Room</button>
      </div>
    </div>
  )
}

export default Home