import React, { useState } from 'react';
import { Wrapper } from './DateInput.styles';
import data from '../../../core/api/db.json';

const addDays = (dateToAdd: string, days: number) => {
  const newDate = new Date(dateToAdd);
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

  const chekIsHoliday = (dateToCheck: string) => {
    const isHoliday = data.holidays.includes(dateToCheck);
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
    <Wrapper>
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
            Precio despacho: {holiday ? '$16000' : '$8000'}
            <span
              className="recargo"
              style={{ display: holiday ? 'block' : 'none' }}
            >
              Recargo por día festivo
            </span>
          </p>
          <p>Fecha estimada de entrega: {shippingDay}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default DateInput;
