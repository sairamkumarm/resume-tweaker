// redux/rightsidebarSlice.ts
// @ts-ignore
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResumeStyles } from "@/types/types";

// Define the initial state using that type
const initialState: ResumeStyles = {
  id: "",
  name: "",
  font: "Roboto",
  fontSize: 12,
  lineHeight: 1,
  margin: 10,
  paperFormat: "A4",
  baseColor: "#000",
};

const rightsidebarSlice = createSlice({
  name: "rightsidebar",
  initialState,
  reducers: {
    // Example reducer
    setName(state: ResumeStyles, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

// Export the actions
export const { setName } = rightsidebarSlice.actions;

// Export the reducer
export default rightsidebarSlice.reducer;
