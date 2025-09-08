'use client';

export function FloatingElements() {
  return (
    <>
      {/* Floating geometric shapes */}
      <div className="floating-element top-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-12" 
           style={{ animationDelay: '0s' }} />
      <div className="floating-element top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" 
           style={{ animationDelay: '2s' }} />
      <div className="floating-element bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg transform -rotate-12" 
           style={{ animationDelay: '4s' }} />
      <div className="floating-element top-60 right-10 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" 
           style={{ animationDelay: '1s' }} />
      <div className="floating-element bottom-20 right-40 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg transform rotate-45" 
           style={{ animationDelay: '3s' }} />
      
      {/* Additional floating elements for depth */}
      <div className="floating-element top-32 left-1/2 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-30" 
           style={{ animationDelay: '5s' }} />
      <div className="floating-element bottom-60 left-1/3 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-25" 
           style={{ animationDelay: '1.5s' }} />
    </>
  );
}
