
import React from 'react';

interface ResultPageProps {
  result: { [key: string]: string };
}

const ResultPage: React.FC<ResultPageProps> = ({ result }) => {
  return (
    <table border={1}>
      {Object.entries(result).map(([key, value]) => (
        <tr key={key}>
          <th>{key}</th>
          <td>{value}</td>
        </tr>
      ))}
    </table>
  );
};

export default ResultPage;
