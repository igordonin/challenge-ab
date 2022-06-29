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
    account: {},
    category: {},
    reference: null,
    amount: null,
    currency: null,
    date: null,
  },
  transactions: [],
  accounts: [],
})

export const getters = {
  getTransactionDetails(state) {
    return state.transactionDetails
  },
}

export const mutations = {
  setAccounts(state, accounts) {
    state.accounts = accounts
  },
  setTransactionDetails(state, { transactionDetails }) {
    state.transactionDetails = transactionDetails
  },
  setTransactions(state, transactions) {
    state.transactions = transactions
  },
  addTransactions(state, transactions) {
    state.transactions = [...state.transactions, ...transactions]
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

const findAllTransactionsQuery = `
query FilterTransactions(
  $skip: Int!,
  $take: Int!,
  $accountId: String,
  $startDate: String,
  $endDate: String
) {
  findAllTransactions(
    skip: $skip,
    take: $take,
    accountId: $accountId,
    startDate: $startDate,
    endDate: $endDate
  ) {
    id
    reference
    category {
      id
      name
      color
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
  async fetchTransactionsAction(context, { pagination, filters }) {
    // TODO Fix URL
    const response = await this.$axios.post(
      'http://localhost:4000/api/graphql',
      {
        operationName: 'FilterTransactions',
        query: findAllTransactionsQuery,
        variables: {
          skip: pagination.skip || 0,
          take: pagination.take || 100,
          accountId: filters.accountId,
          startDate: filters.startDate,
          endDate: filters.endDate,
        },
      }
    )
    const transactions = response.data.data?.findAllTransactions

    return convertTransactions(transactions)
  },
}
