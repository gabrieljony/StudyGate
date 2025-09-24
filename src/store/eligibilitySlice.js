import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchEligibility } from '../api/eligibilityApi' // <- import da função da API

// Mock da chamada AJAX para verificar elegibilidade
// export const checkEligibility = createAsyncThunk('eligibility/check', async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ eligibility: false }) // altere para false para testar bloqueio
//     }, 5000)
//   })
// })

// Chamada AJAX para verificar elegibilidade via API
export const checkEligibility = createAsyncThunk('eligibility/check', async () => {
// Retorna a resposta da API
const response = await fetchEligibility()
return response
})

const eligibilitySlice = createSlice({
  name: 'eligibility',
  initialState: { checked: false, eligible: false, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkEligibility.pending, (state) => {
        state.loading = true
      })
      .addCase(checkEligibility.fulfilled, (state, action) => {
        state.loading = false
        state.checked = true
        state.eligible = action.payload.eligibility
      })
      .addCase(checkEligibility.rejected, (state) => {
        state.loading = false
        state.checked = true
        state.eligible = false
      })
  }
})

export default eligibilitySlice.reducer
