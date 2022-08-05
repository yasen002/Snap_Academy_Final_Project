import { createSlice } from '@reduxjs/toolkit'

const identityOptions = {
  genderOptions: [
    { key: "gender-1", value: "Man" },
    { key: "gender-2", value: "Woman" },
    { key: "gender-3", value: "Transgender" },
    { key: "gender-4", value: "Non-binary/Non-comforming" },
    { key: "gender-5", value: "No Preference" },
    { key: "gender-6", value: "Other" },
  ],
  pronounOptions:[
    { key: "pronoun-1", value: "he/him" },
    { key: "pronoun-2", value: "she/her" },
    { key: "pronoun-3", value: "they/them" },
    { key: "pronoun-4", value: "No Preference" },
    { key: "pronoun-5", value: "Other" },
  ],
  sexualityOptions:[
    { key: "sexuality-1", value: "Heterosexual" },
    { key: "sexuality-2", value: "Bisexual" },
    { key: "sexuality-3", value: "Homosexual" },
    { key: "sexuality-4", value: "Pansexual" },
    { key: "sexuality-5", value: "Asexual" },
    { key: "sexuality-6", value: "No Preference" },
    { key: "sexuality-7", value: "Other" },
  ],
  ethnicityOptions:[
    { key: "ethnicity-1", value: "White" },
    { key: "ethnicity-2", value: "Black or African" },
    { key: "ethnicity-3", value: "Hispanic" },
    { key: "ethnicity-4", value: "Indian or Alaska Native" },
    { key: "ethnicity-5", value: "Asian" },
    { key: "ethnicity-6", value: "Native Hawaiin or other Pacific Islander" },
    { key: "ethnicity-7", value: "Preference" },
    { key: "ethnicity-8", value: "Other" },
  ],
}

const initialState = {
  value: 7,
  identityActive:false,
  gender:"",
  ethnicity:"",
  sexuality:"",
  pronoun:"",
  ...identityOptions,
}

export const identitySlice = createSlice({
  name: 'indetity',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    updateGender: (state, action) => {
      let load = action.payload;
      state.gender =  state.genderOptions[load[1]].value
    },
    updateSexuality: (state, action) => {
      let load = action.payload;
      state.sexuality =  state.sexualityOptions[load[1]].value
    },
    updateEthnicity: (state, action) => {
      let load = action.payload;
      state.ethnicity =  state.ethnicityOptions[load[1]].value
    },
    updatePronoun: (state, action) => {
      let load = action.payload;
      state.pronoun =  state.pronounOptions[load[1]].value
    },
    activateIdentity: (state) => {
      state.identityActive = !state.identityActive
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateGender , updateEthnicity, updatePronoun, updateSexuality, activateIdentity} = identitySlice.actions

export default identitySlice.reducer