import React, { useState, useEffect } from 'react';
import { TourProvider, useTour } from '@reactour/tour';
import { Button } from './ui/button';
import { SkipForward } from 'lucide-react';

const tourConfig = [
  {
    selector: '[data-tour="welcome"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome to RealPeep Dashboard! 👋</h3>
        <p className="text-gray-600">
          This is your main dashboard where you can manage transactions, view analytics, and track your real estate business performance.
        </p>
      </div>
    ),
    position: 'bottom',
    highlightedSelectors: ['[data-tour="welcome"]'],
    mutationObservables: ['[data-tour="welcome"]'],
    resizeObservables: ['[data-tour="welcome"]'],
  },
  {
    selector: '[data-tour="search"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Search Functionality 🔍</h3>
        <p className="text-gray-600">
          Use this search bar to quickly find transactions, clients, or any financial data. It's your quick access to all information.
        </p>
      </div>
    ),
    position: 'bottom',
  },
  {
    selector: '[data-tour="add-transaction"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Add New Transaction ➕</h3>
        <p className="text-gray-600">
          Click here to add new transactions, deals, or any real estate activity. This is where you log your business activities.
        </p>
      </div>
    ),
    position: 'bottom',
  },
  {
    selector: '[data-tour="commission-card"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Commission Tracking 💰</h3>
        <p className="text-gray-600">
          This card shows your commission progress, goals, and closed volume. Track your earnings and performance here.
        </p>
      </div>
    ),
    position: 'top',
  },
  {
    selector: '[data-tour="transactions-card"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Transaction Status 📊</h3>
        <p className="text-gray-600">
          View your active, pending, and closed transactions at a glance. This gives you a quick overview of your pipeline.
        </p>
      </div>
    ),
    position: 'top',
  },
  {
    selector: '[data-tour="upcoming-events"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Upcoming Events 📅</h3>
        <p className="text-gray-600">
          Never miss important meetings or appointments. This section shows your upcoming events and calendar activities.
        </p>
      </div>
    ),
    position: 'top',
  },
  {
    selector: '[data-tour="earnings"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Earnings Overview 💵</h3>
        <p className="text-gray-600">
          Track your net income, business expenses, and cost per listing. Monitor your financial performance here.
        </p>
      </div>
    ),
    position: 'top',
  },
  {
    selector: '[data-tour="activity"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Recent Activity 📈</h3>
        <p className="text-gray-600">
          Stay updated with your recent activities, transactions created, and business updates. This keeps you informed.
        </p>
      </div>
    ),
    position: 'top',
  },
  {
    selector: '[data-tour="sidebar"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Navigation Menu 🧭</h3>
        <p className="text-gray-600">
          Use the sidebar to navigate between different sections: Dashboard, Transactions, Calendar, Clients, and Finances.
        </p>
      </div>
    ),
    position: 'right',
  },
  {
    selector: '[data-tour="onboarding"]',
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Setup Progress 🚀</h3>
        <p className="text-gray-600">
          Complete your onboarding checklist to get the most out of RealPeep. Follow the steps to set up your account properly.
        </p>
      </div>
    ),
    position: 'left',
  }
];

const TourControls = () => {
  const { setIsOpen, isOpen, setCurrentStep, currentStep, steps } = useTour();

  console.log('🔍 TourControls rendered:', { isOpen, currentStep, steps: steps?.length });

  useEffect(() => {
    console.log('🔍 Tour Debug: Component mounted');
    
    // Check if user has seen tour before
    const seenTour = localStorage.getItem('realpeep-tour-seen');
    
    console.log('🔍 Tour Debug:', { 
      seenTour, 
      willStart: !seenTour 
    });
    
    // Only start tour if never seen before
    if (!seenTour) {
      console.log('✅ Starting tour...');
      
      // Auto-start tour after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    } else {
      console.log('❌ Tour not starting - already seen');
    }
  }, [setIsOpen]);

  const skipTour = () => {
    setIsOpen(false);
    localStorage.setItem('realpeep-tour-seen', 'true');
    console.log('✅ Tour skipped and saved - won\'t show again until new login');
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Tour completed - save to localStorage
      setIsOpen(false);
      localStorage.setItem('realpeep-tour-seen', 'true');
      console.log('✅ Tour completed and saved - won\'t show again until new login');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // No controls - tour runs automatically
  return null;
};

const WebsiteTour = ({ children }) => {
  return (
    <TourProvider
      steps={tourConfig}
      styles={{
        popover: (base) => ({
          ...base,
          '--reactour-accent': '#3B82F6',
          borderRadius: 12,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }),
        maskArea: (base) => ({ ...base, rx: 8 }),
        badge: (base) => ({ ...base, left: 'auto', right: '-0.8125em' }),
        controls: (base) => ({ ...base, marginTop: 32 }),
        close: (base) => ({ ...base, right: 8, top: 8 }),
      }}
      padding={{ mask: 8 }}
      className="reactour__mask"
    >
      {children}
      <TourControls />
    </TourProvider>
  );
};

export default WebsiteTour;
