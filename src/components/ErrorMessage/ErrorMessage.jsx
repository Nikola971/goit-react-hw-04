import css from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  return (
    <div className={css.container}>
      <p className={css.textError}>Our service don't working please again a later</p>
    </div>
  );
};
