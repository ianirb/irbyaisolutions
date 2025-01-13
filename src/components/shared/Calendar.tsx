import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface CalendarProps {
  onSelect: (date: Date, time: string) => void;
  selectedDate: Date | null;
  selectedTime: string | null;
}

const timeSlots: TimeSlot[] = [
  { time: '9:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: true },
  { time: '1:00 PM', available: true },
  { time: '2:00 PM', available: true },
  { time: '3:00 PM', available: true },
  { time: '4:00 PM', available: true }
];

export default function Calendar({ onSelect, selectedDate, selectedTime }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Get next 10 business days
  const getBusinessDays = () => {
    const days: Date[] = [];
    let currentDate = new Date();
    
    while (days.length < 10) {
      // Skip weekends
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        days.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  };

  const availableDays = getBusinessDays();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const isDateSelected = (date: Date) => {
    return selectedDate?.toDateString() === date.toDateString();
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-6">
          <CalendarIcon className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Select Date & Time</h3>
        </div>

        {/* Available Days */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {availableDays.map((date, index) => (
            <button
              key={index}
              onClick={() => onSelect(date, selectedTime || '')}
              className={`
                p-3 rounded-lg text-center transition-all duration-300
                ${isDateSelected(date)
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-500/10 text-gray-300 hover:bg-blue-500/20'
                }
              `}
            >
              <div className="text-sm font-semibold">{formatDate(date)}</div>
            </button>
          ))}
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300">Available Times</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => onSelect(selectedDate, slot.time)}
                  disabled={!slot.available}
                  className={`
                    p-2 rounded-lg text-center text-sm transition-all duration-300
                    ${selectedTime === slot.time
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500/10 text-gray-300 hover:bg-blue-500/20'
                    }
                    ${!slot.available && 'opacity-50 cursor-not-allowed'}
                  `}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}