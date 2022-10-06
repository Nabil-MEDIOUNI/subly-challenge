import { CardStatus } from './styles';

interface StatusProps {
  status: string;
  updatedAt: string;
}

export default function Status({ status, updatedAt }: StatusProps) {
  const getCurrentYear = new Date().getFullYear();
  const getCurrentMonth = new Date().getMonth() + 1;
  const getCurrentHour = new Date().getHours();
  const getCurrentMinute = new Date().getMinutes();
  const getYearUpdatedAt = new Date(updatedAt).getFullYear();
  const getMonthUpdatedAt = new Date(updatedAt).getMonth() + 1;
  const getHourUpdatedAt = new Date(updatedAt).getHours();
  const getMinuteUpdatedAt = new Date(updatedAt).getMinutes();

  const getDateUpdatedAt = () => {
    const calculatedYear = getCurrentYear - getYearUpdatedAt;
    const calculatedHour = getCurrentHour - getHourUpdatedAt;
    const calculatedMinute = getCurrentMinute - getMinuteUpdatedAt;
    if (calculatedMinute > 0 && calculatedYear === 0)
      return `${calculatedMinute} min`;
    if (calculatedMinute === 0 && calculatedYear === 0)
      return `${calculatedMinute} min`;
    if (calculatedHour > 0 && calculatedYear === 0)
      return `${calculatedHour} hour`;
    if (calculatedHour === 0 && calculatedYear === 0)
      return `${calculatedHour} hour`;
    if (calculatedYear > 0) return `${calculatedYear} year`;
    return `${getCurrentMonth - getMonthUpdatedAt} month`;
  };

  const getStatus = () => {
    switch (status) {
      case 'ready':
        return `Edited ${getDateUpdatedAt()} ago`;
      case 'error':
        return 'Error in processing';
      default:
        return 'Transcribing';
    }
  };

  return <CardStatus>{getStatus()}</CardStatus>;
}
