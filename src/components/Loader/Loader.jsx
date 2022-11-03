import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => (
  <ProgressBar
    height="100"
    width="1200"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass="progress-bar-wrapper"
    borderColor="#0c5acf"
    barColor="#51E5FF"
  />
);
