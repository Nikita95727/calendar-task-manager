import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Month from './Month';
import Sidebar from '../utils/Sidebar';
import Labels from '../components/labels/Labels';
import IO from '../utils/ExportImport';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";



/**
 * Styled component for the main container.
 */
const Main = styled.div`
  background-color: #eeeff1;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

/**
 * Styled component for the header.
 */
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 12px 24px;
  background-color: #eeeff1;
`;

/**
 * Styled component for the header title.
 */
const HeaderTitle = styled.h1`
  display: inline-block;
  font-size: 24px;
  margin: 0 0 0 32px;
  color: black;
`;

/**
 * Styled component for the button.
 */

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Button = styled.button`
  background-color: #e3e4e6;
  color: black;
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 4px;
  cursor: pointer;
  transition-duration: 0.4s;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26), 0 2px 10px 0 rgba(0,0,0,0.16);
  outline: none;
  &:hover {
    background-color: #d3d4d6;
  }
`;


/**
 * Styled component for the months wrapper.
 */
const MonthsWrap = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;
`;

/**
 * A calendar component.
 */
const Calendar: React.FC = () => {
  const [prevMonth, setPrevMonth] = useState<Date[]>([]);
  const [currentMonth, setCurrentMonth] = useState<Date[]>([]);
  const [nextMonth, setNextMonth] = useState<Date[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  /**
   * Effect hook to generate the current, previous, and next months.
   */
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    setCurrentMonth(generateMonth(year, month));
    setPrevMonth(generateMonth(year, month - 1));
    setNextMonth(generateMonth(year, month + 1));
  }, [currentDate]);

  /**
   * Generates a month.
   *
   * @param {number} year - The year of the month.
   * @param {number} month - The month.
   * @returns {Date[]} The dates of the month.
   */
  const generateMonth = (year: number, month: number): Date[] => {
    const result = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      result.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return result;
  };

  /**
   * Handles the previous month button click.
   */
  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  /**
   * Handles the next month button click.
   */
  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  /**
   * Handles the today button click.
   */
  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const [activeSidebarComponent, setActiveSidebarComponent] = useState('');

  return (
    <Main>
      <Header>
        <ButtonBox>
        <Button onClick={() => setActiveSidebarComponent('Labels')}>Labels</Button>
          <Button onClick={handlePrevMonth}>
            {/* @ts-ignore */}
            < MdKeyboardArrowUp  size={20} />
          </Button>
          <Button onClick={handleToday}>Today</Button>
          <Button onClick={handleNextMonth}>
            {/* @ts-ignore */}
            <MdKeyboardArrowDown size={20} />
          </Button>
        </ButtonBox>
        <HeaderTitle>{currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</HeaderTitle>
        <ButtonBox>
          <Button>Week</Button>
          <Button>Month</Button>
        </ButtonBox>
      </Header>
      <MonthsWrap>
        {activeSidebarComponent === 'Labels' && 
          <Sidebar title="Labels">
            <Labels />
          </Sidebar>
        }
        {activeSidebarComponent === 'IO' && 
          <Sidebar title="Export/Import">
            <IO />
          </Sidebar>
        }
        <Month days={currentMonth} prevMonthDays={prevMonth} nextMonthDays={nextMonth} />
      </MonthsWrap>
    </Main>
  );
};

export default Calendar;