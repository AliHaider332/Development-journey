import { useEffect, useState } from 'react';

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="card text-center shadow p-4" style={{ maxWidth: '30rem' }}>
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Digital Clock</h4>
      </div>
      <div className="card-body">
        <p
          className="clock-display text-dark"
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            letterSpacing: '3px',
          }}
        >
          <p
            className="clock-display text-dark"
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              letterSpacing: '3px',
            }}
          >
            <span>
              {(currentTime.getHours() % 12 || 12).toString().padStart(2, '0')}
            </span>
            <span> : </span>
            <span>{currentTime.getMinutes().toString().padStart(2, '0')}</span>
            <span> : </span>
            <span>{currentTime.getSeconds().toString().padStart(2, '0')}</span>
            <span style={{ fontSize: '1.5rem', marginLeft: '0.5rem' }}>
              {ampm}
            </span>
          </p>
        </p>
      </div>
    </div>
  );
}

export default Timer;
