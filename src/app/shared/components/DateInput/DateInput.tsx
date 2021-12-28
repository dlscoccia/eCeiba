import React, { useState } from 'react';
import './DateInput.css';
import holidays from '../../../core/api/holidays.json';

const addDays = (date: string, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate.toISOString().split('T')[0];
};

const DateInput = () => {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [holiday, setHoliday] = useState(false);
  const [shippingDay, setShippingDay] = useState('');

  const checkIsWeekend = (date: string) => {
    const dayOfTheWeek = new Date(date).getDay();
    if (dayOfTheWeek === 5) {
      const newDay = addDays(date, 2);
      setShippingDay(newDay);
      return newDay;
    } else if (dayOfTheWeek === 6) {
      const newDay = addDays(date, 1);
      setShippingDay(newDay);
      return newDay;
    } else {
      setShippingDay(date);
      return date;
    }
  };

  const chekIsHoliday = (date: string) => {
    const isHoliday = holidays[0].holidays.includes(date);
    if (isHoliday) {
      setHoliday(true);
    } else {
      setHoliday(false);
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value.toString();
    const isWeekend = checkIsWeekend(newDate);
    chekIsHoliday(isWeekend);
    setDate(newDate);
  };
  return (
    <div className="container">
      <div className="calendar">
        <label htmlFor="date">Fecha</label>
        <input
          type="date"
          id="date"
          lang="es-ES"
          min={today}
          onChange={(e) => handleDateChange(e)}
          value={date}
        />
      </div>
      <div className="message">
        <p>
          Precio: {holiday ? '$16000' : '$8000'}
          <span
            className="recargo"
            style={{ display: holiday ? 'inline' : 'none' }}
          >
            Recargo por día festivo
          </span>
        </p>
        <p>Fecha estimada de entrega: {shippingDay}</p>
      </div>
    </div>
  );
};

export default DateInput;
