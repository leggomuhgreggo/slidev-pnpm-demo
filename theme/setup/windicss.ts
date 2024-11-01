import { resolve } from 'path'
import { defineWindiSetup } from '@slidev/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#000] text-[#fff])',
    'hstack': 'flex items-center',
    'vstack': 'flex flex-col',
    'icon': 'w-6 h-6 fill-current',
    'app-border': 'border-gray-200 dark:border-dark-300',
    'app-modal': 'fixed top-0 w-full h-full z-50 bg-white bg-opacity-70 blur-5 shadow-lg',
  },
}))