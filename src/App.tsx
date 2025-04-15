import { css } from '../styled-system/css';

export function App() {
  return (
    <div
      className={css({
        bg: 'red.400',
        '&:hover': {
          bg: 'orange.400',
        },
      })}
    >
      <div
        className={css({
          display: 'grid',
          flexDirection: 'column',
          gap: '4',
          alignItems: 'center',
        })}
      >
        <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
          Change branches to see the individual projects
        </h1>
        <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
          Change branches to see the individual projects
        </h1>
      </div>
    </div>
  );
}
