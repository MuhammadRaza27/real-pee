import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import badgeImage from '../assets/Badge.svg'
import badgeBaseImage from '../assets/_Badge base.svg'
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
import transactionsIcon from '../assets/trans.icon.svg.svg'
import calendarIcon from '../assets/Calender icon.svg'
import prospectsIcon from '../assets/Prospecting icon.svg'
import financesIcon from '../assets/Finance icon.svg'
import frameImage from '../assets/Frame.png'

const Dashboard = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');
  const [notifications, setNotifications] = useState(1);
  const [expandedTask, setExpandedTask] = useState(1); // Track which task is expanded
  const [completedTasks, setCompletedTasks] = useState([1]); // Track completed tasks
  const [sidebarOpen, setSidebarOpen] = useState(false); // Track sidebar state

  // Sample data
  const sidebarItems = [
    { id: 'dashboard', icon: 'material-symbols:dashboard', label: 'Dashboard' },
    { id: 'transactions', icon: 'material-symbols:work-outline', label: 'Transactions' },
    { id: 'calendar', icon: 'material-symbols:calendar-today', label: 'Calendar' },
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
    { 
      id: 1, 
      title: 'Add Your First Transaction', 
      description: 'Log any deal - active, pending or closed. Just one brings your dashboard to life.',
      optional: false
    },
    { 
      id: 2, 
      title: 'Connect Your Calendar', 
      description: 'Stay organized. Never miss a showing or follow-up.',
      optional: true
    },
    { 
      id: 3, 
      title: 'Connect Your Bank', 
      description: 'Track your real income automatically.',
      optional: true
    },
    { 
      id: 4, 
      title: 'Set Your First Goal', 
      description: "Let's define success - track it in real time.",
      optional: false
    }
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

  const toggleTaskExpansion = (taskId) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const toggleTaskCompletion = (taskId, e) => {
    e.stopPropagation(); // Prevent expansion when clicking checkbox
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Calculate progress
  const completedTasksCount = completedTasks.length;
  const progressPercentage = (completedTasksCount / onboardingTasks.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex overflow-hidden">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        <Icon icon="material-symbols:menu" className="w-6 h-6 text-gray-600" />
      </button>

      {/* Left Sidebar */}
      <div className={`w-[76px] bg-gray-50 border-r border-gray-200 flex flex-col items-center py-2 space-y-6 flex-shrink-0 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } fixed lg:relative z-30 h-full lg:top-0 top-16`}>
        
        <div className="flex items-center space-x-2">
          <div className="w-[54px] h-[54px]">
            <img src={logoImage} alt=""/>
            
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
                    ? 'bg-red-100 text-green-600' 
                    : ' text-gray-600 hover:bg-gray-200'
                }`}
                title={item.label}
              >
                {item.id === 'dashboard' ? (
                  <img src={menuIcon} alt="Dashboard" className="w-[60px] h-[60px]" />
                ) : item.id === 'transactions' ? (
                  <img src={transactionsIcon} alt="Transactions" className="w-[60px] h-[60px]" />
                ) : item.id === 'calendar' ? (
                  <img src={calendarIcon} alt="Calendar" className="w-[60px] h-[60px]" />
                ) : item.id === 'clients' ? (
                  <img src={prospectsIcon} alt="Prospects" className="w-[60px] h-[60px]" />
                ) : item.id === 'finances' ? (
                  <img src={financesIcon} alt="Finances" className="w-[60px] h-[60px]" />
                ) : (
                  <Icon icon={item.icon} className="w-5 h-5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col min-w-0 w-full transition-all duration-300 ${
        sidebarOpen ? 'ml-[76px]' : 'ml-0'
      } lg:ml-0`}>
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
            </div>
          </div>

          <div className="flex-1 flex items-start pl-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085] w-5 h-5" />
              <input
                type="text"
                placeholder="Search for transactions, clients, finances"
                value={searchQuery}
                onChange={handleSearch} 
              className="w-[400px] h-[40px] pl-10 pr-4 py-2 border border-[#E5E7EB] text-base text-[#6E6E6E] placeholder:text-[#6E6E6E] rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button 
              onClick={handleAddTransaction}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg flex items-center space-x-2 text-sm"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Transactions</span>
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
        <div className="flex-1 p-6 relative overflow-x-auto">
          <div className="mb-8 mt-2">
            <h1 className="text-[24px] font-bold text-[#1A1A1A]">Welcome back</h1>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-[24px] mb-6">
            {/* Commission Card */}
            <div className="bg-white rounded-xl xl:col-span-2 h-[346px] p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                     <img src={badgeImage} alt="Badge" className="w-20 h-20" />
                   </div>
                   <h3 className="text-lg font-medium text-gray-900">Commission</h3>
                 </div>
              </div>
              
              <div className="">
                <div className="grid grid-cols-2">
                  <div className="text-left flex flex-col justify-start">
                    <p className="text-[12px] text-[#323B4A]">Net Commission</p>
                    <p className="text-2xl font-bold text-[#00875A]">$400k</p>
                    
                  </div>
                  
                  <div className="text-left flex flex-col justify-start">
                    <p className="text-[12px] text-[#323B4A]">GCI</p>
                    <p className="text-[24px] font-bold text-[#1A1A1A]">$400k</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                      {/* <TrendingUp className="w-4 h-4 text-green-500" /> */}
                      <span className="text-sm text-[#31951D]">+12% from last year</span>
                  </div>          
                <div>
                  <div className="flex justify-between text-[12px] text-[#323B4A] font-medium mb-2 mt-8">
                    <span>Goal: $700 Commission</span>
                    <span>70%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-300 h-4 rounded-full">
                      <div className="bg-[#0065FF] h-4 rounded-full transition-all duration-300 relative" style={{width: '70%'}}>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#E5E7EB] rounded-full border-2 border-blue-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Closed Volume Line */}
                  <div className="mt-8 flex items-center justify-between py-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <img src={badgeBaseImage} alt="Badge" className="w-10 h-10" />
                      </div>
                      <span className="text-base font-medium text-[#1A1A1A]">Closed Volume</span>
                    </div>
                    <span className="text-sm font-bold text-[#00875A]">$8.5M</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transactions Card */}
            <div className="bg-white rounded-xl xl:col-span-1 h-[346px] p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Transactions</h3>
              
              <div className="flex justify-between items-center h-full relative ">
                {/* Active Transactions */}
                <div className="flex flex-col  items-center space-y-3 ">
                  <span className="inline-block px-3 py-1 text-xs  font-medium text-green-600 bg-green-100 rounded-full">
                    Active
                  </span>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">12</span>
                  </div>
                </div>
                
                {/* Vertical Line 1 */}
                <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 w-px h-40 bg-gray-300"></div>
                
                {/* Pending Transactions */}
                <div className="flex flex-col items-center space-y-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full">
                    Pending
                  </span>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">14</span>
                  </div>
                </div>
                
                {/* Vertical Line 2 */}
                <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2 w-px h-40 bg-gray-300"></div>
                
                {/* Closed Transactions */}
                <div className="flex flex-col items-center space-y-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
                    Closed
                  </span>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Onboarding Checklist */}
            {showOnboarding && (
              <div className="absolute top-4 right-4 flex items-start justify-end z-50">
                <div className="bg-white rounded-xl w-[375px] max-w-[calc(100vw-2rem)] p-6 border border-gray-200">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[20px] font-bold text-[#1A1A1A]">Setup Progress : {Math.round(progressPercentage)}%</span>
                    
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                      style={{width:  `${progressPercentage}%`}}
                    ></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-9">RealPeep Onboarding 
                  <br />
                  Checklist</h3>
                
                <div className="space-y-4">
                  {onboardingTasks.map((task) => {
                    const isExpanded = expandedTask === task.id;
                    const isCompleted = completedTasks.includes(task.id);
                    return (
                      <div key={task.id} className=" rounded-lg p-1 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start space-x-3">
                          <div 
                            className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 cursor-pointer transition-colors ${
                              isCompleted 
                                ? 'bg-green-500 hover:bg-green-600' 
                                : 'border-2 border-gray-300 hover:border-green-400'
                            }`}
                            onClick={(e) => toggleTaskCompletion(task.id, e)}
                          >
                            {isCompleted && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                          <div 
                            className="flex-1 cursor-pointer"
                            onClick={() => toggleTaskExpansion(task.id)}
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">
                                {task.title}
                                {task.optional && (
                                  <span className="text-xs text-gray-500 ml-1">(Optional)</span>
                                )}
                              </p>
                              <div className="flex items-center space-x-2">
                                {task.optional && (
                                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                                    Optional
                                  </span>
                                )}
                                <div className="w-4 h-4 flex items-center justify-center">
                                  {isExpanded ? (
                                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                  ) : (
                                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  )}
                                </div>
                              </div>
                            </div>
                            {isExpanded && task.description && (
                              <p className="text-xs text-gray-600 mt-2 pr-4">{task.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Button 
                  onClick={dismissOnboarding}
                  className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                  Don't show this again
                </Button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row gap-[24px]">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl w-[422.33px] h-[346px] p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-[#1A1A1A]">Upcoming Events</h3>
                <Button 
                  onClick={handleViewCalendar}
                  className="text-[#00875A] px-3 py-2 border border-[#00875A] rounded-lg text-sm"
                >
                  View Calendar
                </Button>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={event.id} className={`flex items-center justify-between py-3 relative rounded-l-[8px] rounded-r-[8px] ${
                    index < upcomingEvents.length - 0 ? ' bg-[#F9FAFB]' : ''
                  }`} style={{borderLeft: '2px solid #00875A'}}>
                    <div className="ml-4">
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
            <div className="flex flex-col w-[422.33px] h-[346px] bg-white rounded-xl p-6 border border-gray-200">
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
            <div className="flex flex-col w-[422.33px] h-[346px] bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Activity</h3>
              
              <div className="flex-1 flex items-start justify-center -mt-24">
                <img src={frameImage} alt="Activity" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;