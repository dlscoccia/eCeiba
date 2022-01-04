import React, { useState } from 'react';
import { Wrapper } from './DateInput.styles';
import data from '../../../core/api/db.json';
import { addDays } from '../../utils/addDays';

type DateInputProps = {
  totalPrice: number;
};

const DateInput: React.FC<DateInputProps> = ({ totalPrice }) => {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [holiday, setHoliday] = useState(false);
  const [shippingDay, setShippingDay] = useState(today);
  const holidayShipping = 16000;
  const normalShipping = 8000;
  const shippingPrice = holiday ? holidayShipping : normalShipping;

  const checkIsWeekend = (dateToCHeck: string) => {
    const dayOfTheWeek = new Date(dateToCHeck).getDay();
    const saturday = 5;
    const sunday = 6;
    const saturdayDiff = 2;
    if (dayOfTheWeek === saturday) {
      const newDay = addDays(dateToCHeck, saturdayDiff);
      setShippingDay(newDay);
      return newDay;
    } else if (dayOfTheWeek === sunday) {
      const newDay = addDays(dateToCHeck, 1);
      setShippingDay(newDay);
      return newDay;
    } else {
      setShippingDay(dateToCHeck);
      return dateToCHeck;
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
            Fecha estimada de entrega:{' '}
            <span className="message__price">{shippingDay}</span>
          </p>
          <p>
            Subtotal: $<span className="message__price">{totalPrice}</span>
          </p>
          <p>
            Precio despacho: $
            <span className="message__price">{shippingPrice}</span>
            <span
              className="recargo"
              style={{ display: holiday ? 'block' : 'none' }}
            >
              Recargo por día festivo
            </span>
          </p>
          <p>
            Total del pedido: $
            <span className="message__price">{totalPrice + shippingPrice}</span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default DateInput;
