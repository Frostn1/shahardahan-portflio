'use client';

import AnimatedBoxes from './AnimatedBoxes';

// Custom box data for demonstration
const customBoxes = [
  {
    id: 1,
    color: 'from-indigo-600 via-purple-600 to-pink-600',
    title: 'Welcome',
    content: 'Experience smooth transitions and beautiful gradients with our animated box component.'
  },
  {
    id: 2,
    color: 'from-emerald-500 via-teal-500 to-cyan-500',
    title: 'Features',
    content: 'Auto-advance timer, scroll navigation, pause on hover, and fully customizable content.'
  },
  {
    id: 3,
    color: 'from-amber-500 via-orange-500 to-red-500',
    title: 'Interactive',
    content: 'Use mouse wheel, click navigation arrows, or dots to control the presentation.'
  },
  {
    id: 4,
    color: 'from-rose-500 via-pink-500 to-fuchsia-500',
    title: 'Responsive',
    content: 'Glass morphism design that looks great on any device with smooth animations.'
  }
];

export default function AnimatedBoxesExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Animated Boxes Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            An interactive component with auto-advancing slides, scroll navigation,
            and beautiful glass morphism effects.
          </p>
        </div>

        {/* Default Example */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Default Configuration (20 seconds)
          </h2>
          <AnimatedBoxes />
        </div>

        {/* Custom Example */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Custom Content & Faster Timer (10 seconds)
          </h2>
          <AnimatedBoxes
            boxes={customBoxes}
            autoAdvanceTime={10}
          />
        </div>

        {/* Usage Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            How to Use
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Navigation</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Scroll with mouse wheel</li>
                <li>• Click navigation arrows</li>
                <li>• Click indicator dots</li>
                <li>• Hover to pause timer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Features</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Auto-advance with progress bar</li>
                <li>• Glass morphism design</li>
                <li>• Smooth animations</li>
                <li>• Fully customizable</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
