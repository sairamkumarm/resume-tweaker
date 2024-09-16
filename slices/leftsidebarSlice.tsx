// @ts-ignore
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResumeData, Summary, Basics } from "@/types/types";

// Define the initial state using that type
const initialState: ResumeData = {
  basics: {
    name: "",
    email: "",
    headLine: "",
    phone: undefined, // Optional field
    location: undefined, // Optional field
    picture: undefined, // Optional field
  },
  summary: {
    content: "",
  },
  profile: [],
  skills: [],
  projects: [],
  references: [],
  certifications: [],
  publications: [],
  awards: [],
  volunteerings: [],
  languages: [],
  experiences: [],
  education: [],
};

const leftsidebarSlice = createSlice({
  name: "leftsidebar",
  initialState,
  reducers: {
    setSummary(state: ResumeData, action: PayloadAction<Summary>) {
      // Ensure 'state.summary' is correctly updated
      state.summary = action.payload;
    },
    setBasics(state: ResumeData, action: PayloadAction<Basics>) {
      if (state.basics) {
        state.basics = { ...state.basics, ...action.payload };
      } else {
        state.basics = action.payload;
      }
    },
  },
});

// Export the actions
export const { setSummary, setBasics } = leftsidebarSlice.actions;

// Export the reducer
export default leftsidebarSlice.reducer;
