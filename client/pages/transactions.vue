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
                    <div class="font-semibold text-center">Amount</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/57.jpg"
                          width="40"
                          height="40"
                          alt="Susan Boreshko"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Susan Boreshko
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">susanboreshko@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/88.jpg"
                          width="40"
                          height="40"
                          alt="Filipe Tadeu"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Filipe Tadeu</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">filipe.t@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,767.04
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/94.jpg"
                          width="40"
                          height="40"
                          alt="Raphael Sputnik"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Raphael Sputnik
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">sputnik.r@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,996.00
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/65.jpg"
                          width="40"
                          height="40"
                          alt="Mary Kay"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Mary Kay</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mary.k@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,220.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/30.jpg"
                          width="40"
                          height="40"
                          alt="Yasmin Mahatma"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Yasmin Mahatma
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mimi.maha@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>

                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/57.jpg"
                          width="40"
                          height="40"
                          alt="Susan Boreshko"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Susan Boreshko
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">susanboreshko@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/88.jpg"
                          width="40"
                          height="40"
                          alt="Filipe Tadeu"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Filipe Tadeu</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">filipe.t@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,767.04
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/94.jpg"
                          width="40"
                          height="40"
                          alt="Raphael Sputnik"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Raphael Sputnik
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">sputnik.r@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,996.00
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/65.jpg"
                          width="40"
                          height="40"
                          alt="Mary Kay"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Mary Kay</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mary.k@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,220.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/30.jpg"
                          width="40"
                          height="40"
                          alt="Yasmin Mahatma"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Yasmin Mahatma
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mimi.maha@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>

                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/57.jpg"
                          width="40"
                          height="40"
                          alt="Susan Boreshko"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Susan Boreshko
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">susanboreshko@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/88.jpg"
                          width="40"
                          height="40"
                          alt="Filipe Tadeu"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Filipe Tadeu</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">filipe.t@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,767.04
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/94.jpg"
                          width="40"
                          height="40"
                          alt="Raphael Sputnik"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Raphael Sputnik
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">sputnik.r@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,996.00
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/65.jpg"
                          width="40"
                          height="40"
                          alt="Mary Kay"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Mary Kay</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mary.k@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,220.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/30.jpg"
                          width="40"
                          height="40"
                          alt="Yasmin Mahatma"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Yasmin Mahatma
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mimi.maha@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>

                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/57.jpg"
                          width="40"
                          height="40"
                          alt="Susan Boreshko"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Susan Boreshko
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">susanboreshko@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/88.jpg"
                          width="40"
                          height="40"
                          alt="Filipe Tadeu"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Filipe Tadeu</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">filipe.t@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,767.04
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/94.jpg"
                          width="40"
                          height="40"
                          alt="Raphael Sputnik"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Raphael Sputnik
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">sputnik.r@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,996.00
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/65.jpg"
                          width="40"
                          height="40"
                          alt="Mary Kay"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Mary Kay</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mary.k@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,220.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/30.jpg"
                          width="40"
                          height="40"
                          alt="Yasmin Mahatma"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Yasmin Mahatma
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mimi.maha@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>

                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/57.jpg"
                          width="40"
                          height="40"
                          alt="Susan Boreshko"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Susan Boreshko
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">susanboreshko@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/88.jpg"
                          width="40"
                          height="40"
                          alt="Filipe Tadeu"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Filipe Tadeu</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">filipe.t@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,767.04
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/men/94.jpg"
                          width="40"
                          height="40"
                          alt="Raphael Sputnik"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Raphael Sputnik
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">sputnik.r@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $2,996.00
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/65.jpg"
                          width="40"
                          height="40"
                          alt="Mary Kay"
                        />
                      </div>
                      <div class="font-medium text-gray-800">Mary Kay</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mary.k@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,220.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img
                          class="rounded-full"
                          src="https://randomuser.me/api/portraits/women/30.jpg"
                          width="40"
                          height="40"
                          alt="Yasmin Mahatma"
                        />
                      </div>
                      <div class="font-medium text-gray-800">
                        Yasmin Mahatma
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">mimi.maha@gmail.com</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      $1,890.66
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">??</div>
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
export default {
  name: 'TransactionsPage',

  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client',
    }
  },
}
</script>
