<template>
  <section class="antialiased bg-gray-100 text-gray-600 px-4">
    <div class="flex flex-col py-4 h-full">
      <!-- Table -->
      <div
        class="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-md border border-gray-200"
      >
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800">Transactions</h2>
        </header>

        <!-- Fields -->
        <div class="px-5 py-4 border-b border-gray-100">
          <div class="grid gap-4 grid-cols-3">
            <div>
              <label class="text-gray-700" for="account">Account</label>
              <select
                id="account"
                class="w-5/6 rounded-none border-2 border-gray-200 mt-2 p-1"
                @change="onSelectAccount"
              >
                <option
                  v-for="account of accounts"
                  :key="account.id"
                  :value="account.id"
                >
                  {{ account.name }}
                </option>
              </select>
            </div>
            <div>
              <label class="text-gray-700" for="start-month">Start Month</label>
              <input
                id="start-month"
                class="w-5/6 rounded-none border-2 border-gray-200 mt-2 p-1"
                :class="{ invalidDate: isStartDateInvalid() }"
                type="text"
                placeholder="yyyy-mm"
                :value="filters.startDate"
                @input="setStartDate"
              />
            </div>
            <div>
              <label class="text-gray-700" for="end-month">End Month</label>
              <input
                id="end-month"
                class="w-5/6 rounded-none border-2 border-gray-200 mt-2 p-1"
                :class="{ invalidDate: isEndDateInvalid() }"
                type="text"
                placeholder="yyyy-mm"
                :value="filters.endDate"
                @input="setEndDate"
              />
            </div>
          </div>
        </div>

        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Reference</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Category</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Date</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-right">Amount</div>
                  </th>
                </tr>
              </thead>

              <tbody class="text-sm divide-y divide-gray-100">
                <tr
                  v-for="transaction of transactions"
                  :key="transaction.id"
                  @click="onTransactionSelected(transaction.id)"
                >
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">
                      <p v-if="transaction.reference">
                        {{ transaction.reference }}
                      </p>
                      <p
                        v-else
                        class="text-xs text-gray-600 dark:text-gray-400"
                      >
                        No reference provided
                      </p>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">
                      <div
                        class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-gray-200 rounded-md"
                        :style="{
                          backgroundColor: delegateConvertToRgba(
                            transaction.category
                          ),
                        }"
                      >
                        {{ transaction.category.name || 'Uncategorized' }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">
                      {{ transaction.date }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-right">
                      {{ transaction.amount }}
                      <span class="text-xs text-gray-600 dark:text-gray-400">{{
                        transaction.currency
                      }}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <modal name="TransactionDetails" :height="160" :width="400">
      <TransactionDetails />
    </modal>

    <client-only>
      <InfiniteLoading
        :identifier="infiniteId"
        spinner="spiral"
        force-use-infinite-wrapper="true"
        @infinite="infiniteScroll"
      >
        <div slot="no-more">No more transactions</div>
        <div slot="no-results">No more transactions</div>
      </InfiniteLoading>
    </client-only>
  </section>
</template>

<script>
import TransactionDetails from '~/components/transaction-details.vue'

const initialLoad = `
query InitialLoad($skip: Int!, $take: Int!) {
  findAllAccounts {
    id
    name
  }
  findAllTransactions(skip: $skip, take: $take) {
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

const convertTransactions = (transactions) => {
  return transactions.map((t) => ({
    id: t.id,
    reference: t.reference,
    date: new Date(parseInt(t.date, 10)).toLocaleDateString(),
    amount: t.amount.toFixed(2),
    currency: t.currency,
    category: t.category || {},
  }))
}

export default {
  name: 'IndexPage',
  components: { TransactionDetails },
  async asyncData({ $axios, store, env }) {
    const response = await $axios.post(`${env.apiBaseUrl}/api/graphql`, {
      operationName: 'InitialLoad',
      query: initialLoad,
      variables: {
        skip: 0,
        take: 100,
      },
    })
    const transactions = response.data.data?.findAllTransactions || []
    const accounts = response.data.data?.findAllAccounts || []

    store.commit('setTransactions', convertTransactions(transactions))
    store.commit('setAccounts', [{ id: null, name: 'No Filter' }, ...accounts])
  },
  data() {
    return {
      infiniteId: +new Date(),
      pagination: {
        skip: 0,
        take: 100,
      },
      filters: {
        accountId: null,
        startDate: null,
        endDate: null,
      },
    }
  },
  computed: {
    transactions() {
      return this.$store.state.transactions
    },
    accounts() {
      return this.$store.state.accounts
    },
  },
  methods: {
    resetPagination() {
      this.pagination = {
        skip: 0,
        take: 100,
      }
    },
    onTransactionSelected(id) {
      this.$store.dispatch('fetchTransaction', { id })
      this.$modal.show('TransactionDetails')
    },
    async setStartDate(event) {
      this.filters.startDate = event.target.value
      const isValid = this.isValidFilter()
      if (isValid) {
        this.resetPagination()
        const transactions = await this.fetchTransactions()
        this.$store.commit('setTransactions', transactions)
        this.infiniteId++
      }
    },
    isStartDateInvalid() {
      return !this.isValidYearMonth(this.filters.startDate)
    },
    async setEndDate(event) {
      this.filters.endDate = event.target.value
      const isValid = this.isValidFilter()
      if (isValid) {
        this.resetPagination()
        const transactions = await this.fetchTransactions()
        this.$store.commit('setTransactions', transactions)
        this.infiniteId++
      }
    },
    isEndDateInvalid() {
      return !this.isValidYearMonth(this.filters.endDate)
    },
    async onSelectAccount(event) {
      this.filters.accountId = event.target.value
      const isValid = this.isValidFilter()
      if (isValid) {
        this.resetPagination()
        const transactions = await this.fetchTransactions()
        this.$store.commit('setTransactions', transactions)
        this.infiniteId++
      }
    },
    delegateConvertToRgba(category) {
      return this.convertToRgba(category)
    },
    isValidYearMonth(yearMonth) {
      if (!yearMonth) {
        return true
      }
      const yearMonthRegex = /^\d{4}-(0[1-9]|1[0-2])$/
      return yearMonthRegex.test(yearMonth)
    },
    isValidFilter() {
      return !this.isStartDateInvalid() && !this.isEndDateInvalid()
    },
    async fetchTransactions() {
      const response = await this.$axios.post(
        `${process.env.apiBaseUrl}/api/graphql`,
        {
          operationName: 'FilterTransactions',
          query: findAllTransactionsQuery,
          variables: {
            skip: this.pagination.skip || 0,
            take: this.pagination.take || 100,
            accountId: this.filters.accountId,
            startDate: this.filters.startDate,
            endDate: this.filters.endDate,
          },
        }
      )
      const transactions = response.data.data?.findAllTransactions

      return convertTransactions(transactions)
    },
    async infiniteScroll($state) {
      this.pagination.skip += this.pagination.take
      const transactions = await this.fetchTransactions()

      this.$store.commit('addTransactions', transactions)

      if (transactions && transactions.length) {
        $state.loaded()
      } else {
        $state.complete()
      }
    },
  },
}
</script>

<style>
.invalidDate {
  border-color: rgb(220, 50, 50);
  outline-color: rgb(220, 50, 50);
}
</style>
