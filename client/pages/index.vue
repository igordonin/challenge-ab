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
              <input
                class="w-5/6 rounded-none border-2 border-gray-200 mt-2 p-1"
                type="text"
              />
            </div>
            <div>
              <label class="text-gray-700" for="start-month">Start Month</label>
              <input
                class="w-5/6 rounded-none border-2 border-gray-200 mt-2 p-1"
                type="text"
              />
            </div>
            <div>
              <label class="text-gray-700" for="end-month">End Month</label>
              <input
                class="w-5/6 rounded-none border-2 border-gray-200 mt-2 p-1"
                type="text"
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
                <tr v-for="transaction of transactions" :key="transaction.id">
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
  </section>
</template>

<script>
const query = `
query FindAllTransactions($skip: Int!, $take: Int!) { 
  findAllTransactions(skip: $skip, take: $take) { 
    id 
    reference 
    category { 
      id 
      name 
    } 
    date 
    amount 
    currency 
  } 
}
`

export default {
  name: 'IndexPage',
  async asyncData({ $axios }) {
    // TODO: Fix api client URL
    const response = await $axios.post('http://localhost:4000/api/graphql', {
      operationName: 'FindAllTransactions',
      query,
      variables: {
        skip: 2000,
        take: 200,
      },
    })

    const transactions = response.data.data.findAllTransactions

    return {
      // TODO: Fix pagination
      currentPage: 1,
      transactions: transactions.map((t) => {
        return {
          id: t.id,
          reference: t.reference,
          date: new Date(t.date).toLocaleDateString(),
          amount: t.amount.toFixed(2),
          currency: t.currency,
          category: t.category || {},
        }
      }),
    }
  },
}
</script>
