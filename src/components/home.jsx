import { useEffect, useState } from "react"
import {useSearchParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addToPastes,updateToPastes } from "../redux/reduxSlice";
import { useSelector } from "react-redux";

function Home(){
    const pastes = useSelector((state) => state.paste.pastes);
    const [title,setTitle]=useState("");
    const [textareaValue,settextareaValue]=useState("");
    const [searchParams,setSearchParams]=useSearchParams();
    const pasteId=searchParams.get("pasteId");
    const dispatch=useDispatch();
    useEffect( ()=>{
      console.log("under useEffect" + pasteId );
      if(pasteId){
        const paste=pastes.find((p)=>p.id===pasteId);
        if(paste){
        setTitle(paste.title);
        settextareaValue(paste.content);
        }
      }
 },[pasteId],[pastes]);
    function createPaste()
    {
         const paste={
         title:title,
         content:textareaValue,
         id:pasteId ? pasteId : Date.now().toString(36),
         createdAt:new Date().toISOString(),
    }
     
    if(pasteId){
           dispatch(updateToPastes(paste));
           console.log("dispatchUpdate");
    }
    else{
        dispatch(addToPastes(paste));
        console.log("dispatchadd");
    }
    settextareaValue("");
    setTitle("");
    setSearchParams({});
    }
    return(
        <div>
        <div className="flex w-[100%] gap-x-5 mt-2">
            <input className="w-full px-4 py-1.5 rounded-2xl border h-11 border-gray-300 
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         placeholder-gray-400 text-gray-700 shadow-sm"
    type="text" 
    value={title}
    placeholder="Enter Title Here"
    maxLength={35}
    onChange={(e)=>setTitle(e.target.value)}
    />
    <button onClick={createPaste} className="px-2  h-9
             w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] 
             text-white font-mono rounded-lg shadow-md 
             hover:bg-blue-700  bg-blue-950
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
             transition">
        {pasteId? "Click For Update":"Click For Create"}
    </button>
    </div>
    <textarea name="textarea"
     value={textareaValue}
     onChange={(e)=>settextareaValue(e.target.value)}
     placeholder="Write your Notes Here..."
    className="bg-black decoration-amber-50 w-[100%] h-[70vh]  mt-3 p-3 border border-gray-300 rounded-lg 
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         resize-none" 
         >
    </textarea>
   </div> 
)
}
export default Home