<template>
  <div class="flex items-center justify-center">
    <div class="p-5 bg-white w-full">
      <div class="flex w-full items-center justify-between pb-3">
        <div class="flex items-center space-x-3">
          <div class="text-lg font-bold text-slate-700">
            {{ details.account.name }}
          </div>
        </div>
        <div class="flex items-center space-x-8">
          <button
            class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-gray-200 rounded-md"
            :style="{
              backgroundColor: convert(details.category),
            }"
          >
            {{ details.category.name || 'Uncategorized' }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-10">
        <div>
          <div class="text-sm text-neutral-600">
            {{ details.reference || 'No reference provided' }}
          </div>
        </div>
        <div>
          <div class="text-right items-center">
            <span class="font-semibold text-xl text-gray-700">{{
              details.amount
            }}</span>
            <span class="font-semibold text-sm text-gray-400">{{
              details.currency
            }}</span>
          </div>
        </div>
      </div>

      <div class="text-xs text-neutral-500 pt-2">{{ details.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionDetails',
  computed: {
    details() {
      return this.$store.state.transactionDetails
    },
  },
  methods: {
    convert(category) {
      return this.convertToRgba(category)
    },
  },
}
</script>
