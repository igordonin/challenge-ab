const convertTransactions = (transactions) => {
  return transactions.map((t) => ({
    id: t.id,
    reference: t.reference,
    date: new Date(parseInt(t.date, 10)).toLocaleDateString(),
    amount: t.amount.toFixed(2),
    currency: t.currency,
    category: t.category || {},
    account: t.account || {},
  }))
}

export const state = () => ({
  transactionDetails: {
    account: {
      name: 'Account Name',
    },
    category: {
      name: 'Category Name',
      color: 'ff0000',
    },
    reference: 'reference',
    amount: 10,
    currency: 'BRL',
    date: new Date().toLocaleDateString(),
  },
})

export const getters = {
  getTransactionDetails(state) {
    return state.transactionDetails
  },
}

export const mutations = {
  setTransactionDetails(state, { transactionDetails }) {
    state.transactionDetails = transactionDetails
  },
}

const fetchTransactionQuery = `
query FetchUniqueTransaction($id: ID!) {
  findUniqueTransactionById(id: $id) {
    reference
    category {
      name
      color
    }
    account {
      name
    }
    date
    amount
    currency
  }
}
`

export const actions = {
  async fetchTransaction({ commit }, { id }) {
    const response = await this.$axios.post(
      'http://localhost:4000/api/graphql',
      {
        operationName: 'FetchUniqueTransaction',
        query: fetchTransactionQuery,
        variables: { id },
      }
    )

    const transaction = response.data.data?.findUniqueTransactionById
    const [convertedTransaction] = convertTransactions([transaction])

    commit('setTransactionDetails', {
      transactionDetails: convertedTransaction,
    })

    return convertedTransaction
  },
}
