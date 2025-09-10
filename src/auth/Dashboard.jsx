import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { 
  Search, 
  Plus, 
  Sun, 
  Bell, 
  User, 
  CheckCircle,
  TrendingUp,
  TrendingDown,
  MoreVertical,
  Eye,
  Home
} from 'lucide-react';
import logoImage from '../assets/logo.image.svg'
import menuIcon from '../assets/Menu icon.svg'

const Dashboard = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');
  const [notifications, setNotifications] = useState(1);

  // Sample data
  const sidebarItems = [
    { id: 'dashboard', icon: 'material-symbols:dashboard', label: 'Dashboard' },
    { id: 'transactions', icon: 'material-symbols:work-outline', label: 'Transactions' },
    { id: 'events', icon: 'material-symbols:event-outline', label: 'Events' },
    { id: 'clients', icon: 'material-symbols:person-search-outline', label: 'Clients' },
    { id: 'finances', icon: 'material-symbols:attach-money', label: 'Finances' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Marketing Meeting', date: 'March 13, 2025', time: '11:00am' },
    { id: 2, title: 'Team Sync', date: 'March 14, 2025', time: '2:00pm' },
    { id: 3, title: 'Client Review', date: 'March 15, 2025', time: '3:30pm' }
  ];

  const recentActivity = [
    { id: 1, action: '2 Transactions Created', time: '5 mins ago' },
    { id: 2, action: '3 Transactions Closed', time: '5 mins ago' },
    { id: 3, action: '2 Appointments scheduled', time: '5 mins ago' },
    { id: 4, action: '20 conversations logged', time: '5 mins ago' }
  ];

  const onboardingTasks = [
    { id: 1, title: 'Add Your First Transaction', completed: true, description: 'Log any deal - active, pending or closed. Just one brings your dashboard to life.' },
    { id: 2, title: 'Connect Your Calendar', completed: false },
    { id: 3, title: 'Connect Your Bank (Optional)', completed: false },
    { id: 4, title: 'Set Your First Goal', completed: false }
  ];

  // Event handlers
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log('Searching for:', e.target.value);
  };

  const handleAddTransaction = () => {
    alert('Add Transaction clicked! This would open a modal or navigate to add transaction page.');
  };

  const handleViewCalendar = () => {
    alert('View Calendar clicked! This would open calendar view.');
  };

  const handleViewReports = () => {
    alert('View Reports clicked! This would open reports page.');
  };

  const handleSidebarClick = (itemId) => {
    setActiveSidebarItem(itemId);
    console.log('Navigating to:', itemId);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const dismissOnboarding = () => {
    setShowOnboarding(false);
  };

  const handleNotificationClick = () => {
    setNotifications(0);
    alert('Notifications cleared!');
  };

  const handleEventMenuClick = (eventId) => {
    alert(`Event menu clicked for event ${eventId}`);
  };

  // Calculate progress
  const completedTasks = onboardingTasks.filter(task => task.completed).length;
  const progressPercentage = (completedTasks / onboardingTasks.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-6">
        <div className="flex items-center space-x-2">
          <div className="w-[54px] h-[54px]">
            <img src={logoImage} alt=""/>
            <Eye className="w-2 h-2 text-white" />
          </div>
        </div>
        
        <div className="flex flex-col space-y-4">
          {sidebarItems.map((item) => {
            const isActive = activeSidebarItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSidebarClick(item.id)}
                className={`w-12 h-12 rounded-[100px] flex items-center justify-center transition-colors ${
                  isActive 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title={item.label}
              >
                {item.id === 'dashboard' ? (
                  <img src={menuIcon} alt="Dashboard" className="w-[60px] h-[60px]" />
                ) : (
                  <Icon icon={item.icon} className="w-5 h-5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="">
                <Eye className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md mr-[400px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for transactions, clients, finances"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-10 pr-4 py-2  border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleAddTransaction}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add Transactions</span>
            </Button>
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <Sun className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNotificationClick}
              className="p-2 text-gray-400 hover:text-gray-600 relative"
            >
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-1">
              <span className="text-sm text-gray-600">1/4</span>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Commission Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                     <Icon icon="material-symbols:attach-money" className="w-5 h-5 text-green-600" />
                   </div>
                   <h3 className="text-lg font-semibold text-gray-900">Commission</h3>
                 </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Net Commission</p>
                  <p className="text-2xl font-bold text-gray-900">$400k</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">+12% from last year</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">GCI</p>
                  <p className="text-xl font-semibold text-gray-900">$400k</p>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Goal: $700 Commission</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closed Volume Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Closed Volume</h3>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">$8.5M</p>
                <p className="text-sm text-gray-600 mt-2">Total closed volume</p>
              </div>
            </div>

            {/* Onboarding Checklist */}
            {showOnboarding && (
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Setup Progress</span>
                    <span className="text-sm font-semibold text-gray-900">{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${progressPercentage}%`}}
                    ></div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">RealPeep Onboarding Checklist</h3>
                
                <div className="space-y-4">
                  {onboardingTasks.map((task) => (
                    <div key={task.id} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        task.completed 
                          ? 'bg-green-500' 
                          : 'border-2 border-gray-300'
                      }`}>
                        {task.completed && <CheckCircle className="w-3 h-3 text-white" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{task.title}</p>
                        {task.description && (
                          <p className="text-xs text-gray-600 mt-1">{task.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={dismissOnboarding}
                  className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  Don't show this again
                </Button>
              </div>
            )}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
                <Button 
                  onClick={handleViewCalendar}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                >
                  View Calendar
                </Button>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className={`flex items-center justify-between py-3 ${
                    index < upcomingEvents.length - 1 ? 'border-b border-gray-100' : ''
                  }`}>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{event.title}</p>
                      <p className="text-xs text-gray-600">{event.date} • {event.time}</p>
                    </div>
                    <button 
                      onClick={() => handleEventMenuClick(event.id)}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Earnings */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Earnings</h3>
                <Button 
                  onClick={handleViewReports}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                >
                  View Reports
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Net Income</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-xl font-semibold text-gray-900">$150,000</p>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600">+12.5% from last month</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">Business Expenses (This month)</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-xl font-semibold text-gray-900">$50,000</p>
                    <div className="flex items-center space-x-1">
                      <TrendingDown className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-600">+8.3% from last month</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">Avg. Cost per Listing</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-xl font-semibold text-gray-900">$100</p>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600">+15.2% from last month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity</h3>
              
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <span className="text-xs text-gray-500 ml-auto">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;