import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState={
    pastes:localStorage.getItem("pastes")? JSON.parse(localStorage.getItem("pastes")):[]
}
export const pasteSlice=createSlice({
        name:'paste',
        initialState,
        reducers:{
             addToPastes:(state,action)=>{
                // state.pastes.push(action.payload);
                // localStorage.setItem("pastes",JSON.stringify(state.pastes));
                // toast("PASTES CREATED SUCCESSFULLY");
                state.pastes = [...state.pastes, action.payload];   // safer than push
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success("Paste Created Successfully");

             },
             updateToPastes: (state, action) => {
               const updatedPaste = action.payload;
                       const index = state.pastes.findIndex((p) => p.id === updatedPaste.id);

                 if (index !== -1) {
                       state.pastes[index] = updatedPaste; // update existing paste
                       localStorage.setItem("pastes", JSON.stringify(state.pastes));
                        toast.success("Paste Updated Successfully");
                        }
                      else {
                      toast.error("Paste not found!");
                        }
                   },

             resetallPastes:(state,action)=>{
                   
             },
             removeFromPastes:(state,action)=>{
                const pasteId=action.payload;
                 const index = state.pastes.findIndex((pastes) => pastes.id === pasteId)
                   if (index >= 0) {
        // If the course is found in the Pastes, remove it
                   state.pastes.splice(index, 1)
        // Update to localstorage
                     localStorage.setItem("pastes", JSON.stringify(state.pastes))
        // show toast
                      toast.success("Paste deleted" + index);
                     }
}
},
})
export const {addToPastes,updateToPastes,resetallPastes,removeFromPastes}=pasteSlice.actions
export  default pasteSlice.reducer