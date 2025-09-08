'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card p-8 text-center max-w-md">
        <div className="w-16 h-16 bg-error bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-error text-2xl">⚠️</span>
        </div>
        
        <h2 className="text-heading mb-4">Something went wrong!</h2>
        
        <p className="text-body mb-6">
          We encountered an error while loading the liquidity navigator. Please try again.
        </p>
        
        <button
          onClick={reset}
          className="bg-gradient-to-r from-accent to-primary text-white px-6 py-3 rounded-lg font-medium hover:from-accent/90 hover:to-primary/90 transition-all duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
