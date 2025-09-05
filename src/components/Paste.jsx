import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeFromPastes } from "../redux/reduxSlice";
import { toast } from "react-toastify";
import NativeShareButton from "./shareButton";
import { NavLink } from "react-router-dom";
import {CopyPlus,Eye,UserPen,Trash} from "lucide-react"
function Paste() {
  const pastes = useSelector((state) => state.paste.pastes) || [];
  console.log(pastes);
  const [searchTerms, setsearchTerms] = useState("");
  const dispatch = useDispatch();

  const filterdData = pastes.filter((paste) => {
    if (!paste || typeof paste.title !== "string") {
      return false;
    }
    return paste.title.toLowerCase().includes(searchTerms.toLowerCase());
  });

  const deleteFunction = (id) => {
    console.log(id);
    dispatch(removeFromPastes(id));
  };

  return (
    <div className="flex flex-col">
      <input
        className="mt-3  min-h-1.5 max-w-5xl min-w-xs hover:border-green-800 w-full px-4 py-1.5 rounded-2xl border h-11 border-gray-300 
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         placeholder-gray-400 text-gray-700 shadow-sm"
        type="search"
        value={searchTerms}
        maxLength={35}
        onChange={(e) => setsearchTerms(e.target.value)}
      />
      <div
        className="min-w-4xl display-flex flex-col gap-2 mt-3 p-3 border border-gray-300 rounded-xl 
         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
         resize-none "
      >
        {
        filterdData.length > 0 &&
          filterdData.map((paste, index) => {
            return (
              <div
                className="bg-white shadow-md rounded-2xl min-h-[20vh] flex flex-row justify-between items-start p-4 border border-gray-200 
  hover:shadow-lg transition-shadow duration-200 min-w-3xl max-w-5xl"
                key={paste.id + "-" + index}>
                <div className="bg-white shadow-md rounded-2xl min-h-[20vh] flex flex-col justify-between items-start p-4 border border-gray-200 
  hover:shadow-lg transition-shadow duration-200 w-[85%]">
                  <div className="text-lg text-left ml-1 mr-1 pl-2 border-1 font-semibold bg-blue-200 text-emerald-950 break-words ">
                    Title:{paste.title}
                  </div>
                  <div className="text-sm text-left w-[100%] text-blue-400 break-words ">
                    Content:{paste.content}
                  </div>
                  <div className="text-xs  flex items-baseline-last  text-red-300">
                    {paste.createdAt}
                  </div>
                </div>
                <div className="ml-5 grid grid-cols-2 gap-2 min-w-[12%]">
                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg 
  bg-gray-600 text-white text-sm font-medium 
  hover:bg-green-700 shadow-sm hover:shadow-md 
  transition-all duration-200">
                    <NavLink to={`view/${paste.id}`}><Eye/></NavLink>
                  </button>
                  <button className="px-2 py-1 text-xs rounded-lg bg-gray-300 text-white hover:green-500">
                    <NavLink to={`/?pasteId=${paste?.id}`}><UserPen/></NavLink>
                  </button>
                  <button
                    className="px-3 py-1 text-xs rounded-lg bg-gray-900 text-white hover:bg-blue-500"
                    onClick={() => {
                      navigator.clipboard.writeText(paste.content);
                      toast("Successfully Copied");
                    }}
                  >
                    <CopyPlus/>
                  </button>
                  <NativeShareButton title={paste.title} text={paste.content} />
                  <button
                    className="px-2 py-1 text-xs rounded-lg bg-red-700 text-white hover:bg-red-600"
                    onClick={() => deleteFunction(paste.id)}
                  >
                    <Trash/>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Paste;

