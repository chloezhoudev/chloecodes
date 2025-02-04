'use client'

import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter((prev) => prev + 1)

  const decrement = () => setCounter((prev) => Math.max(0, prev - 1))

  return (
    <div className="flex w-64 flex-col items-center gap-4 rounded-lg border bg-white p-4 shadow-md dark:bg-gray-900">
      <span className="text-3xl font-bold text-gray-800 dark:text-gray-200">{counter}</span>
      <div className="flex gap-2">
        <button
          onClick={increment}
          className="rounded-lg bg-primary-500 px-4 py-2 text-lg font-semibold text-white shadow-md transition hover:bg-primary-600"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="hover:bg-grey-500 rounded-lg bg-gray-400 px-4 py-2 text-lg font-semibold text-white shadow-md transition"
        >
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
