import { CardStatus } from './styles';

interface StatusProps {
  status: string;
  updatedAt: string;
}

export default function Status({ status, updatedAt }: StatusProps) {
  const getCurrentYear = new Date().getFullYear();
  const getCurrentMonth = new Date().getMonth() + 1;
  const getYearUpdatedAt = new Date(updatedAt).getFullYear();
  const getMonthUpdatedAt = new Date(updatedAt).getMonth() + 1;

  const getDateUpdatedAt = () => {
    const calculatedYear = getCurrentYear - getYearUpdatedAt;
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
