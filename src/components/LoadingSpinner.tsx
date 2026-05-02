import { cn } from '../lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  fullPage?: boolean
}

const sizeMap = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-14 h-14 border-4',
}

const LoadingSpinner = ({ size = 'md', fullPage = false }: LoadingSpinnerProps) => {
  const spinner = (
    <div
      className={cn(
        'rounded-full border-gray-300 border-t-blue-500 animate-spin',
        sizeMap[size]
      )}
    />
  )

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
        {spinner}
      </div>
    )
  }

  return spinner


export default LoadingSpinner