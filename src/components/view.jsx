import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function View() {
  const { id } = useParams(); // get id from route
  console.log("ID from URL:", id);

  const pastes = useSelector((state) => state.paste.pastes);

  // Find the paste with matching id
  const paste = pastes.find((p) => String(p.id) === id);

  console.log("Paste ->", paste);

  return (
    <div>
      <div className="flex min-w-[300px]  place-content-between gap-x-5 mt-2">
        <input
          className="w-[100%] px-4 py-1.5 rounded-2xl border h-11 border-gray-300 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          placeholder-gray-400 text-gray-700 shadow-sm"
          type="text"
          value={paste?.title || ""}
          disabled
        />
      </div>

      <textarea
        name="textarea"
        value={paste?.content || ""}
        disabled
        className="bg-black text-white w-[100%] h-[70vh] mt-3 p-3 border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          resize-none"
      ></textarea>
    </div>
  );
}

export default View;