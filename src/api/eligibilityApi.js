// src/api/eligibilityApi.js

export async function fetchEligibility() {
  try {
    const response = await fetch('https://sua-api.com/eligibility') // Substitua pela URL real
    if (!response.ok) {
      throw new Error('Erro na requisição de elegibilidade')
    }
    const data = await response.json()
    return data // { eligibility: true/false }
  } catch (error) {
    console.error(error)
    return { eligibility: false } // fallback em caso de erro
  }
}
